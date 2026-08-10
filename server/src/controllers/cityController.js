const { City, State, Place } = require('../models');
const { generateUniqueSlug } = require('../utils/slugify');
const { success, error } = require('../utils/apiResponse');

// GET /api/cities?state=slug
async function getAllCities(req, res) {
  const where = {};
  const include = [{ model: State, as: 'state', attributes: ['id', 'name', 'slug'] }];

  if (req.query.state) {
    const state = await State.findOne({ where: { slug: req.query.state } });
    if (!state) return error(res, 404, 'State not found.');
    where.stateId = state.id;
  }

  const cities = await City.findAll({ where, include, order: [['name', 'ASC']] });
  return success(res, 200, 'Cities fetched successfully', cities);
}

// GET /api/cities/:slug
async function getCityBySlug(req, res) {
  const city = await City.findOne({
    where: { slug: req.params.slug },
    include: [
      { model: State, as: 'state', attributes: ['id', 'name', 'slug'] },
      {
        model: Place,
        as: 'places',
        where: { status: 'published' },
        required: false,
        attributes: ['id', 'name', 'slug', 'categoryId']
      }
    ]
  });

  if (!city) {
    return error(res, 404, 'City not found.');
  }

  return success(res, 200, 'City fetched successfully', city);
}

// POST /api/admin/cities
async function createCity(req, res) {
  const { stateId, name, description, coverImageUrl } = req.body;

  if (!stateId || !name) {
    return error(res, 400, 'stateId and name are required.');
  }

  const state = await State.findByPk(stateId);
  if (!state) {
    return error(res, 400, 'Invalid stateId: state does not exist.');
  }

  const slug = await generateUniqueSlug(name, City);
  const city = await City.create({ stateId, name, slug, description, coverImageUrl });

  return success(res, 201, 'City created successfully', city);
}

// PUT /api/admin/cities/:id
async function updateCity(req, res) {
  const city = await City.findByPk(req.params.id);
  if (!city) {
    return error(res, 404, 'City not found.');
  }

  const { name, description, coverImageUrl, stateId } = req.body;

  if (name && name !== city.name) {
    city.slug = await generateUniqueSlug(name, City, city.id);
    city.name = name;
  }

  if (stateId !== undefined) city.stateId = stateId;
  if (description !== undefined) city.description = description;
  if (coverImageUrl !== undefined) city.coverImageUrl = coverImageUrl;

  await city.save();
  return success(res, 200, 'City updated successfully', city);
}

// DELETE /api/admin/cities/:id
async function deleteCity(req, res) {
  const city = await City.findByPk(req.params.id);
  if (!city) {
    return error(res, 404, 'City not found.');
  }

  await city.destroy();
  return success(res, 200, 'City deleted successfully');
}

module.exports = { getAllCities, getCityBySlug, createCity, updateCity, deleteCity };
