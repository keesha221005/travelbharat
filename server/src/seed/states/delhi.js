module.exports = async function seedDelhi({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, religious } = categories;

  const delhi = await findOrCreateState({
    name: 'Delhi',
    region: 'North',
    description: 'India\'s capital territory, layering a modern metropolis over the '
      + 'remnants of several historic imperial capitals.'
  });

  const delhiCity = await findOrCreateCity({
    stateId: delhi.id,
    name: 'New Delhi',
    description: 'The seat of India\'s national government, and home to monuments '
      + 'spanning the Mughal era through British colonial rule.'
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: heritage,
    name: 'Red Fort',
    description: 'A red sandstone fortress that served as the main residence of Mughal '
      + 'emperors for nearly 200 years, with massive walls enclosing palaces, '
      + 'audience halls, and gardens.',
    historicalSignificance: 'Built by Emperor Shah Jahan starting in 1638, it remains '
      + 'the site of India\'s annual Independence Day flag-hoisting ceremony.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹35 for Indian nationals, ₹500 for foreign nationals',
    timings: '9:30 AM – 4:30 PM, closed on Mondays',
    latitude: 28.6562,
    longitude: 77.2410
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: heritage,
    name: 'Qutub Minar',
    description: 'A soaring five-story minaret of red sandstone and marble, the '
      + 'tallest brick minaret in the world, surrounded by a complex of earlier '
      + 'Islamic monuments and ruins.',
    historicalSignificance: 'Construction began around 1192 under Qutb-ud-din Aibak, '
      + 'the first ruler of the Delhi Sultanate.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹35 for Indian nationals, ₹550 for foreign nationals',
    timings: '7:00 AM – 5:00 PM, daily',
    latitude: 28.5245,
    longitude: 77.1855
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: heritage,
    name: 'Humayun\'s Tomb',
    description: 'A red sandstone and white marble mausoleum set within a '
      + 'formal charbagh garden, widely regarded as an important precursor to '
      + 'the Taj Mahal in Mughal tomb architecture.',
    historicalSignificance: 'Built between 1565 and 1572, commissioned by '
      + 'Humayun\'s widow Empress Bega Begum; it was the first garden-tomb of '
      + 'its scale in the Indian subcontinent and is a UNESCO World Heritage Site.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹35 for Indian nationals, ₹550 for foreign nationals',
    timings: '6:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/WNbmiM5vRPuxg6w18',
    latitude: 28.5933,
    longitude: 77.2507,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSney3YpyDCBh_CTmrt_nQpcD1lceRUYAzu0qIOEOgqNw&s'}]
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: heritage,
    name: 'India Gate',
    description: 'A 42-meter sandstone war memorial arch at the ceremonial '
      + 'heart of New Delhi, inscribed with the names of tens of thousands of '
      + 'soldiers, and a popular gathering spot in the surrounding lawns each '
      + 'evening.',
    historicalSignificance: 'Designed by British architect Edwin Lutyens and '
      + 'completed in 1931, originally to commemorate soldiers of the British '
      + 'Indian Army who died in World War I and the Third Anglo-Afghan War.',
    bestTimeToVisit: 'October to March, evenings',
    mapLink: 'https://maps.app.goo.gl/Jb2UDvA5pdsqHikw6',
    latitude: 28.6129,
    longitude: 77.2295,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPceVc2s6zpmt1YD0JdeRGSC--NKnu7XTtvF4idoiRYQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: religious,
    name: 'Lotus Temple',
    description: 'A Baháʼí house of worship shaped like an opening lotus '
      + 'flower, built from concrete clad in white marble, open to people of '
      + 'all faiths for silent meditation and prayer.',
    historicalSignificance: 'Completed in 1986, designed by Iranian-Canadian '
      + 'architect Fariborz Sahba; it has won multiple architectural awards '
      + 'and is among the most-visited buildings in the world.',
    bestTimeToVisit: 'October to March',
    timings: '9:00 AM – 5:30 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/4chtgUMWfmN69VCAA',
    latitude: 28.5535,
    longitude: 77.2588,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvd3Ldm1-qcINvr3Chn1LcD__fnqgBTlfcKuAcprimFw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: religious,
    name: 'Jama Masjid, Delhi',
    description: 'One of the largest mosques in India, with a vast '
      + 'sandstone-and-marble courtyard that can hold tens of thousands of '
      + 'worshippers, standing in the heart of Old Delhi.',
    historicalSignificance: 'Built between 1650 and 1656 under Mughal emperor '
      + 'Shah Jahan, the same ruler responsible for the Taj Mahal and Red Fort.',
    bestTimeToVisit: 'October to March, outside prayer times',
    entryFee: 'Free; camera fee applies for photography',
    timings: '7:00 AM – 12:00 PM and 1:30 PM – 6:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/zjJ6E9mByqJRVXUT6',
    latitude: 28.6507,
    longitude: 77.2334,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMe2ReNyPgyMvqsH3F3OVWVJ0t1tYoxlpjE0WgbEuzzw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: heritage,
    name: 'Chandni Chowk',
    description: 'One of the oldest and busiest markets in Old Delhi, laid '
      + 'out along a former moonlit canal, now a dense maze of lanes selling '
      + 'everything from spices and textiles to jewelry, alongside some of '
      + 'the city\'s best-known street food.',
    historicalSignificance: 'Laid out in the 17th century under Mughal '
      + 'emperor Shah Jahan, reportedly designed by his daughter Jahanara '
      + 'Begum as part of the new capital of Shahjahanabad.',
    bestTimeToVisit: 'October to March',
    mapLink: 'https://maps.app.goo.gl/WKiL8tamC5opcGDG7',
    latitude: 28.6506,
    longitude: 77.2303,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCQIplk73yLn_qNF0bNCFu4F_50ou0YIkU7m-DbF6WAQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: delhi.id,
    cityId: delhiCity.id,
    categoryId: religious,
    name: 'Akshardham Temple',
    description: 'A large modern temple complex built entirely without steel '
      + 'reinforcement, in traditional Hindu architectural style, featuring '
      + 'detailed stone carvings, exhibitions, and a musical fountain show.',
    historicalSignificance: 'Completed in 2005, built by the BAPS Swaminarayan '
      + 'organization; it was recognized by Guinness World Records as the '
      + 'world\'s largest comprehensive Hindu temple at the time of its opening.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Free entry; paid tickets for exhibitions and fountain show',
    timings: '9:30 AM – 6:30 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/7Es2kmbNzyaZhNWp8',
    latitude: 28.6127,
    longitude: 77.2773,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkF1oJo6nZTK0lH_yZdyLEmhpnlRlA8yp4f6pImXY8Vg&s=10'}]
  });

  return delhi;
};
