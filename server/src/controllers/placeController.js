const { Op } = require('sequelize');
const {
  Place, State, City, Category, PlaceImage, NearbyAttraction, sequelize
} = require('../models');
const { generateUniqueSlug } = require('../utils/slugify');
const { success, error } = require('../utils/apiResponse');

const publicListIncludes = [
  { model: State, as: 'state', attributes: ['id', 'name', 'slug'] },
  { model: City, as: 'city', attributes: ['id', 'name', 'slug'] },
  { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] },
  {
    model: PlaceImage,
    as: 'images',
    attributes: ['id', 'imageUrl', 'altText', 'isCover'],
    limit: 1,
    where: { isCover: true },
    required: false
  }
];

// GET /api/places?state=&city=&category=&search=&page=&limit=
async function getAllPlaces(req, res) {
  const {
    state, city, category, search, page = 1, limit = 12
  } = req.query;

  const where = { status: 'published' };
  const include = [...publicListIncludes];

  if (state) {
    const stateRecord = await State.findOne({ where: { slug: state } });
    if (!stateRecord) return error(res, 404, 'State not found.');
    where.stateId = stateRecord.id;
  }

  if (city) {
    const cityRecord = await City.findOne({ where: { slug: city } });
    if (!cityRecord) return error(res, 404, 'City not found.');
    where.cityId = cityRecord.id;
  }

  if (category) {
    const categoryRecord = await Category.findOne({ where: { slug: category } });
    if (!categoryRecord) return error(res, 404, 'Category not found.');
    where.categoryId = categoryRecord.id;
  }

  if (search) {
    where[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } }
    ];
  }

  const offset = (Number(page) - 1) * Number(limit);

  const { rows, count } = await Place.findAndCountAll({
    where,
    include,
    limit: Number(limit),
    offset,
    order: [['name', 'ASC']],
    distinct: true
  });

  return success(res, 200, 'Places fetched successfully', rows, {
    total: count,
    page: Number(page),
    limit: Number(limit),
    totalPages: Math.ceil(count / Number(limit))
  });
}

// GET /api/places/:slug
async function getPlaceBySlug(req, res) {
  const place = await Place.findOne({
    where: { slug: req.params.slug, status: 'published' },
    include: [
      { model: State, as: 'state', attributes: ['id', 'name', 'slug'] },
      { model: City, as: 'city', attributes: ['id', 'name', 'slug'] },
      { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] },
      { model: PlaceImage, as: 'images', attributes: ['id', 'imageUrl', 'altText', 'isCover', 'sortOrder'] },
      {
        model: Place,
        as: 'nearbyPlaces',
        attributes: ['id', 'name', 'slug'],
        through: { attributes: ['distanceKm'] }
      }
    ]
  });

  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  // Fire-and-forget view counter increment (doesn't block the response)
  place.increment('viewCount').catch(() => {});

  return success(res, 200, 'Place fetched successfully', place);
}

// GET /api/places/:slug/nearby?limit=6
async function getNearbyPlaces(req, res) {
  const { limit = 6 } = req.query;

  const place = await Place.findOne({ where: { slug: req.params.slug, status: 'published' } });
  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  if (!place.latitude || !place.longitude) {
    return success(res, 200, 'No coordinates on file for this place; cannot compute nearby places', []);
  }

  const candidates = await Place.findAll({
    where: {
      status: 'published',
      id: { [Op.ne]: place.id },
      latitude: { [Op.ne]: null },
      longitude: { [Op.ne]: null }
    },
    include: publicListIncludes
  });

  const toRad = (deg) => (deg * Math.PI) / 180;
  const haversineKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2
      + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.asin(Math.sqrt(a));
  };

  const withDistance = candidates.map((c) => ({
    ...c.toJSON(),
    distanceKm: Math.round(haversineKm(
      Number(place.latitude), Number(place.longitude),
      Number(c.latitude), Number(c.longitude)
    ) * 10) / 10
  }));

  withDistance.sort((a, b) => a.distanceKm - b.distanceKm);

  return success(res, 200, 'Nearby places fetched successfully', withDistance.slice(0, Number(limit)));
}

