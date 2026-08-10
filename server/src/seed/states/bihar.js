module.exports = async function seedBihar({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, religious } = categories;

  const bihar = await findOrCreateState({
    name: 'Bihar',
    region: 'East',
    description: 'A state on the Gangetic plain with deep roots in ancient '
      + 'Indian history, home to Bodh Gaya, one of Buddhism\'s most sacred '
      + 'sites, and to the ruins of Nalanda, once among the world\'s great '
      + 'centers of learning.'
  });

  // ---------------- Bodh Gaya ----------------
  const bodhGaya = await findOrCreateCity({
    stateId: bihar.id,
    name: 'Bodh Gaya',
    description: 'A town regarded as the most sacred pilgrimage site in '
      + 'Buddhism, marking the spot where the Buddha is believed to have '
      + 'attained enlightenment while meditating beneath a fig tree.'
  });

  await findOrCreatePlace({
    stateId: bihar.id,
    cityId: bodhGaya.id,
    categoryId: religious,
    name: 'Mahabodhi Temple',
    description: 'A temple complex marking the site of the Buddha\'s '
      + 'enlightenment, its central spire rising over 50 meters above a '
      + 'descendant of the original Bodhi Tree, drawing Buddhist pilgrims '
      + 'and monks from across the world.',
    historicalSignificance: 'The site\'s religious use dates back to around '
      + 'the 3rd century BCE under Emperor Ashoka, with the current temple '
      + 'structure mainly dating from the 5th and 6th centuries CE, later '
      + 'restored in the 19th century; a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/QXu43DksjV1uJ5J39',
    latitude: 24.6959,
    longitude: 84.9910,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT28PEOtiPqKC7SSJt0r8olasSn57Kt56sQ48FjmlkWqA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: bihar.id,
    cityId: bodhGaya.id,
    categoryId: religious,
    name: 'Bodhi Tree',
    description: 'A fig tree growing beside the Mahabodhi Temple, said to '
      + 'be a direct descendant of the original tree under which the Buddha '
      + 'meditated, propagated over centuries through cuttings passed '
      + 'between Bodh Gaya and Sri Lanka.',
    historicalSignificance: 'The original tree was reportedly destroyed '
      + 'more than once over the centuries; the current tree is grown from a '
      + 'sapling of a tree in Sri Lanka, itself grown from a cutting of the '
      + 'original taken there in ancient times.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/pvLnP5p2u3T3YX1v5',
    latitude: 24.6958,
    longitude: 84.9911,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgPIK97T_2VKmG0TYm-cy9h6pTBN_KC_d1Z4BAwG91w&s=10'}]
  });

  // ---------------- Nalanda ----------------
  const nalanda = await findOrCreateCity({
    stateId: bihar.id,
    name: 'Nalanda',
    description: 'The site of an ancient monastic university that drew '
      + 'scholars from across Asia for around 700 years, now preserved as an '
      + 'extensive field of excavated ruins.'
  });

  await findOrCreatePlace({
    stateId: bihar.id,
    cityId: nalanda.id,
    categoryId: heritage,
    name: 'Nalanda Mahavihara (ruins)',
    description: 'The excavated remains of monastery courtyards, stupas, '
      + 'and lecture halls from an ancient Buddhist university, once said to '
      + 'house thousands of students and teachers studying subjects ranging '
      + 'from theology to medicine and astronomy.',
    historicalSignificance: 'Founded around the 5th century CE and '
      + 'sustained through royal patronage for centuries, Nalanda was '
      + 'destroyed in the late 12th century; the ruins are a UNESCO World '
      + 'Heritage Site, recognized as one of the world\'s oldest planned '
      + 'centers of higher learning.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/dbrZEXQ1cN9ntNJ56',
    latitude: 25.1358,
    longitude: 85.4436,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxzUvFD7PEYm9yu18ocAbtt8dfJWtPQ5QrJVJthW6Dcg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: bihar.id,
    cityId: nalanda.id,
    categoryId: heritage,
    name: 'Nalanda Archaeological Museum',
    description: 'A museum near the Nalanda ruins displaying sculptures, '
      + 'coins, and manuscripts recovered from the site, offering context '
      + 'for the scale and reach of the ancient university.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:00 PM, closed Fridays',
    mapLink: 'https://maps.app.goo.gl/thhLN6jLWAiUsneV6',
    latitude: 25.1364,
    longitude: 85.4453,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_miDKyui9CwtqNodhcKSQ1ETsBexX10qRd7lypuQvg&s=10'}]
  });

  // ---------------- Patna ----------------
  const patna = await findOrCreateCity({
    stateId: bihar.id,
    name: 'Patna',
    description: 'Bihar\'s capital on the Ganges, one of the oldest '
      + 'continuously inhabited cities in the world, and a site of '
      + 'significance in both ancient Indian history and Sikh tradition.'
  });

  await findOrCreatePlace({
    stateId: bihar.id,
    cityId: patna.id,
    categoryId: religious,
    name: 'Takht Sri Patna Sahib',
    description: 'A Sikh gurdwara marking the birthplace of Guru Gobind '
      + 'Singh, the tenth Sikh Guru, and one of the five takhts (seats of '
      + 'temporal authority) in Sikhism.',
    historicalSignificance: 'Guru Gobind Singh was born in Patna in 1666; '
      + 'the gurdwara was later expanded with support from Maharaja Ranjit '
      + 'Singh in the 19th century.',
    bestTimeToVisit: 'October to March',
    timings: '4:00 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/UpkQ5AHnK31qpb936',
    latitude: 25.6127,
    longitude: 85.1619,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSudXQKHYcmRRVz_nVRxV7NdSKiaPEsM4yQU4aOAnMr_Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: bihar.id,
    cityId: patna.id,
    categoryId: heritage,
    name: 'Golghar',
    description: 'A large domed granary building with a spiral staircase '
      + 'winding around its exterior to the top, built after a devastating '
      + 'famine to store emergency grain reserves.',
    historicalSignificance: 'Built in 1786 by the British East India '
      + 'Company following the Bengal famine of 1770, as a measure against '
      + 'future food shortages; it was never actually used for its intended '
      + 'storage purpose.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/bpXwbxEMFbNrDMJc9',
    latitude: 25.6158,
    longitude: 85.1414,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAb5a4OHsgbCfRugf0mGova9li5WV2O5dTiHxHyF0zXg&s=10'}]
  });


  return bihar;
};