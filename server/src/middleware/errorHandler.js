const { error } = require('../utils/apiResponse');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);

  // Sequelize validation errors
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    const messages = err.errors.map((e) => e.message);
    return error(res, 400, 'Validation error', messages);
  }

  // Sequelize foreign key constraint errors
  if (err.name === 'SequelizeForeignKeyConstraintError') {
    return error(res, 400, 'Invalid reference: related record does not exist.');
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong on the server.';

  return error(res, statusCode, message);
}

function notFound(req, res) {
  return error(res, 404, `Route not found: ${req.method} ${req.originalUrl}`);
}

module.exports = { errorHandler, notFound };
