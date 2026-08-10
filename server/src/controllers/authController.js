const jwt = require('jsonwebtoken');
const { Admin } = require('../models');
const { success, error } = require('../utils/apiResponse');

function generateToken(admin) {
  return jwt.sign(
    { id: admin.id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

// POST /api/admin/auth/login
async function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return error(res, 400, 'Email and password are required.');
  }

  const admin = await Admin.findOne({ where: { email } });

  if (!admin || !admin.isActive) {
    return error(res, 401, 'Invalid credentials.');
  }

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) {
    return error(res, 401, 'Invalid credentials.');
  }

  const token = generateToken(admin);

  return success(res, 200, 'Login successful', {
    token,
    admin: {
      id: admin.id,
      name: admin.name,
      email: admin.email,
      role: admin.role
    }
  });
}

// PUT /api/admin/auth/password
async function changePassword(req, res) {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return error(res, 400, 'Current password and new password are both required.');
  }

  if (newPassword.length < 8) {
    return error(res, 400, 'New password must be at least 8 characters long.');
  }

  const admin = await Admin.findByPk(req.admin.id);

  const isMatch = await admin.comparePassword(currentPassword);
  if (!isMatch) {
    return error(res, 401, 'Current password is incorrect.');
  }

  // The Admin model's beforeUpdate hook automatically re-hashes this
  admin.passwordHash = newPassword;
  await admin.save();

  return success(res, 200, 'Password changed successfully.');
}

// GET /api/admin/auth/me
async function me(req, res) {
  const { id, name, email, role } = req.admin;
  return success(res, 200, 'Current admin profile', { id, name, email, role });
}

module.exports = { login, me, changePassword };
