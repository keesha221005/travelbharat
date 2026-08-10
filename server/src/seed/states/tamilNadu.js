module.exports = async function seedTamilNadu({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const tamilNadu = await findOrCreateState({
    name: 'Tamil Nadu',
    region: 'South',
    description: 'A state on India\'s southeastern coast known for its Dravidian '
      + 'temple architecture, classical Bharatanatyam dance tradition, and long '
      + 'Tamil-language literary history.'
  });

  // ---------------- Chennai ----------------
  const chennai = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Chennai',
    description: 'Tamil Nadu\'s capital and a major port city on the Bay of '
      + 'Bengal, blending colonial-era British architecture with centuries-old '
      + 'Dravidian temples.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: chennai.id,
    categoryId: nature,
    name: 'Marina Beach',
    description: 'One of the longest urban beaches in the world, stretching for '
      + 'several kilometers along Chennai\'s coastline, popular for evening walks '
      + 'and lined with monuments and memorials.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 13.0500,
    longitude: 80.2824,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: chennai.id,
    categoryId: religious,
    name: 'Kapaleeshwarar Temple',
    description: 'A Dravidian-style Shiva temple in the Mylapore neighborhood, '
      + 'with a tall, brightly painted gopuram tower and a large temple tank, '
      + 'built in its current form during the Vijayanagara and later periods.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 12:00 PM and 4:00 PM – 9:30 PM, daily',
    mapLink: '',
    latitude: 13.0338,
    longitude: 80.2697,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: chennai.id,
    categoryId: heritage,
    name: 'Fort St. George',
    description: 'The first English fortress in India, now housing Tamil Nadu\'s '
      + 'legislative assembly and a museum of colonial-era artifacts, weapons, '
      + 'and paintings.',
    historicalSignificance: 'Built by the British East India Company starting in '
      + '1644, it became the nucleus around which the city of Madras (now '
      + 'Chennai) grew.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Museum entry: ₹15 for Indian nationals, ₹200 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, closed Fridays',
    mapLink: '',
    latitude: 13.0797,
    longitude: 80.2870,
    images: []
  });

  // ---------------- Madurai ----------------
  const madurai = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Madurai',
    description: 'One of Tamil Nadu\'s oldest continuously inhabited cities, '
      + 'built around the Meenakshi Amman Temple and long regarded as a center '
      + 'of Tamil culture and learning.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: madurai.id,
    categoryId: religious,
    name: 'Meenakshi Amman Temple',
    description: 'A vast Dravidian temple complex dedicated to the goddess '
      + 'Meenakshi and Shiva, famous for its fourteen towering, intricately '
      + 'sculpted gopurams covered in thousands of painted figures.',
    historicalSignificance: 'The temple\'s current structure was largely built '
      + 'during the 16th and 17th centuries under the Nayak dynasty, though the '
      + 'site\'s religious significance dates back much earlier.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 12:30 PM and 4:00 PM – 9:30 PM, daily',
    mapLink: '',
    latitude: 9.9195,
    longitude: 78.1193,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: madurai.id,
    categoryId: heritage,
    name: 'Thirumalai Nayakkar Mahal',
    description: 'A 17th-century palace built in a fusion of Dravidian and '
      + 'Islamic architectural styles, known for its massive stone pillars and '
      + 'stuccoed domed ceilings.',
    historicalSignificance: 'Built in 1636 by King Thirumalai Nayak, though only '
      + 'a portion of the original complex survives today.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹10 for Indian nationals, ₹100 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: '',
    latitude: 9.9186,
    longitude: 78.1230,
    images: []
  });

  // ---------------- Ooty ----------------
  const ooty = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Ooty',
    description: 'A hill station in the Nilgiri Hills, developed as a summer '
      + 'retreat by the British in the 19th century and still known for its '
      + 'cool climate, tea estates, and colonial-era bungalows.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: ooty.id,
    categoryId: nature,
    name: 'Ooty Lake',
    description: 'An artificial lake at the center of town, created in the '
      + 'early 19th century by damming a mountain stream, now used for boating '
      + 'and bordered by eucalyptus groves.',
    historicalSignificance: 'Created around 1824 under John Sullivan, a British '
      + 'official credited with founding Ooty as a hill station.',
    bestTimeToVisit: 'October to June',
    timings: '9:00 AM – 6:00 PM, daily',
    mapLink: '',
    latitude: 11.4102,
    longitude: 76.6950,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: ooty.id,
    categoryId: nature,
    name: 'Government Botanical Garden, Ooty',
    description: 'A terraced botanical garden laid out on a hillside, home to '
      + 'a wide variety of temperate and subtropical plant species, along with '
      + 'a fossilized tree trunk estimated to be millions of years old.',
    historicalSignificance: 'Established in 1848 during the British colonial period.',
    bestTimeToVisit: 'October to June',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 6:30 PM, daily',
    mapLink: '',
    latitude: 11.4135,
    longitude: 76.7130,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: ooty.id,
    categoryId: adventure,
    name: 'Nilgiri Mountain Railway',
    description: 'A narrow-gauge mountain railway climbing through more than a '
      + 'dozen tunnels and hundreds of bridges and curves between the plains and '
      + 'Ooty, using vintage steam locomotives on its steepest sections.',
    historicalSignificance: 'Completed in 1908 by British engineers and later '
      + 'designated a UNESCO World Heritage Site as part of the Mountain '
      + 'Railways of India.',
    bestTimeToVisit: 'October to June',
    mapLink: '',
    latitude: 11.4147,
    longitude: 76.7112,
    images: []
  });

  // ---------------- Coimbatore ----------------
  const coimbatore = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Coimbatore',
    description: 'A major industrial city at the foot of the Western Ghats, '
      + 'often called the "Manchester of South India" for its textile industry, '
      + 'and a gateway to the Nilgiri hills.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: coimbatore.id,
    categoryId: religious,
    name: 'Marudamalai Temple',
    description: 'A hilltop temple dedicated to Murugan, reached by a winding '
      + 'road or a flight of steps, offering wide views over Coimbatore and the '
      + 'surrounding hills.',
    bestTimeToVisit: 'October to March',
    timings: '5:30 AM – 8:30 PM, daily',
    mapLink: '',
    latitude: 11.0654,
    longitude: 76.8779,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: coimbatore.id,
    categoryId: religious,
    name: 'Adiyogi Shiva Statue, Isha Yoga Center',
    description: 'A large bust sculpture of Shiva depicted as Adiyogi ("the '
      + 'first yogi"), set at the Isha Yoga Center in the foothills of the '
      + 'Velliangiri mountains.',
    historicalSignificance: 'Unveiled in 2017, it was recognized by Guinness '
      + 'World Records as the largest bust sculpture in the world at the time.',
    bestTimeToVisit: 'October to March',
    timings: '9:00 AM – 8:00 PM, daily',
    mapLink: '',
    latitude: 11.0345,
    longitude: 76.7460,
    images: []
  });

  // ---------------- Kanyakumari ----------------
  const kanyakumari = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Kanyakumari',
    description: 'A town at the southernmost tip of the Indian mainland, where '
      + 'the Arabian Sea, Bay of Bengal, and Indian Ocean are traditionally said '
      + 'to meet.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: kanyakumari.id,
    categoryId: heritage,
    name: 'Vivekananda Rock Memorial',
    description: 'A memorial built on a rocky islet just off the coast, marking '
      + 'the spot where the monk Swami Vivekananda is said to have meditated in '
      + '1892, reached today by a short ferry ride.',
    historicalSignificance: 'Completed in 1970, decades after Vivekananda\'s '
      + 'visit, following a public fundraising campaign across India.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Ferry ticket required',
    timings: '8:00 AM – 4:00 PM, daily (ferry timings)',
    mapLink: '',
    latitude: 8.0778,
    longitude: 77.5385,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: kanyakumari.id,
    categoryId: heritage,
    name: 'Thiruvalluvar Statue',
    description: 'A tall stone statue on a small island near Vivekananda Rock, '
      + 'depicting the Tamil poet-philosopher Thiruvalluvar, author of the '
      + 'Tirukkural.',
    historicalSignificance: 'Completed in 2000, standing 133 feet tall to '
      + 'represent the 133 chapters of the Tirukkural.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Ferry ticket required',
    mapLink: '',
    latitude: 8.0765,
    longitude: 77.5395,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: kanyakumari.id,
    categoryId: religious,
    name: 'Kumari Amman Temple',
    description: 'A temple dedicated to the virgin goddess Kanyakumari (a form '
      + 'of Parvati), standing near the shore at the confluence of the three '
      + 'seas and giving the town its name.',
    bestTimeToVisit: 'October to March',
    timings: '4:30 AM – 12:00 PM and 4:00 PM – 8:15 PM, daily',
    mapLink: '',
    latitude: 8.0790,
    longitude: 77.5406,
    images: []
  });

  // ---------------- Rameswaram ----------------
  const rameswaram = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Rameswaram',
    description: 'An island town connected to the mainland by the Pamban '
      + 'Bridge, one of the holiest pilgrimage sites in Hinduism and the '
      + 'closest Indian point to Sri Lanka.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: rameswaram.id,
    categoryId: religious,
    name: 'Ramanathaswamy Temple',
    description: 'A major Shiva temple famous for having the longest corridor '
      + 'of any temple in India, lined with hundreds of intricately carved '
      + 'stone pillars, and one of the twelve Jyotirlinga shrines.',
    historicalSignificance: 'Much of the present structure was built between '
      + 'the 12th and 17th centuries by successive Pandya, Chola, and Nayak rulers.',
    bestTimeToVisit: 'October to March',
    timings: '5:00 AM – 1:00 PM and 3:00 PM – 9:00 PM, daily',
    mapLink: '',
    latitude: 9.2876,
    longitude: 79.3129,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: rameswaram.id,
    categoryId: heritage,
    name: 'Pamban Bridge',
    description: 'A cantilever bridge connecting Rameswaram island to mainland '
      + 'India across the Palk Strait, with a double-leaf section that once lifted '
      + 'to let ships pass beneath.',
    historicalSignificance: 'Opened in 1914 as India\'s first sea bridge, it was '
      + 'India\'s longest sea bridge until the 2010 Bandra-Worli Sea Link.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 9.2750,
    longitude: 79.2039,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: rameswaram.id,
    categoryId: heritage,
    name: 'Dhanushkodi',
    description: 'A former town at the easternmost tip of Rameswaram island, '
      + 'left in ruins after a 1964 cyclone and now a stretch of abandoned '
      + 'buildings between the sea and a narrow sandy spit toward Sri Lanka.',
    historicalSignificance: 'Destroyed by a cyclone and tidal wave in December '
      + '1964 that killed hundreds of residents and a passenger train; the town '
      + 'was never rebuilt.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 9.1548,
    longitude: 79.4172,
    images: []
  });

  // ---------------- Thanjavur ----------------
  const thanjavur = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Thanjavur',
    description: 'A former Chola dynasty capital, known for its monumental '
      + 'temple architecture and centuries-old traditions of Carnatic music, '
      + 'bronze casting, and classical painting.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: thanjavur.id,
    categoryId: religious,
    name: 'Brihadeeswarar Temple',
    description: 'A monumental granite Shiva temple with a 13-story tower '
      + 'rising over 60 meters, capped by a single carved granite block '
      + 'weighing an estimated 80 tonnes.',
    historicalSignificance: 'Built by the Chola king Raja Raja I and completed '
      + 'around 1010 CE, it is a UNESCO World Heritage Site as one of the '
      + '"Great Living Chola Temples."',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 8:30 PM, daily',
    mapLink: '',
    latitude: 10.7828,
    longitude: 79.1318,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: thanjavur.id,
    categoryId: heritage,
    name: 'Thanjavur Maratha Palace',
    description: 'A palace complex combining Dravidian, Nayak, and Maratha '
      + 'architectural styles, including a tall observation tower and an art '
      + 'gallery of Chola-era bronzes and stone sculpture.',
    historicalSignificance: 'Built up over the Nayak (16th century) and later '
      + 'Maratha (17th–19th century) rulers of Thanjavur.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:30 PM, daily',
    mapLink: '',
    latitude: 10.7867,
    longitude: 79.1367,
    images: []
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: thanjavur.id,
    categoryId: heritage,
    name: 'Saraswathi Mahal Library',
    description: 'A historic library within the Thanjavur palace complex '
      + 'holding thousands of rare manuscripts, including many on palm leaf, '
      + 'covering subjects from medicine to classical Tamil literature.',
    historicalSignificance: 'Its collection grew under successive Nayak and '
      + 'Maratha rulers of Thanjavur from the 16th century onward.',
    bestTimeToVisit: 'October to March',
    timings: '10:00 AM – 5:30 PM, closed Wednesdays',
    mapLink: '',
    latitude: 10.7865,
    longitude: 79.1370,
    images: []
  });

  // ---------------- Mahabalipuram ----------------
  const mahabalipuram = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Mahabalipuram',
    description: 'A coastal town south of Chennai, once a major port of the '
      + 'Pallava dynasty, known for its rock-cut temples and monuments carved '
      + 'directly from granite outcrops along the shore.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: mahabalipuram.id,
    categoryId: heritage,
    name: 'Shore Temple',
    description: 'A granite temple complex standing directly on the shoreline, '
      + 'weathered by centuries of sea spray, and among the earliest structural '
      + '(rather than rock-cut) stone temples in South India.',
    historicalSignificance: 'Built around 700 CE under the Pallava dynasty, it '
      + 'is a UNESCO World Heritage Site as part of the Group of Monuments at '
      + 'Mahabalipuram.',
    bestTimeToVisit: 'November to February',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/mLnuGxyzFFMg4PpB9',
    latitude: 12.6169,
    longitude: 80.1955,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb9OexQ8Grnt_GmOItyZ-1rQ7Nu8YAwN_H0Rfr__Avxg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: mahabalipuram.id,
    categoryId: heritage,
    name: 'Pancha Rathas',
    description: 'Five monolithic shrines, each carved from a single block of '
      + 'granite in the shape of a temple chariot (ratha), representing '
      + 'different styles of early Dravidian temple architecture side by side.',
    historicalSignificance: 'Carved in the 7th century under Pallava king '
      + 'Narasimhavarman I, though never fully finished or consecrated.',
    bestTimeToVisit: 'November to February',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/6zTTFAUBUKoZGeKJ9',
    latitude: 12.6163,
    longitude: 80.1934,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sn4gBEPWeYsArNgrtSVVtiWTD3rU7u1C86bn3nVJWg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: mahabalipuram.id,
    categoryId: heritage,
    name: "Arjuna's Penance",
    description: 'A massive open-air relief carved into two adjoining boulders, '
      + 'depicting gods, animals, and sages in a scene most commonly identified '
      + 'with a story from the Mahabharata.',
    historicalSignificance: 'Carved in the mid-7th century under the Pallava '
      + 'dynasty, it is regarded as one of the largest rock reliefs in the world.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/znvGR3vc8yJWnsd29',
    latitude: 12.6175,
    longitude: 80.1942,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQGgHFUavAHpwkybuZzheZ9uguKAEz2YMULiKQwKndg&s=10'}]
  });

  // ---------------- Kodaikanal ----------------
  const kodaikanal = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Kodaikanal',
    description: 'A hill station in the upper Palani Hills, developed in the '
      + '19th century as a retreat from the heat of the plains, known for its '
      + 'star-shaped lake and pine-forested slopes.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: kodaikanal.id,
    categoryId: nature,
    name: 'Kodaikanal Lake',
    description: 'An artificial, star-shaped lake at the center of town, '
      + 'created by damming a mountain stream and now the focal point for '
      + 'boating and walking paths around its shore.',
    historicalSignificance: 'Created in 1863 under Sir Vere Henry Levinge, '
      + 'a British collector, as part of the town\'s founding as a hill station.',
    bestTimeToVisit: 'October to June',
    timings: '7:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/jW8tm73wiJjLiFPp9',
    latitude: 10.2381,
    longitude: 77.4892,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6y-p0kRQqlv4DlId6GOztgIy2hAy7OO0miTOM7uCbog&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: kodaikanal.id,
    categoryId: nature,
    name: "Coaker's Walk",
    description: 'A narrow paved pathway along a steep ridge, offering views '
      + 'over the southern plains and, on clear days, as far as Madurai in the '
      + 'distance.',
    historicalSignificance: 'Laid out in 1872 by Lt. Coaker, after whom it is named.',
    bestTimeToVisit: 'October to June, early morning for the clearest views',
    mapLink: 'https://maps.app.goo.gl/dcgo2vgPW8Ui9FpG8',
    latitude: 10.2402,
    longitude: 77.4931,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOsvnSFHIfyyxdXWm7sNvonSdXdO_IJFIIk2nebNcIg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: kodaikanal.id,
    categoryId: nature,
    name: 'Pillar Rocks',
    description: 'Three vertical granite rock formations rising abruptly from '
      + 'the surrounding hillside, often shrouded in mist, a short drive from '
      + 'the town center.',
    bestTimeToVisit: 'October to June',
    mapLink: 'https://maps.app.goo.gl/iwSpZ5pBfW3Sh7919',
    latitude: 10.2167,
    longitude: 77.4500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEPGFnTHAO8SxCwB8OnveU6vJmmGpsFhLibagVN7KSw&s=10'}]
  });

  // ---------------- Tiruchirappalli (Trichy) ----------------
  const tiruchirappalli = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Tiruchirappalli',
    description: 'A city on the banks of the Kaveri River, commonly called '
      + 'Trichy, historically contested between the Cholas, Pandyas, and later '
      + 'the Vijayanagara and Nayak dynasties.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: tiruchirappalli.id,
    categoryId: religious,
    name: 'Rockfort Temple (Ucchi Pillayar Temple)',
    description: 'A temple complex carved into and built atop a massive '
      + 'freestanding rock outcrop rising above the city, reached by a long '
      + 'flight of rock-cut steps.',
    historicalSignificance: 'The rock itself is one of the oldest geological '
      + 'formations in the world; the temple structures date mainly from the '
      + 'Nayak period, around the 17th century.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/UkMgnUJ6EcUEkBZr5',
    latitude: 10.8155,
    longitude: 78.6963,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMiXxldfu6ycxyYO9qlEa5d1-jtxKZH_zYgXxQOJgzLw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: tiruchirappalli.id,
    categoryId: religious,
    name: 'Sri Ranganathaswamy Temple, Srirangam',
    description: 'One of the largest functioning Hindu temple complexes in the '
      + 'world, dedicated to Vishnu, with seven concentric walled enclosures '
      + 'and 21 towering gopurams.',
    historicalSignificance: 'Built up over many centuries by successive Chola, '
      + 'Pandya, and Vijayanagara rulers; it is a UNESCO World Heritage Site as '
      + 'part of the Great Living Chola Temples nomination framework.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 1:00 PM and 3:00 PM – 8:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/8oZoxBEK3Vpe3PyHA',
    latitude: 10.8624,
    longitude: 78.6944,
    images: [{url:'https://upload.wikimedia.org/wikipedia/commons/9/99/Ranganathaswamy_temple_tiruchirappalli.jpg'}]
  });

  // ---------------- Vellore ----------------
  const vellore = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Vellore',
    description: 'A city in northern Tamil Nadu known for its 16th-century '
      + 'fort and, in more recent decades, as a major medical and educational '
      + 'center.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: vellore.id,
    categoryId: heritage,
    name: 'Vellore Fort',
    description: 'A large fort surrounded by a wide moat, built from granite '
      + 'blocks, and now home to a temple, a mosque, and a church within its '
      + 'walls — reflecting the many rulers who held it over the centuries.',
    historicalSignificance: 'Built in the 16th century under Vijayanagara rule, '
      + 'later held by the Nawabs of Arcot, the British East India Company, and '
      + 'the site of the 1806 Vellore Mutiny.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Museum entry: ₹15 for Indian nationals, ₹200 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, closed Fridays',
    mapLink: 'https://maps.app.goo.gl/kTbyVtjqyaXHmZ996',
    latitude: 12.9202,
    longitude: 79.1325,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVdbmz48m4VADbI4rr3-s6ngeceNsWYts8JpbxLDkjaA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: vellore.id,
    categoryId: religious,
    name: 'Sripuram Golden Temple',
    description: 'A modern temple complex whose main shrine is entirely clad '
      + 'in gold-plated copper sheets, set within landscaped grounds a short '
      + 'drive from Vellore town.',
    historicalSignificance: 'Constructed in the 2000s and opened to the public '
      + 'in 2007, built by a charitable trust rather than dating to a historical '
      + 'dynasty.',
    bestTimeToVisit: 'October to March',
    timings: '4:00 AM – 12:00 PM and 2:30 PM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/SoUjgFUKf5EsM2gN6',
    latitude: 12.9077,
    longitude: 79.1477,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThXreDMg_pjNgswnwV3tEckFMbst-5Rx1hXHRqR3B26g&s=10'}]
  });

  // ---------------- Chettinad ----------------
  const chettinad = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Chettinad',
    description: 'A cluster of towns in southern Tamil Nadu built by the '
      + 'Nattukottai Chettiar merchant community, known for enormous mansions '
      + 'decorated with imported Italian marble, Belgian glass, and Burmese teak.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: chettinad.id,
    categoryId: heritage,
    name: 'Chettinad Mansions',
    description: 'A collection of grand early-20th-century merchant houses '
      + 'across towns like Karaikudi and Kanadukathan, built with materials '
      + 'sourced from across Asia and Europe by a wealthy trading community.',
    historicalSignificance: 'Built mainly between 1900 and 1940 by Chettiar '
      + 'merchants who had made fortunes in banking and trade across Southeast Asia.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/CyzrHmdvo6Tx3kFT7',
    latitude: 10.0732,
    longitude: 78.7794,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglP0s3HKl5v_PRHM8kZUZZgaLLOu8gKORYc_TP7CTSA&s=10'}]
  });

  // ---------------- Yercaud ----------------
  const yercaud = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Yercaud',
    description: 'A small hill station in the Shevaroy Hills, quieter and '
      + 'less developed than Ooty or Kodaikanal, known for coffee estates and '
      + 'a central lake.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: yercaud.id,
    categoryId: nature,
    name: 'Yercaud Lake',
    description: 'A small artificial lake at the center of town, surrounded '
      + 'by coffee and orange plantations, used for boating and as the main '
      + 'gathering point in the hill station.',
    bestTimeToVisit: 'October to June',
    mapLink: 'https://maps.app.goo.gl/7SgPvAeCoKQe4UYH6',
    latitude: 11.7753,
    longitude: 78.2088,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEYesUrhYxNXvmzWTYutuIMC4u--xWPjFeidsuIQWOg&s=10'}]
  });

  // ---------------- Hogenakkal ----------------
  const hogenakkal = await findOrCreateCity({
    stateId: tamilNadu.id,
    name: 'Hogenakkal',
    description: 'A small town on the Kaveri River near the Karnataka border, '
      + 'named for the waterfalls that give the area its main draw.'
  });

  await findOrCreatePlace({
    stateId: tamilNadu.id,
    cityId: hogenakkal.id,
    categoryId: nature,
    name: 'Hogenakkal Falls',
    description: 'A set of waterfalls where the Kaveri River splits into '
      + 'multiple channels over rocky terrain, traditionally explored by '
      + 'round coracle boats paddled by local boatmen.',
    bestTimeToVisit: 'August to February, fullest just after monsoon',
    entryFee: 'Coracle ride: paid separately, price varies',
    mapLink: 'https://maps.app.goo.gl/YZfzfhRH3TMDwfGR7',
    latitude: 12.1167,
    longitude: 77.7667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGv9AR8OHNqwxzMbmxbzSP2q1MyI0LGVFCCnopubDY1A&s=10'}]
  });

  return tamilNadu;
};
