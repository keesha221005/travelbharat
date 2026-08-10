module.exports = async function seedMizoram({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { nature, heritage } = categories;

  const mizoram = await findOrCreateState({
    name: 'Mizoram',
    region: 'Northeast',
    description: 'A mountainous state bordering Myanmar and Bangladesh, '
      + 'home to the Mizo people and a series of parallel north-south '
      + 'running hill ranges covered in dense forest.'
  });

  // ---------------- Aizawl ----------------
  const aizawl = await findOrCreateCity({
    stateId: mizoram.id,
    name: 'Aizawl',
    description: 'Mizoram\'s capital, built across a ridge at around 1,100 '
      + 'meters elevation, with streets and buildings following the '
      + 'contours of the surrounding hills.'
  });

  await findOrCreatePlace({
    stateId: mizoram.id,
    cityId: aizawl.id,
    categoryId: nature,
    name: 'Durtlang Hills',
    description: 'A ridge on the outskirts of Aizawl offering wide views '
      + 'over the city and surrounding hill ranges, popular for sunrise and '
      + 'sunset viewing.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/5Lw9nXPWvQsFy9Kh6',
    latitude: 23.7833,
    longitude: 92.7167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxFL1ymQvmTAGxNgNYDyrUsirksNAbb3FergfOsFYLlw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: mizoram.id,
    cityId: aizawl.id,
    categoryId: heritage,
    name: 'Mizoram State Museum',
    description: 'A museum documenting Mizo tribal culture, traditional '
      + 'dress, agricultural tools, and the history of Christian missionary '
      + 'influence that shaped much of the state\'s modern identity.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:30 AM – 4:00 PM, closed Sundays',
    mapLink: 'https://maps.app.goo.gl/LZhgYWTFLnFzFa487',
    latitude: 23.7275,
    longitude: 92.7176,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXilLtuCuZWZ1q539ODbsMzxjANnwMGY4tLROKuTp1w&s=10'}]
  });

  // ---------------- Reiek ----------------
  const reiek = await findOrCreateCity({
    stateId: mizoram.id,
    name: 'Reiek',
    description: 'A village built around a prominent hill peak west of '
      + 'Aizawl, developed as a heritage and trekking destination showcasing '
      + 'traditional Mizo village life.'
  });

  await findOrCreatePlace({
    stateId: mizoram.id,
    cityId: reiek.id,
    categoryId: nature,
    name: 'Reiek Tlang',
    description: 'A hill peak reaching around 1,465 meters, with a '
      + 'reconstructed traditional Mizo village at its base and a trekking '
      + 'trail to the summit, offering views into neighboring Bangladesh on '
      + 'clear days.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/y5wgBMSSaMJUSK5s8',
    latitude: 23.6667,
    longitude: 92.5833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRUwFXIlrWDVyb5tCQ8il8OhNYY6s2hRyguPW12580QA&s=10'}]
  });

  return mizoram;
};