const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.State = require('./State')(sequelize, DataTypes);
db.City = require('./City')(sequelize, DataTypes);
db.Category = require('./Category')(sequelize, DataTypes);
db.Place = require('./Place')(sequelize, DataTypes);
db.PlaceImage = require('./PlaceImage')(sequelize, DataTypes);
db.NearbyAttraction = require('./NearbyAttraction')(sequelize, DataTypes);
db.Admin = require('./Admin')(sequelize, DataTypes);
db.AuditLog = require('./AuditLog')(sequelize, DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

module.exports = db;
