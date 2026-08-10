module.exports = async function seedAndhraPradesh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const andhraPradesh = await findOrCreateState({
    name: 'Andhra Pradesh',
    region: 'South',
    description: 'A coastal state on the Bay of Bengal, home to one of the '
      + 'world\'s most-visited pilgrimage sites at Tirupati and a long '
      + 'shoreline stretching from the Krishna to Godavari river deltas.'
  });

  // ---------------- Visakhapatnam ----------------
  const visakhapatnam = await findOrCreateCity({
    stateId: andhraPradesh.id,
    name: 'Visakhapatnam',
    description: 'A major port city on the Bay of Bengal, often called '
      + '"Vizag," set where the Eastern Ghats meet the coast, with hills, '
      + 'beaches, and a naval base within the city limits.'
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: visakhapatnam.id,
    categoryId: nature,
    name: 'RK Beach (Ramakrishna Beach)',
    description: 'A long promenade beach running along Visakhapatnam\'s '
      + 'shoreline, lined with sculptures, a submarine museum, and popular for '
      + 'evening walks.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/6PY4jstJWgDpmGqS7',
    latitude: 17.7231,
    longitude: 83.3412,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxgS6o7DTU16uIfxrWBT-a4oHUP7jc85ix4hyi7a4efQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: visakhapatnam.id,
    categoryId: heritage,
    name: 'INS Kursura Submarine Museum',
    description: 'A decommissioned Indian Navy submarine beached and converted '
      + 'into a walk-through museum, letting visitors move through its actual '
      + 'torpedo room, control room, and crew quarters.',
    historicalSignificance: 'INS Kursura served in the Indian Navy from 1969 '
      + 'until 2001, when it was decommissioned and later opened as a museum in 2002.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Paid entry',
    timings: '2:30 PM – 8:00 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/et3XDNq1PTmH5oir8',
    latitude: 17.7133,
    longitude: 83.3235,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJp2pzABLo2ka7V7THpRwu3NezVi3MINm8_H17YS3WA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: visakhapatnam.id,
    categoryId: nature,
    name: 'Araku Valley',
    description: 'A hill valley in the Eastern Ghats reached by a scenic '
      + 'train ride through dozens of tunnels, known for coffee plantations '
      + 'and tribal Adivasi culture.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/C2AwGagYfTxaqZ4s9',
    latitude: 18.3273,
    longitude: 82.8776,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDTNt6LPzxBO_bc0n896Hcb-2FqcyQ0ikGf0bwtywhw&s=10'}]
  });

  // ---------------- Tirupati ----------------
  const tirupati = await findOrCreateCity({
    stateId: andhraPradesh.id,
    name: 'Tirupati',
    description: 'A temple town at the base of the Tirumala hills, among the '
      + 'most-visited religious pilgrimage destinations in the world.'
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: tirupati.id,
    categoryId: religious,
    name: 'Tirumala Venkateswara Temple',
    description: 'A temple dedicated to Venkateswara, a form of Vishnu, '
      + 'perched atop the Tirumala hills and drawing tens of thousands of '
      + 'pilgrims daily, making it one of the most-visited religious sites '
      + 'anywhere in the world.',
    historicalSignificance: 'The temple\'s origins are ancient, with major '
      + 'endowments and expansions recorded under the Chola, Pandya, and later '
      + 'Vijayanagara rulers from around the 9th century onward.',
    bestTimeToVisit: 'Year-round; weekdays are less crowded than weekends',
    timings: '3:00 AM – 11:30 PM, daily, with specific darshan time slots',
    mapLink: 'https://maps.app.goo.gl/iVZx711SQjmPZUQL7',
    latitude: 13.6833,
    longitude: 79.3474,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFOP0OMjscPOnxcqt2lyA3G--cRfTfiYNLz46JQpRMg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: tirupati.id,
    categoryId: nature,
    name: 'Talakona Waterfall',
    description: 'The tallest waterfall in Andhra Pradesh, set within a '
      + 'wildlife sanctuary in the Eastern Ghats a couple of hours from '
      + 'Tirupati, reached by a forest trail.',
    bestTimeToVisit: 'July to January, fullest just after monsoon',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/6R2QThjtuUQKAUev5',
    latitude: 13.6333,
    longitude: 79.2333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGMlffoOswdsjYx1kGrYJBAcdmsveUzH7qTRU-NfUJ_w&s=10'}]
  });

  // ---------------- Vijayawada ----------------
  const vijayawada = await findOrCreateCity({
    stateId: andhraPradesh.id,
    name: 'Vijayawada',
    description: 'A commercial city on the banks of the Krishna River, '
      + 'historically an important trade and administrative center in coastal '
      + 'Andhra Pradesh.'
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: vijayawada.id,
    categoryId: religious,
    name: 'Kanaka Durga Temple',
    description: 'A hilltop temple dedicated to the goddess Durga overlooking '
      + 'the Krishna River, one of the most visited temples in coastal Andhra '
      + 'Pradesh, especially during the Dasara festival.',
    bestTimeToVisit: 'October (Dasara) or October to February generally',
    timings: '5:00 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/STx4qgn2b59BCFiE7',
    latitude: 16.5175,
    longitude: 80.6108,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22J6rFcsLJa26ZXO2x4JEj4tVWif4NVZuFfaM-MH3sg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: vijayawada.id,
    categoryId: heritage,
    name: 'Undavalli Caves',
    description: 'A set of rock-cut cave temples carved into a sandstone '
      + 'hillside, including a large reclining Vishnu figure hewn from a '
      + 'single block of stone.',
    historicalSignificance: 'Believed to date from the 4th to 5th centuries '
      + 'CE, originally excavated as Buddhist monastic caves before later '
      + 'conversion to Hindu use.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/73b1QFsnoN3c2Yx59',
    latitude: 16.4931,
    longitude: 80.5722,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp0HUp_0G4Ka6zDAEBmUKxpiBG_vx0uG5Wvi-QjusMA&s=10'}]
  });

  // ---------------- Amaravati ----------------
  const amaravati = await findOrCreateCity({
    stateId: andhraPradesh.id,
    name: 'Amaravati',
    description: 'A town on the Krishna River that was once the center of an '
      + 'ancient Buddhist civilization, and today serves as Andhra Pradesh\'s '
      + 'planned state capital.'
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: amaravati.id,
    categoryId: heritage,
    name: 'Amaravathi Stupa',
    description: 'The remains of one of the largest and oldest Buddhist '
      + 'stupas in India, once elaborately carved with limestone panels, many '
      + 'of which are now displayed in the adjoining archaeological museum.',
    historicalSignificance: 'Believed to have been founded around the 3rd '
      + 'century BCE, with major additions under the Satavahana dynasty over '
      + 'the following centuries, before falling into ruin and later excavation '
      + 'in the 19th century.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Museum entry: paid, nominal fee',
    timings: '9:00 AM – 5:00 PM, closed Fridays',
    mapLink: 'https://maps.app.goo.gl/kMnuMG4Ab5sdgzxA9',
    latitude: 16.5730,
    longitude: 80.3573,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR67TsV6VW-OAAjeukmzXXhescXlE7D0YlKme79GXeq0Q&s=10'}]
  });

  // ---------------- Srisailam ----------------
  const srisailam = await findOrCreateCity({
    stateId: andhraPradesh.id,
    name: 'Srisailam',
    description: 'A temple town set on the Nallamala hills above a deep '
      + 'gorge of the Krishna River, one of the holiest Shaivite pilgrimage '
      + 'sites in India.'
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: srisailam.id,
    categoryId: religious,
    name: 'Mallikarjuna Swamy Temple',
    description: 'A fortified temple complex dedicated to Shiva and Parvati, '
      + 'one of the twelve Jyotirlinga shrines and also one of the eighteen '
      + 'Shakti Peethas, making it doubly significant in Hindu pilgrimage '
      + 'tradition.',
    historicalSignificance: 'Inscriptions and structural additions at the site '
      + 'span more than a thousand years, with significant patronage recorded '
      + 'under the Kakatiya, Vijayanagara, and later dynasties.',
    bestTimeToVisit: 'October to February',
    timings: '4:30 AM – 10:00 PM, daily, with specific darshan time slots',
    mapLink: 'https://maps.app.goo.gl/64VeTnnCbADpQE8D8',
    latitude: 16.0725,
    longitude: 78.8681,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1bahAZx4Kgy6EXI2PaiAAnKLomxzxnwl2wMm4ll--Q&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: srisailam.id,
    categoryId: nature,
    name: 'Srisailam Dam',
    description: 'A large gravity dam across the Krishna River set within a '
      + 'dramatic gorge, forming a reservoir that borders the Nagarjunsagar-'
      + 'Srisailam Tiger Reserve.',
    historicalSignificance: 'Completed in the early 1980s, it remains one of '
      + 'India\'s largest hydroelectric dams by capacity.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/qR2ETn6Sjd6FCtHV9',
    latitude: 16.0842,
    longitude: 78.8664,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6PN2nTes6yrARpN2oljH4MPcgalQ-f1Ou8dUJMzjuw&s'}]
  });

  // ---------------- Lepakshi ----------------
  const lepakshi = await findOrCreateCity({
    stateId: andhraPradesh.id,
    name: 'Lepakshi',
    description: 'A small village known for a single Vijayanagara-era temple '
      + 'complex famous for its hanging pillar and monolithic Nandi statue.'
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: lepakshi.id,
    categoryId: heritage,
    name: 'Veerabhadra Temple, Lepakshi',
    description: 'A 16th-century temple known for a "hanging pillar" whose '
      + 'base doesn\'t fully touch the floor, and for an unfinished giant '
      + 'granite Kalyana Mandapam covered in detailed carvings.',
    historicalSignificance: 'Built around 1530 CE under officials serving the '
      + 'Vijayanagara Empire, it also holds one of the largest surviving fresco '
      + 'paintings from that period, covering its ceiling.',
    bestTimeToVisit: 'October to February',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/djmqH9gnKn58fskJ6',
    latitude: 13.8046,
    longitude: 77.6076,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZHXBCtV2BIWAq3vNQal2Is7dq4bK9NVs-lcC-h4COVQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andhraPradesh.id,
    cityId: lepakshi.id,
    categoryId: heritage,
    name: 'Lepakshi Nandi Statue',
    description: 'A monolithic statue of Nandi, Shiva\'s bull mount, carved '
      + 'from a single block of granite and among the largest such statues '
      + 'in India, standing a short distance from the main temple.',
    historicalSignificance: 'Carved during the same Vijayanagara-era building '
      + 'phase as the nearby Veerabhadra Temple, in the 16th century.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/uSRrvt4xj1wM3sXs6',
    latitude: 13.8000,
    longitude: 77.6083,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94vIl0ZLK5zDBR-u5Dnrdos5wZFO9l0ULduMxj5DMxg&s=10'}]
  });

  return andhraPradesh;
};