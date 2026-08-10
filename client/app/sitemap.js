import { getStates, getCities, getPlaces } from '../lib/api';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default async function sitemap() {
  const staticRoutes = [
    { url: `${SITE_URL}/`, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/search`, changeFrequency: 'daily', priority: 0.8 }
  ];

  let states = [];
  let cities = [];
  let places = [];

  try {
    states = (await getStates()).data;
  } catch (err) {
    states = [];
  }

  try {
    cities = (await getCities()).data;
  } catch (err) {
    cities = [];
  }

  try {
    places = (await getPlaces({ limit: '2000' })).data;
  } catch (err) {
    places = [];
  }

  const stateRoutes = states.map((s) => ({
    url: `${SITE_URL}/states/${s.slug}`,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const cityRoutes = cities.map((c) => ({
    url: `${SITE_URL}/cities/${c.slug}`,
    changeFrequency: 'weekly',
    priority: 0.6
  }));

  const placeRoutes = places.map((p) => ({
    url: `${SITE_URL}/places/${p.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9
  }));

  return [...staticRoutes, ...stateRoutes, ...cityRoutes, ...placeRoutes];
}