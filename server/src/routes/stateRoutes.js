const express = require('express');
const { getAllStates, getStateBySlug } = require('../controllers/stateController');

const router = express.Router();

router.get('/', getAllStates);
router.get('/:slug', getStateBySlug);

module.exports = router;
