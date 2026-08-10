const express = require('express');

const router = express.Router();

// Public routes
router.use('/states', require('./stateRoutes'));
router.use('/cities', require('./cityRoutes'));
router.use('/categories', require('./categoryRoutes'));
router.use('/places', require('./placeRoutes'));

// Admin routes (JWT protected internally)
router.use('/admin', require('./admin/index'));

// Health check
router.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'TravelBharat API is running' });
});

module.exports = router;
