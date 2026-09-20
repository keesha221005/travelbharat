const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { Admin } = require('../models');
const { success, error } = require('../utils/apiResponse');
const { sendPasswordResetEmail } = require('../utils/mailer');

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

// POST /api/admin/auth/forgot-password  { email }
async function forgotPassword(req, res) {
  const { email } = req.body;

  if (!email) {
    return error(res, 400, 'Email is required.');
  }

  const admin = await Admin.findOne({ where: { email } });

  // Always return the same success message whether or not the email exists —
  // this prevents attackers from using this endpoint to discover which
  // emails have admin accounts.
  const genericMessage = 'If an account exists for that email, a password reset link has been sent.';

  if (!admin || !admin.isActive) {
    return success(res, 200, genericMessage);
  }

  const rawToken = crypto.randomBytes(32).toString('hex');
  const hashedToken = crypto.createHash('sha256').update(rawToken).digest('hex');

  admin.resetPasswordToken = hashedToken;
  admin.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
  await admin.save();

  const clientUrl = process.env.CLIENT_URL || 'http://localhost:3000';
  const resetUrl = `${clientUrl}/admin/reset-password?token=${rawToken}`;

  try {
    await sendPasswordResetEmail(admin.email, resetUrl);
  } catch (err) {
    console.error('Failed to send password reset email:', err);
    return error(res, 500, 'Could not send reset email. Please try again later.');
  }

  return success(res, 200, genericMessage);
}

// POST /api/admin/auth/reset-password  { token, newPassword }
async function resetPassword(req, res) {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return error(res, 400, 'Token and new password are both required.');
  }

  if (newPassword.length < 8) {
    return error(res, 400, 'New password must be at least 8 characters long.');
  }

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  const admin = await Admin.findOne({
    where: { resetPasswordToken: hashedToken }
  });

  if (!admin || !admin.resetPasswordExpires || admin.resetPasswordExpires < new Date()) {
    return error(res, 400, 'This reset link is invalid or has expired. Please request a new one.');
  }

  admin.passwordHash = newPassword; // re-hashed automatically by the model hook
  admin.resetPasswordToken = null;
  admin.resetPasswordExpires = null;
  await admin.save();

  return success(res, 200, 'Password reset successfully. You can now sign in with your new password.');
}

// GET /api/admin/auth/me
async function me(req, res) {
  const { id, name, email, role } = req.admin;
  return success(res, 200, 'Current admin profile', { id, name, email, role });
}

module.exports = { login, me, changePassword, forgotPassword, resetPassword };