// GET /api/admin/places?state=&city=&category=&status=&search=&page=&limit=
// Unlike the public listing, this returns places of ANY status (draft/published/archived)
async function getAllPlacesAdmin(req, res) {
  const {
    state, city, category, status, search, page = 1, limit = 50
  } = req.query;

  const where = {};

  if (search) {
    where[Op.or] = [
      { name: { [Op.like]: `%${search}%` } },
      { description: { [Op.like]: `%${search}%` } }
    ];
  }

  const include = [
    { model: State, as: 'state', attributes: ['id', 'name', 'slug'] },
    { model: City, as: 'city', attributes: ['id', 'name', 'slug'] },
    { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] },
    { model: PlaceImage, as: 'images', attributes: ['id', 'imageUrl', 'isCover'], required: false }
  ];

  if (status) where.status = status;

  if (state) {
    const stateRecord = await State.findOne({ where: { slug: state } });
    if (!stateRecord) return error(res, 404, 'State not found.');
    where.stateId = stateRecord.id;
  }

  if (city) {
    const cityRecord = await City.findOne({ where: { slug: city } });
    if (!cityRecord) return error(res, 404, 'City not found.');
    where.cityId = cityRecord.id;
  }

  if (category) {
    const categoryRecord = await Category.findOne({ where: { slug: category } });
    if (!categoryRecord) return error(res, 404, 'Category not found.');
    where.categoryId = categoryRecord.id;
  }

  const offset = (Number(page) - 1) * Number(limit);

  const { rows, count } = await Place.findAndCountAll({
    where,
    include,
    limit: Number(limit),
    offset,
    order: [['createdAt', 'DESC']],
    distinct: true
  });

  return success(res, 200, 'Places fetched successfully', rows, {
    total: count,
    page: Number(page),
    limit: Number(limit),
    totalPages: Math.ceil(count / Number(limit))
  });
}

// GET /api/admin/places/:id — full detail regardless of status, used to prefill the edit form
async function getPlaceByIdAdmin(req, res) {
  const place = await Place.findByPk(req.params.id, {
    include: [
      { model: State, as: 'state', attributes: ['id', 'name', 'slug'] },
      { model: City, as: 'city', attributes: ['id', 'name', 'slug'] },
      { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] },
      { model: PlaceImage, as: 'images', attributes: ['id', 'imageUrl', 'altText', 'isCover', 'sortOrder'] }
    ]
  });

  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  return success(res, 200, 'Place fetched successfully', place);
}

// POST /api/admin/places
async function createPlace(req, res) {
  const {
    stateId, cityId, categoryId, name, description, historicalSignificance,
    bestTimeToVisit, entryFee, timings, mapLink, latitude, longitude
  } = req.body;

  if (!stateId || !cityId || !categoryId || !name || !description) {
    return error(res, 400, 'stateId, cityId, categoryId, name, and description are required.');
  }

  const slug = await generateUniqueSlug(name, Place);

  const place = await Place.create({
    stateId,
    cityId,
    categoryId,
    name,
    slug,
    description,
    historicalSignificance,
    bestTimeToVisit,
    entryFee,
    timings,
    mapLink,
    latitude,
    longitude,
    status: 'draft',
    createdBy: req.admin.id
  });

  return success(res, 201, 'Place created successfully (status: draft)', place);
}

// PUT /api/admin/places/:id
async function updatePlace(req, res) {
  const place = await Place.findByPk(req.params.id);
  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  const updatableFields = [
    'stateId', 'cityId', 'categoryId', 'description', 'historicalSignificance',
    'bestTimeToVisit', 'entryFee', 'timings', 'mapLink', 'latitude', 'longitude', 'status'
  ];

  if (req.body.name && req.body.name !== place.name) {
    place.slug = await generateUniqueSlug(req.body.name, Place, place.id);
    place.name = req.body.name;
  }

  updatableFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      place[field] = req.body[field];
    }
  });

  await place.save();
  return success(res, 200, 'Place updated successfully', place);
}

