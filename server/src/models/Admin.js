const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: { isEmail: true }
    },
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'password_hash'
    },
    role: {
      type: DataTypes.ENUM('super_admin', 'editor'),
      allowNull: false,
      defaultValue: 'editor'
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      field: 'is_active'
    }
  }, {
    tableName: 'admins',
    hooks: {
      beforeCreate: async (admin) => {
        if (admin.passwordHash) {
          admin.passwordHash = await bcrypt.hash(admin.passwordHash, 10);
        }
      },
      beforeUpdate: async (admin) => {
        if (admin.changed('passwordHash')) {
          admin.passwordHash = await bcrypt.hash(admin.passwordHash, 10);
        }
      }
    }
  });

  Admin.prototype.comparePassword = function (plainPassword) {
    return bcrypt.compare(plainPassword, this.passwordHash);
  };

  Admin.associate = (models) => {
    Admin.hasMany(models.Place, { foreignKey: 'createdBy', as: 'createdPlaces' });
    Admin.hasMany(models.AuditLog, { foreignKey: 'adminId', as: 'auditLogs' });
  };

  return Admin;
};
