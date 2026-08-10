module.exports = async function seedDadraNagarHaveliDamanDiu({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature } = categories;

  const dnhdd = await findOrCreateState({
    name: 'Dadra and Nagar Haveli and Daman and Diu',
    region: 'West',
    description: 'A Union Territory formed in 2020 by merging two former '
      + 'Portuguese colonial enclaves — the inland district of Dadra and '
      + 'Nagar Haveli, and the coastal towns of Daman and the island of Diu '
      + '— both governed by Portugal until their annexation by India in 1961.'
  });

  // ---------------- Daman ----------------
  const daman = await findOrCreateCity({
    stateId: dnhdd.id,
    name: 'Daman',
    description: 'A coastal town on the Gujarat coast, a former Portuguese '
      + 'colonial settlement with forts and churches still standing from '
      + 'that period, split by the Damanganga River into Moti Daman and '
      + 'Nani Daman.'
  });

  await findOrCreatePlace({
    stateId: dnhdd.id,
    cityId: daman.id,
    categoryId: heritage,
    name: 'Fort of Moti Daman',
    description: 'A large Portuguese-built fort with thick bastioned '
      + 'walls, enclosing a church, government buildings, and residential '
      + 'lanes, giving a sense of the walled colonial town it once was.',
    historicalSignificance: 'Built by the Portuguese in the 16th century '
      + 'not long after they seized Daman in 1531, and held by Portugal '
      + 'until India\'s 1961 annexation of Goa, Daman, and Diu.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/rSQRVQTeQPq8cpzR6',
    latitude: 20.4108,
    longitude: 72.8417,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhERB6YV1c5iBtu8eRVXTKEi5E6XfB9eR-wsTT_SOpaQ&s=10'}]
  });

  // ---------------- Diu ----------------
  const diu = await findOrCreateCity({
    stateId: dnhdd.id,
    name: 'Diu',
    description: 'A small island off the Gujarat coast, another former '
      + 'Portuguese colonial territory, known for a well-preserved sea fort '
      + 'and quieter beaches than much of mainland Gujarat.'
  });

  await findOrCreatePlace({
    stateId: dnhdd.id,
    cityId: diu.id,
    categoryId: heritage,
    name: 'Diu Fort',
    description: 'A Portuguese sea fort on Diu\'s coast, with cannons still '
      + 'positioned along its ramparts and a lighthouse within the '
      + 'fortification walls, overlooking the Arabian Sea.',
    historicalSignificance: 'Built by the Portuguese starting in 1535, '
      + 'strengthening their hold on Diu after it became a key naval and '
      + 'trading outpost; Portugal retained control until 1961.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/P9eJquwhcmsDy1JG7',
    latitude: 20.7144,
    longitude: 70.9875,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyGe5we5pC2HRF1rXoyRIcGHTjh-_-kcZRWIxRka9DXQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: dnhdd.id,
    cityId: diu.id,
    categoryId: nature,
    name: 'Nagoa Beach',
    description: 'A crescent-shaped beach on Diu island, one of the '
      + 'more developed and popular beaches in the territory, with calmer '
      + 'water than much of the open coastline nearby.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/NJ8c7bc7CH26oAPr8',
    latitude: 20.7000,
    longitude: 70.9333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIADWssiGvFDu8ZQPItX0f6QvAGleOEazH6vk9fqpIQ&s=10'}]
  });

  // ---------------- Silvassa ----------------
  const silvassa = await findOrCreateCity({
    stateId: dnhdd.id,
    name: 'Silvassa',
    description: 'The main town of the inland Dadra and Nagar Haveli '
      + 'region, a former Portuguese enclave surrounded entirely by '
      + 'Gujarat and Maharashtra, now known for gardens and a lakeside '
      + 'promenade.'
  });

  await findOrCreatePlace({
    stateId: dnhdd.id,
    cityId: silvassa.id,
    categoryId: nature,
    name: 'Vanganga Lake Garden',
    description: 'A landscaped garden built around an artificial lake in '
      + 'Silvassa, with sculpture displays, a musical fountain, and boating '
      + 'available on the lake.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/RNDGP4zneCozMhWY6',
    latitude: 20.2667,
    longitude: 73.0167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUlr3wSsSCtCrnkl3rpk221ea0z5cMqmPn5uZmu8pAw&s=10'}]
  });

  return dnhdd;
};