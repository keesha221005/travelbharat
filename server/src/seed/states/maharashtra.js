module.exports = async function seedMaharashtra({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const {
    heritage, nature, religious, adventure
  } = categories;

  const maharashtra = await findOrCreateState({
    name: 'Maharashtra',
    region: 'West',
    description: 'A state on India\'s western coast built around Mumbai, the '
      + 'country\'s financial capital, and stretching inland across the '
      + 'Western Ghats to ancient rock-cut cave complexes and hill forts.'
  });

  // ---------------- Mumbai ----------------
  const mumbai = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Mumbai',
    description: 'India\'s financial capital and largest city, built across a '
      + 'group of islands that were gradually reclaimed and joined together '
      + 'under Portuguese and later British colonial rule.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: mumbai.id,
    categoryId: heritage,
    name: 'Gateway of India',
    description: 'A large basalt archway on Mumbai\'s waterfront, blending '
      + 'Hindu and Muslim architectural styles, and the departure point for '
      + 'ferries to Elephanta Island.',
    historicalSignificance: 'Built to commemorate the 1911 visit of King '
      + 'George V and Queen Mary, completed in 1924; it was also the ceremonial '
      + 'exit point for departing British troops after independence in 1948.',
    bestTimeToVisit: 'November to February',
    mapLink: 'https://maps.app.goo.gl/tRXPEMrLbxAoeJh9A',
    latitude: 18.9220,
    longitude: 72.8347,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2OnNGGI2W-u7b4afd83rd5NYY763CGe_L6_DntPf7g&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: mumbai.id,
    categoryId: heritage,
    name: 'Elephanta Caves',
    description: 'A group of rock-cut cave temples on an island in Mumbai '
      + 'harbor, dominated by a monumental three-faced sculpture of Shiva '
      + 'carved directly into the rock.',
    historicalSignificance: 'Carved primarily between the 5th and 8th '
      + 'centuries CE; the caves are a UNESCO World Heritage Site, though many '
      + 'sculptures were damaged during Portuguese colonial rule.',
    bestTimeToVisit: 'November to February',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals, plus '
      + 'ferry ticket',
    timings: '9:00 AM – 5:30 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/BtUPbd81PjVLzTjE7',
    latitude: 18.9633,
    longitude: 72.9315,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9WU6D6qZ4TSUKuAUQ8boD6yfbJyghESkbYNI0jGSqvA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: mumbai.id,
    categoryId: heritage,
    name: 'Chhatrapati Shivaji Maharaj Terminus',
    description: 'A Victorian Gothic railway station combining British and '
      + 'traditional Indian architectural motifs, still functioning as one of '
      + 'Mumbai\'s busiest train stations.',
    historicalSignificance: 'Completed in 1888 and named after Queen Victoria '
      + 'at the time, later renamed after the Maratha king Shivaji; it is a '
      + 'UNESCO World Heritage Site.',
    bestTimeToVisit: 'Year-round; exterior best viewed in the evening when lit',
    mapLink: 'https://maps.app.goo.gl/k68LWGCP853fnSTP8',
    latitude: 18.9398,
    longitude: 72.8355,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT9w5ccwJnAQkvKqCbT6I6KdAd-UGofTsD2kAsWkBbKQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: mumbai.id,
    categoryId: nature,
    name: 'Marine Drive',
    description: 'A curving boulevard along Mumbai\'s western waterfront, '
      + 'lined with Art Deco buildings and known as the "Queen\'s Necklace" for '
      + 'the sweep of streetlights visible after dark.',
    bestTimeToVisit: 'November to February, evenings',
    mapLink: 'https://maps.app.goo.gl/7GZtrgNZPb5httFXA',
    latitude: 18.9440,
    longitude: 72.8235,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjm79MWu-65BjjMjedzaLKxWfYIfVbj7duKabcPcOLOA&s=10'}]
  });

  // ---------------- Aurangabad ----------------
  const aurangabad = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Aurangabad',
    description: 'A city in Maharashtra\'s interior serving as the gateway to '
      + 'the Ajanta and Ellora cave complexes, among the most significant '
      + 'rock-cut monument sites in the world.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: aurangabad.id,
    categoryId: heritage,
    name: 'Ajanta Caves',
    description: 'A series of 30 rock-cut Buddhist cave monuments carved into '
      + 'a horseshoe-shaped cliff, containing some of the finest surviving '
      + 'examples of ancient Indian mural painting and sculpture.',
    historicalSignificance: 'Excavated in two main phases, roughly the 2nd '
      + 'century BCE and the 5th century CE, then abandoned and largely '
      + 'forgotten until rediscovered by a British officer in 1819; a UNESCO '
      + 'World Heritage Site.',
    bestTimeToVisit: 'November to March',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, closed Mondays',
    mapLink: 'https://maps.app.goo.gl/s1QAoKwu2jtvKVmH8',
    latitude: 20.5519,
    longitude: 75.7033,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mLGPYrYs7KXx_cxvI2uoHWFzRff1LOEZORJl93eTXA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: aurangabad.id,
    categoryId: heritage,
    name: 'Ellora Caves',
    description: 'A complex of 34 rock-cut monasteries and temples '
      + 'representing Buddhist, Hindu, and Jain traditions side by side, '
      + 'including the Kailasa Temple — an entire temple carved downward out '
      + 'of a single rock face.',
    historicalSignificance: 'Carved between roughly the 6th and 10th centuries '
      + 'CE under successive dynasties; a UNESCO World Heritage Site, with the '
      + 'Kailasa Temple alone estimated to have required the removal of over '
      + '200,000 tonnes of rock.',
    bestTimeToVisit: 'November to March',
    entryFee: '₹40 for Indian nationals, ₹600 for foreign nationals',
    timings: '6:00 AM – 6:00 PM, closed Tuesdays',
    mapLink: 'https://maps.app.goo.gl/ktVJGcR3L13r7L2AA',
    latitude: 20.0258,
    longitude: 75.1780,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUDo5_kf0tqehln5WVaEh62ApKwbQ5j2KS1YlMU8yGIw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: aurangabad.id,
    categoryId: heritage,
    name: 'Bibi Ka Maqbara',
    description: 'A marble-domed mausoleum closely modeled on the Taj Mahal, '
      + 'built on a smaller scale and using less marble, earning it the '
      + 'nickname "the poor man\'s Taj Mahal."',
    historicalSignificance: 'Built in 1660 by Prince Azam Shah, son of '
      + 'Mughal emperor Aurangzeb, as a tomb for his mother.',
    bestTimeToVisit: 'October to March',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '8:00 AM – 8:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/8vyQz6QRVpmhCpA28',
    latitude: 19.9017,
    longitude: 75.3080,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16-IHVYD0DNI4gTvOiHJ5llKxBFQFVA2JVPanNtZ7vQ&s=10'}]
  });

  // ---------------- Pune ----------------
  const pune = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Pune',
    description: 'A city that served as the political seat of the Maratha '
      + 'Empire under the Peshwas, now a major educational and IT hub in '
      + 'western Maharashtra.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: pune.id,
    categoryId: heritage,
    name: 'Shaniwar Wada',
    description: 'The fortified remains of a former Peshwa palace, largely '
      + 'destroyed by a fire in 1828, leaving massive stone walls and gates '
      + 'enclosing what is now mostly open garden space.',
    historicalSignificance: 'Built in 1732 as the seat of the Peshwa rulers '
      + 'of the Maratha Empire, and the site of a still-unsolved royal murder '
      + 'in 1773.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹125 for foreign nationals',
    timings: '8:00 AM – 6:30 PM, daily; light show in the evening',
    mapLink: 'https://maps.app.goo.gl/1uBymkhqJGMC78r28',
    latitude: 18.5195,
    longitude: 73.8553,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfA-85oENxYKhi_Ef1cODP9tlYD8dYxFoZxG68AfnYw&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: pune.id,
    categoryId: heritage,
    name: 'Aga Khan Palace',
    description: 'A palace built in Indo-Saracenic style, later used by the '
      + 'British colonial government as a detention site for Mahatma Gandhi '
      + 'and other independence leaders; part of it now serves as a memorial.',
    historicalSignificance: 'Built in 1892 by Sultan Muhammed Shah Aga Khan '
      + 'III; Gandhi\'s wife Kasturba Gandhi died here during their 1942–44 '
      + 'detention, and her memorial stands on the grounds.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '9:00 AM – 5:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/AZ7a7h5ftLcLxpqF8',
    latitude: 18.5497,
    longitude: 73.8994,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEIbQJjqIy4buiDH1N9psCxSKxo4S-Jei9zXufw8nuw&s=10'}]
  });

  // ---------------- Lonavala ----------------
  const lonavala = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Lonavala',
    description: 'A hill station in the Western Ghats between Mumbai and '
      + 'Pune, popular as a weekend retreat and known for its monsoon '
      + 'waterfalls and ancient rock-cut caves nearby.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: lonavala.id,
    categoryId: heritage,
    name: 'Karla Caves',
    description: 'A group of ancient Buddhist rock-cut caves including one of '
      + 'the largest and best-preserved chaitya (prayer hall) caves in India, '
      + 'with a soaring vaulted ceiling and carved stone pillars.',
    historicalSignificance: 'Excavated around the 2nd century BCE, among the '
      + 'earliest and largest examples of rock-cut Buddhist architecture on '
      + 'the Deccan plateau.',
    bestTimeToVisit: 'October to February',
    entryFee: '₹25 for Indian nationals, ₹300 for foreign nationals',
    timings: '9:00 AM – 5:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/K6HoYQuQPJZPkRm58',
    latitude: 18.7833,
    longitude: 73.4667,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLAWylFW7theyf1QKSaTGXBAlq2AmdyTodtrD45nptJg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: lonavala.id,
    categoryId: nature,
    name: 'Tiger\'s Leap (Tiger Point)',
    description: 'A cliffside viewpoint overlooking a deep valley, named for '
      + 'a rock outcrop said to resemble a leaping tiger, particularly '
      + 'dramatic when clouds roll through the valley during monsoon.',
    bestTimeToVisit: 'June to September for monsoon views, or October to '
      + 'February for clearer skies',
    mapLink: 'https://maps.app.goo.gl/FfzskvKqZRApDyMT7',
    latitude: 18.7333,
    longitude: 73.4000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXHu-2EESSjuP0gmPUn3XfwPJufkHV-PXkDeXNZtGbgQ&s=10'}]
  });

  // ---------------- Mahabaleshwar ----------------
  const mahabaleshwar = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Mahabaleshwar',
    description: 'A hill station in the Western Ghats developed as a summer '
      + 'retreat under British colonial rule, known for strawberry farms and '
      + 'as the source of the Krishna River.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: mahabaleshwar.id,
    categoryId: nature,
    name: 'Venna Lake',
    description: 'An artificial lake at the center of Mahabaleshwar town, '
      + 'surrounded by forested hills, used for boating and a popular evening '
      + 'gathering spot.',
    historicalSignificance: 'Created in 1842 under Appasaheb Maharaj of Satara.',
    bestTimeToVisit: 'October to June',
    mapLink: 'https://maps.app.goo.gl/tqPuN3payFbBnqz17',
    latitude: 17.9233,
    longitude: 73.6633,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUqqpvSjqZoeG9JRa3_dyxaQV580ZdodP8M5CxAwtCA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: mahabaleshwar.id,
    categoryId: heritage,
    name: 'Pratapgad Fort',
    description: 'A hill fort built by the Maratha king Shivaji, site of a '
      + 'decisive 1659 battle against the Bijapur Sultanate, with sweeping '
      + 'views over the surrounding Western Ghats.',
    historicalSignificance: 'Built in 1656 under Shivaji, and the site of his '
      + 'famous encounter with Bijapur general Afzal Khan in 1659, a turning '
      + 'point in the early Maratha Empire\'s rise.',
    bestTimeToVisit: 'October to February',
    entryFee: 'Paid entry',
    timings: '7:00 AM – 6:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/y7Tx9xcjVJHD1Giy7',
    latitude: 17.9350,
    longitude: 73.5850,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDsnCMl8uiJ3333dWb9uxwEje1LiOSVaSPt2Gfu9fBw&s=10'}]
  });

  // ---------------- Nashik ----------------
  const nashik = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Nashik',
    description: 'A city on the Godavari River considered one of Hinduism\'s '
      + 'seven holiest cities, and in more recent decades the center of India\'s '
      + 'largest wine-producing region.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: nashik.id,
    categoryId: religious,
    name: 'Trimbakeshwar Shiva Temple',
    description: 'A temple near the source of the Godavari River housing one '
      + 'of the twelve Jyotirlinga shrines, distinctive for its unusual linga '
      + 'featuring three faces representing Brahma, Vishnu, and Shiva.',
    historicalSignificance: 'The current structure was built in the 18th '
      + 'century under the Maratha Peshwa Balaji Baji Rao, though the site\'s '
      + 'religious significance is far older.',
    bestTimeToVisit: 'October to February',
    timings: '5:30 AM – 9:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/cBqnuvW1JkDcemgy9',
    latitude: 19.9319,
    longitude: 73.5306,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpK1Dr9OnnCgw5bKKb_UTzLzEI2bvQ0gv1QmtlT49UsA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: nashik.id,
    categoryId: religious,
    name: 'Panchavati',
    description: 'A riverside neighborhood in Nashik associated in the '
      + 'Ramayana with Rama, Sita, and Lakshmana\'s exile, home to several old '
      + 'temples and ghats along the Godavari.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/4UitufUFU3szhnqJ7',
    latitude: 20.0022,
    longitude: 73.7897,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq75ybXcpQkkRYWq_EIXCewXGOsH60jYkfQM-c1bWyKg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: nashik.id,
    categoryId: nature,
    name: 'Sula Vineyards',
    description: 'One of India\'s pioneering wineries, offering tastings and '
      + 'tours across vine-covered hills, credited with helping establish '
      + 'Nashik as India\'s main wine-producing region.',
    historicalSignificance: 'Founded in 1999, among the first wineries to '
      + 'establish large-scale commercial wine production in India.',
    bestTimeToVisit: 'October to March',
    entryFee: 'Paid tasting/tour packages',
    timings: '11:00 AM – 7:00 PM, daily',
    mapLink: 'https://maps.app.goo.gl/vRCptm2HFDbvF4HW7',
    latitude: 20.0091,
    longitude: 73.7364,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFWIM5H5MJ2y6znU_DaqjvjaK0aW191A0urPDe0EdRA&s=10'}]
  });

  // ---------------- Shirdi ----------------
  const shirdi = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Shirdi',
    description: 'A pilgrimage town built around the memory of Sai Baba, a '
      + '19th- and early 20th-century spiritual figure venerated by both '
      + 'Hindus and Muslims.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: shirdi.id,
    categoryId: religious,
    name: 'Shirdi Sai Baba Temple',
    description: 'A temple complex built around the samadhi (shrine) of Sai '
      + 'Baba, one of India\'s most-visited pilgrimage sites, drawing devotees '
      + 'from across religious backgrounds.',
    historicalSignificance: 'Sai Baba lived and taught in Shirdi until his '
      + 'death in 1918; the current temple complex was developed and expanded '
      + 'substantially over the following decades.',
    bestTimeToVisit: 'Year-round; weekdays are less crowded',
    timings: '4:00 AM – 11:30 PM, daily, with specific darshan time slots',
    mapLink: 'https://maps.app.goo.gl/ihUTmgPT9aZ6WS1e7',
    latitude: 19.7645,
    longitude: 74.4769,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWIAfjCku-cf1w10NyrbubMuqMj2sJqeAGX4t7ZLyw_A&s=10'}]
  });

  // ---------------- Ganpatipule ----------------
  const ganpatipule = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Ganpatipule',
    description: 'A small coastal town on Maharashtra\'s Konkan coast, built '
      + 'around a Ganesha temple set directly beside the sea.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: ganpatipule.id,
    categoryId: religious,
    name: 'Ganpatipule Temple',
    description: 'A temple dedicated to Ganesha, unusual for facing the sea '
      + 'directly, with the deity said to be self-manifested (swayambhu) '
      + 'rather than consecrated in the usual manner.',
    bestTimeToVisit: 'October to February',
    timings: '5:00 AM – 9:30 PM, daily',
    mapLink: 'https://maps.app.goo.gl/zbFie6YYGP1Uh55s8',
    latitude: 17.1439,
    longitude: 73.2647,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk26084dGb-9GyWZHWux6Gs87_eNe8PfMdfezheowxKg&s=10'}]
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: ganpatipule.id,
    categoryId: nature,
    name: 'Ganpatipule Beach',
    description: 'A quiet, relatively undeveloped beach on the Konkan coast '
      + 'beside the temple, with soft white sand and far less crowded than '
      + 'Goa\'s beaches further south.',
    bestTimeToVisit: 'October to February',
    mapLink: 'https://maps.app.goo.gl/qVs7oP1eQGLcujDt7',
    latitude: 17.1450,
    longitude: 73.2625,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYLQXTmrYdPbsAIswbFV-2LnLJRvOY5Zk7yAf4SoBVA&s=10'}]
  });

  // ---------------- Alibaug ----------------
  const alibaug = await findOrCreateCity({
    stateId: maharashtra.id,
    name: 'Alibaug',
    description: 'A coastal town on the Konkan coast a short ferry or drive '
      + 'from Mumbai, popular as a weekend getaway with beaches and a '
      + 'centuries-old sea fort.'
  });

  await findOrCreatePlace({
    stateId: maharashtra.id,
    cityId: alibaug.id,
    categoryId: heritage,
    name: 'Kolaba Fort',
    description: 'A sea fort built on a rocky outcrop off Alibaug\'s coast, '
      + 'accessible on foot at low tide, once part of the Maratha naval '
      + 'defense network under Shivaji.',
    historicalSignificance: 'Built around 1662–1667 under the Maratha king '
      + 'Shivaji, forming part of a coastal defense network against European '
      + 'colonial naval powers.',
    bestTimeToVisit: 'October to February, at low tide',
    mapLink: 'https://maps.app.goo.gl/RC9ERWkWMeXF1afr8',
    latitude: 18.6389,
    longitude: 72.8742,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSlHeFve7qxTrsi7eWA3RCHpnPdDXfStDcjytserJBA&s=10'}]
  });

  return maharashtra;
};