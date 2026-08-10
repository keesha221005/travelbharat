module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('nearby_attractions', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      place_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'places', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      nearby_place_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'places', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      distance_km: { type: Sequelize.DECIMAL(6, 2), allowNull: true },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
    await queryInterface.addIndex('nearby_attractions', ['place_id']);
    await queryInterface.addIndex('nearby_attractions', ['nearby_place_id']);
    await queryInterface.addIndex('nearby_attractions', ['place_id', 'nearby_place_id'], {
      unique: true,
      name: 'unique_place_nearby_pair'
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('nearby_attractions');
  }
};
