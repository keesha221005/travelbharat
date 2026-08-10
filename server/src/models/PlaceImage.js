module.exports = (sequelize, DataTypes) => {
  const PlaceImage = sequelize.define('PlaceImage', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    placeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'place_id'
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
      field: 'image_url'
    },
    altText: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'alt_text'
    },
    isCover: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      field: 'is_cover'
    },
    sortOrder: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'sort_order'
    }
  }, {
    tableName: 'place_images',
    indexes: [{ fields: ['place_id'] }]
  });

  PlaceImage.associate = (models) => {
    PlaceImage.belongsTo(models.Place, { foreignKey: 'placeId', as: 'place' });
  };

  return PlaceImage;
};
