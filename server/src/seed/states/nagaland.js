module.exports = async function seedNagaland({ findOrCreateState, findOrCreateCity, findOrCreatePlace, categories }) {
  const { heritage, nature } = categories;

  const nagaland = await findOrCreateState({
    name: 'Nagaland',
    region: 'Northeast',
    description: 'A mountainous state bordering Myanmar, home to sixteen '
      + 'major Naga tribes each with distinct languages, textiles, and '
      + 'customs, and the site of one of the Second World War\'s pivotal '
      + 'battles.'
  });

  // ---------------- Kohima ----------------
  const kohima = await findOrCreateCity({
    stateId: nagaland.id,
    name: 'Kohima',
    description: 'Nagaland\'s capital, built across a series of ridges, '
      + 'known both for its role in a major Second World War battle and as '
      + 'host each December to the state\'s largest cultural festival.'
  });

  await findOrCreatePlace({
    stateId: nagaland.id,
    cityId: kohima.id,
    categoryId: heritage,
    name: 'Kohima War Cemetery',
    description: 'A terraced Commonwealth war cemetery commemorating Allied '
      + 'soldiers who died in the 1944 Battle of Kohima, a turning point in '
      + 'the Burma Campaign, with an inscription on its memorial widely '
      + 'known as the Kohima Epitaph.',
    historicalSignificance: 'The Battle of Kohima, fought in April–June '
      + '1944, halted the Japanese advance into India and is often cited '
      + 'alongside the Battle of Imphal as marking the turning point of the '
      + 'Second World War\'s Burma Campaign.',
    bestTimeToVisit: 'October to May',
    timings: 'Dawn to dusk, daily',
    mapLink: 'https://maps.app.goo.gl/rr1vvqttRiJN28Ay5',
    latitude: 25.6667,
    longitude: 94.1167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSly_p8wzjFqD2tKUrTcoMWA57ojhTYNdHlC6FWCFaOOA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: nagaland.id,
    cityId: kohima.id,
    categoryId: heritage,
    name: 'Kisama Heritage Village',
    description: 'A cultural village built to represent the traditional '
      + 'architecture of Nagaland\'s different tribes, and the main venue '
      + 'for the annual Hornbill Festival, which showcases Naga music, '
      + 'dance, crafts, and food.',
    historicalSignificance: 'The Hornbill Festival has been held here each '
      + 'December since 2000, established by the state government to '
      + 'promote and preserve Naga tribal culture.',
    bestTimeToVisit: 'Early December, for the Hornbill Festival, or '
      + 'October to May generally',
    entryFee: 'Paid entry during festival period',
    mapLink: 'https://maps.app.goo.gl/tNPfduwXDCXmUL5d7',
    latitude: 25.6333,
    longitude: 94.1000,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR16IRQwqtnoSkSJjSa2w15MYFzykTbvL2TEg3ubDcNeA&s=10'}]
  });

  await findOrCreatePlace({
    stateId: nagaland.id,
    cityId: kohima.id,
    categoryId: nature,
    name: 'Dzukou Valley',
    description: 'A high-altitude valley on the Nagaland–Manipur border, '
      + 'reached by a multi-hour trek, known for its rolling green hills and '
      + 'a seasonal bloom of the rare Dzukou lily found only in this region.',
    bestTimeToVisit: 'June to September, for the valley\'s peak green season '
      + 'and lily bloom; or October to December for clearer trekking weather',
    mapLink: 'https://maps.app.goo.gl/VZNDWSmbUfFLgBzK9',
    latitude: 25.5500,
    longitude: 94.1167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjuOrbslnylX7DMhhUtB4zHerW6qklW3JTBdmjiBXZUQ&s'}]
  });

  // ---------------- Mon ----------------
  const mon = await findOrCreateCity({
    stateId: nagaland.id,
    name: 'Mon',
    description: 'A remote district in far northern Nagaland, homeland of '
      + 'the Konyak tribe, historically known for headhunting practices '
      + 'that ended decades ago, with some of the last living tattooed '
      + 'Konyak elders still residing in the area.'
  });

  await findOrCreatePlace({
    stateId: nagaland.id,
    cityId: mon.id,
    categoryId: heritage,
    name: 'Longwa Village',
    description: 'A Konyak village straddling the India-Myanmar border so '
      + 'directly that the chief\'s house is said to sit across both '
      + 'countries, known for traditional wooden Konyak architecture and as '
      + 'home to some of the last surviving tattooed former headhunters.',
    historicalSignificance: 'The Konyak practice of headhunting, tied '
      + 'historically to inter-village conflict, ended by the mid-20th '
      + 'century following the spread of Christianity and government '
      + 'intervention; the tattoos worn by the community\'s remaining elders '
      + 'are a living record of that earlier era.',
    bestTimeToVisit: 'October to April',
    mapLink: 'https://maps.app.goo.gl/bfJZvsjzXckWt3C9A',
    latitude: 26.9833,
    longitude: 95.1167,
    images: [{url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuSxSzZ3CZFN150g2ZKdc-A55TePqkDHQYsM2S3rtcw&s=10'}]
  });

  return nagaland;
};