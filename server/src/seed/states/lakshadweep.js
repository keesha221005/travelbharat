module.exports = async function seedLakshadweep({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { nature, adventure } = categories;

  const lakshadweep = await findOrCreateState({
    name: 'Lakshadweep',
    region: 'South',
    description: 'India\'s smallest Union Territory, a chain of coral atolls '
      + 'in the Arabian Sea off Kerala\'s coast, with lagoons, coral reefs, '
      + 'and access tightly regulated by permit to protect its fragile '
      + 'ecosystem.'
  });

  // ---------------- Kavaratti ----------------
  const kavaratti = await findOrCreateCity({
    stateId: lakshadweep.id,
    name: 'Kavaratti',
    description: 'The capital of Lakshadweep, a coral island built around '
      + 'a large protected lagoon, and the administrative center for the '
      + 'wider archipelago.'
  });

  await findOrCreatePlace({
    stateId: lakshadweep.id,
    cityId: kavaratti.id,
    categoryId: nature,
    name: 'Kavaratti Lagoon',
    description: 'A shallow, clear-water lagoon ringed by the island\'s '
      + 'coral reef, used for glass-bottom boat rides, snorkeling, and '
      + 'swimming in calm, sheltered water.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Entry permit required for all visitors to Lakshadweep',
    mapLink: 'https://maps.app.goo.gl/Q2GEFqxX6PM9S88T7',
    latitude: 10.5669,
    longitude: 72.6420,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOwozDRBvi5aquQaLVoTn_sugBauzS_nfoZG5yQxv11A&s=10'}]
  });

  // ---------------- Agatti ----------------
  const agatti = await findOrCreateCity({
    stateId: lakshadweep.id,
    name: 'Agatti',
    description: 'The main air-access point for Lakshadweep, a narrow '
      + 'coral island with an airstrip running almost its full length, '
      + 'bordered by a lagoon on one side.'
  });

  await findOrCreatePlace({
    stateId: lakshadweep.id,
    cityId: agatti.id,
    categoryId: adventure,
    name: 'Agatti Lagoon Diving and Snorkeling',
    description: 'A lagoon and surrounding reef offering some of the more '
      + 'accessible diving and snorkeling in Lakshadweep, with a variety of '
      + 'coral formations and reef fish in clear, relatively shallow water.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Entry permit required; diving/snorkeling packages vary by '
      + 'operator',
    mapLink: 'https://maps.app.goo.gl/b4LJCRDbiKSSxyvf6',
    latitude: 10.8467,
    longitude: 72.1919,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-fY4M7A-5XipHmg3eXKXesndkV5lchhsJxmpP4borg&s=10'}]
  });

  // ---------------- Bangaram ----------------
  const bangaram = await findOrCreateCity({
    stateId: lakshadweep.id,
    name: 'Bangaram',
    description: 'An uninhabited coral island reserved for tourism, ringed '
      + 'by a lagoon and considered one of the more secluded destinations '
      + 'in the Lakshadweep chain.'
  });

  await findOrCreatePlace({
    stateId: lakshadweep.id,
    cityId: bangaram.id,
    categoryId: nature,
    name: 'Bangaram Island Beach',
    description: 'A quiet, largely undeveloped beach on an uninhabited '
      + 'coral island, with turquoise lagoon water on one side and open '
      + 'ocean on the other, reachable only by boat from Agatti.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Entry permit required for all visitors to Lakshadweep',
    mapLink: 'https://maps.app.goo.gl/4oVjfh4jscBqQYFy8',
    latitude: 10.9333,
    longitude: 72.2833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0foKcoD4krrPkXsPft48QfwfUT8btF3NH35GCE0e2jQ&s=10'}]
  });

  return lakshadweep;
};