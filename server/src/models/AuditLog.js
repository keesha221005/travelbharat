module.exports = (sequelize, DataTypes) => {
  const AuditLog = sequelize.define('AuditLog', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    adminId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'admin_id'
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: false // 'create' | 'update' | 'delete' | 'verify'
    },
    tableName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'table_name'
    },
    recordId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'record_id'
    },
    details: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'audit_logs',
    updatedAt: false,
    indexes: [{ fields: ['admin_id'] }, { fields: ['table_name', 'record_id'] }]
  });

  AuditLog.associate = (models) => {
    AuditLog.belongsTo(models.Admin, { foreignKey: 'adminId', as: 'admin' });
  };

  return AuditLog;
};
