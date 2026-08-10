module.exports = async function seedJammuAndKashmir({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const jammuAndKashmir = await findOrCreateState({
    name: 'Jammu and Kashmir',
    region: 'North',
    description: 'A Union Territory in the northernmost part of India, '
      + 'spanning the Kashmir Valley, the Pir Panjal and Himalayan ranges, '
      + 'and the Jammu plains, known for alpine lakes, houseboats, and '
      + 'centuries-old temples and shrines.'
  });

  // ---------------- Srinagar ----------------
  const srinagar = await findOrCreateCity({
    stateId: jammuAndKashmir.id,
    name: 'Srinagar',
    description: 'The summer capital of Jammu and Kashmir, built around Dal '
      + 'Lake and known for its Mughal-era gardens, houseboats, and '
      + 'traditional wooden shikara boats.'
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: srinagar.id,
    categoryId: nature,
    name: 'Dal Lake',
    description: 'A large lake in Srinagar traditionally navigated by '
      + 'shikaras — ornately decorated wooden boats — and lined with '
      + 'floating gardens and houseboats that visitors can also stay aboard.',
    bestTimeToVisit: 'April to October',
    mapLink: 'https://maps.app.goo.gl/WGiAZjDiVAGebe799',
    latitude: 34.1200,
    longitude: 74.8600,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisktU_TOWhhXLKF389TgRcGkYgWGezKG2fixUOAjArg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: srinagar.id,
    categoryId: heritage,
    name: 'Shalimar Bagh',
    description: 'A terraced Mughal garden built along a central water '
      + 'channel with fountains and chinar trees, laid out as a summer '
      + 'retreat overlooking Dal Lake.',
    historicalSignificance: 'Built in 1619 by Mughal emperor Jahangir for '
      + 'his wife Nur Jahan, considered the largest of the Mughal gardens in '
      + 'the Kashmir Valley.',
    bestTimeToVisit: 'April to October',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 7:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/8fGMHp3F5xoko8XEA',
    latitude: 34.1489,
    longitude: 74.8631,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1_zPQk7kUVH8S2Tu9QbnawMpVhYSHMVcyUKx7Q_fg8A&s=10'}]
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: srinagar.id,
    categoryId: religious,
    name: 'Hazratbal Shrine',
    description: 'A white marble mosque on the northern shore of Dal Lake, '
      + 'said to house a relic believed by many local devotees to be a hair '
      + 'of the Prophet Muhammad, displayed on specific religious occasions.',
    bestTimeToVisit: 'April to October',
    timings: '5:00 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/aRuwssbK18yAvRYK6',
    latitude: 34.1358,
    longitude: 74.8319,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0E8EWCD9z-N9UaUgpesbDzysYVfe3d-JiDZOcf_gakA&s=10'}]
  });

  // ---------------- Gulmarg ----------------
  const gulmarg = await findOrCreateCity({
    stateId: jammuAndKashmir.id,
    name: 'Gulmarg',
    description: 'A meadow town in the Pir Panjal range, developed as a '
      + 'hill resort, known for skiing in winter and one of the world\'s '
      + 'highest cable car systems.'
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: gulmarg.id,
    categoryId: adventure,
    name: 'Gulmarg Gondola',
    description: 'A two-stage cable car climbing to over 3,900 meters near '
      + 'Mount Apharwat, among the highest cable cars in the world, used for '
      + 'both skiing access in winter and sightseeing year-round.',
    bestTimeToVisit: 'December to February for skiing, or April to June for '
      + 'meadows and wildflowers',
    entryFee: 'Paid ticket, phase-based pricing',
    timings: '9:00 AM – 4:00 PM, daily, weather permitting',
    mapLink: 'https://maps.app.goo.gl/ty9UAxrTeFikMioy7',
    latitude: 34.0508,
    longitude: 74.3808,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLpdICw2P-LEp87pvLL_kqktQMOAP1UpRUz_d1tRdeg&s=10'}]
  });

  // ---------------- Pahalgam ----------------
  const pahalgam = await findOrCreateCity({
    stateId: jammuAndKashmir.id,
    name: 'Pahalgam',
    description: 'A valley town on the Lidder River, a starting point for '
      + 'the annual Amarnath Yatra pilgrimage and known for meadows and '
      + 'pine-forested slopes.'
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: pahalgam.id,
    categoryId: nature,
    name: 'Betaab Valley',
    description: 'A pine-forested valley along the Lidder River outside '
      + 'Pahalgam, named after a 1983 Bollywood film shot there, known for '
      + 'meadows framed by snow-capped peaks.',
    bestTimeToVisit: 'April to October',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/vuc2ZJLPpPLXCc1X9',
    latitude: 34.0333,
    longitude: 75.3667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXfUF5Ixq273GJ-0nB1di6hhTW2Egw0qACA0nRVrHgg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: pahalgam.id,
    categoryId: nature,
    name: 'Aru Valley',
    description: 'A meadow valley near Pahalgam ringed by forested hills, '
      + 'used as a trailhead for treks further into the surrounding '
      + 'mountains.',
    bestTimeToVisit: 'April to October',
    mapLink: 'https://maps.app.goo.gl/pNRbuzA3Zri3x1NH7',
    latitude: 34.1500,
    longitude: 75.2833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfms-DEroRCf7HLS-4VnS5LEoN6mqqHJPN8wXTBNZ6Vw&s=10'}]
  });

  // ---------------- Jammu ----------------
  const jammu = await findOrCreateCity({
    stateId: jammuAndKashmir.id,
    name: 'Jammu',
    description: 'The winter capital of Jammu and Kashmir, a city of '
      + 'temples on the banks of the Tawi River, and the main gateway for '
      + 'pilgrims heading to the Vaishno Devi shrine.'
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: jammu.id,
    categoryId: religious,
    name: 'Vaishno Devi Shrine',
    description: 'A cave shrine dedicated to the goddess Vaishno Devi, '
      + 'reached by a roughly 13-kilometer uphill trek (or pony/palanquin '
      + 'ride) from the base camp at Katra, and among the most-visited '
      + 'pilgrimage sites in India.',
    bestTimeToVisit: 'March to October, though open year-round',
    timings: 'Trek route open 24 hours; shrine darshan timing varies',
    mapLink: 'https://maps.app.goo.gl/ihuzJTMEEESyWbcBA',
    latitude: 33.0306,
    longitude: 74.9489,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9JzHv7PpTmo1Q0vF25-rNZBgbgP2iyf9ZW7G6PWLrA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: jammuAndKashmir.id,
    cityId: jammu.id,
    categoryId: heritage,
    name: 'Bahu Fort',
    description: 'An old fort on the banks of the Tawi River, now housing a '
      + 'temple dedicated to the goddess Kali and gardens that are popular '
      + 'for evening visits.',
    historicalSignificance: 'Believed to have origins going back several '
      + 'centuries, with the current structure largely attributed to Dogra '
      + 'rulers of Jammu.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/4uQm7Sbcj4BY88DWA',
    latitude: 32.7089,
    longitude: 74.8611,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMzSICCmCsA7h4UYXWtDAoZobYeqQJErA7dd2fThJ3w&s=10'}]
  });

  return jammuAndKashmir;
};