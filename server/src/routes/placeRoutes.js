const express = require('express');
const { getAllPlaces, getPlaceBySlug, getNearbyPlaces } = require('../controllers/placeController');

const router = express.Router();

router.get('/', getAllPlaces);
router.get('/:slug/nearby', getNearbyPlaces);
router.get('/:slug', getPlaceBySlug);

module.exports = router;