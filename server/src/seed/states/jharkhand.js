module.exports = async function seedJharkhand({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious } = categories;

  const jharkhand = await findOrCreateState({
    name: 'Jharkhand',
    region: 'East',
    description: 'A state carved out of Bihar in 2000, covering a forested '
      + 'plateau region rich in minerals, home to major Hindu and Jain '
      + 'pilgrimage sites and a string of waterfalls cascading off the '
      + 'Chota Nagpur Plateau.'
  });

  // ---------------- Ranchi ----------------
  const ranchi = await findOrCreateCity({
    stateId: jharkhand.id,
    name: 'Ranchi',
    description: 'Jharkhand\'s capital, set on the Chota Nagpur Plateau and '
      + 'known locally as the "City of Waterfalls" for several falls within '
      + 'a short drive of the city center.'
  });

  await findOrCreatePlace({
    stateId: jharkhand.id,
    cityId: ranchi.id,
    categoryId: nature,
    name: 'Hundru Falls',
    description: 'A waterfall where the Subarnarekha River drops around 98 '
      + 'meters over a rocky ledge, one of the tallest and best-known falls '
      + 'near Ranchi.',
    bestTimeToVisit: 'July to October, fullest during and after monsoon',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/LhT7D3eEpFLmThHs5',
    latitude: 23.4333,
    longitude: 85.6500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSurQKnQULsWx42JnoA0_pl5EzwGuBoNAjfvvSWLxW6hA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: jharkhand.id,
    cityId: ranchi.id,
    categoryId: nature,
    name: 'Dassam Falls',
    description: 'A wide waterfall on the Kanchi River south of Ranchi, '
      + 'dropping over a broad rocky shelf, popular for its accessibility '
      + 'and viewing platforms close to the falls.',
    bestTimeToVisit: 'July to October, fullest during and after monsoon',
    entryFee: 'Paid entry',
    mapLink: 'https://maps.app.goo.gl/GqReWrGJCrPDJ1xBA',
    latitude: 23.1667,
    longitude: 85.3833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtCkq2OVua9-JuoQT4okJcABGmR2kKml4yb3pIgprDxg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: jharkhand.id,
    cityId: ranchi.id,
    categoryId: religious,
    name: 'Jagannath Temple, Ranchi',
    description: 'A temple modeled on the Jagannath Temple at Puri, built on '
      + 'a small hillock, and the site of its own annual Rath Yatra chariot '
      + 'festival on a smaller scale than Puri\'s.',
    historicalSignificance: 'Built in 1691 by a local ruler, Ani Nath Shahdeo, '
      + 'inspired by a visit to the original Jagannath Temple in Puri.',
    bestTimeToVisit: 'October to March, or during Rath Yatra (June/July)',
    timings: '5:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/5TjYAMwHai9Uanss9',
    latitude: 23.3167,
    longitude: 85.2833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLHM1_K6kMlwuPSCGc07LhCI2S_BpJETsCH2QcAXUt4g&s=10'}]
  });

  // ---------------- Deoghar ----------------
  const deoghar = await findOrCreateCity({
    stateId: jharkhand.id,
    name: 'Deoghar',
    description: 'A pilgrimage town in eastern Jharkhand, home to one of '
      + 'the twelve Jyotirlinga shrines and a major destination for the '
      + 'annual Shravani Mela pilgrimage.'
  });

  await findOrCreatePlace({
    stateId: jharkhand.id,
    cityId: deoghar.id,
    categoryId: religious,
    name: 'Baidyanath Temple',
    description: 'A Shiva temple complex of twenty-two smaller shrines '
      + 'surrounding the main sanctum, housing one of the twelve Jyotirlinga '
      + 'shrines and drawing enormous numbers of pilgrims during the annual '
      + 'monsoon Shravani Mela, when devotees carry Ganges water here on foot '
      + 'from Sultanganj.',
    historicalSignificance: 'The temple\'s origins are ancient and referenced '
      + 'in various Hindu scriptures, with the current structure having seen '
      + 'renovations under different regional rulers over the centuries.',
    bestTimeToVisit: 'October to March, or during Shravani Mela (July/August, '
      + 'though extremely crowded)',
    timings: '4:00 AM – 3:30 PM and 6:00 PM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/WbmaoHm5rHyrX9fx6',
    latitude: 24.4833,
    longitude: 86.7000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4IQziUyaeB0sueH4JCMEA4Xd41xB3gMrigqOyNflGw&s=10'}]
  });

  // ---------------- Parasnath Hill ----------------
  const parasnathHill = await findOrCreateCity({
    stateId: jharkhand.id,
    name: 'Parasnath Hill',
    description: 'The highest peak in Jharkhand, and the most sacred '
      + 'pilgrimage site in Jainism, where twenty of the religion\'s '
      + 'twenty-four Tirthankaras are believed to have attained liberation.'
  });

  await findOrCreatePlace({
    stateId: jharkhand.id,
    cityId: parasnathHill.id,
    categoryId: religious,
    name: 'Shikharji (Sammed Shikharji)',
    description: 'A cluster of Jain temples spread across the summit ridge '
      + 'of Parasnath Hill, reached by a demanding overnight trek of around '
      + '27 kilometers round trip, regarded as the holiest pilgrimage site '
      + 'in Jainism.',
    historicalSignificance: 'Twenty of the twenty-four Tirthankaras (Jain '
      + 'spiritual teachers) are believed in Jain tradition to have attained '
      + 'moksha (liberation) on this hill, making it more sacred in Jain '
      + 'practice than any other single site.',
    bestTimeToVisit: 'October to March; the trek is typically done overnight '
      + 'to avoid daytime heat',
    entryFee: 'Free; porter and palanquin services available for a fee',
    timings: 'Trek typically begins before dawn',
    mapLink: 'https://maps.app.goo.gl/6im2SSczpGjowAZm9',
    latitude: 23.9667,
    longitude: 86.1500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LGSxwrANR8b-Bt7nwE9hTK9FDhkIV95cfraEHMbLAQ&s=10'}]
  });

  // ---------------- Netarhat ----------------
  const netarhat = await findOrCreateCity({
    stateId: jharkhand.id,
    name: 'Netarhat',
    description: 'A hill station on the Chota Nagpur Plateau known as the '
      + '"Queen of Chotanagpur," valued for its sunrise and sunset viewpoints '
      + 'and cooler climate relative to the surrounding plains.'
  });

  await findOrCreatePlace({
    stateId: jharkhand.id,
    cityId: netarhat.id,
    categoryId: nature,
    name: 'Netarhat Sunset Point (Magnolia Point)',
    description: 'A viewpoint on the edge of the Netarhat plateau offering '
      + 'wide views over forested valleys, popular for watching the sun set '
      + 'over the Chota Nagpur landscape.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/a8u4HLFJkS9MKgUZ7',
    latitude: 23.4667,
    longitude: 84.2667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1G9XeK7ZM1FjLB8Tmc3Avv0kOtGJy41moPtKyajlIQ&s=10'}]
  });

  return jharkhand;
};