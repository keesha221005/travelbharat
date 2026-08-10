module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(120),
      allowNull: false,
      unique: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    coverImageUrl: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'cover_image_url'
    }
  }, {
    tableName: 'cities',
    indexes: [{ fields: ['state_id'] }]
  });

  City.associate = (models) => {
    City.belongsTo(models.State, { foreignKey: 'stateId', as: 'state' });
    City.hasMany(models.Place, { foreignKey: 'cityId', as: 'places' });
  };

  return City;
};
