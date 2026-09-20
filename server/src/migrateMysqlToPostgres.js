/**
 * One-time data migration — copies every row from the old local MySQL
 * database into the new local Postgres database, preserving exact IDs so
 * all foreign key relationships stay intact.
 *
 * IMPORTANT: raw SELECT * from MySQL returns snake_case column names
 * (e.g. "password_hash", "state_id"), but Sequelize's bulkCreate matches
 * columns by the model's camelCase JS attribute name (e.g. "passwordHash").
 * Without remapping, every snake_case field gets silently dropped instead
 * of erroring — which is what happened on the first run. This version
 * remaps each row using the model's own field definitions before insert.
 *
 * Run with: node src/migrateMysqlToPostgres.js
 * Safe to re-run — truncates Postgres tables first, so it won't duplicate.
 */
require('dotenv').config();
const { Sequelize } = require('sequelize');
const pgModels = require('./models'); // points at Postgres via your current .env

// EDIT THIS to match your OLD local MySQL root password
const OLD_MYSQL = {
  host: '127.0.0.1',
  port: 3306,
  database: 'travelbharat',
  username: 'root',
  password: 'root'
};

const mysqlSource = new Sequelize(
  OLD_MYSQL.database,
  OLD_MYSQL.username,
  OLD_MYSQL.password,
  {
    host: OLD_MYSQL.host,
    port: OLD_MYSQL.port,
    dialect: 'mysql',
    logging: false
  }
);

const TABLES_IN_ORDER = [
  { name: 'categories', model: pgModels.Category },
  { name: 'states', model: pgModels.State },
  { name: 'admins', model: pgModels.Admin },
  { name: 'cities', model: pgModels.City },
  { name: 'places', model: pgModels.Place },
  { name: 'place_images', model: pgModels.PlaceImage },
  { name: 'nearby_attractions', model: pgModels.NearbyAttraction },
  { name: 'audit_logs', model: pgModels.AuditLog }
];

// Builds a { dbColumnName: jsAttributeName } lookup from a model's own
// attribute definitions, so we can correctly rename raw MySQL row keys.
function buildColumnToAttributeMap(model) {
  const map = {};
  const attrs = model.rawAttributes;
  Object.keys(attrs).forEach((attrName) => {
    const columnName = attrs[attrName].field || attrName;
    map[columnName] = attrName;
  });
  return map;
}

function remapRow(row, columnMap) {
  const remapped = {};
  Object.keys(row).forEach((dbColumn) => {
    const attrName = columnMap[dbColumn];
    if (attrName) {
      remapped[attrName] = row[dbColumn];
    }
    // any column with no matching model attribute is intentionally dropped
  });
  return remapped;
}

async function run() {
  await mysqlSource.authenticate();
  console.log('✅ Connected to old MySQL database.');

  await pgModels.sequelize.authenticate();
  console.log('✅ Connected to new Postgres database.\n');

  for (const { name } of [...TABLES_IN_ORDER].reverse()) {
    // eslint-disable-next-line no-await-in-loop
    await pgModels.sequelize.query(`TRUNCATE TABLE "${name}" RESTART IDENTITY CASCADE;`);
    console.log(`Cleared Postgres table: ${name}`);
  }

  console.log('');

  for (const { name, model } of TABLES_IN_ORDER) {
    // eslint-disable-next-line no-await-in-loop
    const [rawRows] = await mysqlSource.query(`SELECT * FROM \`${name}\`;`);

    if (rawRows.length === 0) {
      console.log(`${name}: 0 rows, skipping.`);
      // eslint-disable-next-line no-continue
      continue;
    }

    const columnMap = buildColumnToAttributeMap(model);
    const rows = rawRows.map((row) => remapRow(row, columnMap));

    // eslint-disable-next-line no-await-in-loop
    await model.bulkCreate(rows, {
      validate: false,
      individualHooks: false // skip password re-hashing — password_hash is already hashed
    });

    // eslint-disable-next-line no-await-in-loop
    await pgModels.sequelize.query(
      `SELECT setval(pg_get_serial_sequence('"${name}"', 'id'), (SELECT MAX(id) FROM "${name}"));`
    );

    console.log(`✅ ${name}: copied ${rows.length} rows.`);
  }

  console.log('\nMigration complete. Your Postgres database now matches your old MySQL data exactly.');

  await mysqlSource.close();
  await pgModels.sequelize.close();
}

run().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});