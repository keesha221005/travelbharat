const jwt = require('jsonwebtoken');
const { Admin } = require('../models');
const { error } = require('../utils/apiResponse');

/**
 * Verifies the JWT from the Authorization header and attaches the admin to req.admin
 */
async function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(res, 401, 'Authentication required. No token provided.');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findByPk(decoded.id);

    if (!admin || !admin.isActive) {
      return error(res, 401, 'Invalid token or account deactivated.');
    }

    req.admin = admin;
    next();
  } catch (err) {
    return error(res, 401, 'Invalid or expired token.');
  }
}

/**
 * Restricts a route to specific admin roles.
 * Usage: requireRole('super_admin')
 */
function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.admin || !roles.includes(req.admin.role)) {
      return error(res, 403, 'You do not have permission to perform this action.');
    }
    next();
  };
}

module.exports = { requireAuth, requireRole };
