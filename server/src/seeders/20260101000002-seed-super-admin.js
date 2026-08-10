const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    const now = new Date();
    const passwordHash = await bcrypt.hash('ChangeMe123!', 10);

    await queryInterface.bulkInsert('admins', [
      {
        name: 'Super Admin',
        email: 'admin@travelbharat.com',
        password_hash: passwordHash,
        role: 'super_admin',
        is_active: true,
        created_at: now,
        updated_at: now
      }
    ]);
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('admins', { email: 'admin@travelbharat.com' }, {});
  }
};
