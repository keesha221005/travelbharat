const { State, City } = require('../models');
const { generateUniqueSlug } = require('../utils/slugify');
const { success, error } = require('../utils/apiResponse');

// GET /api/states
async function getAllStates(req, res) {
  const states = await State.findAll({
    order: [['name', 'ASC']]
  });
  return success(res, 200, 'States fetched successfully', states);
}

// GET /api/states/:slug
async function getStateBySlug(req, res) {
  const state = await State.findOne({
    where: { slug: req.params.slug },
    include: [{ model: City, as: 'cities', attributes: ['id', 'name', 'slug', 'coverImageUrl'] }]
  });

  if (!state) {
    return error(res, 404, 'State not found.');
  }

  return success(res, 200, 'State fetched successfully', state);
}

// POST /api/admin/states
async function createState(req, res) {
  const { name, description, coverImageUrl, region } = req.body;

  if (!name) {
    return error(res, 400, 'State name is required.');
  }

  const slug = await generateUniqueSlug(name, State);
  const state = await State.create({ name, slug, description, coverImageUrl, region });

  return success(res, 201, 'State created successfully', state);
}

// PUT /api/admin/states/:id
async function updateState(req, res) {
  const state = await State.findByPk(req.params.id);
  if (!state) {
    return error(res, 404, 'State not found.');
  }

  const { name, description, coverImageUrl, region } = req.body;

  if (name && name !== state.name) {
    state.slug = await generateUniqueSlug(name, State, state.id);
    state.name = name;
  }

  if (description !== undefined) state.description = description;
  if (coverImageUrl !== undefined) state.coverImageUrl = coverImageUrl;
  if (region !== undefined) state.region = region;

  await state.save();
  return success(res, 200, 'State updated successfully', state);
}

// DELETE /api/admin/states/:id
async function deleteState(req, res) {
  const state = await State.findByPk(req.params.id);
  if (!state) {
    return error(res, 404, 'State not found.');
  }

  await state.destroy();
  return success(res, 200, 'State deleted successfully');
}

module.exports = { getAllStates, getStateBySlug, createState, updateState, deleteState };
