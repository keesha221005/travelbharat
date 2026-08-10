module.exports = async function seedAndamanAndNicobar({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature, adventure } = categories;

  const andamanAndNicobar = await findOrCreateState({
    name: 'Andaman and Nicobar Islands',
    region: 'South',
    description: 'A Union Territory of over 500 islands in the Bay of '
      + 'Bengal, known for coral reefs, white-sand beaches, and a former '
      + 'British colonial penal settlement whose history is closely tied to '
      + 'India\'s independence movement.'
  });

  // ---------------- Port Blair ----------------
  const portBlair = await findOrCreateCity({
    stateId: andamanAndNicobar.id,
    name: 'Port Blair',
    description: 'The capital of the Andaman and Nicobar Islands, built '
      + 'around a natural harbor, and the main gateway for travel across '
      + 'the archipelago.'
  });

  await findOrCreatePlace({
    stateId: andamanAndNicobar.id,
    cityId: portBlair.id,
    categoryId: heritage,
    name: 'Cellular Jail',
    description: 'A former British colonial prison built in a radiating '
      + 'wheel-spoke design to isolate prisoners from one another, used to '
      + 'detain Indian independence activists, now preserved as a national '
      + 'memorial with a nightly light-and-sound show.',
    historicalSignificance: 'Completed in 1906, the jail held political '
      + 'prisoners under harsh conditions, including the freedom fighter '
      + 'Vinayak Damodar Savarkar; it is now a designated National Memorial '
      + 'to India\'s independence struggle.',
    bestTimeToVisit: 'November to March',
    entryFee: '₹30 for Indian nationals, ₹500 for foreign nationals '
      + '(approximate)',
    timings: '9:00 AM – 12:30 PM and 1:30 PM – 4:45 PM, closed Mondays; '
      + 'light-and-sound show in the evening',
    mapLink: 'https://maps.app.goo.gl/Jnr9aPyHPDNZG8B66',
    latitude: 11.6758,
    longitude: 92.7458,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDQUgg5i_fCbpkKNhWlf1x-lhaUr4g3XQvARbDYXwdA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andamanAndNicobar.id,
    cityId: portBlair.id,
    categoryId: nature,
    name: 'Corbyn\'s Cove Beach',
    description: 'A palm-fringed beach close to Port Blair, more '
      + 'accessible than the islands\' more remote beaches, popular for a '
      + 'quick swim or short walk without needing an inter-island ferry.',
    bestTimeToVisit: 'November to April',
    mapLink: 'https://maps.app.goo.gl/EA43FXAjnYTobAWf7',
    latitude: 11.6167,
    longitude: 92.7500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zzEo8M2MKahCg6TeT73XKnrgiv5P38QNUjg53zNegg&s=10'}]
  });

  // ---------------- Havelock Island (Swaraj Dweep) ----------------
  const havelockIsland = await findOrCreateCity({
    stateId: andamanAndNicobar.id,
    name: 'Havelock Island',
    description: 'Officially renamed Swaraj Dweep, the most visited island '
      + 'in the Andamans outside Port Blair, known for clear water diving '
      + 'sites and a beach repeatedly ranked among Asia\'s best.'
  });

  await findOrCreatePlace({
    stateId: andamanAndNicobar.id,
    cityId: havelockIsland.id,
    categoryId: nature,
    name: 'Radhanagar Beach',
    description: 'A wide beach of pale sand backed by dense forest, '
      + 'repeatedly rated among the best beaches in Asia for its clear '
      + 'water and relatively undeveloped setting.',
    bestTimeToVisit: 'November to April',
    mapLink: 'https://maps.app.goo.gl/pt4nV7NcqgV5ATAC6',
    latitude: 11.9833,
    longitude: 92.9500,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS460c3u7Gx7f4TkYMZQEs6k4TdjC_BFUexl8jrB_qlzQ&s=10'}]
  });

  await findOrCreatePlace({
    stateId: andamanAndNicobar.id,
    cityId: havelockIsland.id,
    categoryId: adventure,
    name: 'Havelock Scuba Diving Sites',
    description: 'A cluster of dive sites around Havelock Island with '
      + 'coral reefs and marine life visible in unusually clear water for '
      + 'the region, catering to both beginner and experienced divers '
      + 'through numerous licensed dive schools.',
    bestTimeToVisit: 'November to April, for the clearest visibility',
    entryFee: 'Dive packages vary by operator and certification level',
    mapLink: 'https://maps.app.goo.gl/Q3zH2CpBNDpzm5VL9',
    latitude: 11.9500,
    longitude: 92.9833,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUYBb5MqHkuaeTvzqpUymwwohR2ozuqDDSKe-TAuoag&s=10'}]
  });

  // ---------------- Neil Island (Shaheed Dweep) ----------------
  const neilIsland = await findOrCreateCity({
    stateId: andamanAndNicobar.id,
    name: 'Neil Island',
    description: 'Officially renamed Shaheed Dweep, a smaller and quieter '
      + 'island near Havelock, known for a natural coral-and-rock bridge '
      + 'formation exposed at low tide.'
  });

  await findOrCreatePlace({
    stateId: andamanAndNicobar.id,
    cityId: neilIsland.id,
    categoryId: nature,
    name: 'Natural Bridge (Howrah Bridge), Neil Island',
    description: 'A natural rock and coral arch formation on Neil Island\'s '
      + 'coast, exposed and walkable at low tide, nicknamed after Kolkata\'s '
      + 'Howrah Bridge for its arched shape.',
    bestTimeToVisit: 'November to April; check tide timings before visiting',
    mapLink: 'https://maps.app.goo.gl/V4VVESrZ7wUtz6p58',
    latitude: 11.8333,
    longitude: 93.0333,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_JTQ0TqF-R14dZuYWx3cIXc401cj4DhIKga7Re5BEA&s=10'}]
  });

  return andamanAndNicobar;
};