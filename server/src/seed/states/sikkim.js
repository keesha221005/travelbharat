module.exports = async function seedSikkim({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const sikkim = await findOrCreateState({
    name: 'Sikkim',
    region: 'Northeast',
    description: 'A small Himalayan state bordering Nepal, Tibet, and '
      + 'Bhutan, formerly an independent kingdom until it merged with India '
      + 'in 1975, known for Buddhist monasteries, high-altitude lakes, and '
      + 'views of Kanchenjunga, the world\'s third-highest peak.'
  });

  // ---------------- Gangtok ----------------
  const gangtok = await findOrCreateCity({
    stateId: sikkim.id,
    name: 'Gangtok',
    description: 'Sikkim\'s capital, a hillside town that grew from a '
      + 'small hamlet after becoming a stop on the trade route between '
      + 'Tibet and India, now the main gateway for travel across the state.'
  });

  await findOrCreatePlace({
    stateId: sikkim.id,
    cityId: gangtok.id,
    categoryId: religious,
    name: 'Rumtek Monastery',
    description: 'One of the largest and most significant monasteries in '
      + 'Sikkim, seat-in-exile of the Karmapa lineage of Tibetan Buddhism, '
      + 'with a golden stupa and a collection of sacred Buddhist artifacts.',
    historicalSignificance: 'Originally built in the 18th century, the '
      + 'monastery was rebuilt and expanded in the 1960s after the 16th '
      + 'Karmapa fled Tibet and reestablished the seat of the Karma Kagyu '
      + 'lineage here.',
    bestTimeToVisit: 'March to May, or October to mid-December',
    entryFee: 'Paid entry',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/8JTWuvBRhi4xBSMe9',
    latitude: 27.2894,
    longitude: 88.5614,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkwbyX_glNO-OanEnk2HbqLBXUN_RSPa2ukosLU_jcg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: sikkim.id,
    cityId: gangtok.id,
    categoryId: nature,
    name: 'Tsomgo Lake',
    description: 'A glacial lake at around 3,753 meters elevation, roughly '
      + 'an hour\'s drive from Gangtok, often partly frozen in winter and '
      + 'reflecting the surrounding snow-capped peaks in the warmer months.',
    bestTimeToVisit: 'March to June, or October to December',
    entryFee: 'Permit required for non-Sikkim residents',
    mapLink: 'https://maps.app.goo.gl/vBDj3FuBKNm8jt2z8',
    latitude: 27.3747,
    longitude: 88.7631,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bSiKeVDbKK4sc94gAEXwRIRQRkzOAUjHD_Jx3D3zmA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: sikkim.id,
    cityId: gangtok.id,
    categoryId: heritage,
    name: 'Namgyal Institute of Tibetology',
    description: 'A research institute and museum holding one of the '
      + 'largest collections of Tibetan Buddhist manuscripts, thangkas, and '
      + 'ritual objects outside Tibet itself.',
    historicalSignificance: 'Founded in 1958 under the patronage of Sikkim\'s '
      + 'royal family, before the kingdom\'s 1975 merger with India, to '
      + 'preserve Tibetan Buddhist scholarship and culture.',
    bestTimeToVisit: 'March to May, or October to mid-December',
    entryFee: 'Paid entry',
    timings: '10:00 AM – 4:00 PM, closed Sundays',
    mapLink: 'https://maps.app.goo.gl/LkZEWJajZxFTDr6e7',
    latitude: 27.3167,
    longitude: 88.6083,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRre4s9iQ9ElSzfSf5KRuO3Z2qBTRorLAQ39ccUomKuDw&s=10'}]
  });

  // ---------------- Pelling ----------------
  const pelling = await findOrCreateCity({
    stateId: sikkim.id,
    name: 'Pelling',
    description: 'A small town in West Sikkim known for close-up, largely '
      + 'unobstructed views of Kanchenjunga, and as a base for visiting '
      + 'nearby monasteries and waterfalls.'
  });

  await findOrCreatePlace({
    stateId: sikkim.id,
    cityId: pelling.id,
    categoryId: religious,
    name: 'Pemayangtse Monastery',
    description: 'One of the oldest and most important monasteries in '
      + 'Sikkim, historically reserved for monks of pure Tibetan lineage, '
      + 'holding a detailed seven-tiered wooden sculpture depicting a '
      + 'celestial Buddhist palace.',
    historicalSignificance: 'Founded in 1705, belonging to the Nyingma '
      + 'order of Tibetan Buddhism, and historically one of the premier '
      + 'monasteries of the former Sikkimese kingdom.',
    bestTimeToVisit: 'March to May, or October to mid-December',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/ZwT7WBBMZQXdCbYG8',
    latitude: 27.3011,
    longitude: 88.2503,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVQlYuhi3AZHof-0IuVK6dAIKl8TisRW3ojtgC1eAC7g&s=10'}]
  });

  await findOrCreatePlace({
    stateId: sikkim.id,
    cityId: pelling.id,
    categoryId: nature,
    name: 'Kanchenjunga Falls',
    description: 'A multi-tiered waterfall near Pelling, one of the '
      + 'tallest in Sikkim, reached by a short walk from the roadside '
      + 'through forest.',
    bestTimeToVisit: 'June to September, fullest during monsoon',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/JKCyf3Tjuzmq846h7',
    latitude: 27.2472,
    longitude: 88.2000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBr46aqb0UjnJ1hGTcny6OGNv9g_xbDWV8pdYwXnMSmA&s=10'}]
  });

  // ---------------- Yumthang Valley ----------------
  const yumthangValley = await findOrCreateCity({
    stateId: sikkim.id,
    name: 'Yumthang Valley',
    description: 'A high-altitude valley in North Sikkim known as the '
      + '"Valley of Flowers" for its rhododendron sanctuary, framed by '
      + 'snow-capped peaks and hot springs.'
  });

  await findOrCreatePlace({
    stateId: sikkim.id,
    cityId: yumthangValley.id,
    categoryId: nature,
    name: 'Yumthang Valley',
    description: 'A river valley at around 3,564 meters elevation, home to '
      + 'a rhododendron sanctuary that bursts into bloom for a few weeks '
      + 'each spring, alongside yak-grazing pastures and natural hot springs.',
    bestTimeToVisit: 'February to June, especially April for peak '
      + 'rhododendron bloom',
    entryFee: 'Permit required for non-Sikkim residents',
    mapLink: 'https://maps.app.goo.gl/3tzz26Jf5Z6vjLdw7',
    latitude: 27.8167,
    longitude: 88.7000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrlvcvGJ0LnIyfzLKbSuy5pOPdP5Y17H3ycjk9Wj4RA&s=10'}]
  });

  return sikkim;
};