const { validationResult } = require('express-validator');
const { error } = require('../utils/apiResponse');

/**
 * Runs after express-validator check() rules and short-circuits with a 400
 * if any validation errors were collected.
 */
function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return error(res, 400, 'Validation failed', errors.array().map((e) => ({
      field: e.path,
      message: e.msg
    })));
  }
  next();
}

module.exports = validate;
