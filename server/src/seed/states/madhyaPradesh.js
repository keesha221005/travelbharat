module.exports = async function seedMadhyaPradesh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious
  } = categories;

  const madhyaPradesh = await findOrCreateState({
    name: 'Madhya Pradesh',
    region: 'Central',
    description: 'A landlocked state at the geographic center of India, home '
      + 'to the erotic temple sculptures of Khajuraho, the ancient Buddhist '
      + 'stupa at Sanchi, and several of the country\'s major tiger reserves.'
  });

  // ---------------- Khajuraho ----------------
  const khajuraho = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Khajuraho',
    description: 'A small town famous for a cluster of medieval Hindu and '
      + 'Jain temples covered in elaborate sculpture, including scenes ranging '
      + 'from daily life to explicit eroticism, built under the Chandela dynasty.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: khajuraho.id,
    categoryId: heritage,
    name: 'Kandariya Mahadeva Temple',
    description: 'The largest and most ornate of the Khajuraho temples, '
      + 'dedicated to Shiva, covered top to bottom in bands of sculpted '
      + 'figures including gods, mythical creatures, and intricately carved '
      + 'human forms.',
    historicalSignificance: 'Built around 1030 CE under the Chandela dynasty, '
      + 'considered the high point of Chandela temple architecture; the '
      + 'Khajuraho temple group is a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals '
      + '(Western Group ticket)',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/s6t3xWq27TdK89XW6',
    latitude: 24.8514,
    longitude: 79.9192,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS71jBTlmiM9Raou9A9zHCbMTd3BLcPoyKNMYp4rIYF0A&s'}]
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: khajuraho.id,
    categoryId: heritage,
    name: 'Lakshmana Temple, Khajuraho',
    description: 'One of the oldest and best-preserved temples in the '
      + 'Khajuraho Western Group, dedicated to Vishnu, with detailed carved '
      + 'friezes running around its base depicting battle and procession scenes.',
    historicalSignificance: 'Built around 930–950 CE under Chandela king '
      + 'Yashovarman, predating the Kandariya Mahadeva Temple by roughly a century.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Included in the Western Group ticket',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/KTqVmpYH7qHrb1E16',
    latitude: 24.8522,
    longitude: 79.9219,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfahVEHCZcg7_MZggGBja10Fsmx6o4f2b81uxLtTyE1g&s=10'}]
  });

  // ---------------- Bhopal ----------------
  const bhopal = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Bhopal',
    description: 'Madhya Pradesh\'s capital, built around two large lakes and '
      + 'historically ruled for over a century by a succession of Begums '
      + '(female Muslim rulers), unusual in Indian royal history.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: bhopal.id,
    categoryId: heritage,
    name: 'Taj-ul-Masajid',
    description: 'One of the largest mosques in India, with pink façades, '
      + 'large white domes, and a spacious courtyard, still an active '
      + 'congregational mosque today.',
    historicalSignificance: 'Construction began under Shah Jahan Begum in the '
      + 'late 19th century but was interrupted for decades due to funding, '
      + 'only being completed in the 1980s.',
    bestTimeToVisit: 'October to March',
    timings: 'Open outside prayer times for visitors',
    mapLink: 'https://maps.app.goo.gl/THweihYDFrLTMPjE8',
    latitude: 23.2603,
    longitude: 77.3925,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCsxPgEaCIRcFYbjrbkslQWPT2EXLWunvBbhmiwtDU3A&s=10'}]
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: bhopal.id,
    categoryId: nature,
    name: 'Upper Lake (Bhoj Wetland)',
    description: 'A large artificial lake bordering Bhopal\'s old city, used '
      + 'for boating, birdwatching, and evening walks along its promenade.',
    historicalSignificance: 'Created around the 11th century under Raja Bhoj, '
      + 'after whom the lake and the city\'s alternate name "Bhojpal" derive.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/aStG8oUECANRuFde6',
    latitude: 23.2334,
    longitude: 77.3736,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstkvlnlO8zMvE_T4dCrpqE83_JUYlD4Pzwe7sRXbVAw&s=10'}]
  });

  // ---------------- Sanchi ----------------
  const sanchi = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Sanchi',
    description: 'A small hilltop village holding one of the oldest surviving '
      + 'stone structures in India, a major center of Buddhist art and '
      + 'architecture for over a thousand years.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: sanchi.id,
    categoryId: heritage,
    name: 'Great Stupa at Sanchi',
    description: 'A massive hemispherical stone stupa surrounded by four '
      + 'elaborately carved gateways (toranas) depicting scenes from the '
      + 'Buddha\'s life, among the oldest stone structures surviving in India.',
    historicalSignificance: 'Originally commissioned by Emperor Ashoka in the '
      + '3rd century BCE, with the surrounding gateways and railings added '
      + 'over the following centuries; a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: 'Dawn to dusk, daily',
    mapLink: 'https://maps.app.goo.gl/ewvHPQwZogSebpVv6',
    latitude: 23.4793,
    longitude: 77.7398,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1YgFrXDx1yq1S7t7lpfKKXvUoaGbiMO1kniozIvuV_Q&s=10'}]
  });

  // ---------------- Gwalior ----------------
  const gwalior = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Gwalior',
    description: 'A city dominated by a massive hilltop fort, historically '
      + 'contested by numerous ruling dynasties over more than a thousand '
      + 'years, and a center of Indian classical music.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: gwalior.id,
    categoryId: heritage,
    name: 'Gwalior Fort',
    description: 'A hilltop fort complex with palaces, temples, and water '
      + 'tanks enclosed by sandstone walls, described by Mughal emperor Babur '
      + 'as "the pearl among fortresses in India."',
    historicalSignificance: 'The site has been fortified since at least the '
      + '6th century CE, passing through the hands of the Tomars, Mughals, '
      + 'Marathas, and Scindias over the centuries.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹75 for Indian nationals, ₹250 for foreign nationals '
      + '(approximate)',
    timings: '8:00 AM – 6:00 PM, daily; sound-and-light show in the evening',
    mapLink: 'https://maps.app.goo.gl/yAdcT8KGoesJofvD8',
    latitude: 26.2306,
    longitude: 78.1683,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_d9ngblhChww7WMtHVZA2XTJ6O1ND4Y9FPCTpgtOCQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: gwalior.id,
    categoryId: heritage,
    name: 'Jai Vilas Palace',
    description: 'A palace built for the Scindia royal family in a mix of '
      + 'European architectural styles, its Durbar Hall famously hung with '
      + 'two of the largest chandeliers in the world.',
    historicalSignificance: 'Built in 1874 for Maharaja Jayajirao Scindia to '
      + 'host a visit from the Prince of Wales; part of the palace remains a '
      + 'royal residence, with another wing open as a museum.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '10:00 AM – 5:30 PM, closed Wednesdays',
    mapLink: 'https://maps.app.goo.gl/RwvVr1wTrH6kTASV6',
    latitude: 26.2100,
    longitude: 78.1717,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWoaKL4ytP6K0KMJLRDXlNI0RMVncTjjie3eEkQKq7w&s=10'}]
  });

  // ---------------- Ujjain ----------------
  const ujjain = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Ujjain',
    description: 'An ancient city on the Kshipra River, regarded as one of '
      + 'Hinduism\'s seven sacred cities and host every twelve years to one of '
      + 'the four Kumbh Mela gatherings.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: ujjain.id,
    categoryId: religious,
    name: 'Mahakaleshwar Temple',
    description: 'A Shiva temple housing one of the twelve Jyotirlinga '
      + 'shrines, distinctive for its linga believed to be swayambhu '
      + '(self-manifested), and for a pre-dawn ritual involving ash from '
      + 'cremation grounds.',
    historicalSignificance: 'The temple\'s origins are ancient, referenced in '
      + 'classical Sanskrit literature; the current structure dates largely '
      + 'from the 18th century under Maratha patronage after earlier '
      + 'destruction during the Delhi Sultanate period.',
    bestTimeToVisit: 'October to March',
    timings: '4:00 AM – 11:00 PM, daily, with specific darshan time slots',
    mapLink: 'https://maps.app.goo.gl/tyP16dQaYxEKykrs8',
    latitude: 23.1828,
    longitude: 75.7681,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMApR2vdu_JRkhxS1wjfgtKFmxbgf2Up6cqnXCe29Ng&s=10'}]
  });

  // ---------------- Orchha ----------------
  const orchha = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Orchha',
    description: 'A small town on the Betwa River, former capital of the '
      + 'Bundela Rajput kingdom, dotted with palaces, temples, and riverside '
      + 'cenotaphs left largely untouched by later development.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: orchha.id,
    categoryId: heritage,
    name: 'Orchha Fort Complex',
    description: 'A cluster of palaces within a fortified riverside complex, '
      + 'including the Raj Mahal and Jahangir Mahal, built by successive '
      + 'Bundela rulers over more than a century.',
    historicalSignificance: 'Founded in the 16th century by Bundela king '
      + 'Rudra Pratap Singh, with the Jahangir Mahal added in the early 17th '
      + 'century to commemorate a visit from Mughal emperor Jahangir.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹40 for Indian nationals, ₹250 for foreign nationals '
      + '(approximate)',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/er8mfmyohRvzoSW88',
    latitude: 25.3517,
    longitude: 78.6417,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-3Ve9Yh7pYoojc_OaEXzoD63t7tf2QV-dDIP5I76eQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: orchha.id,
    categoryId: heritage,
    name: 'Chhatris of Orchha',
    description: 'A row of sandstone cenotaphs built along the banks of the '
      + 'Betwa River to commemorate Bundela rulers, their reflections visible '
      + 'in the water during the dry season.',
    historicalSignificance: 'Built over the 17th and 18th centuries as '
      + 'memorials to successive Bundela kings.',
    bestTimeToVisit: 'October to March, at sunset',
    mapLink: 'https://maps.app.goo.gl/R1ytXoL52QKkYBRT6',
    latitude: 25.3494,
    longitude: 78.6428,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ogzx-bMwWgam0UroGxuW8-AZOclbu1RpEVhMxUIi-w&s=10'}]
  });

  // ---------------- Pachmarhi ----------------
  const pachmarhi = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Pachmarhi',
    description: 'The only hill station in Madhya Pradesh, set on the '
      + 'Satpura plateau and developed by the British as a summer retreat, '
      + 'now surrounded by a biosphere reserve.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: pachmarhi.id,
    categoryId: nature,
    name: 'Bee Falls',
    description: 'A waterfall on the edge of Pachmarhi town, named for the '
      + 'sound of falling water said to resemble buzzing bees, popular for a '
      + 'short walk and swimming in its pool.',
    bestTimeToVisit: 'July to October, fullest during monsoon',
    mapLink: 'https://maps.app.goo.gl/GXtztumT8gLtyHgT6',
    latitude: 22.4667,
    longitude: 78.4167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ceVFMTmpe7_GGVWoaG0ffAGBh1ET9_suubJz_ESNxw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: pachmarhi.id,
    categoryId: nature,
    name: 'Pandav Caves',
    description: 'A group of small rock-cut caves on a sandstone outcrop, '
      + 'traditionally associated in local legend with the Pandava brothers '
      + 'from the Mahabharata, though likely of Buddhist monastic origin.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/U6YotkPj43arEvZh9',
    latitude: 22.4700,
    longitude: 78.4300,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuKJqsW8QF4pUXPvEEdXKNWK05GSXUR5Qrq1ZY8sXe_Q&s=10'}]
  });

  // ---------------- Bandhavgarh ----------------
  const bandhavgarh = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Bandhavgarh',
    description: 'A national park in central Madhya Pradesh known for having '
      + 'one of the highest densities of tiger sightings of any reserve in '
      + 'India, alongside an ancient hilltop fort within its boundaries.'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: bandhavgarh.id,
    categoryId: nature,
    name: 'Bandhavgarh National Park',
    description: 'A tiger reserve built around a range of sandstone hills, '
      + 'regarded by many wildlife guides as offering the best tiger-sighting '
      + 'odds of any Indian park, explored by jeep safari through marked zones.',
    historicalSignificance: 'The surrounding hills hold Bandhavgarh Fort, '
      + 'referenced in ancient texts and believed to have been in use for over '
      + '2,000 years before the area was declared a national park in 1968.',
    bestTimeToVisit: 'October to June (closed during monsoon, July–September)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/3p9VHAD6RfdsKWbn9',
    latitude: 23.6478,
    longitude: 80.9958,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiSHBK8GUxqK7BXIhFwPUxQ_K43HQKW0opE2bRglNYQ&s=10'}]
  });

  // ---------------- Kanha ----------------
  const kanha = await findOrCreateCity({
    stateId: madhyaPradesh.id,
    name: 'Kanha',
    description: 'One of India\'s largest and best-known tiger reserves, '
      + 'covering sal and bamboo forest across the Maikal hills, and the '
      + 'landscape said to have inspired Rudyard Kipling\'s "The Jungle Book."'
  });

  await findOrCreatePlace({
    stateId: madhyaPradesh.id,
    cityId: kanha.id,
    categoryId: nature,
    name: 'Kanha National Park',
    description: 'A large tiger reserve of sal forest and open meadows, home '
      + 'to tigers, leopards, and the barasingha (swamp deer), a species '
      + 'brought back from the brink of extinction largely through conservation '
      + 'efforts based here.',
    historicalSignificance: 'Declared a national park in 1955 and a tiger '
      + 'reserve in 1973 under Project Tiger; its landscape is widely believed '
      + 'to have influenced Rudyard Kipling\'s "The Jungle Book," though Kipling '
      + 'never actually visited.',
    bestTimeToVisit: 'October to June (closed during monsoon, July–September)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/LiEu6THQUNegoL6P6',
    latitude: 22.3344,
    longitude: 80.6119,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzO-imVt5RbUUhYfVVsGw6TWm4dmg0AkmTjB1wxPGmw&s=10'}]
  });

  return madhyaPradesh;
};