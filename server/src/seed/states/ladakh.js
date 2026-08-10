module.exports = async function seedLadakh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious, adventure } = categories;

  const ladakh = await findOrCreateState({
    name: 'Ladakh',
    region: 'North',
    description: 'A high-altitude Union Territory in the Himalayas, split '
      + 'from Jammu and Kashmir in 2019, known for its cold desert '
      + 'landscapes, Tibetan Buddhist monasteries, and some of the highest '
      + 'motorable roads in the world.'
  });

  // ---------------- Leh ----------------
  const leh = await findOrCreateCity({
    stateId: ladakh.id,
    name: 'Leh',
    description: 'The main town of Ladakh, sitting at roughly 3,500 meters '
      + 'above sea level, historically a stop on trans-Himalayan trade '
      + 'routes and now the region\'s main hub for travelers.'
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: leh.id,
    categoryId: heritage,
    name: 'Leh Palace',
    description: 'A nine-story former royal palace overlooking Leh town, '
      + 'built in a style resembling Lhasa\'s Potala Palace, now partly in '
      + 'ruins but open for visitors to climb through its upper floors for '
      + 'views over the town.',
    historicalSignificance: 'Built in the early 17th century under King '
      + 'Sengge Namgyal, it was the residence of the Namgyal dynasty until '
      + 'the royal family relocated to Stok Palace in the mid-19th century.',
    bestTimeToVisit: 'May to September',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '8:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/FDYUzwyfFNqEHRtb7',
    latitude: 34.1667,
    longitude: 77.5847,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrJ_6FwjEspjKybP6ZiIR0pfJ2Ieu0ux-OX4-6SVBm8w&s=10'}]
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: leh.id,
    categoryId: religious,
    name: 'Shanti Stupa',
    description: 'A white-domed Buddhist stupa on a hilltop above Leh, built '
      + 'as a monument to world peace, offering panoramic views over the town '
      + 'and surrounding mountains, especially at sunrise and sunset.',
    historicalSignificance: 'Built in 1991 by Japanese Buddhist monks as '
      + 'part of a peace pagoda movement, with support from local Ladakhi '
      + 'Buddhists.',
    bestTimeToVisit: 'May to September, at sunrise or sunset',
    mapLink: 'https://maps.app.goo.gl/ia46fhYNCn87yrms5',
    latitude: 34.1656,
    longitude: 77.5711,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwBN0vBewWF34X5AxPG3pTZqxYuG8AfswmGgiOaQiaww&s=10'}]
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: leh.id,
    categoryId: heritage,
    name: 'Thiksey Monastery',
    description: 'A twelve-story monastery complex built up a hillside, '
      + 'closely resembling Tibet\'s Potala Palace in miniature, home to a '
      + 'two-story seated statue of the future Buddha (Maitreya).',
    historicalSignificance: 'Founded in the 15th century, belonging to the '
      + 'Gelug ("Yellow Hat") sect of Tibetan Buddhism.',
    bestTimeToVisit: 'May to September, mornings for the monastic prayer '
      + 'ritual',
    entryFee: 'Paid entry',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/15w3ZZVXk5QkBNws9',
    latitude: 34.0500,
    longitude: 77.6833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS_J12ioHhHJG844VQfUDOqxl9uvdB_t5Zj09LJXHPg&s=10'}]
  });

  // ---------------- Nubra Valley ----------------
  const nubraValley = await findOrCreateCity({
    stateId: ladakh.id,
    name: 'Nubra Valley',
    description: 'A high desert valley north of Leh, reached via one of the '
      + 'world\'s highest motorable passes, known for sand dunes, double-'
      + 'humped Bactrian camels, and Buddhist monasteries.'
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: nubraValley.id,
    categoryId: adventure,
    name: 'Khardung La',
    description: 'A high mountain pass on the road between Leh and Nubra '
      + 'Valley, historically publicized as one of the highest motorable '
      + 'roads in the world, marked by a viewpoint and small café near the top.',
    bestTimeToVisit: 'May to September',
    mapLink: 'https://maps.app.goo.gl/vjgJ3nbHzCnqCNnbA',
    latitude: 34.2833,
    longitude: 77.6167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgYNAgZxBTh1t4Yspd0_B3lX0wt6KUt1Z2N_2-uNj3Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: nubraValley.id,
    categoryId: nature,
    name: 'Hunder Sand Dunes',
    description: 'A stretch of cold desert sand dunes in Nubra Valley, '
      + 'unusual for their high-altitude setting, where visitors can ride '
      + 'double-humped Bactrian camels — descendants of animals once used on '
      + 'Silk Road trade caravans.',
    bestTimeToVisit: 'May to September',
    mapLink: 'https://maps.app.goo.gl/Hv6H8bcgqgTDTkZg8',
    latitude: 34.5333,
    longitude: 77.4500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUmhpEEhkkeNbyji-SxhgX1oRbQejahSW18Ln2JvtCpA&s=10'}]
  });

  // ---------------- Pangong Tso ----------------
  const pangongTso = await findOrCreateCity({
    stateId: ladakh.id,
    name: 'Pangong Tso',
    description: 'A high-altitude lake stretching from Ladakh into Tibet, '
      + 'known for water that shifts between shades of blue and green '
      + 'depending on light and season.'
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: pangongTso.id,
    categoryId: nature,
    name: 'Pangong Lake',
    description: 'An endorheic (landlocked) salt lake at over 4,300 meters '
      + 'elevation, roughly two-thirds of which lies across the border in '
      + 'Tibet, ringed by barren mountains and known for its striking, '
      + 'shifting blue coloration.',
    bestTimeToVisit: 'May to September; the lake freezes over in winter',
    entryFee: 'Inner Line Permit required for both Indian and foreign visitors',
    mapLink: 'https://maps.app.goo.gl/YwLS83gLur2NLMqT9',
    latitude: 33.7500,
    longitude: 78.6667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk3Bk_pY7I0WxiR2dYwTyXz_Cu8u4i8NUsVMaAO65k2g&s=10'}]
  });

  // ---------------- Alchi ----------------
  const alchi = await findOrCreateCity({
    stateId: ladakh.id,
    name: 'Alchi',
    description: 'A village on the Indus River holding one of Ladakh\'s '
      + 'oldest and best-preserved monastic complexes, notable for early '
      + 'Buddhist wall paintings that survived largely undisturbed for centuries.'
  });

  await findOrCreatePlace({
    stateId: ladakh.id,
    cityId: alchi.id,
    categoryId: heritage,
    name: 'Alchi Monastery',
    description: 'A monastery complex unlike most others in Ladakh for being '
      + 'built on flat ground rather than a hilltop, preserving intricate '
      + '11th-century wall paintings and wood carvings that are among the '
      + 'oldest surviving examples of Buddhist art in the region.',
    historicalSignificance: 'Founded around the 11th century, traditionally '
      + 'attributed to the translator-monk Rinchen Zangpo; the site\'s murals '
      + 'are considered artistically and historically distinct from later '
      + 'Ladakhi monastic painting styles.',
    bestTimeToVisit: 'May to September',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/hnugim6DzDDUxU9r7',
    latitude: 34.2903,
    longitude: 77.2861,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7EwesyewNaSxU7ooyWj9GPysXoqaMshKApaQwkUwQg&s=10'}]
  });

  return ladakh;
};