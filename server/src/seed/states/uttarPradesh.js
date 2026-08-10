module.exports = async function seedUttarPradesh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, religious } = categories;

  const uttarPradesh = await findOrCreateState({
    name: 'Uttar Pradesh',
    region: 'North',
    description: 'India\'s most populous state, home to the Taj Mahal and the ancient '
      + 'riverside city of Varanasi, one of the oldest continuously inhabited cities '
      + 'in the world.'
  });

  const agra = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Agra',
    description: 'A city on the banks of the Yamuna river, and former capital of the '
      + 'Mughal Empire under several 16th- and 17th-century emperors.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: agra.id,
    categoryId: heritage,
    name: 'Taj Mahal',
    description: 'An ivory-white marble mausoleum on the south bank of the Yamuna, '
      + 'widely regarded as the finest example of Mughal architecture and a UNESCO '
      + 'World Heritage Site.',
    historicalSignificance: 'Commissioned in 1632 by Emperor Shah Jahan in memory of '
      + 'his wife Mumtaz Mahal, the complex took roughly two decades to complete and '
      + 'involved artisans and materials drawn from across Asia.',
    bestTimeToVisit: 'October to March, at sunrise for the softest light',
    entryFee: '₹50 for Indian nationals, ₹1,100 for foreign nationals',
    timings: '6:00 AM – 6:30 PM, closed on Fridays',
    mapLink: 'https://maps.google.com/?q=Taj+Mahal+Agra',
    latitude: 27.1751,
    longitude: 78.0421,
    images: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/....jpg', alt: 'Taj Mahal at sunrise' }
    ]
  });

  const varanasi = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Varanasi',
    description: 'A city on the banks of the Ganges considered sacred in Hinduism, '
      + 'known for its ghats — stepped riverfronts used for bathing and cremation rites.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: varanasi.id,
    categoryId: religious,
    name: 'Dashashwamedh Ghat',
    description: 'The main and busiest ghat in Varanasi, best known for the nightly '
      + 'Ganga Aarti — a devotional fire ceremony performed by priests facing the river.',
    bestTimeToVisit: 'October to March, evening for the Aarti ceremony',
    timings: 'Open all day; Aarti ceremony around sunset',
    latitude: 25.3059,
    longitude: 83.0104
  });

  // ---------------- Fatehpur Sikri ----------------
  const fatehpurSikri = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Fatehpur Sikri',
    description: 'A fortified Mughal city built by Emperor Akbar as his new '
      + 'capital, abandoned within about 15 years, likely due to water '
      + 'shortages, leaving its red sandstone palaces and mosque remarkably '
      + 'well preserved.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: fatehpurSikri.id,
    categoryId: heritage,
    name: 'Fatehpur Sikri',
    description: 'A complete Mughal-era planned city of red sandstone '
      + 'palaces, courtyards, and a grand mosque, built and then abandoned '
      + 'within a generation, leaving its architecture unusually intact for '
      + 'a city of its age.',
    historicalSignificance: 'Built by Emperor Akbar starting in 1571 to '
      + 'serve as his capital, abandoned by around 1585, most likely due to '
      + 'an inadequate water supply; a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹50 for Indian nationals, ₹610 for foreign nationals '
      + '(approximate)',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/LA72GNvqbW6jDr9i9',
    latitude: 27.0945,
    longitude: 77.6679,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUa70ke6neT3NMwRHf3DjWTr_PJjnl-t5llB6MOnxog&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: fatehpurSikri.id,
    categoryId: heritage,
    name: 'Buland Darwaza',
    description: 'A monumental gateway to the Jama Masjid at Fatehpur '
      + 'Sikri, standing around 54 meters tall and among the largest gateways '
      + 'in the world, built to commemorate a military victory.',
    historicalSignificance: 'Built around 1601 by Akbar to commemorate his '
      + 'conquest of Gujarat, inscribed with a Persian message reflecting on '
      + 'the impermanence of worldly life.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/f81ow9WdmWuQBpjb9',
    latitude: 27.0937,
    longitude: 77.6644,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRqKZAyLM6ERMrI14a_UglUg3u44ZOeR9R6xSWyzoAg&s=10'}]
  });

  // ---------------- Lucknow ----------------
  const lucknow = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Lucknow',
    description: 'Uttar Pradesh\'s capital, former seat of the Nawabs of '
      + 'Awadh, known for its refined Mughlai cuisine, Urdu poetic tradition, '
      + 'and a distinct style of Islamic architecture.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: lucknow.id,
    categoryId: heritage,
    name: 'Bara Imambara',
    description: 'A large congregation hall built without the use of iron '
      + 'or wooden beams, with a central chamber said to be one of the '
      + 'largest arched vaulted halls in the world, and a maze of interlocking '
      + 'passages known as the Bhulbhulaiya above it.',
    historicalSignificance: 'Built in 1784 by Nawab Asaf-ud-Daula, reportedly '
      + 'as a famine-relief project employing local laborers and artisans '
      + 'during a period of severe drought.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹25 for Indian nationals, ₹500 for foreign nationals '
      + '(approximate)',
    timings: '6:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/BTA8NksBsCGXsxWUA',
    latitude: 26.8700,
    longitude: 80.9142,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT9FHrPMlFs5a_qevVv3Z8x2xlWixnAFU-rM8Qazvpw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: lucknow.id,
    categoryId: heritage,
    name: 'Rumi Darwaza',
    description: 'A 60-foot ornamental gateway built in an Awadhi '
      + 'architectural style, said to be modeled loosely on a gate in '
      + 'Istanbul, and now one of Lucknow\'s best-known landmarks.',
    historicalSignificance: 'Built in 1784 under Nawab Asaf-ud-Daula, '
      + 'alongside the Bara Imambara, as part of the same famine-relief '
      + 'building program.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/rky1YJtxKeaKwiPS7',
    latitude: 26.8689,
    longitude: 80.9119,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjCNU6oR31Gqd5cvc2mK3I2h_G3w-6Zh-ZJKLY5SJVSQ&s=10'}]
  });

  // ---------------- Mathura & Vrindavan ----------------
  const mathura = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Mathura',
    description: 'A city on the Yamuna River traditionally regarded as the '
      + 'birthplace of Krishna, and one of Hinduism\'s seven sacred cities.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: mathura.id,
    categoryId: religious,
    name: 'Krishna Janmabhoomi Temple',
    description: 'A temple complex marking the site traditionally believed '
      + 'to be Krishna\'s birthplace, drawing large numbers of pilgrims '
      + 'especially during the Janmashtami festival.',
    bestTimeToVisit: 'October to March, or during Janmashtami (August/'
      + 'September)',
    timings: '5:00 AM – 12:00 PM and 4:00 PM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/qutXQk6iLp1ct1bx9',
    latitude: 27.5044,
    longitude: 77.6737,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9cSy9yhRVXc0DRhCvm7JMGv6woHL_17kWOP8DZKH3Q&s=10'}]
  });

  const vrindavan = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Vrindavan',
    description: 'A town near Mathura closely associated with Krishna\'s '
      + 'childhood in Hindu tradition, home to hundreds of temples and a '
      + 'major center of Vaishnavite devotional practice.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: vrindavan.id,
    categoryId: religious,
    name: 'ISKCON Temple, Vrindavan (Krishna-Balaram Mandir)',
    description: 'A temple built by the International Society for Krishna '
      + 'Consciousness, popular with both Indian pilgrims and international '
      + 'visitors, with attached guesthouses and a memorial to the '
      + 'organization\'s founder.',
    historicalSignificance: 'Completed in 1975, founded by A.C. '
      + 'Bhaktivedanta Swami Prabhupada, who established the global ISKCON '
      + 'movement.',
    bestTimeToVisit: 'October to March',
    timings: '4:30 AM – 1:00 PM and 4:00 PM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/2nfgzceJ18DWyXBx7',
    latitude: 27.5806,
    longitude: 77.6819,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkdkPw19UqX1DsnAaDXeOIp5oriOVm7JRh-y2kPRZ6A&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: vrindavan.id,
    categoryId: religious,
    name: 'Banke Bihari Temple',
    description: 'One of the most-visited temples in Vrindavan, dedicated '
      + 'to Krishna, known for a curtain repeatedly drawn and opened before '
      + 'the deity throughout the day rather than left permanently open.',
    historicalSignificance: 'Established in the 19th century following the '
      + 'discovery of the deity by the Vaishnavite saint Swami Haridas, '
      + 'according to devotional tradition.',
    bestTimeToVisit: 'October to March',
    timings: '7:45 AM – 12:00 PM and 4:30 PM – 9:00 PM, daily (timings shift '
      + 'seasonally)',
    mapLink: 'https://maps.app.goo.gl/LfUFCVJb9YU8TfTb7',
    latitude: 27.5806,
    longitude: 77.7008,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIj_y5FTS3LnvUCVX9UEqgpC1_C8m_-PdiN2ekSvKYZw&s=10'}]
  });

  // ---------------- Sarnath ----------------
  const sarnath = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Sarnath',
    description: 'A town near Varanasi where the Buddha is said to have '
      + 'delivered his first sermon after attaining enlightenment, making it '
      + 'one of Buddhism\'s four main pilgrimage sites.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: sarnath.id,
    categoryId: heritage,
    name: 'Dhamek Stupa',
    description: 'A large cylindrical stupa marking the traditional site of '
      + 'the Buddha\'s first sermon, with the lower section covered in carved '
      + 'geometric and floral patterns.',
    historicalSignificance: 'The current structure dates largely from around '
      + 'the 5th or 6th century CE, though it stands on the site of earlier '
      + 'stupas believed to date back to the reign of Emperor Ashoka in the '
      + '3rd century BCE.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: 'Dawn to dusk, daily',
    mapLink: 'https://maps.app.goo.gl/T2B1ZzauvQL3nB9i6',
    latitude: 25.3811,
    longitude: 83.0231,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ6i21oB9x5YxNDE3J2VvchLsRSIdOvip0zm5kpG9Vqw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: sarnath.id,
    categoryId: heritage,
    name: 'Sarnath Archaeological Museum',
    description: 'A museum holding excavated artifacts from the surrounding '
      + 'site, including the original Lion Capital of Ashoka, now India\'s '
      + 'national emblem, carved atop a pillar erected to mark the Buddha\'s '
      + 'first sermon.',
    historicalSignificance: 'The Lion Capital dates from around the 3rd '
      + 'century BCE, commissioned under Emperor Ashoka; the museum itself '
      + 'opened in 1910.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹5 for Indian nationals, ₹100 for foreign nationals '
      + '(approximate)',
    timings: '9:00 AM – 5:00 PM, closed Fridays',
    mapLink: 'https://maps.app.goo.gl/9BmFtCeNDBi1m61n7',
    latitude: 25.3792,
    longitude: 83.0228,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM80qyzXWnWiS1BrZpcn5Gx0PNGsgaCRsbPWjoRmt0HA&s=10'}]
  });

  // ---------------- Ayodhya ----------------
  const ayodhya = await findOrCreateCity({
    stateId: uttarPradesh.id,
    name: 'Ayodhya',
    description: 'An ancient city on the Sarayu River, traditionally '
      + 'regarded in Hindu texts as the birthplace of Rama, and a major and '
      + 'growing pilgrimage destination.'
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: ayodhya.id,
    categoryId: religious,
    name: 'Ram Mandir',
    description: 'A large temple dedicated to Rama, built in traditional '
      + 'Nagara architectural style with detailed stone carving, consecrated '
      + 'and opened to the public in January 2024.',
    historicalSignificance: 'The temple stands on a site with a long and '
      + 'complex history, culminating in a 2019 Supreme Court of India '
      + 'ruling that resolved a decades-long legal dispute over the land in '
      + 'favor of temple construction; construction was completed and the '
      + 'temple opened to pilgrims in early 2024.',
    bestTimeToVisit: 'October to March',
    timings: '7:00 AM – 11:30 AM and 2:00 PM – 7:00 PM, daily (subject to '
      + 'change)',
    mapLink: 'https://maps.app.goo.gl/RXmw2RcCrBF71zJs7',
    latitude: 26.7955,
    longitude: 82.1946,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Y1jgmcCRqgddBCdzs87hEoXnu2g0stAzvFhmKd7nvA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: uttarPradesh.id,
    cityId: ayodhya.id,
    categoryId: religious,
    name: 'Hanuman Garhi',
    description: 'A hilltop temple dedicated to Hanuman, reached by a '
      + 'flight of steps, and traditionally one of the first temples '
      + 'pilgrims visit when arriving in Ayodhya.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 10:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/v1rgrfcthbzCiu6v5',
    latitude: 26.7969,
    longitude: 82.1936,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmm5FqgtJOs9G7mTJKyGScr75u9SzGMO4_51rC4Sl_kw&s=10'}]
  });

  return uttarPradesh;
};
