module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true // Heritage, Nature, Adventure, Religious, ...
    },
    slug: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    },
    icon: {
      type: DataTypes.STRING(100),
      allowNull: true // e.g. an icon name/class used by the frontend
    }
  }, {
    tableName: 'categories'
  });

  Category.associate = (models) => {
    Category.hasMany(models.Place, { foreignKey: 'categoryId', as: 'places' });
  };

  return Category;
};
