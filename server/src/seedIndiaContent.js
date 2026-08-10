
require('dotenv').config();
const { sequelize, loadCategories } = require('./seed/helpers');

const stateSeeders = [
  require('./seed/states/rajasthan'),
  require('./seed/states/uttarPradesh'),
  require('./seed/states/kerala'),
  require('./seed/states/goa'),
  require('./seed/states/delhi'),
  require('./seed/states/tamilNadu'),
  require('./seed/states/pondicherry'),
  require('./seed/states/karnataka'),
  require('./seed/states/andhraPradesh'),
  require('./seed/states/telangana'),
  require('./seed/states/maharashtra'),
  require('./seed/states/madhyaPradesh'),
  require('./seed/states/odisha'),
  require('./seed/states/chhattisgarh'),
  require('./seed/states/gujarat'),
  require('./seed/states/haryana'),
  require('./seed/states/punjab'),
  require('./seed/states/jammuAndKashmir'),
  require('./seed/states/ladakh'),
  require('./seed/states/himachalPradesh'),
  require('./seed/states/uttarakhand'),
  require('./seed/states/bihar'),
  require('./seed/states/jharkhand'),
  require('./seed/states/westBengal'),
  require('./seed/states/sikkim'),
  require('./seed/states/arunachalPradesh'),
  require('./seed/states/nagaland'),
  require('./seed/states/manipur'),
  require('./seed/states/meghalaya'),
  require('./seed/states/tripura'),
  require('./seed/states/mizoram'),
  require('./seed/states/assam'),
  require('./seed/states/andamanAndNicobar'),
  require('./seed/states/lakshadweep'),
  require('./seed/states/dadraNagarHaveliDamanDiu')
];

async function seed() {
  await sequelize.authenticate();
  console.log('Connected. Seeding India content...');

  const categories = await loadCategories();
  const ctx = {
    findOrCreateState: require('./seed/helpers').findOrCreateState,
    findOrCreateCity: require('./seed/helpers').findOrCreateCity,
    findOrCreatePlace: require('./seed/helpers').findOrCreatePlace,
    categories
  };

  for (const runStateSeeder of stateSeeders) {
    // eslint-disable-next-line no-await-in-loop
    await runStateSeeder(ctx);
  }

  console.log('Seeding complete.');
  await sequelize.close();
}

seed().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
