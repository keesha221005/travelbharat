module.exports = async function seedKerala({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const kerala = await findOrCreateState({
    name: 'Kerala',
    region: 'South',
    description: 'A narrow coastal state known for its network of backwaters, '
      + 'tea-covered hill stations, and Ayurvedic wellness traditions.'
  });

  // ---------------- Munnar ----------------
  const munnar = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Munnar',
    description: 'A hill station in the Western Ghats, sitting roughly 1,600 metres '
      + 'above sea level and surrounded by terraced tea plantations.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Munnar Tea Gardens',
    description: 'Rolling hillsides carpeted in tea bushes, first planted by British '
      + 'planters in the late 19th century and still actively cultivated today.',
    bestTimeToVisit: 'September to March',
    timings: 'Estate visits typically 9:00 AM – 5:00 PM',
    latitude: 10.0889,
    longitude: 77.0595
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Eravikulam National Park',
    description: 'A high-altitude park in the Western Ghats protecting rolling '
      + 'grasslands and shola forest, and the main stronghold of the endangered '
      + 'Nilgiri tahr, a mountain goat found only in this range.',
    bestTimeToVisit: 'September to March',
    entryFee: '₹125 for Indian nationals, ₹450 for foreign nationals (approximate)',
    timings: '7:30 AM – 4:00 PM, closed in peak monsoon',
    mapLink: '',
    latitude: 10.1631,
    longitude: 77.0518,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Mattupetty Dam',
    description: 'A concrete gravity dam set in a valley of tea plantations, '
      + 'originally built to conserve water for hydroelectric power, with boating '
      + 'available on the reservoir it created.',
    bestTimeToVisit: 'September to March',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: '',
    latitude: 10.1002,
    longitude: 77.1263,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Top Station',
    description: 'A former transshipment point once used to move tea across the '
      + 'Kerala–Tamil Nadu border by ropeway, now visited chiefly as a viewpoint '
      + 'over the Western Ghats\' rolling hills.',
    bestTimeToVisit: 'September to March, mornings for clearer views',
    mapLink: '',
    latitude: 10.1147,
    longitude: 77.2081,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: heritage,
    name: 'Kannan Devan Hills Plantations Tea Museum',
    description: 'A small museum run by the region\'s main tea company, tracing '
      + 'the history of tea cultivation in the Kannan Devan hills from the 1870s '
      + 'onward, with vintage processing machinery on display.',
    bestTimeToVisit: 'September to March',
    entryFee: 'Paid entry, varies by ticket type',
    timings: '9:00 AM – 4:30 PM, closed some weekdays',
    mapLink: '',
    latitude: 10.0968,
    longitude: 77.0698,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Pampadum Shola National Park',
    description: 'One of India\'s smallest national parks, protecting a patch of '
      + 'high-altitude shola forest and grassland at the edge of the Kannan Devan hills.',
    bestTimeToVisit: 'September to March',
    mapLink: '',
    latitude: 10.1892,
    longitude: 77.2333,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Anayirankal Lake',
    description: 'A reservoir formed by a dam of the same name, ringed by tea '
      + 'estates and forest, with occasional sightings of elephants that give '
      + 'the lake its name ("anayirankal" — where elephants descend).',
    bestTimeToVisit: 'September to March',
    mapLink: '',
    latitude: 10.0308,
    longitude: 77.2222,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: nature,
    name: 'Thommankuthu Waterfalls',
    description: 'A series of seven linked waterfalls set in forest a short '
      + 'trek from the roadside, popular for the natural rock pools that form '
      + 'between each drop.',
    bestTimeToVisit: 'June to September, for the fullest water flow',
    mapLink: '',
    latitude: 9.8833,
    longitude: 76.9667,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: munnar.id,
    categoryId: religious,
    name: 'Mount Carmel Church',
    description: 'A Catholic parish church in central Munnar built during the '
      + 'British colonial tea-planting era, still serving the town\'s plantation '
      + 'community today.',
    bestTimeToVisit: 'Year-round',
    mapLink: '',
    latitude: 10.0889,
    longitude: 77.0595,
    images: []
  });

  // ---------------- Marayoor ----------------
  const marayoor = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Marayoor',
    description: 'A small town in Kerala\'s eastern rain-shadow region, unusually '
      + 'dry for the state, known for its sandalwood forests and prehistoric '
      + 'rock monuments.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: marayoor.id,
    categoryId: nature,
    name: 'Marayoor Sandalwood Forest',
    description: 'One of the few naturally occurring sandalwood forests in India, '
      + 'government-protected and guarded given the high value of the wood, with '
      + 'a visitor trail through part of the reserve.',
    bestTimeToVisit: 'September to March',
    mapLink: '',
    latitude: 10.3667,
    longitude: 77.1333,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: marayoor.id,
    categoryId: heritage,
    name: 'Marayoor Dolmens (Muniyara)',
    description: 'A cluster of prehistoric dolmens — stone burial chambers — '
      + 'scattered across the hills around Marayoor, believed to date back to '
      + 'the Iron Age.',
    bestTimeToVisit: 'September to March',
    mapLink: '',
    latitude: 10.3592,
    longitude: 77.1206,
    images: []
  });

  // ---------------- Alappuzha ----------------
  const alappuzha = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Alappuzha',
    description: 'A town on Kerala\'s coast known as the gateway to the backwaters, '
      + 'a network of interconnected canals, rivers, and lakes.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: alappuzha.id,
    categoryId: nature,
    name: 'Alappuzha Backwaters',
    description: 'A maze of brackish lagoons and canals traditionally navigated by '
      + 'houseboats converted from rice barges, drifting past coconut groves and '
      + 'small waterside villages.',
    bestTimeToVisit: 'November to February',
    latitude: 9.4981,
    longitude: 76.3388
  });

  // ---------------- Kochi ----------------
  const kochi = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Kochi',
    description: 'A major port city on Kerala\'s coast, shaped by centuries of Arab, '
      + 'Portuguese, Dutch, and British trading presence, visible today in its mix '
      + 'of colonial buildings, old harbors, and fishing traditions.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kochi.id,
    categoryId: nature,
    name: 'Fort Kochi Beach',
    description: 'A working beach beside the old European quarter, known as much '
      + 'for the giant cantilevered Chinese fishing nets lining its shore as for '
      + 'the beach itself.',
    bestTimeToVisit: 'November to February',
    timings: 'Open all day',
    latitude: 9.9658,
    longitude: 76.2422,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kochi.id,
    categoryId: heritage,
    name: 'Santa Cruz Basilica',
    description: 'A Roman Catholic basilica in Fort Kochi with a pastel-painted '
      + 'interior and Gothic-style vaulted ceilings, originally built by the '
      + 'Portuguese and later reconstructed under British rule.',
    historicalSignificance: 'First built in 1505, demolished by the British in 1795, '
      + 'and rebuilt in its current form in 1905 — it was elevated to a basilica '
      + 'by Pope John Paul II in 1984.',
    bestTimeToVisit: 'November to February',
    timings: '9:00 AM – 6:00 PM, daily',
    latitude: 9.9654,
    longitude: 76.2426,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kochi.id,
    categoryId: heritage,
    name: 'Bolgatty Island',
    description: 'A small island in Kochi\'s backwaters best known for the Bolgatty '
      + 'Palace, a Dutch-built colonial mansion set in landscaped grounds, now '
      + 'reachable by a short ferry ride from the mainland.',
    historicalSignificance: 'Built by Dutch traders in 1744, later used as the '
      + 'residence of the British Resident of Cochin.',
    bestTimeToVisit: 'November to February',
    latitude: 9.9932,
    longitude: 76.2673,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kochi.id,
    categoryId: nature,
    name: 'Willingdon Island',
    description: 'A largely artificial island created from dredged harbor silt in '
      + 'the early 20th century, now home to Kochi\'s port facilities, naval base, '
      + 'and several waterfront hotels.',
    historicalSignificance: 'Named after Lord Willingdon, a British Governor-General '
      + 'of India, and constructed during harbor development works in the 1920s.',
    latitude: 9.9522,
    longitude: 76.2673,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kochi.id,
    categoryId: nature,
    name: 'Vypin Island',
    description: 'A long, narrow island separating Kochi\'s backwaters from the '
      + 'Arabian Sea, with quiet beaches, coconut groves, and a lighthouse at '
      + 'its northern tip.',
    bestTimeToVisit: 'November to February',
    latitude: 10.0658,
    longitude: 76.2424,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kochi.id,
    categoryId: nature,
    name: 'Mangalavanam Bird Sanctuary',
    description: 'A small mangrove sanctuary tucked into the middle of Kochi\'s '
      + 'commercial district, an unusual patch of protected wetland habitat '
      + 'surrounded entirely by the city.',
    bestTimeToVisit: 'November to February',
    timings: '8:00 AM – 5:00 PM, daily',
    latitude: 9.9847,
    longitude: 76.2833,
    images: []
  });

  // ---------------- Kovalam ----------------
  const kovalam = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Kovalam',
    description: 'A beach town on Kerala\'s southern coast, made up of a series '
      + 'of crescent-shaped beaches separated by rocky headlands.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kovalam.id,
    categoryId: nature,
    name: 'Kovalam Beach',
    description: 'A crescent-shaped beach backed by a low rocky headland and a '
      + 'lighthouse, historically one of the first beach destinations to draw '
      + 'international visitors to Kerala.',
    bestTimeToVisit: 'November to February',
    latitude: 8.3988,
    longitude: 76.9782,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kovalam.id,
    categoryId: nature,
    name: 'Lighthouse Beach',
    description: 'The southernmost of Kovalam\'s connected beaches, named for the '
      + 'red-and-white striped lighthouse on the headland above it, which visitors '
      + 'can climb for a view along the coastline.',
    bestTimeToVisit: 'November to February',
    timings: 'Lighthouse open 1:00 PM – 4:30 PM and 6:00 PM – 7:30 PM',
    latitude: 8.3936,
    longitude: 76.9762,
    images: []
  });

  // ---------------- Thekkady ----------------
  const thekkady = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Thekkady',
    description: 'A hill town in Kerala\'s Idukki district, in the Western Ghats, '
      + 'best known as the gateway to the Periyar Tiger Reserve.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thekkady.id,
    categoryId: adventure,
    name: 'Periyar National Park',
    description: 'A tiger reserve and wildlife sanctuary built around the Periyar '
      + 'lake, explored mainly by guided boat rides and forest treks through '
      + 'evergreen and deciduous hill forest.',
    historicalSignificance: 'Originally declared a reserve in 1934 under the '
      + 'Kingdom of Travancore, and later designated a tiger reserve in 1978 '
      + 'under India\'s Project Tiger program.',
    bestTimeToVisit: 'September to March',
    entryFee: '₹45 for Indian nationals, ₹500 for foreign nationals (boat ride extra)',
    timings: '6:00 AM – 6:00 PM, daily',
    latitude: 9.4633,
    longitude: 77.1568,
    images: []
  });

  // ---------------- Kumarakom ----------------
  const kumarakom = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Kumarakom',
    description: 'A cluster of small islands on Vembanad Lake, Kerala\'s largest '
      + 'backwater lake, known for its bird sanctuary and as a popular starting '
      + 'point for houseboat cruises.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kumarakom.id,
    categoryId: nature,
    name: 'Kumarakom Backwaters',
    description: 'A stretch of Vembanad Lake and its connecting canals, lined '
      + 'with paddy fields and coconut groves, and one of Kerala\'s main '
      + 'houseboat departure points.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 9.6177,
    longitude: 76.4306,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kumarakom.id,
    categoryId: nature,
    name: 'Kumarakom Bird Sanctuary',
    description: 'A wetland sanctuary on the edge of Vembanad Lake, a nesting '
      + 'and roosting site for migratory birds including cormorants, herons, '
      + 'and egrets, especially between November and February.',
    bestTimeToVisit: 'November to February',
    entryFee: '₹40 for Indian nationals, ₹200 for foreign nationals (approximate)',
    timings: '6:00 AM – 5:00 PM, daily',
    mapLink: '',
    latitude: 9.6197,
    longitude: 76.4297,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kumarakom.id,
    categoryId: religious,
    name: "St. Mary's Church, Kumarakom",
    description: 'A parish church serving Kumarakom\'s Christian community, '
      + 'reflecting the strong Syrian Christian presence found throughout this '
      + 'part of Kerala.',
    bestTimeToVisit: 'Year-round',
    mapLink: '',
    latitude: 9.6144,
    longitude: 76.4293,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kumarakom.id,
    categoryId: religious,
    name: 'Kumaramangalam Temple',
    description: 'A local Hindu temple in Kumarakom, one of the older places '
      + 'of worship in the area around the backwaters.',
    bestTimeToVisit: 'Year-round',
    mapLink: '',
    latitude: 9.6089,
    longitude: 76.4278,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kumarakom.id,
    categoryId: heritage,
    name: 'Bay Island Driftwood Museum',
    description: 'A small private museum displaying sculptures carved from '
      + 'driftwood collected along Kerala\'s backwaters and coast, shaped '
      + 'naturally by water before being finished by hand.',
    bestTimeToVisit: 'November to February',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: '',
    latitude: 9.6103,
    longitude: 76.4289,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kumarakom.id,
    categoryId: heritage,
    name: 'Thazhathangady Juma Masjid',
    description: 'One of the older mosques in the Kumarakom–Kottayam area, '
      + 'built in a wooden architectural style shared with Kerala\'s traditional '
      + 'Hindu temples and Syrian Christian churches of the same period.',
    bestTimeToVisit: 'Year-round',
    mapLink: '',
    latitude: 9.5897,
    longitude: 76.5228,
    images: []
  });

  // ---------------- Palakkad ----------------
  const palakkad = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Palakkad',
    description: 'A district town in a gap through the Western Ghats known as '
      + 'the Palakkad Gap, historically a key trade route between Kerala and '
      + 'Tamil Nadu, and now one of Kerala\'s main rice-growing regions.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: palakkad.id,
    categoryId: heritage,
    name: 'Palakkad Fort',
    description: 'A granite fort with a moat, built at a strategic point along '
      + 'the Palakkad Gap trade route between Kerala and Tamil Nadu.',
    historicalSignificance: 'Originally built by Haidar Ali of Mysore in 1766, '
      + 'later captured and modified by British forces during the Anglo-Mysore Wars.',
    bestTimeToVisit: 'October to March',
    timings: '8:00 AM – 6:30 PM, daily',
    mapLink: '',
    latitude: 10.7773,
    longitude: 76.6548,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: palakkad.id,
    categoryId: heritage,
    name: 'Kalpathy Agraharam',
    description: 'A riverside heritage village of traditional Tamil Brahmin '
      + 'agraharam houses built in rows facing a central temple, still home to '
      + 'an annual chariot festival dating back over a century.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 10.7827,
    longitude: 76.6708,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: palakkad.id,
    categoryId: nature,
    name: 'Silent Valley National Park',
    description: 'One of the last remaining stretches of undisturbed tropical '
      + 'evergreen rainforest in India, in the Western Ghats, protected after a '
      + 'major conservation campaign in the 1970s and 80s stopped a planned dam.',
    historicalSignificance: 'A hydroelectric project here was called off in 1983 '
      + 'following sustained protest from India\'s early environmental movement, '
      + 'and the valley was declared a national park in 1984.',
    bestTimeToVisit: 'November to April',
    entryFee: 'Permit required, arranged through the forest department',
    mapLink: '',
    latitude: 11.1401,
    longitude: 76.4463,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: palakkad.id,
    categoryId: heritage,
    name: 'Varikkasseri Mana',
    description: 'A large traditional Nair tharavad (ancestral house) built in '
      + 'classic Kerala wooden architectural style, now occasionally opened for '
      + 'visitors and used as a film location.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 10.7167,
    longitude: 76.6167,
    images: []
  });

  // ---------------- Kollam ----------------
  const kollam = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Kollam',
    description: 'A port town on Kerala\'s coast with a long history as a trading '
      + 'hub for spices, and the southern gateway to the Ashtamudi backwaters.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kollam.id,
    categoryId: nature,
    name: 'Kollam Beach',
    description: 'A palm-lined beach near the town center, quieter than Kerala\'s '
      + 'better-known beach resorts and mainly visited by locals for evening walks.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 8.8932,
    longitude: 76.5924,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kollam.id,
    categoryId: heritage,
    name: 'Thangassery Lighthouse',
    description: 'A working lighthouse on a stretch of coast once controlled by '
      + 'Portuguese and later Dutch traders, with the ruins of an old European '
      + 'fort still scattered nearby.',
    historicalSignificance: 'Built by the British in 1902 on a site with an earlier '
      + 'Portuguese and Dutch colonial presence dating back to the 1600s.',
    bestTimeToVisit: 'November to February',
    timings: 'Lighthouse climb typically 3:00 PM – 5:00 PM',
    mapLink: '',
    latitude: 8.8783,
    longitude: 76.5735,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kollam.id,
    categoryId: nature,
    name: 'Sambranikodi Island',
    description: 'A small, quiet island in Ashtamudi Lake, reachable only by '
      + 'boat, used for short backwater excursions and picnic stops.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 8.9667,
    longitude: 76.6333,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kollam.id,
    categoryId: religious,
    name: 'Jatayuppara Sree Kodanda Rama Temple',
    description: 'A hilltop temple dedicated to Rama, set beside a large rock '
      + 'formation associated in local tradition with Jatayu, the mythical bird '
      + 'from the Ramayana said to have fallen here after battling Ravana.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 8.8167,
    longitude: 76.8167,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kollam.id,
    categoryId: heritage,
    name: 'Neendakara Port',
    description: 'A historic fishing and trading harbor at the point where '
      + 'Ashtamudi Lake meets the Arabian Sea, still active as one of Kerala\'s '
      + 'busier fishing ports.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 8.9401,
    longitude: 76.5541,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: kollam.id,
    categoryId: religious,
    name: 'Sri Mahaganapathi Temple, Kollam',
    description: 'A Hindu temple dedicated to Ganapathi (Ganesha), one of the '
      + 'well-known local temples in Kollam town.',
    bestTimeToVisit: 'Year-round',
    mapLink: '',
    latitude: 8.8932,
    longitude: 76.6141,
    images: []
  });

  // ---------------- Thiruvananthapuram ----------------
  const thiruvananthapuram = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Thiruvananthapuram',
    description: 'Kerala\'s capital city, built across seven hills near the '
      + 'state\'s southern tip, and the former seat of the Travancore royal family.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: religious,
    name: 'Sree Padmanabhaswamy Temple',
    description: 'A Hindu temple dedicated to Vishnu in his reclining form, built '
      + 'in a Dravidian architectural style with an ornate gopuram, and historically '
      + 'the temple of the Travancore royal family.',
    historicalSignificance: 'The current structure dates largely from the 18th '
      + 'century under Travancore rulers, though the temple\'s origins are '
      + 'considerably older.',
    bestTimeToVisit: 'October to March',
    timings: 'Limited hours, restricted entry — non-Hindus and modesty in dress '
      + 'may be required; check current temple guidelines before visiting',
    mapLink: '',
    latitude: 8.4828,
    longitude: 76.9436,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: heritage,
    name: 'Koyikkal Palace',
    description: 'A traditional two-story Kerala-style palace now housing a '
      + 'folklore museum and a numismatics museum, displaying regional coins, '
      + 'costumes, and household artifacts.',
    bestTimeToVisit: 'October to March',
    timings: '10:00 AM – 5:00 PM, closed Mondays',
    mapLink: '',
    latitude: 8.7833,
    longitude: 77.0000,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: heritage,
    name: 'Napier Museum',
    description: 'A 19th-century museum built in an ornate Indo-Saracenic style, '
      + 'holding collections of bronze idols, ivory carvings, and historical '
      + 'ornaments from across South India.',
    historicalSignificance: 'Designed by British engineer Robert Chisholm and '
      + 'completed in 1880, named after a former Madras governor.',
    bestTimeToVisit: 'October to March',
    timings: '10:00 AM – 5:00 PM, closed Mondays',
    mapLink: '',
    latitude: 8.5074,
    longitude: 76.9569,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: heritage,
    name: 'Kanakakkunnu Palace',
    description: 'A former Travancore royal palace set in landscaped grounds, '
      + 'now mainly used as a public events and cultural performance venue.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 8.5090,
    longitude: 76.9578,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: nature,
    name: 'Agasthyavanam Biological Park',
    description: 'A biodiversity park and research area on the edge of the '
      + 'Agasthyamalai hills, combining a zoological section with forested trails '
      + 'through the surrounding reserve.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry, permit required for some areas',
    mapLink: '',
    latitude: 8.4667,
    longitude: 77.1667,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: heritage,
    name: 'Anjengo Fort',
    description: 'The remains of a coastal fort built by the English East India '
      + 'Company, once a fortified trading post on Kerala\'s Malabar Coast.',
    historicalSignificance: 'Built in 1695, it was one of the East India Company\'s '
      + 'earliest fortified settlements in Kerala.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 8.6667,
    longitude: 76.7667,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: nature,
    name: 'Poovar Beach',
    description: 'A stretch of coast where a backwater estuary meets the Arabian '
      + 'Sea, separated by a narrow strip of golden sand, popular for backwater '
      + 'boat rides that run between river, lake, and open sea.',
    bestTimeToVisit: 'November to February',
    mapLink: '',
    latitude: 8.3167,
    longitude: 77.0833,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: nature,
    name: 'Ponmudi',
    description: 'A hill station in the Western Ghats reached by a winding road '
      + 'with dozens of hairpin bends, known for its cool climate, tea and '
      + 'rubber plantations, and forest trekking trails.',
    bestTimeToVisit: 'September to March',
    mapLink: '',
    latitude: 8.7500,
    longitude: 77.1167,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: religious,
    name: 'Sree Udiyanoor Devi Temple',
    description: 'A local Hindu temple dedicated to the goddess, serving the '
      + 'surrounding community in the Thiruvananthapuram area.',
    bestTimeToVisit: 'Year-round',
    mapLink: '',
    latitude: 8.5241,
    longitude: 77.0022,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: heritage,
    name: 'Kilimanoor Palace',
    description: 'A traditional Travancore-era palace complex, notable as the '
      + 'birthplace of the celebrated 19th-century painter Raja Ravi Varma.',
    bestTimeToVisit: 'October to March',
    mapLink: '',
    latitude: 8.7833,
    longitude: 76.8333,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: nature,
    name: 'Kottoor Elephant Rehabilitation Centre',
    description: 'A forest department facility caring for injured, orphaned, or '
      + 'displaced elephants, with river-bathing sessions that visitors can '
      + 'observe from a viewing area.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    mapLink: '',
    latitude: 8.6167,
    longitude: 77.1500,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: heritage,
    name: 'Kerala Legislative Assembly Museum',
    description: 'A museum inside the state legislature complex documenting the '
      + 'history of representative government in Kerala, from the Travancore-era '
      + 'assemblies through to the present-day Niyamasabha.',
    bestTimeToVisit: 'Year-round, on visiting days',
    mapLink: '',
    latitude: 8.5017,
    longitude: 76.9508,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thiruvananthapuram.id,
    categoryId: nature,
    name: 'Peppara Wildlife Sanctuary',
    description: 'A forested sanctuary in the Agasthyamalai hills built around '
      + 'the Peppara reservoir, home to elephants, gaur, and a wide range of '
      + 'birdlife within the Western Ghats\' biosphere reserve.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Permit required, arranged through the forest department',
    mapLink: '',
    latitude: 8.6167,
    longitude: 77.1500,
    images: []
  });

  // ---------------- Thrissur ----------------
  const thrissur = await findOrCreateCity({
    stateId: kerala.id,
    name: 'Thrissur',
    description: 'A temple town regarded as Kerala\'s cultural capital, home to '
      + 'the state\'s largest temple festival and a strong classical arts tradition.'
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thrissur.id,
    categoryId: religious,
    name: 'Vadakkumnathan Temple',
    description: 'An ancient Shiva temple at the top of a hillock in the center '
      + 'of Thrissur, built in traditional Kerala temple architectural style with '
      + 'distinctive stepped roofs, and surrounded by a wide grassy maidan.',
    historicalSignificance: 'Local tradition attributes the temple\'s founding to '
      + 'the sage Parashurama; it is also the ceremonial focal point of Thrissur '
      + 'Pooram, one of Kerala\'s largest annual temple festivals.',
    bestTimeToVisit: 'October to March, or during Thrissur Pooram (April/May)',
    mapLink: '',
    latitude: 10.5276,
    longitude: 76.2144,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thrissur.id,
    categoryId: religious,
    name: 'Guruvayur Sri Krishna Temple',
    description: 'One of Kerala\'s most important Krishna temples, in the temple '
      + 'town of Guruvayur, drawing large numbers of pilgrims year-round for '
      + 'daily rituals and its resident temple elephants.',
    bestTimeToVisit: 'October to March',
    timings: 'Early morning to late evening, with a midday closure; darshan '
      + 'timings vary by season',
    mapLink: '',
    latitude: 10.5943,
    longitude: 76.0413,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thrissur.id,
    categoryId: heritage,
    name: 'Thrissur Zoo and State Museum',
    description: 'One of the oldest zoos in India, sharing its grounds with a '
      + 'natural history museum, an art museum, and a state archaeological '
      + 'museum, all clustered beside the Vadakkumnathan temple maidan.',
    historicalSignificance: 'The zoo was established in 1885 during the reign of '
      + 'the Cochin royal family, making it one of the earliest zoos in the country.',
    bestTimeToVisit: 'October to March',
    timings: '9:00 AM – 5:15 PM, closed Mondays',
    mapLink: '',
    latitude: 10.5222,
    longitude: 76.2144,
    images: []
  });

  await findOrCreatePlace({
    stateId: kerala.id,
    cityId: thrissur.id,
    categoryId: nature,
    name: 'Athirappilly Waterfalls',
    description: 'Kerala\'s largest waterfall, where the Chalakudy River drops '
      + 'roughly 24 meters in a wide curtain over a rocky ledge, set at the edge '
      + 'of the Vazhachal forest reserve.',
    bestTimeToVisit: 'June to January, fullest during and just after monsoon',
    entryFee: 'Paid entry',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: '',
    latitude: 10.2848,
    longitude: 76.5695,
    images: []
  });

  return kerala;
};
