module.exports = async function seedAssam({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const assam = await findOrCreateState({
    name: 'Assam',
    region: 'Northeast',
    description: 'A state built around the Brahmaputra River valley, known '
      + 'for its tea gardens, the one-horned rhinoceros of Kaziranga, and '
      + 'the Kamakhya Temple, a major center of Tantric Hindu worship.'
  });

  // ---------------- Guwahati ----------------
  const guwahati = await findOrCreateCity({
    stateId: assam.id,
    name: 'Guwahati',
    description: 'Assam\'s largest city, on the banks of the Brahmaputra, '
      + 'and the main gateway for travel across the rest of Northeast India.'
  });

  await findOrCreatePlace({
    stateId: assam.id,
    cityId: guwahati.id,
    categoryId: religious,
    name: 'Kamakhya Temple',
    description: 'A temple on Nilachal Hill dedicated to the goddess '
      + 'Kamakhya, one of the most important Shakti Peethas in Hindu '
      + 'tradition and a major center of Tantric worship, drawing large '
      + 'crowds especially during the annual Ambubachi Mela.',
    historicalSignificance: 'The current temple structure dates largely '
      + 'from the 17th century, rebuilt under the Koch dynasty after an '
      + 'earlier temple was destroyed; the site\'s religious significance '
      + 'is considerably older and central to Tantric Hindu tradition.',
    bestTimeToVisit: 'October to March, though extremely crowded during '
      + 'Ambubachi Mela (June)',
    timings: '5:30 AM – 1:00 PM and 2:30 PM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/bVV85rgzzoPoQvVE9',
    latitude: 26.1665,
    longitude: 91.7050,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS16RFB__-u427UnRWMkJc0IG_CYTxPkJ8fUU6MYjVbxA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: assam.id,
    cityId: guwahati.id,
    categoryId: nature,
    name: 'Umananda Island',
    description: 'A small rocky island in the middle of the Brahmaputra, '
      + 'reachable by a short ferry ride, holding a Shiva temple and '
      + 'sometimes described as one of the smallest inhabited river islands '
      + 'in the world.',
    historicalSignificance: 'The temple on the island was originally built '
      + 'in 1694 under Ahom king Gadadhar Singha, though it has since been '
      + 'rebuilt after earthquake damage.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/gYSciRcHXX4o6z1g8',
    latitude: 26.1908,
    longitude: 91.7433,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSap44-Be89By1fCq8fl09DWVrJOlLwq4YaP0-qIHjmQ&s=10'}]
  });

  // ---------------- Kaziranga ----------------
  const kaziranga = await findOrCreateCity({
    stateId: assam.id,
    name: 'Kaziranga',
    description: 'A national park along the Brahmaputra floodplains, home '
      + 'to the largest population of the one-horned rhinoceros anywhere in '
      + 'the world.'
  });

  await findOrCreatePlace({
    stateId: assam.id,
    cityId: kaziranga.id,
    categoryId: nature,
    name: 'Kaziranga National Park',
    description: 'A grassland and wetland reserve along the Brahmaputra '
      + 'River, home to around two-thirds of the world\'s greater one-horned '
      + 'rhinoceros population, alongside tigers, elephants, and wild water '
      + 'buffalo, explored by jeep or elephant-back safari.',
    historicalSignificance: 'Established as a reserve in 1905 at the '
      + 'initiative of Mary Curzon, wife of the then-Viceroy of India, after '
      + 'she reportedly failed to spot a single rhino during a visit and '
      + 'urged conservation action; it is a UNESCO World Heritage Site.',
    bestTimeToVisit: 'November to April (closed during monsoon, mid-June '
      + 'to October)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/CqCfyHgb7k7ssAnX8',
    latitude: 26.5775,
    longitude: 93.1714,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhNUN5k-iPKvzT9vcSxJtf2fXm4G2n52JCDQVTOgZNsA&s=10'}]
  });

  // ---------------- Majuli ----------------
  const majuli = await findOrCreateCity({
    stateId: assam.id,
    name: 'Majuli',
    description: 'A river island in the Brahmaputra, widely cited as the '
      + 'largest river island in the world, and a center of Assamese '
      + 'Vaishnavite culture through its satras (monastery-like religious '
      + 'and cultural institutions).'
  });

  await findOrCreatePlace({
    stateId: assam.id,
    cityId: majuli.id,
    categoryId: heritage,
    name: 'Kamalabari Satra',
    description: 'One of the most prominent satras on Majuli — a '
      + 'combination of monastery, religious school, and cultural academy — '
      + 'known for preserving classical Assamese dance, music, and '
      + 'mask-making traditions founded by the 15th-century reformer '
      + 'Srimanta Sankardev.',
    historicalSignificance: 'Satras were established across Assam '
      + 'beginning in the 15th and 16th centuries as part of the Ekasarana '
      + 'Vaishnavite movement founded by Srimanta Sankardev; Majuli became '
      + 'a particular stronghold of this tradition and remains so today.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/8HGrND4QyUbGsg4j8',
    latitude: 26.9500,
    longitude: 94.1667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5iyvrT6B1VrrcKKZmSDtblghmAHkoMt22lVUIghteg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: assam.id,
    cityId: majuli.id,
    categoryId: nature,
    name: 'Majuli River Island',
    description: 'A sediment island formed by shifting channels of the '
      + 'Brahmaputra, widely described as the world\'s largest river island, '
      + 'though its shrinking size due to erosion has been a longstanding '
      + 'environmental concern.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/v9FSmJ7vBfzxtVM68',
    latitude: 26.9500,
    longitude: 94.2167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV_UnUkPJVqhHvu6Dopwga4vyak7MxMFfoU650IsJM_Q&s=10'}]
  });

  // ---------------- Jorhat (tea gardens) ----------------
  const jorhat = await findOrCreateCity({
    stateId: assam.id,
    name: 'Jorhat',
    description: 'A city in Upper Assam known as the region\'s tea capital, '
      + 'surrounded by some of the state\'s oldest commercial tea estates.'
  });

  await findOrCreatePlace({
    stateId: assam.id,
    cityId: jorhat.id,
    categoryId: nature,
    name: 'Jorhat Tea Estates',
    description: 'A cluster of tea gardens around Jorhat, some dating to '
      + 'the 19th-century origins of Assam\'s commercial tea industry, with '
      + 'several offering estate tours, tastings, and heritage bungalow stays.',
    historicalSignificance: 'Commercial tea cultivation in Assam began in '
      + 'the 1830s after the British East India Company identified wild tea '
      + 'plants growing naturally in the region, eventually making Assam one '
      + 'of the world\'s largest tea-producing regions.',
    bestTimeToVisit: 'October to April',
    mapLink: 'https://maps.app.goo.gl/Z5tS2XQxddf9KVvZ9',
    latitude: 26.7509,
    longitude: 94.2037,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dODRxRBwDBlnlNLAB50rpJeOhyk4JCQO6HviWNlmVw&s=10'}]
  });

  return assam;
};