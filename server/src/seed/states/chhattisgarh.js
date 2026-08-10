module.exports = async function seedChhattisgarh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, religious } = categories;

  const chhattisgarh = await findOrCreateState({
    name: 'Chhattisgarh',
    region: 'Central',
    description: 'A state carved out of Madhya Pradesh in 2000, covering '
      + 'dense central Indian forest, tribal Bastar culture, and ancient '
      + 'temple and Buddhist archaeological sites along the Mahanadi River.'
  });

  // ---------------- Jagdalpur (Bastar) ----------------
  const jagdalpur = await findOrCreateCity({
    stateId: chhattisgarh.id,
    name: 'Jagdalpur',
    description: 'The main town of the Bastar region, a heavily forested '
      + 'area in southern Chhattisgarh known for tribal culture, waterfalls, '
      + 'and limestone cave systems.'
  });

  await findOrCreatePlace({
    stateId: chhattisgarh.id,
    cityId: jagdalpur.id,
    categoryId: nature,
    name: 'Chitrakote Falls',
    description: 'A wide, horseshoe-shaped waterfall on the Indravati River, '
      + 'often called the widest waterfall in India, with a curtain of water '
      + 'that can stretch several hundred meters across during monsoon.',
    bestTimeToVisit: 'July to November, fullest during and just after monsoon',
    mapLink: 'https://maps.app.goo.gl/2W5MjgBsXscrRZpc7',
    latitude: 19.1867,
    longitude: 81.7264,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV4CQjI3tN2IhpAIvIinKbyXxVnqzL2Ds2keezY3XtvA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: chhattisgarh.id,
    cityId: jagdalpur.id,
    categoryId: nature,
    name: 'Kanger Valley National Park',
    description: 'A forested national park known for limestone cave systems, '
      + 'including Kotumsar Cave with its stalactite and stalagmite formations, '
      + 'alongside waterfalls and dense sal and teak forest.',
    bestTimeToVisit: 'November to March (closed during monsoon)',
    entryFee: 'Paid entry, additional fee for cave visits',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/3QVt5McKSQzJgqBf8',
    latitude: 18.9333,
    longitude: 81.9333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rtlI7ec5NCRuqBdM46Z2_j6Yibofi5WvwsGUCutsng&s=10'}]
  });

  // ---------------- Sirpur ----------------
  const sirpur = await findOrCreateCity({
    stateId: chhattisgarh.id,
    name: 'Sirpur',
    description: 'A village on the Mahanadi River holding the ruins of an '
      + 'ancient city that once served as capital of the Dakshina Kosala '
      + 'region, with temple and Buddhist monastic remains still being '
      + 'excavated today.'
  });

  await findOrCreatePlace({
    stateId: chhattisgarh.id,
    cityId: sirpur.id,
    categoryId: heritage,
    name: 'Lakshmana Temple, Sirpur',
    description: 'An early brick temple dedicated to Vishnu, notable for '
      + 'being built almost entirely from finely carved brick rather than '
      + 'stone, unusual for a structure of its age to have survived intact.',
    historicalSignificance: 'Believed to date from around the 7th century '
      + 'CE, built during the reign of the Panduvamshi dynasty that ruled the '
      + 'Dakshina Kosala region.',
    bestTimeToVisit: 'October to March',
    timings: '8:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/nEasSh1oTFehxcSm8',
    latitude: 21.3419,
    longitude: 82.1856,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc41wMvBIzK5Y3LKYjWdgly1EMiERVqFWf4wGfbhkJEA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: chhattisgarh.id,
    cityId: sirpur.id,
    categoryId: heritage,
    name: 'Surang Tila',
    description: 'The excavated remains of a raised temple platform reached '
      + 'by a broad staircase, part of the wider archaeological complex at '
      + 'Sirpur that also includes Buddhist monastery ruins nearby.',
    historicalSignificance: 'Part of the ancient city of Sirpur, which '
      + 'flourished as a religious and political center between roughly the '
      + '5th and 12th centuries CE before being abandoned.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/HpjL7Xrf2Fb9LsrS8',
    latitude: 21.3444,
    longitude: 82.1861,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHHgrPDycaVWJCLrIwDBiRhe1-Vq-XfH2OiujZFT6Sww&s=10'}]
  });

  // ---------------- Kabirdham (Kawardha) ----------------
  const kabirdham = await findOrCreateCity({
    stateId: chhattisgarh.id,
    name: 'Kabirdham',
    description: 'A district town in northern Chhattisgarh, known chiefly '
      + 'for a temple sometimes described as the region\'s answer to '
      + 'Khajuraho.'
  });

  await findOrCreatePlace({
    stateId: chhattisgarh.id,
    cityId: kabirdham.id,
    categoryId: heritage,
    name: 'Bhoramdeo Temple',
    description: 'A sandstone temple carved with detailed figures in a style '
      + 'often compared to Khajuraho, sometimes called the "Khajuraho of '
      + 'Chhattisgarh" for its similarly ornate — including some explicitly '
      + 'romantic — sculptural themes.',
    historicalSignificance: 'Believed to have been built between the 11th '
      + 'and 14th centuries CE under the Nagavanshi dynasty that ruled the '
      + 'surrounding Kabirdham region.',
    bestTimeToVisit: 'October to March',
    timings: '7:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/sdNkjgsoEVuFGnHR9',
    latitude: 22.1167,
    longitude: 81.1667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4arpPgPwdRUw8JDnNxEGvskP_TdaUlo3fohYI3mnOPg&s=10'}]
  });

  return chhattisgarh;
};