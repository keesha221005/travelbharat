module.exports = async function seedHaryana({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious } = categories;

  const haryana = await findOrCreateState({
    name: 'Haryana',
    region: 'North',
    description: 'A state surrounding Delhi on three sides, home to '
      + 'Kurukshetra — the setting of the Mahabharata\'s central battle — and '
      + 'Panipat, site of three decisive battles that shaped the course of '
      + 'North Indian history.'
  });

  // ---------------- Kurukshetra ----------------
  const kurukshetra = await findOrCreateCity({
    stateId: haryana.id,
    name: 'Kurukshetra',
    description: 'A pilgrimage town traditionally identified as the '
      + 'battlefield of the Mahabharata and the setting where Krishna is said '
      + 'to have delivered the Bhagavad Gita to Arjuna.'
  });

  await findOrCreatePlace({
    stateId: haryana.id,
    cityId: kurukshetra.id,
    categoryId: religious,
    name: 'Brahma Sarovar',
    description: 'A large rectangular sacred tank at the center of '
      + 'Kurukshetra, considered one of the town\'s holiest bathing sites and '
      + 'the focal point for major religious gatherings, including large '
      + 'crowds during solar eclipses.',
    historicalSignificance: 'Referenced in ancient Hindu texts as a site '
      + 'associated with creation mythology, and traditionally linked to the '
      + 'broader Kurukshetra battlefield narrative of the Mahabharata.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/7JFPxhMnh5qcst2m8',
    latitude: 29.9695,
    longitude: 76.8306,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFdE8-XD9Zipt-62-Ls9SB1oCTTQD3O6Y_9qOD3dL2Ug&s=10'}]
  });

  await findOrCreatePlace({
    stateId: haryana.id,
    cityId: kurukshetra.id,
    categoryId: religious,
    name: 'Jyotisar',
    description: 'A site traditionally identified as the spot where Krishna '
      + 'delivered the Bhagavad Gita to Arjuna before the Mahabharata\'s '
      + 'climactic battle, marked today by an ancient banyan tree and a small '
      + 'temple.',
    historicalSignificance: 'Long venerated in Hindu tradition as the '
      + 'location of the Gita\'s discourse, though — like much of the '
      + 'Mahabharata\'s geography — its precise historicity is a matter of '
      + 'religious tradition rather than archaeological record.',
    bestTimeToVisit: 'October to March',
    timings: '6:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/ZgFEbfra7q5t8AYp7',
    latitude: 29.9575,
    longitude: 76.8867,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDd-qJMSS_ZWjgtq4GA9ZpJHo1Q6PiATz8sXSRP3_dSw&s=10'}]
  });

  // ---------------- Panipat ----------------
  const panipat = await findOrCreateCity({
    stateId: haryana.id,
    name: 'Panipat',
    description: 'A city on the Grand Trunk Road that was the site of three '
      + 'major battles between the 16th and 18th centuries, each of which '
      + 'significantly reshaped the balance of power in North India.'
  });

  await findOrCreatePlace({
    stateId: haryana.id,
    cityId: panipat.id,
    categoryId: heritage,
    name: 'Kabuli Bagh',
    description: 'A garden and mosque built to commemorate the first Battle '
      + 'of Panipat, one of three pivotal battles fought at the same site '
      + 'over roughly 230 years.',
    historicalSignificance: 'Built in 1527 by Mughal emperor Babur to mark '
      + 'his 1526 victory over Ibrahim Lodi at the First Battle of Panipat, '
      + 'which established Mughal rule in India.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/iBSvocUcXAHKMQDH9',
    latitude: 29.3894,
    longitude: 76.9711,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp67aXbt1_TYxB2WA6EbWLIZDtaiuRJeGzjgV_CxmAsQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: haryana.id,
    cityId: panipat.id,
    categoryId: heritage,
    name: 'Panipat War Memorial (Kala Amb)',
    description: 'A memorial marking the site associated with the Third '
      + 'Battle of Panipat, one of the largest and bloodiest battles fought '
      + 'in 18th-century India.',
    historicalSignificance: 'Commemorates the 1761 battle between the '
      + 'Maratha Empire and an Afghan-led coalition, a defeat that '
      + 'significantly weakened Maratha expansion in North India.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/jfzqH6vumeJTwAyr6',
    latitude: 29.3550,
    longitude: 76.9764,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRon9hgeWz7U5FjISqxVrl0H4xIlVAgqom2R0h9lASDQw&s=10'}]
  });

  // ---------------- Pinjore ----------------
  const pinjore = await findOrCreateCity({
    stateId: haryana.id,
    name: 'Pinjore',
    description: 'A town near Chandigarh known for a large Mughal-style '
      + 'terraced garden built during the reign of Aurangzeb.'
  });

  await findOrCreatePlace({
    stateId: haryana.id,
    cityId: pinjore.id,
    categoryId: heritage,
    name: 'Pinjore Gardens (Yadavindra Gardens)',
    description: 'A terraced Mughal-style garden with a series of pavilions, '
      + 'fountains, and water channels descending across seven levels, '
      + 'attributed to the same designer credited with Kashmir\'s Shalimar '
      + 'Gardens.',
    historicalSignificance: 'Built in the 17th century during the reign of '
      + 'Mughal emperor Aurangzeb, reportedly under the supervision of Nawab '
      + 'Fidai Khan.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 10:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/iJ4Q4iy7PVkmLqqK8',
    latitude: 30.7989,
    longitude: 76.9022,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8ylUDYj5jeLrt4_xWxX1qrMEXuWxKxSaXWcb8Lv0QQ&s=10'}]
  });

  // ---------------- Sultanpur ----------------
  const sultanpur = await findOrCreateCity({
    stateId: haryana.id,
    name: 'Sultanpur',
    description: 'A village near Gurugram best known for a wetland bird '
      + 'sanctuary that draws large numbers of migratory birds each winter.'
  });

  await findOrCreatePlace({
    stateId: haryana.id,
    cityId: sultanpur.id,
    categoryId: nature,
    name: 'Sultanpur National Park',
    description: 'A wetland bird sanctuary attracting large numbers of '
      + 'migratory waterfowl each winter, including species arriving from as '
      + 'far as Siberia and Central Asia, alongside a resident population of '
      + 'native birds.',
    historicalSignificance: 'Declared a bird sanctuary in 1971 and upgraded '
      + 'to national park status in 1991.',
    bestTimeToVisit: 'November to February, for peak migratory bird season',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 5:30 PM, closed Tuesdays',
    mapLink: 'https://maps.app.goo.gl/CNqxLtKuzcgEy8459',
    latitude: 28.4667,
    longitude: 76.8917,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmdJum-xWzVVaRc1ottIisYNUh6_IKDjLUCIjaHp8ZQ&s=10'}]
  });

  return haryana;
};