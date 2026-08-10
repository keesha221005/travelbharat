/**
 * Shared helpers for the India content seed scripts.
 * Every file in src/seed/states/*.js imports from here instead of
 * duplicating this logic.
 */
const {
  sequelize, State, City, Category, Place, PlaceImage
} = require('../models');
const { generateUniqueSlug } = require('../utils/slugify');

async function findOrCreateState(data) {
  const existing = await State.findOne({ where: { name: data.name } });
  if (existing) return existing;
  const slug = await generateUniqueSlug(data.name, State);
  return State.create({ ...data, slug });
}

async function findOrCreateCity(data) {
  const existing = await City.findOne({ where: { name: data.name, stateId: data.stateId } });
  if (existing) return existing;
  const slug = await generateUniqueSlug(data.name, City);
  return City.create({ ...data, slug });
}

// Attaches any images that aren't already attached to this place (matched by
// URL), so re-running a seed file is still safe and won't create duplicates.
// The first image ever attached to a place becomes its cover automatically.
async function attachImages(place, images = []) {
  if (!images.length) return;

  const existing = await PlaceImage.findAll({ where: { placeId: place.id } });
  const existingUrls = new Set(existing.map((img) => img.imageUrl));
  let sortOrder = existing.length;

  for (const img of images) {
    if (!img || typeof img.url !== 'string' || !img.url.trim()) {
      console.warn(`  ⚠ Skipping an invalid image entry for "${place.name}" (missing/empty url):`, img);
      continue; // eslint-disable-line no-continue
    }
    if (existingUrls.has(img.url)) continue; // eslint-disable-line no-continue
    // eslint-disable-next-line no-await-in-loop
    await PlaceImage.create({
      placeId: place.id,
      imageUrl: img.url,
      altText: img.alt || place.name,
      isCover: sortOrder === 0,
      sortOrder
    });
    sortOrder += 1;
  }
}

async function findOrCreatePlace(data) {
  const { images, ...placeData } = data;
  let place = await Place.findOne({ where: { name: placeData.name, cityId: placeData.cityId } });

  if (!place) {
    const slug = await generateUniqueSlug(placeData.name, Place);
    place = await Place.create({ ...placeData, slug, status: 'published' });
  }

  await attachImages(place, images);
  return place;
}

async function getCategoryId(name) {
  const category = await Category.findOne({ where: { name } });
  if (!category) throw new Error(`Category "${name}" not found — run the category seeder first.`);
  return category.id;
}

// Loads all four category IDs once, shared across every state file.
async function loadCategories() {
  return {
    heritage: await getCategoryId('Heritage'),
    nature: await getCategoryId('Nature'),
    religious: await getCategoryId('Religious'),
    adventure: await getCategoryId('Adventure')
  };
}

module.exports = {
  sequelize,
  findOrCreateState,
  findOrCreateCity,
  findOrCreatePlace,
  loadCategories
};
