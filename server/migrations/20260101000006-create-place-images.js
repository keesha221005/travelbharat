module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('place_images', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      place_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'places', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      image_url: { type: Sequelize.STRING(500), allowNull: false },
      alt_text: { type: Sequelize.STRING(200), allowNull: true },
      is_cover: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      sort_order: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
    });
    await queryInterface.addIndex('place_images', ['place_id']);
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('place_images');
  }
};
