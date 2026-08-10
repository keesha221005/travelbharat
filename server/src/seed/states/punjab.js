module.exports = async function seedPunjab({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, religious } = categories;

  const punjab = await findOrCreateState({
    name: 'Punjab',
    region: 'North',
    description: 'A state in northwestern India, spiritual home of Sikhism, '
      + 'centered on the Golden Temple at Amritsar and known for its fertile '
      + 'agricultural plains and strong regional culture of music and cuisine.'
  });

  // ---------------- Amritsar ----------------
  const amritsar = await findOrCreateCity({
    stateId: punjab.id,
    name: 'Amritsar',
    description: 'A city founded by the fourth Sikh Guru around a sacred '
      + 'pool, home to the Golden Temple, Sikhism\'s holiest shrine, and to '
      + 'sites of major significance in India\'s independence movement.'
  });

  await findOrCreatePlace({
    stateId: punjab.id,
    cityId: amritsar.id,
    categoryId: religious,
    name: 'Golden Temple (Harmandir Sahib)',
    description: 'Sikhism\'s holiest shrine, its upper floors covered in gold '
      + 'leaf, standing at the center of a large sacred pool and open to '
      + 'visitors of all faiths, who are also welcome to eat at its enormous '
      + 'community kitchen.',
    historicalSignificance: 'Founded in 1581 by the fourth Sikh Guru, Guru '
      + 'Ram Das, with the temple\'s foundation stone reportedly laid by a '
      + 'Muslim Sufi saint at the invitation of the fifth Guru, Guru Arjan.',
    bestTimeToVisit: 'Year-round; open 24 hours, early morning or late '
      + 'evening are quieter',
    timings: 'Open 24 hours, daily',
    mapLink: 'https://maps.app.goo.gl/kfBjzpruGWm7p8BF7',
    latitude: 31.6200,
    longitude: 74.8765,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGLTni6JrNjxDL18UnuqUJMD_CH47KE0bnN5m7mNsbA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: punjab.id,
    cityId: amritsar.id,
    categoryId: heritage,
    name: 'Jallianwala Bagh',
    description: 'A public garden and memorial marking the site of a 1919 '
      + 'massacre of unarmed civilians by British colonial troops, preserving '
      + 'bullet-marked walls and a well where many victims died attempting '
      + 'to escape.',
    historicalSignificance: 'On April 13, 1919, British troops under General '
      + 'Reginald Dyer opened fire on a crowd gathered for a peaceful '
      + 'assembly, killing hundreds; the massacre became a major turning '
      + 'point in India\'s independence movement.',
    bestTimeToVisit: 'October to March',
    timings: '6:30 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/eewt2PBinrPMoyQ9A',
    latitude: 31.6206,
    longitude: 74.8798,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL08AcmiSBSRrH-uopTsEyTwlGp_0r6EpC77Mxd8gIFw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: punjab.id,
    cityId: amritsar.id,
    categoryId: heritage,
    name: 'Wagah Border Ceremony',
    description: 'A daily evening flag-lowering ceremony at the India-'
      + 'Pakistan border, performed with high-stepping marches and coordinated '
      + 'display by soldiers from both countries, watched by large crowds on '
      + 'stands on each side.',
    historicalSignificance: 'The ceremony has been performed jointly by the '
      + 'Indian Border Security Force and Pakistan Rangers since 1959, at the '
      + 'border crossing established after Partition in 1947.',
    bestTimeToVisit: 'Year-round, late afternoon before sunset',
    timings: 'Ceremony typically begins around 5:15 PM, timing shifts '
      + 'seasonally',
    mapLink: 'https://maps.app.goo.gl/iobm7oedzUn3FkTw5',
    latitude: 31.6046,
    longitude: 74.5729,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQphyywtrsyNKDRqFp5toSnuOND07MwBvWEyPw_q2Sn3w&s=10'}]
  });

  // ---------------- Chandigarh ----------------
  const chandigarh = await findOrCreateCity({
    stateId: punjab.id,
    name: 'Chandigarh',
    description: 'A planned city serving as the joint capital of Punjab and '
      + 'Haryana, designed by Swiss-French architect Le Corbusier following '
      + 'Partition, known for its modernist architecture and orderly grid layout.'
  });

  await findOrCreatePlace({
    stateId: punjab.id,
    cityId: chandigarh.id,
    categoryId: heritage,
    name: 'Rock Garden of Chandigarh',
    description: 'A sculpture garden built almost entirely from industrial '
      + 'and household waste — broken ceramics, glass bangles, electrical '
      + 'fittings — assembled into thousands of figures across a maze of '
      + 'walkways and courtyards.',
    historicalSignificance: 'Created secretly over nearly two decades '
      + 'starting in 1957 by government employee Nek Chand, using materials '
      + 'salvaged from demolished villages, before being discovered and '
      + 'officially opened to the public in 1976.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/fpNLYnFC97dYWNWW9',
    latitude: 30.7530,
    longitude: 76.8107,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzlHDRwzqskJ-39IEnsNbfnShJBS9t5ZVRRwlUvdYxw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: punjab.id,
    cityId: chandigarh.id,
    categoryId: heritage,
    name: 'Sukhna Lake',
    description: 'An artificial lake at the foot of the Shivalik hills, '
      + 'created as part of Chandigarh\'s original city plan, popular for '
      + 'boating and lakeside walks.',
    historicalSignificance: 'Created in 1958 as part of Le Corbusier\'s '
      + 'master plan for the newly built city of Chandigarh.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/sH9HtaQMNdjVRPL48',
    latitude: 30.7425,
    longitude: 76.8188,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxrMmarwk6UjaCBFUkSWMeR4JwvB8MR5FmFXo9k_6wA&s=10'}]
  });

  return punjab;
};