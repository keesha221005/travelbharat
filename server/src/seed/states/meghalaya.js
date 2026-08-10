module.exports = async function seedMeghalaya({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, adventure } = categories;

  const meghalaya = await findOrCreateState({
    name: 'Meghalaya',
    region: 'Northeast',
    description: 'A hill state whose name means "abode of clouds," known '
      + 'for some of the highest rainfall totals recorded anywhere on Earth, '
      + 'limestone cave systems, and bridges grown from living tree roots by '
      + 'the local Khasi and War communities.'
  });

  // ---------------- Shillong ----------------
  const shillong = await findOrCreateCity({
    stateId: meghalaya.id,
    name: 'Shillong',
    description: 'Meghalaya\'s capital, nicknamed the "Scotland of the '
      + 'East" by British colonial administrators for its rolling hills and '
      + 'climate, and a longstanding center of the region\'s rock and gospel '
      + 'music scene.'
  });

  await findOrCreatePlace({
    stateId: meghalaya.id,
    cityId: shillong.id,
    categoryId: nature,
    name: 'Elephant Falls',
    description: 'A three-tiered waterfall a short drive from Shillong, '
      + 'named by British colonists for a nearby rock formation once thought '
      + 'to resemble an elephant, though the rock has since eroded away.',
    bestTimeToVisit: 'June to September, fullest during monsoon',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/EEzF4d7tSUDF9fVdA',
    latitude: 25.5333,
    longitude: 91.8333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA065bvVUoL54BJwvwlVZvt7EZeAnAa-mo_A6wTYJN_g&s=10'}]
  });

  await findOrCreatePlace({
    stateId: meghalaya.id,
    cityId: shillong.id,
    categoryId: nature,
    name: 'Umiam Lake',
    description: 'A reservoir north of Shillong created by damming the '
      + 'Umiam River, framed by forested hills, used for boating and water '
      + 'sports and popular for its views back toward the city.',
    historicalSignificance: 'Created in the late 1960s as part of a '
      + 'hydroelectric project, now also a recreational area.',
    bestTimeToVisit: 'October to May',
    mapLink: 'https://maps.app.goo.gl/gf39YFWJxGHXDM1XA',
    latitude: 25.6667,
    longitude: 91.8833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUB3jwM7NN8VvTR92hyjvmEf6CdLVayka4YbofBLH4UA&s=10'}]
  });

  // ---------------- Cherrapunji (Sohra) ----------------
  const cherrapunji = await findOrCreateCity({
    stateId: meghalaya.id,
    name: 'Cherrapunji',
    description: 'A town on the southern edge of the Khasi Hills, formally '
      + 'known as Sohra, historically recorded as one of the wettest places '
      + 'on Earth, and home to Meghalaya\'s famous living root bridges.'
  });

  await findOrCreatePlace({
    stateId: meghalaya.id,
    cityId: cherrapunji.id,
    categoryId: heritage,
    name: 'Double Decker Living Root Bridge',
    description: 'A pair of stacked bridges near the village of Nongriat, '
      + 'grown over generations by training the aerial roots of rubber fig '
      + 'trees across a river gorge, reached by a steep trek of several '
      + 'thousand steps.',
    historicalSignificance: 'Living root bridges are grown by the local War-'
      + 'Khasi community over 15–30 years by guiding tree roots across '
      + 'bamboo or betel-nut trunk scaffolding until they strengthen enough '
      + 'to bear weight — a technique passed down for generations and still '
      + 'practiced today.',
    bestTimeToVisit: 'October to April; the trek is demanding and best '
      + 'avoided during heavy monsoon rain',
    entryFee: 'Village entry fee applies',
    mapLink: 'https://maps.app.goo.gl/bAorVhwiaTDZ3yt5A',
    latitude: 25.2481,
    longitude: 91.6522,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNnTHLkoeEi_D5xWKyoI2mcK9aysLVjysqjU0gYTwJA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: meghalaya.id,
    cityId: cherrapunji.id,
    categoryId: nature,
    name: 'Nohkalikai Falls',
    description: 'The tallest plunge waterfall in India, dropping in a '
      + 'single unbroken fall from a plateau edge into a pool below, best '
      + 'viewed from a designated viewpoint across the gorge.',
    bestTimeToVisit: 'June to September, fullest during monsoon',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/z8mEfDSEHCXamipa6',
    latitude: 25.2833,
    longitude: 91.7167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-tx9oY0dTw8hHrBmcSeOWUjtoIUYcrz1hIyxutDQArQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: meghalaya.id,
    cityId: cherrapunji.id,
    categoryId: adventure,
    name: 'Mawsmai Cave',
    description: 'A limestone cave with an illuminated walking path '
      + 'through narrow passages and chambers, one of the more accessible '
      + 'showcase caves in a region riddled with extensive cave systems.',
    bestTimeToVisit: 'October to April',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 4:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/ftHzkePCqRNqtmUP8',
    latitude: 25.2597,
    longitude: 91.7186,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVQRAMTi_0VtUCsiGi2XXyoxhFG4E25lxdGjeDFt3Phg&s=10'}]
  });

  // ---------------- Mawlynnong ----------------
  const mawlynnong = await findOrCreateCity({
    stateId: meghalaya.id,
    name: 'Mawlynnong',
    description: 'A small Khasi village near the Bangladesh border, widely '
      + 'promoted as one of the cleanest villages in Asia, maintained '
      + 'through a strong community tradition of waste management.'
  });

  await findOrCreatePlace({
    stateId: meghalaya.id,
    cityId: mawlynnong.id,
    categoryId: nature,
    name: 'Mawlynnong Village',
    description: 'A village known for its litter-free lanes, community-'
      + 'maintained gardens, and a nearby single-decker living root bridge, '
      + 'along with a bamboo skywalk offering views over the surrounding '
      + 'Bangladesh plains.',
    historicalSignificance: 'The village\'s cleanliness reputation grew from '
      + 'a long-standing local tradition of communal responsibility for '
      + 'shared spaces, later drawing wider media attention from the 2000s '
      + 'onward.',
    bestTimeToVisit: 'October to April',
    mapLink: 'https://maps.app.goo.gl/f9caiP7KUbm8cjq36',
    latitude: 25.2019,
    longitude: 91.9086,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcCO4_nWWWrmrFhGo7R0AzE1vMEdq2J-BGFLMMKWsXw&s=10'}]
  });

  return meghalaya;
};