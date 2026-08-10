const express = require('express');
const { getAllCities, getCityBySlug } = require('../controllers/cityController');

const router = express.Router();

router.get('/', getAllCities);
router.get('/:slug', getCityBySlug);

module.exports = router;
