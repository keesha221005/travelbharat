const express = require('express');
const {
  createCategory, updateCategory, deleteCategory
} = require('../../controllers/categoryController');
const { requireAuth } = require('../../middleware/auth');

const router = express.Router();

router.use(requireAuth);

router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
