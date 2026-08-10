module.exports = async function seedUttarakhand({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const uttarakhand = await findOrCreateState({
    name: 'Uttarakhand',
    region: 'North',
    description: 'A Himalayan state formed in 2000 from the hill districts '
      + 'of Uttar Pradesh, home to the Char Dham pilgrimage circuit, the '
      + 'source of the Ganges, and Jim Corbett, India\'s oldest national park.'
  });

  // ---------------- Rishikesh ----------------
  const rishikesh = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Rishikesh',
    description: 'A town on the Ganges at the foot of the Himalayas, widely '
      + 'known as a center for yoga and meditation, and as a base for '
      + 'whitewater rafting on the river.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: rishikesh.id,
    categoryId: religious,
    name: 'Laxman Jhula',
    description: 'A suspension bridge across the Ganges connecting two '
      + 'temple-lined neighborhoods, traditionally linked to a Ramayana '
      + 'legend involving Lakshmana crossing the river on jute ropes.',
    historicalSignificance: 'The current iron bridge was built in 1929, '
      + 'replacing an earlier structure; a nearby bridge, Ram Jhula, was '
      + 'added decades later.',
    bestTimeToVisit: 'September to November, or February to April',
    mapLink: 'https://maps.app.goo.gl/vX8Adr7obg8QRWQ49',
    latitude: 30.1258,
    longitude: 78.3286,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8PUvWNHDNRVidh7zkL5WeVqNw3XqSWoRf0uT5_g_AQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: rishikesh.id,
    categoryId: adventure,
    name: 'Ganges White Water Rafting',
    description: 'A stretch of the Ganges near Rishikesh offering rapids '
      + 'ranging from beginner to more technical grades, run commercially by '
      + 'numerous rafting operators along the riverbank.',
    bestTimeToVisit: 'September to November, or March to June',
    entryFee: 'Rafting packages vary by operator and rapid grade',
    mapLink: 'https://maps.app.goo.gl/LGrJ5GxQkYnfB9GU9',
    latitude: 30.1200,
    longitude: 78.3300,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9B-WXTmPGN9Tr2RqkABpGZiomZVEHQByBl3WwtL97Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: rishikesh.id,
    categoryId: religious,
    name: 'Triveni Ghat',
    description: 'The main bathing ghat in Rishikesh, hosting a nightly '
      + 'Ganga Aarti ceremony with lamps and chanting, considered the '
      + 'meeting point of three sacred rivers in Hindu tradition.',
    bestTimeToVisit: 'September to November, evening for the Aarti ceremony',
    mapLink: 'https://maps.app.goo.gl/ybQstCb6fLHzAVf99',
    latitude: 30.1069,
    longitude: 78.2947,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3T5dMawBNR4JaQ05ZoPL_SQQAwMvl4DtHgiue_AquKw&s=10'}]
  });

  // ---------------- Haridwar ----------------
  const haridwar = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Haridwar',
    description: 'One of Hinduism\'s seven sacred cities, where the Ganges '
      + 'exits the Himalayas onto the plains, and host every twelve years to '
      + 'one of the four Kumbh Mela gatherings.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: haridwar.id,
    categoryId: religious,
    name: 'Har Ki Pauri',
    description: 'A sacred ghat on the Ganges considered the holiest '
      + 'bathing spot in Haridwar, and the site of a large nightly Ganga '
      + 'Aarti ceremony that draws sizeable crowds.',
    historicalSignificance: 'Believed in Hindu tradition to mark a spot '
      + 'where Vishnu himself once stepped; the ghat is central to '
      + 'Haridwar\'s role as a Kumbh Mela site.',
    bestTimeToVisit: 'October to March, evening for the Aarti ceremony',
    mapLink: 'https://maps.app.goo.gl/6cVkhaDBQ4XtSF378',
    latitude: 29.9457,
    longitude: 78.1642,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWr6pd2O64sw4zskEoOUlUlqvsUGqy8Kk22vU478q_OQ&s'}]
  });

  // ---------------- Nainital ----------------
  const nainital = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Nainital',
    description: 'A hill station built around a natural lake in the Kumaon '
      + 'hills, developed by the British in the 19th century and still one '
      + 'of North India\'s most popular lake towns.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: nainital.id,
    categoryId: nature,
    name: 'Naini Lake',
    description: 'A crescent-shaped natural lake at the center of Nainital '
      + 'town, ringed by hills and a promenade known as the Mall Road, '
      + 'popular for boating.',
    historicalSignificance: 'Considered one of the Shakti Peethas in Hindu '
      + 'tradition; the town itself was developed as a hill station from the '
      + '1840s onward under British colonial administration.',
    bestTimeToVisit: 'March to June, or September to November',
    mapLink: 'https://maps.app.goo.gl/uudSS15xrjN6dJRt9',
    latitude: 29.3919,
    longitude: 79.4542,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPX1S3g5-5zelZCvb6denftQAnD43YFhvFFr333tsloQ&s'}]
  });

  // ---------------- Mussoorie ----------------
  const mussoorie = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Mussoorie',
    description: 'A hill station in the foothills of the Himalayas, '
      + 'nicknamed the "Queen of the Hills," developed by the British as a '
      + 'summer retreat above Dehradun.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: mussoorie.id,
    categoryId: nature,
    name: 'Kempty Falls',
    description: 'A multi-tiered waterfall a short drive from Mussoorie, '
      + 'with pools at its base popular for wading and swimming, reached by '
      + 'a flight of steps down from the roadside.',
    bestTimeToVisit: 'March to June, or September to November',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/jTDTurjpRCJ8AZCu6',
    latitude: 30.4926,
    longitude: 78.0416,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DNbuzjDn2aKnqLR69hxh9JD-KIqhU2XNBGVrLmo0Ug&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: mussoorie.id,
    categoryId: nature,
    name: 'Gun Hill',
    description: 'The second-highest point in Mussoorie, reached by a cable '
      + 'car or a walking trail, offering views over the town and, on clear '
      + 'days, toward the snow-capped Himalayan range.',
    bestTimeToVisit: 'March to June, or September to November',
    entryFee: 'Cable car ticket required',
    mapLink: 'https://maps.app.goo.gl/zHerSSoNVBgaQ9Xq7',
    latitude: 30.4547,
    longitude: 78.0803,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0WofrVl8nRSffZZ8F4FZUHxN8IsWz_U-_Fq-KlzN8A&s=10'}]
  });

  // ---------------- Jim Corbett National Park ----------------
  const corbett = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Jim Corbett National Park',
    description: 'India\'s oldest national park, established in the '
      + 'Himalayan foothills, and the founding site of Project Tiger, '
      + 'India\'s national tiger conservation program.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: corbett.id,
    categoryId: nature,
    name: 'Jim Corbett National Park',
    description: 'A forested reserve of sal trees, grasslands, and river '
      + 'floodplains along the Ramganga River, home to tigers, elephants, '
      + 'and a wide range of birdlife, explored by jeep or elephant-back '
      + 'safari through designated zones.',
    historicalSignificance: 'Established in 1936 as India\'s first national '
      + 'park, later renamed after hunter-turned-conservationist Jim Corbett; '
      + 'it became the first reserve under India\'s Project Tiger initiative '
      + 'in 1973.',
    bestTimeToVisit: 'November to June (closed during monsoon, mid-June to '
      + 'mid-November)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/wZumcw3ixGNPhRSP7',
    latitude: 29.5300,
    longitude: 78.7747,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQivl0vi6LX2w0WCG2aR67BBOViorWvZs_7fR7Tiylllg&s=10'}]
  });

  // ---------------- Char Dham: Kedarnath ----------------
  const kedarnath = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Kedarnath',
    description: 'A high-altitude pilgrimage town in the Garhwal Himalayas, '
      + 'accessible only by foot or helicopter and only during a roughly '
      + 'seven-month window each year, before winter snow closes the route.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: kedarnath.id,
    categoryId: religious,
    name: 'Kedarnath Temple',
    description: 'A stone Shiva temple at roughly 3,580 meters elevation, '
      + 'near the source of the Mandakini River, one of the twelve '
      + 'Jyotirlinga shrines and one of the four sites of the Char Dham '
      + 'pilgrimage circuit.',
    historicalSignificance: 'The temple\'s exact age is uncertain, though '
      + 'tradition credits the 8th-century philosopher Adi Shankaracharya '
      + 'with reviving worship at the site. The temple structure notably '
      + 'survived largely intact during the devastating 2013 Uttarakhand '
      + 'floods that destroyed much of the surrounding town.',
    bestTimeToVisit: 'Late April/May to early November only; closed for '
      + 'winter, when the deity is ceremonially moved to Ukhimath',
    timings: '6:00 AM – 3:00 PM and 5:00 PM – 9:00 PM, during the open season',
    mapLink: 'https://maps.app.goo.gl/a93EDaZoLxz2dKhy8',
    latitude: 30.7346,
    longitude: 79.0669,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbf7vnVOIB7UiSIBczCaJt6-rSvFQu8YKRdb8kadEwJQ&s'}]
  });

  // ---------------- Char Dham: Badrinath ----------------
  const badrinath = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Badrinath',
    description: 'A pilgrimage town on the banks of the Alaknanda River '
      + 'near the Tibet border, among the highest-altitude and most-visited '
      + 'stops on the Char Dham circuit.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: badrinath.id,
    categoryId: religious,
    name: 'Badrinath Temple',
    description: 'A brightly painted temple dedicated to Vishnu in his '
      + 'Badrinarayan form, sitting at around 3,130 meters elevation beside '
      + 'the Alaknanda River, and one of the four Char Dham sites as well as '
      + 'one of Vaishnavism\'s 108 Divya Desam shrines.',
    historicalSignificance: 'Tradition again credits Adi Shankaracharya with '
      + 'establishing organized worship here in the 8th century, though the '
      + 'site\'s religious significance is considerably older; the current '
      + 'temple structure has been rebuilt and repaired several times after '
      + 'earthquake and avalanche damage.',
    bestTimeToVisit: 'May to November only; closed for winter, when the '
      + 'deity is ceremonially moved to Pandukeshwar',
    timings: '4:30 AM – 1:00 PM and 4:00 PM – 9:00 PM, during the open season',
    mapLink: 'https://maps.app.goo.gl/3hbL2KGhjuL99fEt8',
    latitude: 30.7433,
    longitude: 79.4938,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5Gj1Rrue7spzJk4riExILZg1dEukyPZaEAwYzYlMlQ&s=10'}]
  });

  // ---------------- Char Dham: Gangotri ----------------
  const gangotri = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Gangotri',
    description: 'A pilgrimage town regarded as the symbolic source of the '
      + 'Ganges, though the river\'s actual glacial source lies further '
      + 'upstream at Gaumukh, roughly an 18-kilometer trek away.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: gangotri.id,
    categoryId: religious,
    name: 'Gangotri Temple',
    description: 'A temple dedicated to the goddess Ganga, sitting beside '
      + 'the fast-flowing Bhagirathi River at around 3,100 meters elevation, '
      + 'marking the traditional starting point of the Ganges\' sacred '
      + 'geography even though the glacial source lies further upstream.',
    historicalSignificance: 'The present temple was built in the early 19th '
      + 'century, commissioned by Gorkha commander Amar Singh Thapa, on a '
      + 'site with much older religious significance.',
    bestTimeToVisit: 'Late April/May to around Diwali (October/November) '
      + 'only; closed for winter, when the deity is ceremonially moved to '
      + 'Mukhba village',
    timings: '6:30 AM – 2:00 PM and 4:00 PM – 9:00 PM, during the open season',
    mapLink: 'https://maps.app.goo.gl/VMJ7tfavtzDegwQ18',
    latitude: 30.9993,
    longitude: 78.9400,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhQ-QZUOTj4G443Cf9kdlmz4MG9P2csfRCOSygjyFfA&s=10'}]
  });

  // ---------------- Char Dham: Yamunotri ----------------
  const yamunotri = await findOrCreateCity({
    stateId: uttarakhand.id,
    name: 'Yamunotri',
    description: 'The remotest of the four Char Dham sites, reached by a '
      + '5–6 kilometer trek from the roadhead at Janki Chatti, near the '
      + 'source of the Yamuna River.'
  });

  await findOrCreatePlace({
    stateId: uttarakhand.id,
    cityId: yamunotri.id,
    categoryId: religious,
    name: 'Yamunotri Temple',
    description: 'A temple dedicated to the goddess Yamuna, at around 3,290 '
      + 'meters elevation near natural hot springs (Surya Kund) where '
      + 'pilgrims traditionally boil rice or potatoes in the geothermal '
      + 'water as a religious offering.',
    historicalSignificance: 'The temple has been rebuilt more than once '
      + 'after avalanche and earthquake damage; the current structure dates '
      + 'from the 19th century, funded by Maharani Gularia of Jaipur.',
    bestTimeToVisit: 'Late April/May to around Diwali (October/November) '
      + 'only; closed for winter, when the deity is ceremonially moved to '
      + 'Kharsali village',
    timings: '6:00 AM – 8:00 PM, during the open season',
    mapLink: 'https://maps.app.goo.gl/vHj4QxvQjrvQaDac8',
    latitude: 31.0100,
    longitude: 78.4600,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTxt3bSD8zK1CN2oomHFt08FgcGyDSdkzVsqAQJQX3g&s=10'}]
  });

  return uttarakhand;
};