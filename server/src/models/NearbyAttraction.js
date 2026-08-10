module.exports = (sequelize, DataTypes) => {
  const NearbyAttraction = sequelize.define('NearbyAttraction', {
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
    nearbyPlaceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'nearby_place_id'
    },
    distanceKm: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: true,
      field: 'distance_km'
    }
  }, {
    tableName: 'nearby_attractions',
    indexes: [
      { fields: ['place_id'] },
      { fields: ['nearby_place_id'] },
      { unique: true, fields: ['place_id', 'nearby_place_id'] }
    ]
  });

  return NearbyAttraction;
};
