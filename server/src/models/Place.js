module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stateId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'state_id'
    },
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'city_id'
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id'
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(180),
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    historicalSignificance: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'historical_significance'
    },
    bestTimeToVisit: {
      type: DataTypes.STRING(150),
      allowNull: true,
      field: 'best_time_to_visit'
    },
    entryFee: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'entry_fee'
    },
    timings: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    mapLink: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'map_link'
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: true
    },
    longitude: {
      type: DataTypes.DECIMAL(10, 7),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('draft', 'published', 'archived'),
      allowNull: false,
      defaultValue: 'draft'
    },
    createdBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'created_by'
    },
    verifiedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'verified_by'
    },
    verifiedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'verified_at'
    },
    viewCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      field: 'view_count'
    }
  }, {
    tableName: 'places',
    indexes: [
      { fields: ['state_id'] },
      { fields: ['city_id'] },
      { fields: ['category_id'] },
      { fields: ['status'] }
    ]
  });

  Place.associate = (models) => {
    Place.belongsTo(models.State, { foreignKey: 'stateId', as: 'state' });
    Place.belongsTo(models.City, { foreignKey: 'cityId', as: 'city' });
    Place.belongsTo(models.Category, { foreignKey: 'categoryId', as: 'category' });
    Place.hasMany(models.PlaceImage, { foreignKey: 'placeId', as: 'images' });
    Place.belongsToMany(models.Place, {
      through: models.NearbyAttraction,
      as: 'nearbyPlaces',
      foreignKey: 'placeId',
      otherKey: 'nearbyPlaceId'
    });
    Place.belongsTo(models.Admin, { foreignKey: 'createdBy', as: 'creator' });
    Place.belongsTo(models.Admin, { foreignKey: 'verifiedBy', as: 'verifier' });
  };

  return Place;
};
