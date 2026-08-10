const { Category } = require('../models');
const { generateUniqueSlug } = require('../utils/slugify');
const { success, error } = require('../utils/apiResponse');

// GET /api/categories
async function getAllCategories(req, res) {
  const categories = await Category.findAll({ order: [['name', 'ASC']] });
  return success(res, 200, 'Categories fetched successfully', categories);
}

// POST /api/admin/categories
async function createCategory(req, res) {
  const { name, icon } = req.body;

  if (!name) {
    return error(res, 400, 'Category name is required.');
  }

  const slug = await generateUniqueSlug(name, Category);
  const category = await Category.create({ name, slug, icon });

  return success(res, 201, 'Category created successfully', category);
}

// PUT /api/admin/categories/:id
async function updateCategory(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (!category) {
    return error(res, 404, 'Category not found.');
  }

  const { name, icon } = req.body;

  if (name && name !== category.name) {
    category.slug = await generateUniqueSlug(name, Category, category.id);
    category.name = name;
  }
  if (icon !== undefined) category.icon = icon;

  await category.save();
  return success(res, 200, 'Category updated successfully', category);
}

// DELETE /api/admin/categories/:id
async function deleteCategory(req, res) {
  const category = await Category.findByPk(req.params.id);
  if (!category) {
    return error(res, 404, 'Category not found.');
  }

  await category.destroy();
  return success(res, 200, 'Category deleted successfully');
}

module.exports = { getAllCategories, createCategory, updateCategory, deleteCategory };
