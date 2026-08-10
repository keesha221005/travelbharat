module.exports = async function seedOdisha({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious
  } = categories;

  const odisha = await findOrCreateState({
    name: 'Odisha',
    region: 'East',
    description: 'A state on the Bay of Bengal known for the Jagannath '
      + 'Temple at Puri, the 13th-century Sun Temple at Konark, and Chilika '
      + 'Lake, one of the largest brackish-water lagoons in Asia.'
  });

  // ---------------- Puri ----------------
  const puri = await findOrCreateCity({
    stateId: odisha.id,
    name: 'Puri',
    description: 'A coastal pilgrimage town and one of Hinduism\'s four '
      + 'char dham sites, centered on the Jagannath Temple and its annual '
      + 'Rath Yatra chariot festival.'
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: puri.id,
    categoryId: religious,
    name: 'Jagannath Temple, Puri',
    description: 'A major Vaishnavite temple dedicated to Jagannath (a form '
      + 'of Krishna), with a tower rising over 65 meters, and one of the four '
      + 'char dham pilgrimage sites in Hinduism.',
    historicalSignificance: 'The current structure was largely built in the '
      + '12th century under the Eastern Ganga dynasty king Anantavarman '
      + 'Chodaganga; the temple\'s annual Rath Yatra chariot procession draws '
      + 'enormous crowds each year.',
    bestTimeToVisit: 'October to February, or during Rath Yatra (June/July)',
    timings: '5:00 AM – 12:00 PM and 3:00 PM – 10:00 PM, daily; entry '
      + 'restricted to Hindus',
    mapLink: 'https://maps.app.goo.gl/vHM5po2Xb5GQ2Urx8',
    latitude: 19.8047,
    longitude: 85.8178,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7p3eomyaPaUa71nmwrS0sgf5F_HdPy_tR0SwslGyYfA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: puri.id,
    categoryId: nature,
    name: 'Puri Beach',
    description: 'A wide, gently sloping beach on the Bay of Bengal, one of '
      + 'the more accessible and popular beaches on India\'s eastern coast, '
      + 'known also for its annual sand art festival.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/qCVqW8W1t5nzv9Tb7',
    latitude: 19.7983,
    longitude: 85.8281,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBInnD_HT43PLSwJsM0yitVksgbyv50-OW44PcIXREw&s=10'}]
  });

  // ---------------- Konark ----------------
  const konark = await findOrCreateCity({
    stateId: odisha.id,
    name: 'Konark',
    description: 'A small coastal town near Puri, home to the Sun Temple, '
      + 'one of the most architecturally ambitious temples ever built in India.'
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: konark.id,
    categoryId: heritage,
    name: 'Konark Sun Temple',
    description: 'A 13th-century temple designed as a colossal stone chariot '
      + 'for the sun god Surya, with twelve pairs of intricately carved stone '
      + 'wheels and a team of seven horses, most now in ruins but still '
      + 'astonishing in scale and detail.',
    historicalSignificance: 'Built around 1250 CE under Eastern Ganga king '
      + 'Narasimhadeva I; the main tower collapsed centuries ago, but the '
      + 'surviving structure remains a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: '6:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/xbNiZgC3PJj9GQcd8',
    latitude: 19.8876,
    longitude: 86.0945,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6niu-UvI3AZX9dYfOpSy2_B9CbaAZow92rW4Vbm0NA&s=10'}]
  });

  // ---------------- Bhubaneswar ----------------
  const bhubaneswar = await findOrCreateCity({
    stateId: odisha.id,
    name: 'Bhubaneswar',
    description: 'Odisha\'s capital, historically known as the "Temple City" '
      + 'for the hundreds of temples built here between the 6th and 13th '
      + 'centuries, many still standing today.'
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: bhubaneswar.id,
    categoryId: religious,
    name: 'Lingaraj Temple',
    description: 'The largest and most important temple in Bhubaneswar, '
      + 'dedicated to Harihara (a combined form of Shiva and Vishnu), with a '
      + 'tower rising some 55 meters over a sprawling walled temple compound.',
    historicalSignificance: 'The current structure dates largely from the '
      + '11th century under the Somavamshi dynasty, though the site\'s '
      + 'religious use predates it considerably.',
    bestTimeToVisit: 'October to February',
    timings: '5:00 AM – 9:00 PM, daily; entry restricted to Hindus',
    mapLink: 'https://maps.app.goo.gl/m7ufHfEEDMFAYn8n8',
    latitude: 20.2372,
    longitude: 85.8342,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QFWoLoESz-n-k54Mk1ZMLPil0XrHA-lw3697w83r-Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: bhubaneswar.id,
    categoryId: heritage,
    name: 'Udayagiri and Khandagiri Caves',
    description: 'Twin hills honeycombed with rock-cut caves originally used '
      + 'as dwellings by Jain monks, many carved with decorative facades and '
      + 'inscriptions.',
    historicalSignificance: 'Excavated primarily in the 1st and 2nd centuries '
      + 'BCE under King Kharavela of the Chedi dynasty; the Hathigumpha '
      + 'inscription in Udayagiri is a significant early historical record of '
      + 'his reign.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/obYgYAGqSqPVtBHJ9',
    latitude: 20.2494,
    longitude: 85.7842,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9e1OysiTUklbn2lscSk2QRJ6ASSnw6gcqnFOdBfZNlQ&s=10'}]
  });

  // ---------------- Chilika Lake ----------------
  const chilika = await findOrCreateCity({
    stateId: odisha.id,
    name: 'Chilika',
    description: 'A vast brackish-water lagoon on the Bay of Bengal, one of '
      + 'the largest coastal lagoons in Asia and a major wintering ground for '
      + 'migratory birds.'
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: chilika.id,
    categoryId: nature,
    name: 'Chilika Lake',
    description: 'A shallow lagoon separated from the Bay of Bengal by a '
      + 'narrow sandy spit, home to Irrawaddy dolphins and, in winter, to '
      + 'hundreds of thousands of migratory birds from as far as Siberia.',
    historicalSignificance: 'Designated a Ramsar Wetland of International '
      + 'Importance in 1981, the first such site recognized in India.',
    bestTimeToVisit: 'November to February, for peak migratory bird season',
    entryFee: 'Boat rides available at Satapada and other launch points',
    mapLink: 'https://maps.app.goo.gl/fK5p6gj1vBdj8oFj9',
    latitude: 19.7000,
    longitude: 85.3167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREm7aWwMAEcJ-AjvPqmgNqKW3PfBm8YfdaQEqMNYnadw&s=10'}]
  });

  // ---------------- Chandipur ----------------
  const chandipur = await findOrCreateCity({
    stateId: odisha.id,
    name: 'Chandipur',
    description: 'A small coastal town on Odisha\'s northern shore, unusual '
      + 'for a beach where the sea retreats several kilometers out at low tide '
      + 'and returns at high tide.'
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: chandipur.id,
    categoryId: nature,
    name: 'Chandipur Beach',
    description: 'A tidal beach where the shoreline recedes dramatically at '
      + 'low tide, exposing a wide stretch of flat sand that visitors can walk '
      + 'across before the sea returns hours later.',
    bestTimeToVisit: 'October to February; check tide timings before visiting',
    mapLink: 'https://maps.app.goo.gl/twtfeEL4E9JZQeih7',
    latitude: 21.4667,
    longitude: 87.0333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLLsfiweHQnv5wsbyd5L2yyMWcdumaM2ZSHmsdiyvag&s=10'}]
  });

  // ---------------- Similipal ----------------
  const similipal = await findOrCreateCity({
    stateId: odisha.id,
    name: 'Similipal',
    description: 'A forested hill range in northern Odisha, home to one of '
      + 'India\'s major tiger reserves and a landscape of waterfalls, sal '
      + 'forest, and grassy meadows.'
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: similipal.id,
    categoryId: nature,
    name: 'Similipal Tiger Reserve',
    description: 'A large forested reserve of sal trees and rolling hills, '
      + 'home to tigers, elephants, and a rare melanistic (black) form of the '
      + 'leopard occasionally spotted within the park.',
    historicalSignificance: 'Declared a tiger reserve in 1956 under Project '
      + 'Tiger and later designated a UNESCO Biosphere Reserve in 2009.',
    bestTimeToVisit: 'November to June (closed during monsoon)',
    entryFee: 'Safari permit and vehicle fees required, booked in advance',
    timings: 'Morning and afternoon safari slots, seasonal timings',
    mapLink: 'https://maps.app.goo.gl/2UNQxTLABREV61vQ9',
    latitude: 21.6000,
    longitude: 86.3000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaSV105jZYKOWU0mowpOY_CVjSTsmBC0gvcKSRwxAmA&s'}]
  });

  await findOrCreatePlace({
    stateId: odisha.id,
    cityId: similipal.id,
    categoryId: nature,
    name: 'Barehipani Waterfall',
    description: 'One of India\'s tallest waterfalls, dropping in two tiers '
      + 'down a forested cliff face within the Similipal reserve, best viewed '
      + 'from a designated viewpoint rather than up close.',
    bestTimeToVisit: 'July to October, fullest during and after monsoon',
    entryFee: 'Included with Similipal park entry',
    mapLink: 'https://maps.app.goo.gl/1Cn14HeMX9WzUfN28',
    latitude: 21.5167,
    longitude: 86.3667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wdiRRI6C6QngSCsHZ5Cgo4_XhDt_jESrZsV7wrJBKQ&s=10'}]
  });

  return odisha;
};