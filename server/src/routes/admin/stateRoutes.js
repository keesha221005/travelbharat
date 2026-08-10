const express = require('express');
const { createState, updateState, deleteState } = require('../../controllers/stateController');
const { requireAuth } = require('../../middleware/auth');

const router = express.Router();

router.use(requireAuth);

router.post('/', createState);
router.put('/:id', updateState);
router.delete('/:id', deleteState);

module.exports = router;
