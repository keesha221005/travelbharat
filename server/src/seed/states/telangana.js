module.exports = async function seedTelangana({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, religious } = categories;

  const telangana = await findOrCreateState({
    name: 'Telangana',
    region: 'South',
    description: 'A state carved out of Andhra Pradesh in 2014, centered on '
      + 'Hyderabad, a former seat of the Qutb Shahi and later Nizam dynasties, '
      + 'known for its blend of Deccani Islamic and Telugu heritage.'
  });

  // ---------------- Hyderabad ----------------
  const hyderabad = await findOrCreateCity({
    stateId: telangana.id,
    name: 'Hyderabad',
    description: 'Telangana\'s capital, founded by the Qutb Shahi dynasty in '
      + 'the 16th century and later ruled by the Nizams, now also a major '
      + 'technology hub known as "Cyberabad."'
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: hyderabad.id,
    categoryId: heritage,
    name: 'Charminar',
    description: 'A monument with four grand arches and minarets marking the '
      + 'center of Hyderabad\'s old city, built to commemorate the end of a '
      + 'plague epidemic, and now the symbol most associated with the city.',
    historicalSignificance: 'Built in 1591 by Muhammad Quli Qutb Shah, fifth '
      + 'ruler of the Qutb Shahi dynasty, to mark the founding of Hyderabad '
      + 'itself.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '9:00 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/b86vAspFCCXuFeiz8',
    latitude: 17.3616,
    longitude: 78.4747,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVoGdP9OaJNBlFJtMlnOPSEzSn9WLsfcR_nLIwiwJrA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: hyderabad.id,
    categoryId: heritage,
    name: 'Golconda Fort',
    description: 'A hilltop fortress with an ingenious acoustic system that '
      + 'allows a clap at the entrance gate to be heard clearly at the citadel '
      + 'nearly a kilometer up the hill, once a center of the historic diamond '
      + 'trade.',
    historicalSignificance: 'Built up over centuries under the Kakatiya and '
      + 'later Qutb Shahi dynasties, serving as the Qutb Shahi capital before '
      + 'Hyderabad city was founded, and famed historically for diamonds mined '
      + 'nearby, including the Koh-i-Noor.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '9:00 AM – 5:30 PM, daily; sound-and-light show in the evening',
    mapLink: 'https://maps.app.goo.gl/avvBf4su9yf9mwWj8',
    latitude: 17.3833,
    longitude: 78.4011,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGM9z4BwkhlfCLlK6wLNR041LK3CBPOjr5_PDomOqcyQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: hyderabad.id,
    categoryId: heritage,
    name: 'Qutb Shahi Tombs',
    description: 'A walled necropolis holding the domed tombs of Qutb Shahi '
      + 'rulers and their families, built in a distinctive Deccani style '
      + 'blending Persian, Pashtun, and Hindu architectural influences.',
    historicalSignificance: 'Built between the 16th and 17th centuries, '
      + 'housing the tombs of most Qutb Shahi sultans, near Golconda Fort.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Paid entry',
    timings: '9:30 AM – 5:00 PM, closed Fridays',
    mapLink: 'https://maps.app.goo.gl/Jb3Z5AmdqP26pmpq5',
    latitude: 17.3903,
    longitude: 78.3956,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ657FGsIoP_LyG_2V12KH7w25LP9xYvJZf_8M-qHY9Og&s=10'}]
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: hyderabad.id,
    categoryId: religious,
    name: 'Mecca Masjid',
    description: 'One of the largest mosques in India, built partly with '
      + 'bricks made from soil brought from Mecca, standing beside the '
      + 'Charminar in the heart of the old city.',
    historicalSignificance: 'Construction began in 1617 under Muhammad Quli '
      + 'Qutb Shah and was completed decades later under Mughal emperor '
      + 'Aurangzeb after the Qutb Shahi dynasty\'s fall.',
    bestTimeToVisit: 'October to February',
    timings: '4:00 AM – 9:30 PM, daily (non-prayer hours for visitors)',
    mapLink: 'https://maps.app.goo.gl/hhmXem5dofbASEQAA',
    latitude: 17.3604,
    longitude: 78.4736,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6SG8cWNCXlSwLKjvfA9mJkGbwE0LfzIbmPOdU3iQ8w&s=10'}]
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: hyderabad.id,
    categoryId: heritage,
    name: 'Chowmahalla Palace',
    description: 'A palace complex of courtyards and durbar halls built for '
      + 'the Nizams of Hyderabad, combining Persian, Indo-Saracenic, and '
      + 'European architectural styles around a grand central hall.',
    historicalSignificance: 'Built up gradually from the 1750s through the '
      + '1870s, serving as the seat of the Asaf Jahi Nizams\' royal and '
      + 'administrative functions.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹100 for Indian nationals, ₹200 for foreign nationals (approximate)',
    timings: '10:00 AM – 5:00 PM, closed Fridays',
    mapLink: 'https://maps.app.goo.gl/snrb4Zwyb93FUw5B8',
    latitude: 17.3590,
    longitude: 78.4735,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEzB9CbYWA_APxvdpZrTktBeXpu8IfWXuLFAeqQK74A&s=10'}]
  });

  // ---------------- Warangal ----------------
  const warangal = await findOrCreateCity({
    stateId: telangana.id,
    name: 'Warangal',
    description: 'A city that served as capital of the Kakatiya dynasty, '
      + 'known for its distinctive temple architecture and a massive ruined '
      + 'fort complex.'
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: warangal.id,
    categoryId: heritage,
    name: 'Warangal Fort',
    description: 'The ruins of a Kakatiya-era fort, now best known for four '
      + 'massive freestanding stone gateways (Kakatiya Kala Thoranam) that '
      + 'once marked the entrance to a temple within the fort walls.',
    historicalSignificance: 'Built in the 13th century under the Kakatiya '
      + 'dynasty, later damaged during conflicts with the Delhi Sultanate and '
      + 'subsequent regional powers.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Paid entry',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/qG7NMR6V8LmcDoJFA',
    latitude: 17.9159,
    longitude: 79.6131,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6ic_mAgncVjRRCF9fqvI9qm_CnmNHCRqKxGPTGRimA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: telangana.id,
    cityId: warangal.id,
    categoryId: religious,
    name: 'Thousand Pillar Temple',
    description: 'A star-shaped Shiva temple built on a raised platform, named '
      + 'for its dense arrangement of intricately carved stone pillars, each '
      + 'said to be unique in design.',
    historicalSignificance: 'Built in 1163 CE under Kakatiya king Rudra Deva, '
      + 'representing an early and influential example of Kakatiya temple '
      + 'architecture.',
    bestTimeToVisit: 'October to February',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/zv9mSZs8GhVe71dJA',
    latitude: 17.9689,
    longitude: 79.5941,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlnLEP4paMjoLgOPpNzW59ECbftM2OcEUhrt5dTcMbvw&s=10'}]
  });

  return telangana;
};