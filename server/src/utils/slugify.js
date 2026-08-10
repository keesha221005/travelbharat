const slugify = require('slugify');

/**
 * Generates a URL-safe slug and guarantees uniqueness against a Sequelize model.
 * @param {string} text - The text to slugify (e.g. place name)
 * @param {import('sequelize').Model} model - The Sequelize model to check uniqueness against
 * @param {number|null} excludeId - Optional id to exclude (used when updating a record)
 */
async function generateUniqueSlug(text, model, excludeId = null) {
  const baseSlug = slugify(text, { lower: true, strict: true });
  let slug = baseSlug;
  let counter = 1;

  // Keep appending -2, -3, etc. until the slug is unique
  /* eslint-disable no-await-in-loop */
  while (true) {
    const where = { slug };
    const existing = await model.findOne({ where });
    if (!existing || (excludeId && existing.id === excludeId)) {
      break;
    }
    counter += 1;
    slug = `${baseSlug}-${counter}`;
  }

  return slug;
}

module.exports = { generateUniqueSlug };
