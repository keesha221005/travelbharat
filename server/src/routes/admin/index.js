const express = require('express');

const router = express.Router();

router.use('/auth', require('./authRoutes'));
router.use('/states', require('./stateRoutes'));
router.use('/cities', require('./cityRoutes'));
router.use('/categories', require('./categoryRoutes'));
router.use('/places', require('./placeRoutes'));

module.exports = router;
