module.exports = async function seedGujarat({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const gujarat = await findOrCreateState({
    name: 'Gujarat',
    region: 'West',
    description: 'A state on India\'s western coast known for its stepwells '
      + 'and temple architecture, the salt-flat expanse of the Rann of Kutch, '
      + 'and Gir Forest, the last wild home of the Asiatic lion.'
  });

  // ---------------- Ahmedabad ----------------
  const ahmedabad = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Ahmedabad',
    description: 'Gujarat\'s largest city, founded on the banks of the '
      + 'Sabarmati River, blending centuries-old Indo-Islamic architecture '
      + 'with its role as the base of Mahatma Gandhi\'s independence movement.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: ahmedabad.id,
    categoryId: heritage,
    name: 'Sabarmati Ashram',
    description: 'The riverside residence and spiritual community founded by '
      + 'Mahatma Gandhi, from which he launched the 1930 Salt March, now '
      + 'preserved as a museum documenting his life and the independence '
      + 'movement.',
    historicalSignificance: 'Established in 1917, Gandhi lived here for over '
      + 'a decade and used it as the base for several key campaigns of the '
      + 'Indian independence movement.',
    bestTimeToVisit: 'November to February',
    timings: '8:30 AM – 6:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/bjykMir3oSgque9C9',
    latitude: 23.0608,
    longitude: 72.5806,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxljQJSPY2mGdz_rOGo1OyGfqubKIOJ2d465bKbJsQQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: ahmedabad.id,
    categoryId: heritage,
    name: 'Adalaj Stepwell',
    description: 'A five-story stepwell descending into the earth, its walls '
      + 'and columns carved with detailed floral and geometric motifs, built '
      + 'to provide a cool underground gathering space and reliable water access.',
    historicalSignificance: 'Built in 1499 under Mahmud Begada, a sultan of '
      + 'Gujarat, combining Hindu and Islamic architectural styles.',
    bestTimeToVisit: 'October to March',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/oKPM857xuCevxdUm9',
    latitude: 23.1667,
    longitude: 72.5833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm6tXwVxynfu7wJEjCAjJ9rTVf67PdEUBIFRoPCK2DQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: ahmedabad.id,
    categoryId: heritage,
    name: 'Sidi Saiyyed Mosque',
    description: 'A small mosque famous for ten intricately carved stone '
      + 'window screens (jalis), one depicting an intertwined tree of life '
      + 'design regarded as a masterpiece of stone lattice work.',
    historicalSignificance: 'Built in 1573, among the last mosques '
      + 'constructed before Gujarat\'s absorption into the Mughal Empire.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/aNE4n5VuTzwMemtc7',
    latitude: 23.0258,
    longitude: 72.5808,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhUndCw00UDOmBohQ6q1LMG9g8O2rS8Iw0dyUSXqMcA&s=10'}]
  });

  // ---------------- Kutch (Bhuj / Rann of Kutch) ----------------
  const kutch = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Kutch',
    description: 'A district in western Gujarat centered on the town of '
      + 'Bhuj, known for the vast white salt desert of the Rann of Kutch and '
      + 'a strong tradition of textile and handicraft work.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: kutch.id,
    categoryId: nature,
    name: 'Rann of Kutch (White Desert)',
    description: 'A seasonal salt marsh that dries into a blindingly white, '
      + 'flat expanse stretching to the horizon, hosting the annual Rann '
      + 'Utsav festival with tented camps during the cooler months.',
    bestTimeToVisit: 'November to February, especially around the full moon',
    entryFee: 'Entry permit required for the White Rann area',
    timings: 'Best visited around sunset',
    mapLink: 'https://maps.app.goo.gl/J5v1C9zcMU2gxnb1A',
    latitude: 23.8500,
    longitude: 69.8667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQhYZ2jShsytrn68cts2rwNnYoHrtocRj2IX4jriydgA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: kutch.id,
    categoryId: heritage,
    name: 'Aina Mahal',
    description: 'A palace within Bhuj\'s old city known for its "Hall of '
      + 'Mirrors," decorated with glasswork, marble flooring, and ornate '
      + 'chandeliers, blending Gujarati and European decorative styles.',
    historicalSignificance: 'Built in the mid-18th century for Rao Lakhpatji, '
      + 'ruler of the Kutch princely state; parts of the palace were damaged '
      + 'in the 2001 Gujarat earthquake.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 12:00 PM and 3:00 PM – 6:00 PM, closed Wednesdays',
    mapLink: 'https://maps.app.goo.gl/EM3TZ6mBm9MhS4Bb7',
    latitude: 23.2467,
    longitude: 69.6669,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V7KhVPm2a5ybweTDJZRfi61OZHpnpLCix8nbieGycg&s=10'}]
  });

  // ---------------- Somnath ----------------
  const somnath = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Somnath',
    description: 'A coastal town on the Arabian Sea, home to one of the '
      + 'twelve Jyotirlinga shrines and a temple that has been rebuilt '
      + 'several times after repeated historical destruction.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: somnath.id,
    categoryId: religious,
    name: 'Somnath Temple',
    description: 'A Shiva temple on the Arabian Sea coast, one of the twelve '
      + 'Jyotirlinga shrines, whose current structure is a 20th-century '
      + 'reconstruction after a long history of destruction and rebuilding.',
    historicalSignificance: 'Sacked and rebuilt multiple times over roughly a '
      + 'thousand years, most notably following raids in 1026 CE; the present '
      + 'temple was reconstructed starting in 1951 under Indian statesman '
      + 'Sardar Vallabhbhai Patel.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 9:00 PM, daily; light-and-sound show in the evening',
    mapLink: 'https://maps.app.goo.gl/6o91KiwR4Gg6sbNEA',
    latitude: 20.8880,
    longitude: 70.4012,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2yRu80mt7sO0CwFIJFgty4SF-Sc9ENCdxHYtGsJYQw&s'}]
  });

  // ---------------- Gir (Sasan Gir) ----------------
  const gir = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Gir',
    description: 'A forested reserve in southern Gujarat, the last remaining '
      + 'wild habitat of the Asiatic lion, once found across much of the '
      + 'Middle East and South Asia.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: gir.id,
    categoryId: adventure,
    name: 'Gir National Park',
    description: 'A dry deciduous forest reserve and the sole surviving wild '
      + 'habitat of the Asiatic lion, explored by jeep safari through '
      + 'designated zones with trained guides.',
    historicalSignificance: 'Established as a sanctuary in 1965 following '
      + 'decades of conservation effort that brought the Asiatic lion back '
      + 'from fewer than 20 individuals in the early 20th century.',
    bestTimeToVisit: 'December to March (closed during monsoon, mid-June to '
      + 'mid-October)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/7uzUFFUCxCAJ8ftw6',
    latitude: 21.1500,
    longitude: 70.8000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ09OFswSIMhhYMbWI7m1GNKNRKuVuUQjOptMFFwsINA&s=10'}]
  });

  // ---------------- Dwarka ----------------
  const dwarka = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Dwarka',
    description: 'A coastal pilgrimage town at Gujarat\'s western tip, '
      + 'traditionally identified as the ancient kingdom of Krishna and one '
      + 'of Hinduism\'s four char dham sites.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: dwarka.id,
    categoryId: religious,
    name: 'Dwarkadhish Temple',
    description: 'A temple dedicated to Krishna, its five-story tower carved '
      + 'from limestone and sandstone, standing near where the Gomti River '
      + 'meets the Arabian Sea, and one of Hinduism\'s four char dham '
      + 'pilgrimage sites.',
    historicalSignificance: 'Local tradition connects the temple\'s origins '
      + 'to Krishna\'s grandson; the current main structure is generally '
      + 'dated to around the 16th century, with earlier layers beneath.',
    bestTimeToVisit: 'October to March',
    timings: '6:30 AM – 1:00 PM and 5:00 PM – 9:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/L2NiXW8YUspfpGBz6',
    latitude: 22.2394,
    longitude: 68.9678,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgxV8MaznRw8sn1Va1nqLaBxniZP-Lg6vTjfgTggIieA&s=10'}]
  });

  // ---------------- Vadodara ----------------
  const vadodara = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Vadodara',
    description: 'A city on the Vishwamitri River, former capital of the '
      + 'princely state of Baroda under the Gaekwad dynasty, known for its '
      + 'grand palace architecture.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: vadodara.id,
    categoryId: heritage,
    name: 'Laxmi Vilas Palace',
    description: 'A palace built in Indo-Saracenic style for the Gaekwad '
      + 'rulers of Baroda, reportedly four times the size of Buckingham '
      + 'Palace, still partly used as a royal residence today.',
    historicalSignificance: 'Completed in 1890 for Maharaja Sayajirao '
      + 'Gaekwad III, designed by British architect Major Charles Mant.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:30 AM – 5:00 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/vQNEqhXt9jUpWM3AA',
    latitude: 22.3072,
    longitude: 73.1943,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5YBlicf8vI7FNb1fMXC_STfDa3m7x3aER7jQeT0Xqw&s=10'}]
  });

  // ---------------- Kevadia (Statue of Unity) ----------------
  const kevadia = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Kevadia',
    description: 'A town on the Narmada River developed around the Statue '
      + 'of Unity, currently the tallest statue in the world.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: kevadia.id,
    categoryId: heritage,
    name: 'Statue of Unity',
    description: 'A statue of Indian independence leader Sardar Vallabhbhai '
      + 'Patel standing 182 meters tall, overlooking the Narmada Dam, with an '
      + 'observation deck inside the statue\'s chest offering views across the '
      + 'reservoir.',
    historicalSignificance: 'Inaugurated in 2018, it is currently the '
      + 'tallest statue in the world, roughly twice the height of the Statue '
      + 'of Liberty.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry, separate tickets for viewing gallery access',
    timings: '8:00 AM – 6:00 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/uwQ5kTMihmUok6jH9',
    latitude: 21.8380,
    longitude: 73.7192,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjncpUTC0FXJgS2yg49hUVTAUHWE8gHrwPhq6AP8G7gw&s=10'}]
  });

  // ---------------- Champaner ----------------
  const champaner = await findOrCreateCity({
    stateId: gujarat.id,
    name: 'Champaner',
    description: 'A former capital of Gujarat abandoned after being '
      + 'conquered by the Mughals in the 16th century, leaving behind an '
      + 'unusually intact archaeological landscape of mosques, tombs, and '
      + 'fortifications around Pavagadh hill.'
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: champaner.id,
    categoryId: heritage,
    name: 'Champaner-Pavagadh Archaeological Park',
    description: 'A largely unexcavated and unrestored historic city, '
      + 'combining Hindu, Jain, and Islamic architecture, including several '
      + 'well-preserved 16th-century mosques, set at the base of the sacred '
      + 'Pavagadh hill.',
    historicalSignificance: 'Built up as capital of Gujarat under Sultan '
      + 'Mahmud Begada starting in the late 15th century, then abandoned '
      + 'after the Mughal conquest of 1535; a UNESCO World Heritage Site '
      + 'valued for its largely unaltered historic urban layout.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/Z9oVRjnU2qXdKdJN8',
    latitude: 22.4869,
    longitude: 73.5372,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstzt0BDipwIK2yRYcAkp3ZduvXmDmp4RkabCLFf1jjQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: gujarat.id,
    cityId: champaner.id,
    categoryId: religious,
    name: 'Kalika Mata Temple, Pavagadh',
    description: 'A hilltop temple atop Pavagadh hill dedicated to the '
      + 'goddess Kalika, reached by a cable car or a long pilgrim stairway, '
      + 'overlooking the Champaner ruins below.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/8RcPjNGWmRoX84hbA',
    latitude: 22.4847,
    longitude: 73.5322,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCR_Ewxw8PJT8eQbvzcPj3BR_wpS9kB9PTYtHL2_Se5Q&s=10'}]
  });

  return gujarat;
};