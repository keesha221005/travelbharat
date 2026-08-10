module.exports = async function seedHimachalPradesh({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const himachalPradesh = await findOrCreateState({
    name: 'Himachal Pradesh',
    region: 'North',
    description: 'A Himalayan state of forested hill stations and mountain '
      + 'valleys, once the summer seat of British colonial government at '
      + 'Shimla, now known for trekking, apple orchards, and Tibetan Buddhist '
      + 'culture in the north.'
  });

  // ---------------- Shimla ----------------
  const shimla = await findOrCreateCity({
    stateId: himachalPradesh.id,
    name: 'Shimla',
    description: 'Himachal Pradesh\'s capital, developed by the British as '
      + 'the summer capital of colonial India, still retaining Victorian-era '
      + 'architecture along its pedestrian Mall Road.'
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: shimla.id,
    categoryId: heritage,
    name: 'The Ridge and Mall Road',
    description: 'A pedestrian promenade and adjoining open square at the '
      + 'center of Shimla, lined with colonial-era buildings including a '
      + 'neo-Gothic church, and the main social hub of the town.',
    historicalSignificance: 'Developed through the 19th century as Shimla '
      + 'grew into the summer capital of British India from 1864 onward.',
    bestTimeToVisit: 'March to June, or September to November',
    mapLink: 'https://maps.app.goo.gl/4ihRndNB8r2zFAwe8',
    latitude: 31.1048,
    longitude: 77.1734,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXl_kUjfzfsFAaHoyPKQCHkimlMEKqpGk0NFYR-hHYAQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: shimla.id,
    categoryId: heritage,
    name: 'Viceregal Lodge',
    description: 'A grand Jacobean-style stone building that once served as '
      + 'the residence of British India\'s viceroys, later the site of key '
      + '1945 talks preceding independence, now housing an institute for '
      + 'advanced study.',
    historicalSignificance: 'Completed in 1888 for the Viceroy of India; the '
      + 'Simla Conference of 1945, an important precursor to independence '
      + 'negotiations, was held here.',
    bestTimeToVisit: 'March to June, or September to November',
    entryFee: 'Paid entry for garden and limited interior access',
    timings: '9:00 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/TMXX1GdJhbAk3e3N7',
    latitude: 31.1075,
    longitude: 77.1656,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gYLgSh2vVQYalgPkfcSi_m6gJ---5ufeViGsLEaRGQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: shimla.id,
    categoryId: adventure,
    name: 'Kalka-Shimla Railway',
    description: 'A narrow-gauge mountain railway climbing through more '
      + 'than 100 tunnels and hundreds of bridges between the plains and '
      + 'Shimla, built to serve the colonial summer capital.',
    historicalSignificance: 'Completed in 1903 by the British, it was '
      + 'designated a UNESCO World Heritage Site in 2008 as part of the '
      + 'Mountain Railways of India.',
    bestTimeToVisit: 'March to June, or September to November',
    mapLink: 'https://maps.app.goo.gl/p4SgLz9zRVpCgsMK7',
    latitude: 31.1033,
    longitude: 77.1717,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2dUmSfB-GuIpnQgJvx-Z-nQ4W9nZ2E5pb4n5NI3UVlw&s=10'}]
  });

  // ---------------- Manali ----------------
  const manali = await findOrCreateCity({
    stateId: himachalPradesh.id,
    name: 'Manali',
    description: 'A mountain town in the Kullu Valley at the northern end '
      + 'of the Himachal road network, a base for trekking, adventure sports, '
      + 'and the route toward Ladakh via the Rohtang and Atal tunnels.'
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: manali.id,
    categoryId: religious,
    name: 'Hidimba Devi Temple',
    description: 'A wooden pagoda-style temple set in a cedar forest, '
      + 'dedicated to Hidimba, a figure from the Mahabharata, with a '
      + 'distinctive four-tiered roof unlike typical North Indian temple '
      + 'architecture.',
    historicalSignificance: 'Built in 1553, with the temple\'s design '
      + 'reflecting local Himachali wooden architectural traditions rather '
      + 'than mainstream Hindu temple styles.',
    bestTimeToVisit: 'March to June, or September to November',
    timings: '8:00 AM – 7:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/Yr9a4v7eMQdVQuE99',
    latitude: 32.2468,
    longitude: 77.1892,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvMjcvzkyAPW6N5h6FqGf00CxyT9cgJgxtsYeD4LzAw&s'}]
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: manali.id,
    categoryId: adventure,
    name: 'Solang Valley',
    description: 'A valley north of Manali used for paragliding, skiing, '
      + 'and zip-lining, with a backdrop of glaciers and snow-capped peaks, '
      + 'also a stop en route to the Rohtang Pass.',
    bestTimeToVisit: 'December to February for snow sports, or April to '
      + 'June for paragliding',
    entryFee: 'Activity fees vary by operator',
    mapLink: 'https://maps.app.goo.gl/bVjRdmHT3n4Jn43r5',
    latitude: 32.3167,
    longitude: 77.1667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJcZHvZzgnAgziWDL-Qrb3gAj6YxNi-M2A9M_sG9FMQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: manali.id,
    categoryId: nature,
    name: 'Rohtang Pass',
    description: 'A high mountain pass connecting the Kullu Valley to the '
      + 'Lahaul and Spiti region, offering snowfields even in summer months '
      + 'and access restricted by a permit system to manage visitor numbers.',
    bestTimeToVisit: 'May to October, weather and permit dependent',
    entryFee: 'Permit required, issued in limited daily numbers',
    mapLink: 'https://maps.app.goo.gl/GJXULbKqdH4fFHtU8',
    latitude: 32.3728,
    longitude: 77.2481,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmABJQg9OA0kEHaZcmHiDgGemwgvkV-kSkKvHbVepwnA&s'}]
  });

  // ---------------- Dharamshala ----------------
  const dharamshala = await findOrCreateCity({
    stateId: himachalPradesh.id,
    name: 'Dharamshala',
    description: 'A hill town in the Kangra Valley, home since 1960 to the '
      + 'Tibetan government-in-exile and the residence of the 14th Dalai '
      + 'Lama in its upper McLeod Ganj neighborhood.'
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: dharamshala.id,
    categoryId: religious,
    name: 'Tsuglagkhang Complex',
    description: 'The main temple complex of the Tibetan exile community in '
      + 'McLeod Ganj, including the residence of the Dalai Lama and a temple '
      + 'housing large statues of Buddha, alongside a museum on Tibetan '
      + 'history.',
    historicalSignificance: 'Established after the 14th Dalai Lama and many '
      + 'Tibetan refugees settled in Dharamshala following 1959, making the '
      + 'town a center of the Tibetan community in exile.',
    bestTimeToVisit: 'March to June, or September to November',
    timings: '5:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/pDmuEcUG8vQA5jeR6',
    latitude: 32.2396,
    longitude: 76.3217,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYKBbVCADlfJ8zEQhAWZJCzusyIq0P3dbTdxn6UR7Dg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: dharamshala.id,
    categoryId: nature,
    name: 'Triund Trek',
    description: 'A popular day or overnight trek from McLeod Ganj through '
      + 'pine and oak forest to a ridge with views of the Dhauladhar range, '
      + 'a common introduction to Himalayan trekking for beginners.',
    bestTimeToVisit: 'March to June, or September to November',
    mapLink: 'https://maps.app.goo.gl/Sy2CK5znk5mejfdk8',
    latitude: 32.2333,
    longitude: 76.3833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1lVu54BEcJ17MbrIiO-c4TGdP2MVhg9saTj-AfuV3A&s=10'}]
  });

  // ---------------- Spiti Valley ----------------
  const spitiValley = await findOrCreateCity({
    stateId: himachalPradesh.id,
    name: 'Spiti Valley',
    description: 'A remote cold desert valley in the rain shadow of the '
      + 'Himalayas, sharing a Tibetan Buddhist cultural character with '
      + 'Ladakh, and home to some of the oldest monasteries in the region.'
  });

  await findOrCreatePlace({
    stateId: himachalPradesh.id,
    cityId: spitiValley.id,
    categoryId: heritage,
    name: 'Key Monastery',
    description: 'A monastery built in tiers up a steep hillside, one of '
      + 'the largest and oldest in Spiti Valley, functioning both as a place '
      + 'of worship and a religious training center for young monks.',
    historicalSignificance: 'Founded around the 11th century, repeatedly '
      + 'damaged by raids, fire, and earthquakes over the centuries and '
      + 'rebuilt each time.',
    bestTimeToVisit: 'May to October',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 7:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/5UWvF7i13rwUkkTy9',
    latitude: 32.2989,
    longitude: 78.0122,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxhocaDvMsD5JmE02eggbtegvyZQo4J6ipfHNg8ETd9Q&s=10'}]
  });

  return himachalPradesh;
};