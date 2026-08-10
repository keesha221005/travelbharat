module.exports = async function seedGoa({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, adventure, religious } = categories;

  const goa = await findOrCreateState({
    name: 'Goa',
    region: 'West',
    description: 'India\'s smallest state by area, a former Portuguese colony on the '
      + 'west coast known for its beaches and Indo-Portuguese architecture.'
  });

  const goaCity = await findOrCreateCity({
    stateId: goa.id,
    name: 'Panaji',
    description: 'The state capital, laid out along the Mandovi river with colourful '
      + 'Portuguese-era houses in its old Fontainhas quarter.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: goaCity.id,
    categoryId: heritage,
    name: 'Basilica of Bom Jesus',
    description: 'A baroque church in Old Goa holding the mortal remains of St. Francis '
      + 'Xavier, and one of the best-preserved examples of Portuguese colonial '
      + 'architecture in India.',
    historicalSignificance: 'Completed in 1605, it is a UNESCO World Heritage Site and '
      + 'one of the oldest churches in Goa.',
    bestTimeToVisit: 'November to February',
    timings: '9:00 AM – 6:30 PM, daily',
    latitude: 15.5009,
    longitude: 73.9114
  });

  // ---------------- Old Goa ----------------
  const oldGoa = await findOrCreateCity({
    stateId: goa.id,
    name: 'Old Goa',
    description: 'The former capital of Portuguese Goa, once among the '
      + 'largest cities in Asia, now a cluster of monumental churches and '
      + 'convents left standing after the city was largely abandoned in the '
      + '17th and 18th centuries.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: oldGoa.id,
    categoryId: heritage,
    name: 'Se Cathedral',
    description: 'One of the largest churches in Asia, built in Portuguese-'
      + 'Gothic style with a single surviving bell tower after its twin '
      + 'collapsed in the 1770s, housing a bell reputed to be one of the '
      + 'best-toned in Goa.',
    historicalSignificance: 'Construction began in 1562 and continued for '
      + 'roughly 90 years; it is a UNESCO World Heritage Site alongside the '
      + 'nearby Basilica of Bom Jesus.',
    bestTimeToVisit: 'November to February',
    timings: '7:00 AM – 6:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/aQRhFaERBj9NGXXV6',
    latitude: 15.5033,
    longitude: 73.9119,
    images: [{url:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/84/ea/47/se-cathedral.jpg?w=1200&h=-1&s=1'}]
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: oldGoa.id,
    categoryId: heritage,
    name: 'Church of St. Francis of Assisi, Old Goa',
    description: 'A church combining Gothic and Manueline architectural '
      + 'elements with a lavishly gilded interior, adjoining a convent that '
      + 'now houses an archaeological museum.',
    historicalSignificance: 'Built in 1661 on the site of an earlier chapel '
      + 'founded in 1517, one of the first Franciscan establishments in Goa.',
    bestTimeToVisit: 'November to February',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/uV71iwnTLMEtGMvcA',
    latitude: 15.5028,
    longitude: 73.9125,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82PLSth1N-9U8m_w_XxQV78zVH8FHLcGZfyp1_44JLA&s=10'}]
  });

  // ---------------- North Goa: Calangute / Candolim / Anjuna ----------------
  const calangute = await findOrCreateCity({
    stateId: goa.id,
    name: 'Calangute',
    description: 'One of North Goa\'s largest and busiest beach towns, '
      + 'developed heavily for tourism since the 1960s, with a long stretch '
      + 'of sand backed by resorts and beach shacks.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: calangute.id,
    categoryId: nature,
    name: 'Calangute Beach',
    description: 'A wide, busy beach considered the "Queen of Beaches" in '
      + 'Goa, offering water sports, beach shacks, and easy access to '
      + 'Candolim and Baga beaches along the same stretch of coast.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/CPqEEK3D28obbh1H9',
    latitude: 15.5439,
    longitude: 73.7553,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59RRNdvdqa5h5N6ljB3ovpWvPgEmV2BbOVdMlt56Sdw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: calangute.id,
    categoryId: heritage,
    name: 'Fort Aguada',
    description: 'A 17th-century Portuguese fort overlooking the mouth of '
      + 'the Mandovi River, built with a lighthouse and a large freshwater '
      + 'reservoir that supplied passing ships.',
    historicalSignificance: 'Built in 1612 to defend against Dutch and '
      + 'Maratha naval attacks, and to guard against a possible fresh-water '
      + 'shortage for ships restocking supplies.',
    bestTimeToVisit: 'November to February',
    timings: '9:30 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/PpxHVh3cvToRZWTo7',
    latitude: 15.4925,
    longitude: 73.7738,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSTRlBViyXHpCZOyRck9RTrn4HMt0L_bfNdaBs31Wfw&s=10'}]
  });

  const anjuna = await findOrCreateCity({
    stateId: goa.id,
    name: 'Anjuna',
    description: 'A beach village in North Goa that became a countercultural '
      + 'hub from the 1960s onward, still known for its Wednesday flea market '
      + 'and nightlife scene.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: anjuna.id,
    categoryId: nature,
    name: 'Anjuna Beach',
    description: 'A beach known for its red laterite cliffs, rock pools at '
      + 'low tide, and a long association with Goa\'s trance-music and hippie '
      + 'countercultural scene since the 1960s.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/db95E6fqXisTPbRaA',
    latitude: 15.5736,
    longitude: 73.7407,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjPH7H7eE_dDOUKiS3t5Ua0fLhS3_fX228_xWC5bS3A&s=10'}]
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: anjuna.id,
    categoryId: heritage,
    name: 'Chapora Fort',
    description: 'A hilltop laterite fort overlooking the Chapora River '
      + 'estuary, offering wide views along the coast and known locally for '
      + 'appearing in the Bollywood film "Dil Chahta Hai."',
    historicalSignificance: 'Built in 1717 on the site of an earlier Adil '
      + 'Shahi structure, used by the Portuguese to guard the river mouth.',
    bestTimeToVisit: 'November to February, at sunset',
    mapLink: 'https://maps.app.goo.gl/y7S8fJNbLE7ab3ZPA',
    latitude: 15.6031,
    longitude: 73.7361,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKOkMuMwVyMT8tYRIIXSyQnMEreW4kgiOgyqeeehzIwA&s=10'}]
  });

  // ---------------- South Goa: Palolem / Colva ----------------
  const palolem = await findOrCreateCity({
    stateId: goa.id,
    name: 'Palolem',
    description: 'A quieter beach town in South Goa, favored for its calmer '
      + 'crescent-shaped bay compared to the more built-up beaches further north.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: palolem.id,
    categoryId: nature,
    name: 'Palolem Beach',
    description: 'A curved, palm-fringed bay in South Goa, calmer and less '
      + 'developed than the northern beaches, with a small island visible '
      + 'offshore at low tide.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/dR5AcU5p4LHvxS487',
    latitude: 15.0100,
    longitude: 74.0233,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNSRIDDlZUyrIgYa2EWdPtu4vy6-HYXJsOng_xzbimA&s=10'}]
  });

  const colva = await findOrCreateCity({
    stateId: goa.id,
    name: 'Colva',
    description: 'One of South Goa\'s oldest developed beach destinations, '
      + 'with a long stretch of white sand and a more low-key pace than the '
      + 'north.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: colva.id,
    categoryId: nature,
    name: 'Colva Beach',
    description: 'A long white-sand beach in South Goa, historically one of '
      + 'the first Goan beaches to draw international travelers, still '
      + 'popular but generally quieter than Calangute or Baga.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/QNoTjfc9Sp65SeYr8',
    latitude: 15.2775,
    longitude: 73.9147,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvjWiktkAza-_V6Zr-ruut4cJMbGetje0p-ToEpYyNpA&s=10'}]
  });

  // ---------------- Dudhsagar ----------------
  const dudhsagar = await findOrCreateCity({
    stateId: goa.id,
    name: 'Dudhsagar',
    description: 'A remote spot on the Goa–Karnataka border best known for '
      + 'one of India\'s tallest waterfalls, set within the Bhagwan Mahavir '
      + 'Wildlife Sanctuary.'
  });

  await findOrCreatePlace({
    stateId: goa.id,
    cityId: dudhsagar.id,
    categoryId: nature,
    name: 'Dudhsagar Falls',
    description: 'A four-tiered waterfall dropping around 310 meters down a '
      + 'forested mountainside, its name meaning "sea of milk" for the white '
      + 'frothing water visible from a distance.',
    bestTimeToVisit: 'June to September, fullest during monsoon',
    entryFee: 'Jeep safari fee required to reach the base',
    timings: 'Best visited 9:00 AM – 4:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/KgmpgMbaLtwVuX7a6',
    latitude: 15.3144,
    longitude: 74.3143,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAouxuj2F0_KATPHnInHr-xPnOK2mFKMH48o6czXspwg&s=10'}]
  });
  return goa;
};
