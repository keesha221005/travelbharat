const express = require('express');
const {
  login, me, changePassword, forgotPassword, resetPassword
} = require('../../controllers/authController');
const { requireAuth } = require('../../middleware/auth');
const { loginLimiter } = require('../../middleware/rateLimiter');

const router = express.Router();

router.post('/login', loginLimiter, login);
router.get('/me', requireAuth, me);
router.put('/password', requireAuth, changePassword);
router.post('/forgot-password', loginLimiter, forgotPassword);
router.post('/reset-password', loginLimiter, resetPassword);

module.exports = router;