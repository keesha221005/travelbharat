require('dotenv').config();
const app = require('./src/app');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL connection established successfully.');

    // In development this is a convenient way to keep models & tables in sync.
    // For production, always use migrations instead (npm run migrate).
    /*if (process.env.NODE_ENV === 'development') {
      await sequelize.sync({ alter: true });
      console.log('✅ Models synced with database.');
    }*/

      // NOTE: sync({ alter: true }) was removed here — running it on every
    // nodemon restart caused MySQL to accumulate duplicate unique indexes
    // over time, eventually hitting MySQL's hard limit of 64 keys per table.
    // Schema changes should go through migrations instead (npm run migrate).
    app.listen(PORT, () => {
      console.log(`🚀 TravelBharat API running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Unable to start server:', err);
    process.exit(1);
  }
}

startServer();
