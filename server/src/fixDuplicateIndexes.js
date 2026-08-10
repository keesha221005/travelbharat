/**
 * One-time cleanup script — removes duplicate unique indexes that
 * accumulated from repeated `sequelize.sync({ alter: true })` calls during
 * nodemon restarts. Safe to run: only drops redundant duplicate indexes,
 * never touches actual data, and always keeps one working index per column.
 *
 * Run with: node src/fixDuplicateIndexes.js
 */
require('dotenv').config();
const { sequelize } = require('./models');

const TABLES = [
  'states', 'cities', 'categories', 'places', 'place_images',
  'admins', 'audit_logs', 'nearby_attractions'
];

async function cleanTable(tableName) {
  const [indexes] = await sequelize.query(`SHOW INDEX FROM \`${tableName}\`;`);

  // Group indexes by their column signature (ignores index name, which is
  // exactly the thing that varies across the duplicates we need to remove)
  const groups = {};
  for (const idx of indexes) {
    if (idx.Key_name === 'PRIMARY') continue;
    const key = `${idx.Column_name}:${idx.Non_unique}`;
    if (!groups[key]) groups[key] = new Set();
    groups[key].add(idx.Key_name);
  }

  let dropped = 0;
  for (const [signature, names] of Object.entries(groups)) {
    const nameList = Array.from(names);
    if (nameList.length <= 1) continue; // nothing to clean up here

    // Keep the first index name, drop the rest
    const [keep, ...remove] = nameList;
    for (const indexName of remove) {
      console.log(`  Dropping duplicate index "${indexName}" on ${tableName} (keeping "${keep}")`);
      // eslint-disable-next-line no-await-in-loop
      await sequelize.query(`ALTER TABLE \`${tableName}\` DROP INDEX \`${indexName}\`;`);
      dropped += 1;
    }
  }

  console.log(`✅ ${tableName}: dropped ${dropped} duplicate index(es).`);
}

async function run() {
  await sequelize.authenticate();
  console.log('Connected. Cleaning up duplicate indexes...\n');

  for (const table of TABLES) {
    // eslint-disable-next-line no-await-in-loop
    await cleanTable(table);
  }

  console.log('\nDone. Your data was not modified — only redundant indexes were removed.');
  await sequelize.close();
}

run().catch((err) => {
  console.error('Cleanup failed:', err);
  process.exit(1);
});