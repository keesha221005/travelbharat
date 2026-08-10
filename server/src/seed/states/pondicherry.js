module.exports = async function seedPondicherry({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious } = categories;

  const pondicherry = await findOrCreateState({
    name: 'Puducherry',
    region: 'South',
    description: 'A Union Territory made up of several coastal enclaves, the '
      + 'largest a former French colonial settlement, still visible today in '
      + 'its street grid, architecture, and lingering French cultural influence.'
  });

  const puducherryCity = await findOrCreateCity({
    stateId: pondicherry.id,
    name: 'Puducherry',
    description: 'The main town of the territory, split into a French Quarter '
      + 'of colonial villas and a Tamil Quarter of traditional houses, divided '
      + 'historically by a canal.'
  });

  await findOrCreatePlace({
    stateId: pondicherry.id,
    cityId: puducherryCity.id,
    categoryId: heritage,
    name: 'French Quarter (White Town)',
    description: 'A grid of tree-lined streets lined with mustard-yellow '
      + 'colonial villas, still bearing French street names, along the '
      + 'seafront promenade.',
    historicalSignificance: 'Developed under French colonial administration, '
      + 'which controlled Pondicherry from the early 18th century until 1954.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/r5FmmVDw231adMhe8',
    latitude: 11.9340,
    longitude: 79.8340,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBoaQHodixBcVfawogoYsHrxFXMUQSIfnbCAW9VzgS1g&s=10'}]
  });

  await findOrCreatePlace({
    stateId: pondicherry.id,
    cityId: puducherryCity.id,
    categoryId: religious,
    name: 'Sri Aurobindo Ashram',
    description: 'A spiritual community founded around the teachings of Sri '
      + 'Aurobindo and his collaborator known as "the Mother," drawing visitors '
      + 'and long-term residents interested in its meditation practices.',
    historicalSignificance: 'Founded in 1926 by Sri Aurobindo, a philosopher '
      + 'and former Indian independence activist.',
    bestTimeToVisit: 'Year-round',
    timings: '8:00 AM – 12:00 PM and 2:00 PM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/JfjThuJw9p1c4cdG6',
    latitude: 11.9343,
    longitude: 79.8355,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBVPbT6c5IPm_hFEoGsgliUbyxbQZ0aDoWaLfZPJQWZg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: pondicherry.id,
    cityId: puducherryCity.id,
    categoryId: heritage,
    name: 'Auroville',
    description: 'An experimental township conceived as a place for people of '
      + 'all nationalities to live in harmony, centered on a large golden '
      + 'geodesic structure called the Matrimandir.',
    historicalSignificance: 'Founded in 1968 based on the vision of "the '
      + 'Mother," Sri Aurobindo\'s collaborator, with an inaugural ceremony '
      + 'attended by representatives from over 120 countries.',
    bestTimeToVisit: 'November to February',
    entryFee: 'Free; Matrimandir viewing requires a pass from the visitor center',
    timings: '9:00 AM – 5:00 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/dKVn3G6NkagjqGeSA',
    latitude: 12.0068,
    longitude: 79.8098,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG3Q8IUklEihQHHQhJJaHD2YNH-rnGQdzJ_KNj_8mSEw&s'}]
  });

  return pondicherry;
};