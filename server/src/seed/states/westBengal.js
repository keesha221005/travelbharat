module.exports = async function seedWestBengal({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const westBengal = await findOrCreateState({
    name: 'West Bengal',
    region: 'East',
    description: 'A state on the Bay of Bengal spanning the Ganges delta, '
      + 'the colonial-era metropolis of Kolkata, and the Himalayan foothills '
      + 'around Darjeeling, with a strong literary, artistic, and culinary '
      + 'tradition throughout.'
  });

  // ---------------- Kolkata ----------------
  const kolkata = await findOrCreateCity({
    stateId: westBengal.id,
    name: 'Kolkata',
    description: 'West Bengal\'s capital and former capital of British '
      + 'India, a city of colonial-era architecture, literary and artistic '
      + 'heritage, and a strong tradition of street food and adda '
      + '(unhurried conversation).'
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: kolkata.id,
    categoryId: heritage,
    name: 'Victoria Memorial',
    description: 'A large white marble monument set in landscaped gardens, '
      + 'combining British and Mughal architectural elements, now housing a '
      + 'museum on colonial-era Kolkata and Indian history.',
    historicalSignificance: 'Built between 1906 and 1921 to commemorate '
      + 'Queen Victoria, commissioned under Viceroy Lord Curzon; the museum '
      + 'inside holds one of the largest collections of Raj-era artifacts in '
      + 'India.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹30 for Indian nationals, ₹500 for foreign nationals '
      + '(museum entry, approximate)',
    timings: '10:00 AM – 5:00 PM, closed Mondays; gardens open longer hours',
    mapLink: 'https://maps.app.goo.gl/k2UBBcUqcVFtJuQC7',
    latitude: 22.5448,
    longitude: 88.3426,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZmN779yvd7I35XaN-yXF9ljBOq_1MdpS8xbcOM43VQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: kolkata.id,
    categoryId: heritage,
    name: 'Howrah Bridge',
    description: 'A cantilever bridge across the Hooghly River, one of the '
      + 'busiest bridges in the world by pedestrian and vehicle traffic, and '
      + 'among the most recognizable landmarks of Kolkata\'s skyline.',
    historicalSignificance: 'Opened in 1943, built without any nuts or '
      + 'bolts — the entire structure was riveted together — replacing an '
      + 'earlier pontoon bridge on the same site.',
    bestTimeToVisit: 'Year-round; best viewed from the Hooghly riverside at '
      + 'dusk',
    mapLink: 'https://maps.app.goo.gl/2eXn4EkRkMDZHPSU8',
    latitude: 22.5851,
    longitude: 88.3468,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY3TI-Eb73Uw_6298Y3zZFcmBkRPkBxI-MuLI813c-zw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: kolkata.id,
    categoryId: religious,
    name: 'Dakshineswar Kali Temple',
    description: 'A large temple complex on the banks of the Hooghly River '
      + 'dedicated to the goddess Kali, with twelve smaller Shiva shrines '
      + 'lining its riverside courtyard, closely associated with the '
      + '19th-century mystic Ramakrishna.',
    historicalSignificance: 'Built in 1855 by Rani Rashmoni, a philanthropist '
      + 'and devotee, and later renowned as the site where the priest and '
      + 'mystic Ramakrishna Paramahamsa served and taught.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 12:30 PM and 3:00 PM – 8:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/RdWjZ9hhDAUDoKPM8',
    latitude: 22.6551,
    longitude: 88.3573,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKPkvMS-rPxbYI04XO6rdw5HSa10AN6CEhY8GKRn9QQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: kolkata.id,
    categoryId: heritage,
    name: 'Indian Museum, Kolkata',
    description: 'The oldest and largest museum in India, holding '
      + 'collections spanning archaeology, art, geology, and natural '
      + 'history, including significant Buddhist sculpture from Bharhut and '
      + 'Gandhara.',
    historicalSignificance: 'Founded in 1814, making it one of the oldest '
      + 'museums in the world, and the first and largest multi-purpose '
      + 'museum in the Indian subcontinent.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹50 for Indian nationals, ₹500 for foreign nationals '
      + '(approximate)',
    timings: '10:00 AM – 5:00 PM, closed Mondays',
    mapLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhVwnNlBV-u4Q11hLHpQO4rLSXgkEsBHZduYUKoV7xA&s=10',
    latitude: 22.5583,
    longitude: 88.3511,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhVwnNlBV-u4Q11hLHpQO4rLSXgkEsBHZduYUKoV7xA&s=10'}]
  });

  // ---------------- Darjeeling ----------------
  const darjeeling = await findOrCreateCity({
    stateId: westBengal.id,
    name: 'Darjeeling',
    description: 'A hill station in the Himalayan foothills, developed by '
      + 'the British as a summer retreat and now known worldwide for the '
      + 'distinctively flavored tea grown on its steep hillside estates.'
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: darjeeling.id,
    categoryId: nature,
    name: 'Tiger Hill',
    description: 'A viewpoint above Darjeeling visited before dawn for its '
      + 'sunrise views over the Himalayas, including — on clear days — '
      + 'Kanchenjunga, the world\'s third-highest peak.',
    bestTimeToVisit: 'October to December, or March to April, for the '
      + 'clearest mountain views',
    mapLink: 'https://maps.app.goo.gl/Uq8Xf14YkLMttASg6',
    latitude: 27.0000,
    longitude: 88.2667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHGe18aKKCKAx3w8M37sUlfR6J4KV7z9Cvbh4_wTcxA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: darjeeling.id,
    categoryId: adventure,
    name: 'Darjeeling Himalayan Railway',
    description: 'A narrow-gauge mountain railway nicknamed the "Toy '
      + 'Train," climbing through zigzags and loops between the plains and '
      + 'Darjeeling using vintage steam locomotives on some services.',
    historicalSignificance: 'Completed in 1881 by the British, it was the '
      + 'first railway in India to be designated a UNESCO World Heritage '
      + 'Site, in 1999, as part of the Mountain Railways of India.',
    bestTimeToVisit: 'October to December, or March to May',
    mapLink: 'https://maps.app.goo.gl/XNC3ag9MPyh8VtSF6',
    latitude: 27.0410,
    longitude: 88.2663,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjepNdb76AoCON8d8ZKIz32VLTCFMyJtidW5rQPNP7w&s=10'}]
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: darjeeling.id,
    categoryId: nature,
    name: 'Darjeeling Tea Gardens',
    description: 'Steep hillside plantations producing Darjeeling tea, '
      + 'prized internationally for its distinctive muscatel flavor, with '
      + 'several estates offering tours and tastings.',
    historicalSignificance: 'Commercial tea cultivation began here under '
      + 'British colonial administration in the 1850s, and Darjeeling tea '
      + 'later became one of the first Indian products to receive '
      + 'Geographical Indication protection.',
    bestTimeToVisit: 'March to May, or October to November',
    mapLink: 'https://maps.app.goo.gl/EXvpL2ZZ1UvgcRfw6',
    latitude: 27.0333,
    longitude: 88.2500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniQCEItcOO9SmAEeI0e9vhkKMyXgqm4Ju-H5BLaJPDg&s=10'}]
  });

  // ---------------- Sundarbans ----------------
  const sundarbans = await findOrCreateCity({
    stateId: westBengal.id,
    name: 'Sundarbans',
    description: 'The largest mangrove forest in the world, spread across '
      + 'the Ganges-Brahmaputra delta on the Bay of Bengal, and the only '
      + 'mangrove habitat where wild tigers are known to swim between islands.'
  });

  await findOrCreatePlace({
    stateId: westBengal.id,
    cityId: sundarbans.id,
    categoryId: nature,
    name: 'Sundarbans National Park',
    description: 'A vast tidal mangrove forest crisscrossed by rivers and '
      + 'creeks, explored by boat safari, home to the Bengal tiger population '
      + 'uniquely adapted to swim between islands and hunt in tidal '
      + 'wetlands, alongside saltwater crocodiles and diverse birdlife.',
    historicalSignificance: 'Declared a national park in 1984 and a UNESCO '
      + 'World Heritage Site in 1987, part of the larger Sundarbans '
      + 'ecosystem shared with neighboring Bangladesh.',
    bestTimeToVisit: 'November to February',
    entryFee: 'Permit and boat safari fees required, arranged through '
      + 'registered operators',
    timings: 'Boat safaris typically run morning and afternoon',
    mapLink: 'https://maps.app.goo.gl/CF39fGQV4DRR5pte7',
    latitude: 21.9497,
    longitude: 88.9468,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLl9Wqrr6imfeOCQxqeJUjkefliR2aHyYfNcWUO_Ww9w&s=10'}]
  });

  return westBengal;
};