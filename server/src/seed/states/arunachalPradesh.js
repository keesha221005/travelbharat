module.exports = async function seedArunachalPradesh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious } = categories;

  const arunachalPradesh = await findOrCreateState({
    name: 'Arunachal Pradesh',
    region: 'Northeast',
    description: 'India\'s northeasternmost state, a mountainous frontier '
      + 'region bordering Tibet, Bhutan, and Myanmar, home to dozens of '
      + 'distinct tribal communities and some of the least-visited natural '
      + 'landscapes in India.'
  });

  // ---------------- Tawang ----------------
  const tawang = await findOrCreateCity({
    stateId: arunachalPradesh.id,
    name: 'Tawang',
    description: 'A high-altitude town near the Tibet border, home to one '
      + 'of the largest Buddhist monasteries in India and reached by a road '
      + 'crossing several high Himalayan passes.'
  });

  await findOrCreatePlace({
    stateId: arunachalPradesh.id,
    cityId: tawang.id,
    categoryId: religious,
    name: 'Tawang Monastery',
    description: 'A large monastery of the Gelug order of Tibetan '
      + 'Buddhism, sitting at around 3,000 meters elevation, housing a '
      + 'library of old Buddhist manuscripts and a large gilded statue of '
      + 'the Buddha.',
    historicalSignificance: 'Founded in the 17th century, it is among the '
      + 'largest Buddhist monasteries in India and the second-largest in '
      + 'the world after the Potala Palace in Lhasa; the sixth Dalai Lama is '
      + 'traditionally said to have been born in the region.',
    bestTimeToVisit: 'March to June, or September to October',
    entryFee: 'Free',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/NU1SiDji8frEzG5w7',
    latitude: 27.5859,
    longitude: 91.8594,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB42t0tY6gurl4IVMZPjt1axivLrCaJbY0lyjOO--NtQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: arunachalPradesh.id,
    cityId: tawang.id,
    categoryId: nature,
    name: 'Sela Pass',
    description: 'A high mountain pass at over 4,100 meters elevation on '
      + 'the road to Tawang, often snow-covered for much of the year, with a '
      + 'small sacred lake near the top.',
    bestTimeToVisit: 'March to June, or September to October',
    mapLink: 'https://maps.app.goo.gl/B5K8K1ND2zX2pXt19',
    latitude: 27.5167,
    longitude: 92.1000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm9fJvj9c7Ty2bsiFZpsw5dCMC7e5GbtAjRNGvUueVKQ&s=10'}]
  });

  // ---------------- Ziro ----------------
  const ziro = await findOrCreateCity({
    stateId: arunachalPradesh.id,
    name: 'Ziro',
    description: 'A valley in central Arunachal Pradesh, home to the Apatani '
      + 'tribe, known for distinctive wet-rice cultivation methods and a '
      + 'well-known annual outdoor music festival.'
  });

  await findOrCreatePlace({
    stateId: arunachalPradesh.id,
    cityId: ziro.id,
    categoryId: nature,
    name: 'Ziro Valley',
    description: 'A high-altitude valley of pine-covered hills and '
      + 'terraced rice fields, home to the Apatani community, whose '
      + 'traditional wet-rice farming and fish-cultivation system in the '
      + 'same paddies is recognized as a distinctive agricultural practice.',
    historicalSignificance: 'The Apatani cultural landscape of Ziro Valley '
      + 'has been proposed for UNESCO World Heritage status, recognized for '
      + 'its sustainable land-use traditions developed over centuries.',
    bestTimeToVisit: 'March to October; the Ziro Music Festival is held '
      + 'each September',
    mapLink: 'https://maps.app.goo.gl/HnDW6sVHvWVyHZAZ8',
    latitude: 27.5833,
    longitude: 93.8333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtkekxtczWM913V7BLbahj8crhjEzgMnRMk2wH_1h8w&s=10'}]
  });

  // ---------------- Itanagar ----------------
  const itanagar = await findOrCreateCity({
    stateId: arunachalPradesh.id,
    name: 'Itanagar',
    description: 'Arunachal Pradesh\'s capital, named after a nearby brick '
      + 'fort (Ita Fort), and the main administrative and transport hub for '
      + 'the state.'
  });

  await findOrCreatePlace({
    stateId: arunachalPradesh.id,
    cityId: itanagar.id,
    categoryId: heritage,
    name: 'Ita Fort',
    description: 'The ruins of a brick fort after which Itanagar is named '
      + '("ita" meaning brick), with fortification walls still visible '
      + 'around parts of the site.',
    historicalSignificance: 'Believed to date from around the 14th or 15th '
      + 'century, though its precise origins and builders remain uncertain '
      + 'due to limited surviving historical records for the region.',
    bestTimeToVisit: 'October to April',
    mapLink: 'https://maps.app.goo.gl/6guaLFsDr4UJKfry5',
    latitude: 27.0910,
    longitude: 93.6220,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIHPh72q033gpLbea_-6wFwKLXgKxAZmBiSg2W1n30Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: arunachalPradesh.id,
    cityId: itanagar.id,
    categoryId: religious,
    name: 'Ganga Lake (Gyaker Sinyi)',
    description: 'A natural lake in forested hills near Itanagar, used '
      + 'locally for boating and picnicking, and considered scenic '
      + 'particularly in the early morning mist.',
    bestTimeToVisit: 'October to April',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/qRRnjiXjrdGTG1N36',
    latitude: 27.1000,
    longitude: 93.6167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_c-fXhKhDbmmkMst4FJ-X9Skb7C9jjY7WY_r1Jr3MUA&s=10'}]
  });

  return arunachalPradesh;
};