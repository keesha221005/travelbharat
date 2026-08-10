module.exports = async function seedTripura({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, religious } = categories;

  const tripura = await findOrCreateState({
    name: 'Tripura',
    region: 'Northeast',
    description: 'A small state bordering Bangladesh on three sides, '
      + 'formerly a princely kingdom ruled by the Manikya dynasty for '
      + 'centuries, known for its royal palaces and rock-cut religious sites.'
  });

  // ---------------- Agartala ----------------
  const agartala = await findOrCreateCity({
    stateId: tripura.id,
    name: 'Agartala',
    description: 'Tripura\'s capital, former seat of the Manikya dynasty '
      + 'that ruled the region for several centuries before joining the '
      + 'Indian union after independence.'
  });

  await findOrCreatePlace({
    stateId: tripura.id,
    cityId: agartala.id,
    categoryId: heritage,
    name: 'Ujjayanta Palace',
    description: 'A large former royal palace set in Mughal-style gardens '
      + 'with reflecting pools, now serving as a state museum on Northeast '
      + 'Indian history, culture, and tribal heritage.',
    historicalSignificance: 'Built between 1899 and 1901 by Maharaja '
      + 'Radha Kishore Manikya as the royal residence of the Tripura '
      + 'kingdom, it later served briefly as the state legislative assembly '
      + 'before becoming a museum.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '10:00 AM – 5:00 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/uhfgYzJ7picjPCQL8',
    latitude: 23.8372,
    longitude: 91.2814,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG2dzeYA4a9LHs8kkHVgIaW-VQTxRKObvz20Q89YCCw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tripura.id,
    cityId: agartala.id,
    categoryId: religious,
    name: 'Tripura Sundari Temple (Matabari)',
    description: 'A temple near Agartala considered one of the 51 Shakti '
      + 'Peethas in Hindu tradition, distinctive for its unusual tortoise-'
      + 'shell shaped roof and a large temple tank nearby.',
    historicalSignificance: 'Built in 1501 by Maharaja Dhanya Manikya, '
      + 'ruler of the Tripura kingdom, near the town of Udaipur (the '
      + 'kingdom\'s earlier capital, distinct from Rajasthan\'s Udaipur).',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 1:00 PM and 4:00 PM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/cCygMs57V4wLr7n4A',
    latitude: 23.5333,
    longitude: 91.4833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScfc_Fqh_bxoz41hRnKUcDyNy7L6t1FFB_YJ7dimE5Eg&s=10'}]
  });

  // ---------------- Unakoti ----------------
  const unakoti = await findOrCreateCity({
    stateId: tripura.id,
    name: 'Unakoti',
    description: 'A hillside site in northern Tripura covered in massive '
      + 'rock-cut and stone relief carvings of Hindu deities, set amid '
      + 'forest and largely left in a natural, unrestored state.'
  });

  await findOrCreatePlace({
    stateId: tripura.id,
    cityId: unakoti.id,
    categoryId: heritage,
    name: 'Unakoti Rock Carvings',
    description: 'A hillside covered in giant rock-cut bas-relief carvings '
      + 'of Hindu deities, dominated by a massive image of Shiva\'s face '
      + 'said to be around 30 feet tall, scattered among boulders and '
      + 'forest rather than arranged as a formal temple complex.',
    historicalSignificance: 'The carvings are generally dated to around the '
      + '7th to 9th centuries CE, though their exact origins and the reason '
      + 'for the name "Unakoti" (meaning "one less than a crore," or '
      + 'roughly ten million) are explained mainly through local legend '
      + 'rather than confirmed historical record.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/yw1mj7ANQZe5aPrg8',
    latitude: 24.2833,
    longitude: 92.0333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLC5M8sk1vxUaZTw2VjWpUg3BLoCOtkb4T9-753eUEPw&s=10'}]
  });

  return tripura;
};