module.exports = async function seedManipur({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious } = categories;

  const manipur = await findOrCreateState({
    name: 'Manipur',
    region: 'Northeast',
    description: 'A state bordering Myanmar known for Loktak Lake, one of '
      + 'the largest freshwater lakes in Northeast India and home to a '
      + 'unique floating ecosystem, alongside a strong classical dance '
      + 'tradition and significant Second World War history.'
  });

  // ---------------- Imphal ----------------
  const imphal = await findOrCreateCity({
    stateId: manipur.id,
    name: 'Imphal',
    description: 'Manipur\'s capital, set in a river valley ringed by '
      + 'hills, historically the seat of the Meitei kingdom and a site of '
      + 'major fighting during the Second World War.'
  });

  await findOrCreatePlace({
    stateId: manipur.id,
    cityId: imphal.id,
    categoryId: heritage,
    name: 'Kangla Fort',
    description: 'The historic seat of Manipur\'s former rulers, a walled '
      + 'complex including palace ruins, a sacred pond, and temples, '
      + 'regarded as the traditional spiritual and political center of the '
      + 'Meitei kingdom.',
    historicalSignificance: 'Used as the royal seat of Manipur for '
      + 'centuries until the early 20th century; it was later occupied by '
      + 'British and then Indian security forces for decades before being '
      + 'handed back for public and heritage use in 2004.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:30 AM – 4:30 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/Qm166oYA7tQT1qWi9',
    latitude: 24.8067,
    longitude: 93.9450,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGtNoDw3dsnghjGu76yslmF7SrUMsyxLNlqWvhJekCaQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: manipur.id,
    cityId: imphal.id,
    categoryId: heritage,
    name: 'Imphal War Cemetery',
    description: 'A Commonwealth war cemetery commemorating Allied '
      + 'soldiers who died during the 1944 Battle of Imphal, fought '
      + 'alongside the Battle of Kohima as a turning point in the Second '
      + 'World War\'s Burma Campaign.',
    historicalSignificance: 'The Battle of Imphal, fought between March and '
      + 'July 1944, halted the Japanese army\'s planned invasion of India and '
      + 'is regarded by military historians as one of the most significant '
      + 'battles of the war in Asia.',
    bestTimeToVisit: 'October to March',
    timings: 'Dawn to dusk, daily',
    mapLink: 'https://maps.app.goo.gl/W1ndVKfbiAbWfrQd9',
    latitude: 24.7833,
    longitude: 93.9333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkWh0oI42KPlGo1OGzdGw-oKRAzao0Lqn_f8VjngtxHg&s=10'}]
  });

  // ---------------- Loktak Lake ----------------
  const loktakLake = await findOrCreateCity({
    stateId: manipur.id,
    name: 'Loktak Lake',
    description: 'The largest freshwater lake in Northeast India, best '
      + 'known for its phumdis — floating masses of vegetation and soil — '
      + 'some large enough to support entire fishing villages built on them.'
  });

  await findOrCreatePlace({
    stateId: manipur.id,
    cityId: loktakLake.id,
    categoryId: nature,
    name: 'Loktak Lake',
    description: 'A large freshwater lake dotted with phumdis — floating '
      + 'islands of decayed plant matter and soil — some thick enough to '
      + 'support huts, fishing platforms, and even a small floating village '
      + 'called Champu Khangpok.',
    historicalSignificance: 'Designated a Ramsar Wetland of International '
      + 'Importance in 1990; the lake is also home to Keibul Lamjao, the '
      + 'only floating national park in the world.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Boat ride fees vary by operator',
    mapLink: 'https://maps.app.goo.gl/JN8ubuQAPtbHibzV7',
    latitude: 24.5500,
    longitude: 93.7833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmuQx9kzTiud1X4-g16gS1yF5gADlkEw0y6r0EBrTaPA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: manipur.id,
    cityId: loktakLake.id,
    categoryId: nature,
    name: 'Keibul Lamjao National Park',
    description: 'A national park made up entirely of floating phumdi '
      + 'wetland within Loktak Lake, the only floating park of its kind in '
      + 'the world, and the last natural habitat of the endangered sangai, '
      + 'a brow-antlered deer found only in Manipur.',
    historicalSignificance: 'Established in 1977 specifically to protect '
      + 'the sangai deer, once believed extinct until a small surviving '
      + 'population was rediscovered in the 1950s.',
    bestTimeToVisit: 'November to March',
    entryFee: 'Paid entry, boat access required',
    timings: '7:00 AM – 4:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/xTWq2GkcZfCeMsKaA',
    latitude: 24.5000,
    longitude: 93.8167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTa4tf74_YJlm_nDeQCvM3rXnKU42_rKyXU9clMFOy9g&s=10'}]
  });

  return manipur;
};