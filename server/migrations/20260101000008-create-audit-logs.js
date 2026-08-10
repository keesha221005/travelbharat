module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('audit_logs', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      admin_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'admins', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      action: { type: Sequelize.STRING(50), allowNull: false },
      table_name: { type: Sequelize.STRING(50), allowNull: false },
      record_id: { type: Sequelize.INTEGER, allowNull: false },
      details: { type: Sequelize.JSON, allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
    await queryInterface.addIndex('audit_logs', ['admin_id']);
    await queryInterface.addIndex('audit_logs', ['table_name', 'record_id']);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('audit_logs');
  }
};
