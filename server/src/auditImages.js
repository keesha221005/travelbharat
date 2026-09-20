/**
 * Audits every place's images and flags any hosted on domains that aren't
 * considered permanent (Google's cached thumbnail service being the main
 * offender — gstatic.com links can expire or stop resolving since they're
 * not the original hosted file, just a temporary proxy).
 *
 * Run with: node src/auditImages.js
 * Read-only — makes no changes, just reports.
 */
require('dotenv').config();
const { sequelize, Place, PlaceImage, City, State } = require('./models');

// Domains considered fragile / not meant for long-term hotlinking
const FRAGILE_HOST_PATTERNS = [
  'gstatic.com',
  'googleusercontent.com',
  'ggpht.com'
];

function isFragile(url) {
  try {
    const { hostname } = new URL(url);
    return FRAGILE_HOST_PATTERNS.some((pattern) => hostname.includes(pattern));
  } catch (err) {
    return false; // malformed URL — flag separately, not as "fragile host"
  }
}

async function run() {
  await sequelize.authenticate();
  console.log('Connected. Auditing image hosts...\n');

  const images = await PlaceImage.findAll({
    include: [{
      model: Place,
      as: 'place',
      attributes: ['id', 'name', 'slug'],
      include: [
        { model: City, as: 'city', attributes: ['slug'] },
        { model: State, as: 'state', attributes: ['slug'] }
      ]
    }]
  });

  const fragile = [];
  const malformed = [];

  for (const img of images) {
    if (!img.place) continue; // orphaned image row, unlikely but skip safely
    let valid = true;
    try {
      // eslint-disable-next-line no-new
      new URL(img.imageUrl);
    } catch (err) {
      valid = false;
    }

    if (!valid) {
      malformed.push(img);
    } else if (isFragile(img.imageUrl)) {
      fragile.push(img);
    }
  }

  console.log(`Total images checked: ${images.length}`);
  console.log(`Fragile (gstatic/googleusercontent) links: ${fragile.length}`);
  console.log(`Malformed URLs: ${malformed.length}\n`);

  if (fragile.length > 0) {
    console.log('--- FRAGILE LINKS (swap these) ---\n');
    for (const img of fragile) {
      const p = img.place;
      console.log(`${p.name} (${p.city?.slug}/${p.state?.slug})`);
      console.log(`  Edit here: http://localhost:3000/admin/places/${p.id}/edit`);
      console.log(`  Current URL: ${img.imageUrl}\n`);
    }
  }

  if (malformed.length > 0) {
    console.log('--- MALFORMED URLS (these will be broken images) ---\n');
    for (const img of malformed) {
      const p = img.place;
      console.log(`${p.name} (${p.city?.slug}/${p.state?.slug})`);
      console.log(`  Edit here: http://localhost:3000/admin/places/${p.id}/edit`);
      console.log(`  Current value: "${img.imageUrl}"\n`);
    }
  }

  if (fragile.length === 0 && malformed.length === 0) {
    console.log('✅ No fragile or malformed image links found.');
  }

  await sequelize.close();
}

run().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});