module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('admins', 'reset_password_token', {
      type: Sequelize.STRING(255),
      allowNull: true
    });
    await queryInterface.addColumn('admins', 'reset_password_expires', {
      type: Sequelize.DATE,
      allowNull: true
    });
  },
  down: async (queryInterface) => {
    await queryInterface.removeColumn('admins', 'reset_password_token');
    await queryInterface.removeColumn('admins', 'reset_password_expires');
  }
};