module.exports = async function seedKarnataka({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const karnataka = await findOrCreateState({
    name: 'Karnataka',
    region: 'South',
    description: 'A state spanning coastal beaches, the Western Ghats, and the '
      + 'Deccan plateau, home to India\'s tech capital Bengaluru and the ruined '
      + 'Vijayanagara imperial capital at Hampi.'
  });

  // ---------------- Bengaluru ----------------
  const bengaluru = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Bengaluru',
    description: 'Karnataka\'s capital, known as India\'s technology and startup '
      + 'hub, while retaining pockets of colonial-era gardens and 16th-century '
      + 'fort remains.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: bengaluru.id,
    categoryId: nature,
    name: 'Lalbagh Botanical Garden',
    description: 'A large botanical garden built around a rock formation '
      + 'estimated to be over 3 billion years old, with a glasshouse modeled '
      + 'on London\'s Crystal Palace and a wide collection of tropical plant species.',
    historicalSignificance: 'Laid out in the 1760s under Hyder Ali, later '
      + 'expanded by his son Tipu Sultan and, after 1831, by the British.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹30 for Indian nationals (approximate)',
    timings: '6:00 AM – 7:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/azkTPqTrGCin5zTM9',
    latitude: 12.9507,
    longitude: 77.5848,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1yNf3SiINdxXqZq4c-3Oc5oDKFJVknblgyROT0y5qg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: bengaluru.id,
    categoryId: heritage,
    name: 'Bangalore Palace',
    description: 'A Tudor-style palace built for the Wadiyar royal family, with '
      + 'turreted towers, fortified battlements, and richly carved wooden '
      + 'interiors, modeled loosely on England\'s Windsor Castle.',
    historicalSignificance: 'Construction began in 1862 and the palace was '
      + 'later acquired by the Mysore royal family in 1873.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹230 for Indian nationals, ₹460 for foreign nationals (approximate)',
    timings: '10:00 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/vfPrLF35EyjaDtsg7',
    latitude: 12.9987,
    longitude: 77.5920,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJsRc0TlAvrUSTeGpJfdBXYyPaOmfGaVWTF5k8WPiT9Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: bengaluru.id,
    categoryId: heritage,
    name: 'Tipu Sultan\'s Summer Palace',
    description: 'A two-story wooden palace with ornately carved balconies '
      + 'and painted teak pillars, once used as a summer retreat by the ruler '
      + 'of the Kingdom of Mysore.',
    historicalSignificance: 'Completed in 1791 under Tipu Sultan, built inside '
      + 'the older Bangalore Fort founded by Kempe Gowda in the 16th century.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹15 for Indian nationals, ₹200 for foreign nationals (approximate)',
    timings: '8:30 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/AUEFHHdFD7amyLybA',
    latitude: 12.9591,
    longitude: 77.5739,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1SJQmh_cpqvvXx8qQa3qPYnBb8Ggp4-k04iNgO7VsQg&s=10'}]
  });

  // ---------------- Mysuru ----------------
  const mysuru = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Mysuru',
    description: 'The former capital of the Kingdom of Mysore, laid out around '
      + 'a monumental royal palace and known for its silk weaving and annual '
      + 'Dasara festival.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: mysuru.id,
    categoryId: heritage,
    name: 'Mysore Palace',
    description: 'A grand Indo-Saracenic palace combining Hindu, Islamic, '
      + 'Rajput, and Gothic architectural elements, illuminated by nearly '
      + '100,000 light bulbs on Sundays and during the Dasara festival.',
    historicalSignificance: 'The current structure was completed in 1912 for '
      + 'the Wadiyar dynasty, after an earlier wooden palace burned down in 1897.',
    bestTimeToVisit: 'October (Dasara festival) or the cooler months, '
      + 'November to February',
    entryFee: '₹70 for Indian nationals, ₹200 for foreign nationals (approximate)',
    timings: '10:00 AM – 5:30 PM, daily; illuminated 7:00 PM – 7:45 PM on Sundays',
    mapLink: 'https://maps.app.goo.gl/dXASH6DTd215Jqti6',
    latitude: 12.3052,
    longitude: 76.6552,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvENrahhjDbII8y-nS6xHTE6hCcEjfn2sK9uUbgLkqEg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: mysuru.id,
    categoryId: religious,
    name: 'Chamundeshwari Temple',
    description: 'A temple dedicated to the goddess Chamundeshwari atop '
      + 'Chamundi Hill, reached by road or a long flight of stone steps '
      + 'flanked by a large Nandi bull statue partway up.',
    historicalSignificance: 'The temple\'s origins date back several '
      + 'centuries, with significant additions made under the Wadiyar rulers '
      + 'of Mysore.',
    bestTimeToVisit: 'October to February',
    timings: '7:30 AM – 2:00 PM and 3:30 PM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/fT94XZc7Tvxfgpim9',
    latitude: 12.2724,
    longitude: 76.6706,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceD1FVgUmxYFJ4oix95L6OSFTIj3tk8Bb9wAv_cE3Yg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: mysuru.id,
    categoryId: nature,
    name: 'Brindavan Gardens',
    description: 'A terraced garden laid out below the Krishna Raja Sagara '
      + 'dam, known for its musical fountain show set to lights each evening.',
    historicalSignificance: 'Developed in the 1930s alongside the KRS dam, '
      + 'completed under the Mysore state\'s chief engineer Sir M. Visvesvaraya.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Paid entry',
    timings: '6:30 AM – 8:00 PM, daily; fountain show in the evening',
    mapLink: 'https://maps.app.goo.gl/YvuJzwGtEyZGDw246',
    latitude: 12.4244,
    longitude: 76.5735,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKnCg9FQZxp8cwHWTUzqvfANDje4mnvMHWcWGSg8BEbg&s=10'}]
  });

  // ---------------- Hampi ----------------
  const hampi = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Hampi',
    description: 'A village amid the ruins of Vijayanagara, once one of the '
      + 'largest cities in the world and capital of the Vijayanagara Empire, '
      + 'scattered across a boulder-strewn landscape beside the Tungabhadra River.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: hampi.id,
    categoryId: religious,
    name: 'Virupaksha Temple',
    description: 'A still-active temple dedicated to Shiva, with a towering '
      + 'nine-story gopuram visible from across the Hampi ruins, at the heart '
      + 'of what was once the Vijayanagara Empire\'s ceremonial center.',
    historicalSignificance: 'Parts of the temple predate the Vijayanagara '
      + 'Empire itself, though most of the current structure was built or '
      + 'expanded between the 14th and 16th centuries.',
    bestTimeToVisit: 'October to February',
    timings: '6:00 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/v6VKJPDQKYvqaKhY9',
    latitude: 15.3350,
    longitude: 76.4600,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqe4BeDXCE9U10J_U77cySg6nWi8je803WFRYKqcMKg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: hampi.id,
    categoryId: heritage,
    name: 'Vittala Temple',
    description: 'A temple complex famous for its ornate stone chariot and a '
      + 'hall of musical pillars that are said to produce different musical '
      + 'notes when tapped.',
    historicalSignificance: 'Built primarily in the 16th century under King '
      + 'Krishnadevaraya, one of the Vijayanagara Empire\'s most celebrated rulers.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: '8:30 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/8xXmT1UL6teMKDzF9',
    latitude: 15.3406,
    longitude: 76.4744,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSruwYLnNuJcmoGGbShDkOplvfIcCUvIoC2-gqxXjrF6Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: hampi.id,
    categoryId: heritage,
    name: 'Lotus Mahal',
    description: 'A symmetrical two-story pavilion combining Hindu and '
      + 'Islamic architectural elements, with lotus-bud-shaped arches, believed '
      + 'to have been used by the royal women of the Vijayanagara court.',
    historicalSignificance: 'Built in the 15th or 16th century within what was '
      + 'the Zenana Enclosure of the Vijayanagara royal complex.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Included in the Hampi monuments group ticket',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/k2zDPFMcVD4oXT1A8',
    latitude: 15.3327,
    longitude: 76.4675,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcquGBOglpp_1JF7NplNec45O1Uyrk93n1KvXo1_X1w&s=10'}]
  });

  // ---------------- Coorg (Kodagu) ----------------
  const coorg = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Coorg',
    description: 'A hill district in the Western Ghats, also known as Kodagu, '
      + 'covered in coffee plantations and known for its distinct culture and '
      + 'cool, misty climate.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: coorg.id,
    categoryId: nature,
    name: 'Abbey Falls',
    description: 'A waterfall dropping through a private coffee and spice '
      + 'plantation, reached by a short walk down a wooded path and viewed '
      + 'from a hanging bridge facing the falls.',
    bestTimeToVisit: 'June to September, fullest during monsoon',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/3xQxG5Nk51VLMBnu9',
    latitude: 12.4342,
    longitude: 75.7139,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiNVfqDH2yZalu00FQC9KAiuiY3UD4d1Gze-Rwz96BTA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: coorg.id,
    categoryId: adventure,
    name: 'Tadiandamol Peak',
    description: 'The highest peak in Coorg, reached by a trekking trail '
      + 'through shola forest and grassland, popular for its summit views over '
      + 'the surrounding Western Ghats.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/kWcquuKGp9fQsRGP9',
    latitude: 12.3667,
    longitude: 75.8833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtArqc5QJMIEE6jSNk00LJROxuQFAKZhCpHcxzTN_aZA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: coorg.id,
    categoryId: religious,
    name: 'Namdroling Monastery (Golden Temple)',
    description: 'A large Tibetan Buddhist monastery near Bylakuppe, home to '
      + 'a Tibetan refugee settlement, with a temple hall housing three tall '
      + 'gilded Buddha statues.',
    historicalSignificance: 'Founded in 1963 following the resettlement of '
      + 'Tibetan refugees in the Bylakuppe area after 1959.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/JUUL8PfuQqu5egR2A',
    latitude: 12.3833,
    longitude: 75.9333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdzz6zL_ZmbWFUkeY0-aXbhkCR00QQbYkHu9VbS8SD7A&s=10'}]
  });

  // ---------------- Gokarna ----------------
  const gokarna = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Gokarna',
    description: 'A temple town on Karnataka\'s coast, historically a Hindu '
      + 'pilgrimage site, now also known for a string of quieter beaches south '
      + 'of town popular with backpackers.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: gokarna.id,
    categoryId: religious,
    name: 'Mahabaleshwar Temple, Gokarna',
    description: 'An old Shiva temple at the center of Gokarna town, believed '
      + 'to house one of Hinduism\'s most sacred lingams, and a major pilgrimage '
      + 'stop along the western coast.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 1:00 PM and 4:00 PM – 8:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/1hZHecHUeQB2ygYb7',
    latitude: 14.5479,
    longitude: 74.3188,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiy9Tedmb7GlRZnM0ei5qCCB-dfUSeJbdco9_PzrVQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: gokarna.id,
    categoryId: nature,
    name: 'Om Beach',
    description: 'A beach shaped in two curving arcs that together resemble '
      + 'the Sanskrit "Om" symbol, reachable by a short trek or boat ride from '
      + 'Gokarna\'s main beach.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/ydAksZorxrZx7Qn78',
    latitude: 14.4900,
    longitude: 74.3175,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYs5PhcFMwBhSoaAOKWfL63kZyvZoHOpF_vzh-EjMJ7g&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: gokarna.id,
    categoryId: nature,
    name: 'Kudle Beach',
    description: 'A long, relatively undeveloped crescent beach just south of '
      + 'Gokarna town, backed by low cliffs and a scattering of beach shacks.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/aNhyXt2xcpg4YYiBA',
    latitude: 14.5219,
    longitude: 74.3117,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMsL2f_mMbLEOBXVXcHOUIN-QBrhW4aemyiU0r2YsPg&s'}]
  });

  // ---------------- Badami ----------------
  const badami = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Badami',
    description: 'A town set among red sandstone cliffs, capital of the early '
      + 'Chalukya dynasty, known for cave temples cut directly into the rock '
      + 'face above an artificial lake.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: badami.id,
    categoryId: heritage,
    name: 'Badami Cave Temples',
    description: 'Four temples carved into a sandstone cliff face, dedicated '
      + 'to Vishnu, Shiva, and Jain tirthankaras, connected by rock-cut steps '
      + 'overlooking Agastya Lake below.',
    historicalSignificance: 'Carved between the 6th and 7th centuries under '
      + 'the early Chalukya dynasty, among the earliest known examples of '
      + 'structured rock-cut architecture in the Deccan.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '9:00 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/t51EpFXH5kAksz7F9',
    latitude: 15.9186,
    longitude: 75.6767,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzNMvEfqs73RLoKsCPlhDcMxl80fKFLlcoPeXiwdW1CA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: badami.id,
    categoryId: heritage,
    name: 'Badami Fort',
    description: 'Fortifications built along the cliffs above the cave '
      + 'temples, combining Chalukyan and later Adil Shahi additions, with '
      + 'watchtowers offering views over the town and lake.',
    historicalSignificance: 'Originally built under the Chalukyas, later '
      + 'expanded during the Bijapur Sultanate period.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/Mym3nMcx6KQDNPvu5',
    latitude: 15.9219,
    longitude: 75.6800,
    images: [{url:'https://s7ap1.scene7.com/is/image/incredibleindia/badami-fort-badami-karnataka-2-attr-hero?qlt=82&ts=1726815968511'}]
  });

  // ---------------- Chikmagalur ----------------
  const chikmagalur = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Chikmagalur',
    description: 'A district in the Western Ghats credited as the place where '
      + 'coffee cultivation began in India, now covered in coffee estates and '
      + 'forested hills.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: chikmagalur.id,
    categoryId: adventure,
    name: 'Mullayanagiri Peak',
    description: 'The highest peak in Karnataka, reached by a drivable road '
      + 'followed by a short trek to the summit, with views across the '
      + 'surrounding coffee-covered hills.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/zkkAxcaLb9dPaGEK9',
    latitude: 13.3833,
    longitude: 75.7167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBf7tgBp0GdmDZ-EY3qwy7vdGBB_u4igErqgCQQYDREA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: chikmagalur.id,
    categoryId: nature,
    name: 'Baba Budangiri Hills',
    description: 'A hill range traditionally credited as the site where coffee '
      + 'cultivation was first introduced to India, also home to a cave shrine '
      + 'venerated by both Hindus and Muslims.',
    historicalSignificance: 'Local tradition holds that a Sufi saint, Baba '
      + 'Budan, brought coffee beans here from Yemen in the 17th century.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/6qktixtqgFBwwaLu5',
    latitude: 13.4167,
    longitude: 75.7667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34mVZEtJUM56YoexdHxRppD4K-9vvkIpkRIyuISicAA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: chikmagalur.id,
    categoryId: nature,
    name: 'Hebbe Falls',
    description: 'A two-tiered waterfall deep within a coffee estate, reached '
      + 'by jeep and a forest trail, set in dense evergreen forest.',
    bestTimeToVisit: 'June to September, fullest during monsoon',
    mapLink: 'https://maps.app.goo.gl/1up7q8JUD3hazz156',
    latitude: 13.4667,
    longitude: 75.7333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAKtb3Dnf6fbW_UzyVxtBKyA2xFhd9ZoAVEqm-ZejJw&s=10'}]
  });

  // ---------------- Belur & Halebidu ----------------
  const belur = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Belur',
    description: 'A small town that once served as an early capital of the '
      + 'Hoysala Empire, known for a temple covered in some of the most '
      + 'intricate stone carving in Indian temple architecture.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: belur.id,
    categoryId: religious,
    name: 'Chennakesava Temple, Belur',
    description: 'A Vishnu temple with walls covered in dense, detailed stone '
      + 'friezes depicting mythological scenes, dancers, and animals, still '
      + 'used for active worship today.',
    historicalSignificance: 'Commissioned around 1117 CE by Hoysala king '
      + 'Vishnuvardhana, reportedly to commemorate a military victory.',
    bestTimeToVisit: 'October to February',
    timings: '7:30 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/L6sDVhfveqAoaUjSA',
    latitude: 13.1628,
    longitude: 75.8648,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvPQJ9EljUsCNPo696I8nCDPa5tS97YVnXwIygfTqqiw&s=10'}]
  });

  const halebidu = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Halebidu',
    description: 'The former Hoysala capital of Dwarasamudra, now a village '
      + 'centered on temple ruins left after repeated invasions in the 14th century.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: halebidu.id,
    categoryId: heritage,
    name: 'Hoysaleswara Temple',
    description: 'A twin-shrined Shiva temple covered edge to edge in stone '
      + 'carvings of extraordinary detail, considered by many historians the '
      + 'finest surviving example of Hoysala architecture, though never fully '
      + 'completed.',
    historicalSignificance: 'Construction began around 1121 CE under the '
      + 'Hoysala Empire and continued for roughly 80 years without ever being '
      + 'finished; the capital was later sacked by invading forces in the 1310s.',
    bestTimeToVisit: 'October to February',
    timings: '6:30 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/scRbq9fbxE3kgFPx6',
    latitude: 13.2131,
    longitude: 75.9942,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOLexNIvV-iXy8sk9in5gKe69fT_FGRj4BpipBAEwgDQ&s=10'}]
  });

  // ---------------- Jog Falls ----------------
  const jogFalls = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Jog Falls',
    description: 'A settlement built around one of India\'s tallest waterfalls, '
      + 'where the Sharavathi River drops in an unbroken plunge from the '
      + 'Western Ghats plateau.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: jogFalls.id,
    categoryId: nature,
    name: 'Jog Falls',
    description: 'A waterfall where the Sharavathi River falls roughly 253 '
      + 'meters in four separate segments known locally as Raja, Rani, Rocket, '
      + 'and Roarer, among the tallest untiered waterfalls in India.',
    bestTimeToVisit: 'August to November, fullest just after monsoon',
    entryFee: 'Paid entry',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/c5pFgyBbpP9Nz27MA',
    latitude: 14.2296,
    longitude: 74.8122,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtyloODxKrKQNW_8hnCfiTWX1SE_Q2VbwRfDmthiH-GA&s=10'}]
  });

  // ---------------- Udupi ----------------
  const udupi = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Udupi',
    description: 'A temple town on Karnataka\'s coast, seat of an influential '
      + 'Vaishnavite monastic tradition and widely credited as the birthplace '
      + 'of South India\'s vegetarian "Udupi cuisine."'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: udupi.id,
    categoryId: religious,
    name: 'Sri Krishna Matha',
    description: 'A Krishna temple known for its unusual worship practice — '
      + 'the deity is viewed only through a carved silver window called the '
      + 'Kanakana Kindi, rather than a conventional sanctum entrance.',
    historicalSignificance: 'Founded in the 13th century by the philosopher '
      + 'Madhvacharya, founder of the Dvaita school of Vedanta philosophy.',
    bestTimeToVisit: 'October to March',
    timings: '5:30 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/PtT5tDS78XuQLX3X7',
    latitude: 13.3409,
    longitude: 74.7421,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_Vdskva2oVzVND6QO76r0vbBVvJ2ft-q5qtfYDSMAA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: udupi.id,
    categoryId: nature,
    name: 'Malpe Beach',
    description: 'A beach and small fishing harbor near Udupi, also the '
      + 'departure point for boats to St. Mary\'s Island, known for its unusual '
      + 'hexagonal basalt rock formations.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/yUdvEkQxLJ3VXTLH8',
    latitude: 13.3494,
    longitude: 74.7057,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQako7KmOg_LYvnnD6u15mIh5UrRzvHwFGZmLnzaV_hwA&s=10'}]
  });

  // ---------------- Vijayapura (Bijapur) ----------------
  const vijayapura = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Vijayapura',
    description: 'A city known historically as Bijapur, once capital of the '
      + 'Adil Shahi sultanate, whose skyline is still dominated by 16th- and '
      + '17th-century Islamic monuments.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: vijayapura.id,
    categoryId: heritage,
    name: 'Gol Gumbaz',
    description: 'The mausoleum of Adil Shahi sultan Mohammed Adil Shah, '
      + 'topped by one of the largest masonry domes in the world, with a '
      + 'whispering gallery inside where even a faint sound carries clearly '
      + 'across the chamber.',
    historicalSignificance: 'Completed around 1656, the dome remains one of '
      + 'the largest pre-modern domes ever constructed, second in size only to '
      + 'Rome\'s Pantheon among historic structures.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/45Nnm29fH661rzw96',
    latitude: 16.8302,
    longitude: 75.7154,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1cF7z58j7Fx7gkswcjZeZ26ya4q1mps4NYrXyANZpw&s=10'}]
  });

  // ---------------- Nandi Hills ----------------
  const nandiHills = await findOrCreateCity({
    stateId: karnataka.id,
    name: 'Nandi Hills',
    description: 'A hill fortress town a short drive from Bengaluru, popular '
      + 'as an early-morning sunrise viewpoint and weekend retreat from the city.'
  });

  await findOrCreatePlace({
    stateId: karnataka.id,
    cityId: nandiHills.id,
    categoryId: nature,
    name: 'Nandi Hills Fort',
    description: 'A hilltop fortification with sweeping views over the '
      + 'surrounding plains, popular at dawn when the valley below is often '
      + 'blanketed in cloud.',
    historicalSignificance: 'Fortified under Tipu Sultan in the 18th century, '
      + 'who also reportedly used a nearby summer retreat here.',
    bestTimeToVisit: 'October to February, at sunrise',
    entryFee: 'Paid entry',
    timings: '6:00 AM – 10:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/iiEeUGz5xPaMitk5A',
    latitude: 13.3702,
    longitude: 77.6835,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx13KYwzon-Y1MDn_JeVy42gicz_aSR450yjto0ZpUww&s=10'}]
  });

  return karnataka;
};