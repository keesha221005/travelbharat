module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('places', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      state_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'states', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      city_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'cities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      name: { type: Sequelize.STRING(150), allowNull: false },
      slug: { type: Sequelize.STRING(180), allowNull: false, unique: true },
      description: { type: Sequelize.TEXT, allowNull: false },
      historical_significance: { type: Sequelize.TEXT, allowNull: true },
      best_time_to_visit: { type: Sequelize.STRING(150), allowNull: true },
      entry_fee: { type: Sequelize.STRING(100), allowNull: true },
      timings: { type: Sequelize.STRING(150), allowNull: true },
      map_link: { type: Sequelize.STRING(500), allowNull: true },
      latitude: { type: Sequelize.DECIMAL(10, 7), allowNull: true },
      longitude: { type: Sequelize.DECIMAL(10, 7), allowNull: true },
      status: { type: Sequelize.ENUM('draft', 'published', 'archived'), allowNull: false, defaultValue: 'draft' },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'admins', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      verified_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'admins', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      verified_at: { type: Sequelize.DATE, allowNull: true },
      view_count: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
    await queryInterface.addIndex('places', ['state_id']);
    await queryInterface.addIndex('places', ['city_id']);
    await queryInterface.addIndex('places', ['category_id']);
    await queryInterface.addIndex('places', ['status']);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('places');
  }
};
