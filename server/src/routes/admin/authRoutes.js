const express = require('express');
const { login, me, changePassword } = require('../../controllers/authController');
const { requireAuth } = require('../../middleware/auth');

const router = express.Router();

router.post('/login', login);
router.get('/me', requireAuth, me);
router.put('/password', requireAuth, changePassword);

module.exports = router;