// PATCH /api/admin/places/:id/verify
async function verifyPlace(req, res) {
  const place = await Place.findByPk(req.params.id);
  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  place.status = 'published';
  place.verifiedBy = req.admin.id;
  place.verifiedAt = new Date();
  await place.save();

  return success(res, 200, 'Place verified and published successfully', place);
}

// DELETE /api/admin/places/:id
async function deletePlace(req, res) {
  const place = await Place.findByPk(req.params.id);
  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  await place.destroy();
  return success(res, 200, 'Place deleted successfully');
}

// POST /api/admin/places/:id/images  (multipart/form-data, field name: "images")
async function uploadPlaceImages(req, res) {
  const place = await Place.findByPk(req.params.id);
  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  if (!req.files || req.files.length === 0) {
    return error(res, 400, 'No image files were uploaded.');
  }

  const existingCount = await PlaceImage.count({ where: { placeId: place.id } });

  const imageRecords = await Promise.all(
    req.files.map((file, index) => PlaceImage.create({
      placeId: place.id,
      imageUrl: file.path, // Cloudinary secure URL
      altText: place.name,
      isCover: existingCount === 0 && index === 0,
      sortOrder: existingCount + index
    }))
  );

  return success(res, 201, 'Images uploaded successfully', imageRecords);
}

// POST /api/admin/places/:id/images/url  { imageUrl, altText }
// Lets an admin attach an image by pasting a link (e.g. from Google Images or
// Wikipedia) instead of uploading a file. Stores the URL directly rather than
// re-hosting it on Cloudinary — so if the source link goes down later, the
// image will break. Fine for a portfolio project; for production, consider
// fetching and re-uploading the bytes to Cloudinary instead.
async function addPlaceImageByUrl(req, res) {
  const place = await Place.findByPk(req.params.id);
  if (!place) {
    return error(res, 404, 'Place not found.');
  }

  const { imageUrl, altText } = req.body;

  if (!imageUrl) {
    return error(res, 400, 'imageUrl is required.');
  }

  let parsed;
  try {
    parsed = new URL(imageUrl);
  } catch (err) {
    return error(res, 400, 'That does not look like a valid URL.');
  }

  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    return error(res, 400, 'Image URL must start with http:// or https://');
  }

  const existingCount = await PlaceImage.count({ where: { placeId: place.id } });

  const image = await PlaceImage.create({
    placeId: place.id,
    imageUrl,
    altText: altText || place.name,
    isCover: existingCount === 0,
    sortOrder: existingCount
  });

  return success(res, 201, 'Image added successfully', image);
}

// DELETE /api/admin/places/:placeId/images/:imageId
async function deletePlaceImage(req, res) {
  const image = await PlaceImage.findOne({
    where: { id: req.params.imageId, placeId: req.params.placeId }
  });

  if (!image) {
    return error(res, 404, 'Image not found.');
  }

  await image.destroy();
  return success(res, 200, 'Image deleted successfully');
}

// POST /api/admin/places/:id/nearby  { nearbyPlaceId, distanceKm }
async function addNearbyAttraction(req, res) {
  const { nearbyPlaceId, distanceKm } = req.body;
  const placeId = Number(req.params.id);

  if (!nearbyPlaceId) {
    return error(res, 400, 'nearbyPlaceId is required.');
  }
  if (Number(nearbyPlaceId) === placeId) {
    return error(res, 400, 'A place cannot be its own nearby attraction.');
  }

  const link = await NearbyAttraction.create({ placeId, nearbyPlaceId, distanceKm });
  return success(res, 201, 'Nearby attraction linked successfully', link);
}

module.exports = {
  getAllPlaces,
  getPlaceBySlug,
  getNearbyPlaces,
  getAllPlacesAdmin,
  getPlaceByIdAdmin,
  createPlace,
  updatePlace,
  verifyPlace,
  deletePlace,
  uploadPlaceImages,
  addPlaceImageByUrl,
  deletePlaceImage,
  addNearbyAttraction
};