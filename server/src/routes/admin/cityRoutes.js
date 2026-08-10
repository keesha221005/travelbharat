const express = require('express');
const { createCity, updateCity, deleteCity } = require('../../controllers/cityController');
const { requireAuth } = require('../../middleware/auth');

const router = express.Router();

router.use(requireAuth);

router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;
