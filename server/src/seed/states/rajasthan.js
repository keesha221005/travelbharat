module.exports = async function seedRajasthan({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, adventure, religious, nature } = categories;

  const rajasthan = await findOrCreateState({
    name: 'Rajasthan',
    region: 'North',
    description: 'India\'s largest state by area, known for its desert landscapes, '
      + 'Rajput-era forts and palaces, and a strong tradition of folk music and textiles.'
  });

  const jaipur = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Jaipur',
    description: 'The state capital, nicknamed the "Pink City" for the terracotta-pink '
      + 'wash applied to its old-city buildings in the 19th century.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: jaipur.id,
    categoryId: heritage,
    name: 'Hawa Mahal',
    description: 'A five-story palace facade built from pink and red sandstone, designed '
      + 'so that royal women could observe street life through hundreds of small '
      + 'latticed windows without being seen themselves.',
    historicalSignificance: 'Commissioned in 1799 by Maharaja Sawai Pratap Singh, the '
      + 'building\'s honeycomb structure was intended to let cool air circulate through '
      + 'the palace during Jaipur\'s hot summers.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹50 for Indian nationals, ₹200 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, daily',
    latitude: 26.9239,
    longitude: 75.8267
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: jaipur.id,
    categoryId: heritage,
    name: 'Amber Fort',
    description: 'A hilltop fort complex overlooking Maota Lake, built from pale yellow '
      + 'and pink sandstone with marble courtyards, mirrored halls, and formal gardens.',
    historicalSignificance: 'Construction began in 1592 under Raja Man Singh I and '
      + 'continued for generations, blending Rajput and Mughal architectural styles.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹100 for Indian nationals, ₹500 for foreign nationals',
    timings: '8:00 AM – 5:30 PM, daily',
    latitude: 26.9855,
    longitude: 75.8513
  });

  const udaipur = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Udaipur',
    description: 'A lake city built around a series of artificial lakes, often called '
      + 'the "City of Lakes" for the palaces and ghats that line their shores.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: udaipur.id,
    categoryId: heritage,
    name: 'City Palace, Udaipur',
    description: 'A sprawling palace complex on the eastern bank of Lake Pichola, '
      + 'combining courtyards, towers, and balconies built up over nearly 400 years '
      + 'by successive Mewar rulers.',
    bestTimeToVisit: 'September to March',
    entryFee: '₹300 for Indian nationals, ₹700 for foreign nationals (includes museum)',
    timings: '9:30 AM – 5:30 PM, daily',
    latitude: 24.5764,
    longitude: 73.6835
  });

  // ---------------- Jodhpur ----------------
  const jodhpur = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Jodhpur',
    description: 'A city on the edge of the Thar Desert known as the "Blue '
      + 'City" for the indigo-washed houses clustered beneath its hilltop '
      + 'fort, former capital of the Marwar kingdom.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: jodhpur.id,
    categoryId: heritage,
    name: 'Mehrangarh Fort',
    description: 'A massive fort rising on a rocky outcrop 120 meters above '
      + 'the city, with ornately carved palace interiors and sweeping views '
      + 'over Jodhpur\'s blue-painted old town.',
    historicalSignificance: 'Founded in 1459 by Rao Jodha, the fort was '
      + 'expanded by successive Rathore rulers of Marwar over the following '
      + 'five centuries.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹200 for Indian nationals, ₹700 for foreign nationals '
      + '(approximate)',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/pWrTxhTdC4cvkHhZ6',
    latitude: 26.2979,
    longitude: 73.0186,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZWhY_aMkML58dTtvtdjO0AMbhJQGb0gQeuXGfJj-37w&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: jodhpur.id,
    categoryId: heritage,
    name: 'Jaswant Thada',
    description: 'A white marble cenotaph built in memory of Maharaja '
      + 'Jaswant Singh II, with intricately carved marble sheets thin enough '
      + 'to glow faintly when sunlight passes through them.',
    historicalSignificance: 'Built in 1899, and still used as a cremation '
      + 'ground for the Jodhpur royal family.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/yeeGuuHipXzdiPiu8',
    latitude: 26.3010,
    longitude: 73.0234,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7ZN_nmYxujXx6qwV1aTuSj2Sesr-TgDB5x671NnZQQ&s=10'}]
  });

  // ---------------- Jaisalmer ----------------
  const jaisalmer = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Jaisalmer',
    description: 'A desert city deep in the Thar Desert near the Pakistan '
      + 'border, known as the "Golden City" for the honey-colored sandstone '
      + 'used throughout its fort and old town.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: jaisalmer.id,
    categoryId: heritage,
    name: 'Jaisalmer Fort',
    description: 'A "living fort" still inhabited by roughly a quarter of '
      + 'the old city\'s population, with narrow lanes, havelis, and temples '
      + 'built entirely from golden-yellow sandstone.',
    historicalSignificance: 'Founded in 1156 by Rawal Jaisal, it is one of '
      + 'the few forts in the world still functioning as a living settlement '
      + 'rather than a purely historical monument; a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/SasMVdJSHzm7jZ3SA',
    latitude: 26.9124,
    longitude: 70.9129,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5IcqcfGs7YBj02gYZK62QGQWoNauMfYrj-8yCXzT6w&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: jaisalmer.id,
    categoryId: adventure,
    name: 'Sam Sand Dunes',
    description: 'A stretch of rolling sand dunes in the Thar Desert outside '
      + 'Jaisalmer, popular for camel safaris and overnight desert camping '
      + 'under open skies.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Camel/jeep safari fees vary by operator',
    mapLink: 'https://maps.app.goo.gl/vC6PFi2KdbpD5Qnk9',
    latitude: 26.9167,
    longitude: 70.5000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhwDvFgK67xxzQudLY456F4qMd2FRlqBl82wXcxDH1A&s=10'}]
  });

  // ---------------- Pushkar ----------------
  const pushkar = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Pushkar',
    description: 'A small lakeside pilgrimage town, home to one of the few '
      + 'temples in India dedicated to Brahma, and host each year to a '
      + 'well-known camel and livestock fair.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: pushkar.id,
    categoryId: religious,
    name: 'Brahma Temple, Pushkar',
    description: 'One of very few temples in India dedicated to Brahma, '
      + 'the Hindu creator deity, standing beside Pushkar Lake and marked '
      + 'by a distinctive red spire.',
    historicalSignificance: 'The current structure dates mainly from the '
      + '14th century, though the site\'s religious significance is described '
      + 'in much older Hindu texts.',
    bestTimeToVisit: 'October to March, or during Pushkar Camel Fair '
      + '(October/November)',
    timings: '5:00 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/yDk3nJhZqGZeHLyZ7',
    latitude: 26.4897,
    longitude: 74.5544,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xYwAonGhe5KsLcmEIHP1fPeCnLUA1djTrtFXUCjSCg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: pushkar.id,
    categoryId: nature,
    name: 'Pushkar Lake',
    description: 'A sacred lake ringed by more than 50 bathing ghats and '
      + 'temples, considered one of Hinduism\'s holiest bodies of water and '
      + 'the ceremonial center of the town.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/tJA9kbur3ht195Tt5',
    latitude: 26.4880,
    longitude: 74.5511,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_LOwSdGEsKWa__0fsVl4Scj1QLBYPJFogo7-5i-bmQ&s=10'}]
  });

  // ---------------- Ranthambore ----------------
  const ranthambore = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Ranthambore',
    description: 'A former royal hunting ground in eastern Rajasthan, now '
      + 'one of India\'s best-known tiger reserves, with a ruined fort rising '
      + 'above the forest.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: ranthambore.id,
    categoryId: nature,
    name: 'Ranthambore National Park',
    description: 'A tiger reserve built around dry deciduous forest, lakes, '
      + 'and the ruins of Ranthambore Fort, known for relatively frequent '
      + 'daytime tiger sightings compared to many other Indian reserves.',
    historicalSignificance: 'Once a private hunting reserve for the '
      + 'Maharajas of Jaipur, it was declared a national park in 1980 and is '
      + 'one of India\'s largest and most visited tiger reserves.',
    bestTimeToVisit: 'October to June (closed during monsoon, July–September)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/i8iFCSWUk5c1vxnRA',
    latitude: 26.0173,
    longitude: 76.5026,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI1HowqU_TZmCQQe2zq_RwLs0PgOUFJi4v0f3EG13wpQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: ranthambore.id,
    categoryId: heritage,
    name: 'Ranthambore Fort',
    description: 'A hilltop fort within the national park, with temples and '
      + 'ruined structures overtaken in places by encroaching forest, offering '
      + 'wide views across the reserve below.',
    historicalSignificance: 'Believed to date from the 10th century, held '
      + 'over the centuries by Chauhan Rajputs, the Delhi Sultanate, and '
      + 'later the Mughals; a UNESCO World Heritage Site as part of the '
      + 'Hill Forts of Rajasthan.',
    bestTimeToVisit: 'October to June',
    entryFee: 'Included with park entry in most cases',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/C5ahUKJNw8Dt1wpm9',
    latitude: 26.0206,
    longitude: 76.4497,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkyqH6z7OzSn5rTBtArw5BZSacrrXPDgpKnS65wL1NFA&s=10'}]
  });

  // ---------------- Bikaner ----------------
  const bikaner = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Bikaner',
    description: 'A desert city in northern Rajasthan founded by a Rathore '
      + 'prince, known for its red sandstone fort, camel breeding farm, and '
      + 'a temple famous for its resident rats.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: bikaner.id,
    categoryId: heritage,
    name: 'Junagarh Fort',
    description: 'A fort built at ground level rather than atop a hill like '
      + 'most Rajput forts, with ornately decorated palace apartments, '
      + 'courtyards, and temples built up by successive rulers over centuries.',
    historicalSignificance: 'Built between 1589 and 1594 under Raja Rai '
      + 'Singh, a general in the Mughal emperor Akbar\'s army, and expanded by '
      + 'later rulers.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹50 for Indian nationals, ₹300 for foreign nationals '
      + '(approximate)',
    timings: '10:00 AM – 4:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/yb4FWnPf1K5oDFJx7',
    latitude: 28.0229,
    longitude: 73.3119,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAcyIzqeFjR_MiiKkOCt-qt6hoy_tqLrzLhDpi1tKMw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: bikaner.id,
    categoryId: religious,
    name: 'Karni Mata Temple',
    description: 'A temple near Bikaner famous for the thousands of black '
      + 'rats considered sacred and allowed to roam freely throughout the '
      + 'building, with the rare white rat regarded as especially auspicious '
      + 'to spot.',
    historicalSignificance: 'Dedicated to Karni Mata, a 14th-century mystic '
      + 'venerated as an incarnation of the goddess Durga by the local Rajput '
      + 'community.',
    bestTimeToVisit: 'October to March',
    timings: '4:00 AM – 10:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/zSQsuARZp4unZ9Gj7',
    latitude: 27.7906,
    longitude: 73.6161,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwUbcI-gMl7X_zA-PmYZQyvzBDrrM_68_GyPSCWBaJQ&s=10'}]
  });

  // ---------------- Mount Abu ----------------
  const mountAbu = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Mount Abu',
    description: 'Rajasthan\'s only hill station, set in the Aravalli Range, '
      + 'known for its cooler climate and a group of marble Jain temples '
      + 'regarded among the finest in India.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: mountAbu.id,
    categoryId: religious,
    name: 'Dilwara Temples',
    description: 'A complex of five Jain temples built entirely from white '
      + 'marble, with ceilings and pillars carved so finely they resemble '
      + 'lacework rather than stone.',
    historicalSignificance: 'Built between the 11th and 13th centuries under '
      + 'the Chalukya dynasty and Vastupala-Tejapala patronage, with '
      + 'construction reportedly costing sums comparable to a small fortune '
      + 'even by the standards of the time.',
    bestTimeToVisit: 'October to March',
    timings: '12:00 PM – 6:00 PM for non-Jain visitors, daily',
    mapLink: 'https://maps.app.goo.gl/TpDwRuZ3hiHUpeoj9',
    latitude: 24.6167,
    longitude: 72.7167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAAQGShim15YRuQD3MK5VElLb-ySs0m831mueuec2gEA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: mountAbu.id,
    categoryId: nature,
    name: 'Nakki Lake',
    description: 'A small lake at the center of Mount Abu town, ringed by '
      + 'hills and boulders, with boating available and a pleasant walking '
      + 'path around its shore.',
    bestTimeToVisit: 'October to June',
    mapLink: 'https://maps.app.goo.gl/NcTCNKcdbtQZ86Gx8',
    latitude: 24.5925,
    longitude: 72.7156,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVUkSNtBIFePGSQM3fLIzmMmafBECR3l3-or6wSCk4Q&s'}]
  });

  // ---------------- Chittorgarh ----------------
  const chittorgarh = await findOrCreateCity({
    stateId: rajasthan.id,
    name: 'Chittorgarh',
    description: 'A city built around one of the largest forts in India, '
      + 'historically the capital of Mewar and the site of repeated sieges '
      + 'and acts of resistance central to Rajput history and folklore.'
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: chittorgarh.id,
    categoryId: heritage,
    name: 'Chittorgarh Fort',
    description: 'One of the largest fort complexes in India, spread across '
      + 'a long hilltop plateau and holding palaces, temples, and towers built '
      + 'up over centuries of Mewar rule, remembered for three historic sieges.',
    historicalSignificance: 'Believed to have origins in the 7th century, '
      + 'the fort was besieged three times between the 14th and 16th '
      + 'centuries; it is a UNESCO World Heritage Site as part of the Hill '
      + 'Forts of Rajasthan.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals '
      + '(approximate)',
    timings: '9:45 AM – 5:45 PM, daily; sound-and-light show in the evening',
    mapLink: 'https://maps.app.goo.gl/18RhrKGmn5FKQxeP9',
    latitude: 24.8887,
    longitude: 74.6455,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5OOpS0iMfbC1ZFO_BeKYMIgkjCSUfLtRzBWIKdxbSQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: rajasthan.id,
    cityId: chittorgarh.id,
    categoryId: heritage,
    name: 'Vijay Stambh (Tower of Victory)',
    description: 'A nine-story sandstone tower rising over 37 meters within '
      + 'Chittorgarh Fort, covered in carved figures of Hindu deities, built '
      + 'to commemorate a military victory.',
    historicalSignificance: 'Built between 1458 and 1468 by Mewar ruler Rana '
      + 'Kumbha to mark his victory over the combined forces of Malwa and Gujarat.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/RMHoAgtHHnA9XwVy7',
    latitude: 24.8858,
    longitude: 74.6469,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS492nYqzwvNDwSqULzkftZTKtU9yEkMPE3b-KKs095Tw&s=10'}]
  });

  return rajasthan;
};
