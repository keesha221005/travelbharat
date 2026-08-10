module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
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
    },
    region: {
      type: DataTypes.STRING(50), // e.g. North, South, East, West, Northeast, Central
      allowNull: true
    }
  }, {
    tableName: 'states'
  });

  State.associate = (models) => {
    State.hasMany(models.City, { foreignKey: 'stateId', as: 'cities' });
    State.hasMany(models.Place, { foreignKey: 'stateId', as: 'places' });
  };

  return State;
};
