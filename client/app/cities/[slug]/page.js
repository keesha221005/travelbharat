import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCity, getPlaces } from '../../../lib/api';
import PlaceCard from '../../../components/PlaceCard';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  try {
    const res = await getCity(params.slug);
    const city = res.data;
    const description = city.description?.slice(0, 155)
      || `Discover tourist places to visit in ${city.name}, ${city.state?.name}.`;

    return {
      title: `${city.name} Travel Guide — ${city.state?.name}`,
      description,
      alternates: { canonical: `/cities/${city.slug}` },
      openGraph: {
        title: `${city.name} Travel Guide`,
        description,
        url: `/cities/${city.slug}`,
        images: city.coverImageUrl ? [{ url: city.coverImageUrl }] : undefined
      }
    };
  } catch (err) {
    return { title: 'City not found' };
  }
}

export default async function CityPage({ params }) {
  let city;
  try {
    const res = await getCity(params.slug);
    city = res.data;
  } catch (err) {
    notFound();
  }

  let places = [];
  try {
    const res = await getPlaces({ city: params.slug, limit: 24 });
    places = res.data;
  } catch (err) {
    places = [];
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="label-eyebrow mb-3">
        <Link href="/" className="hover:text-madder">States</Link> /{' '}
        <Link href={`/states/${city.state?.slug}`} className="hover:text-madder">
          {city.state?.name}
        </Link>{' '}
        / {city.name}
      </p>
      <h1 className="font-display text-5xl text-ink mb-4">{city.name}</h1>
      {city.description && (
        <p className="font-body text-ink-soft max-w-2xl leading-relaxed mb-10">
          {city.description}
        </p>
      )}

      <div className="rule-thick mb-10" />

      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-2xl text-ink">Places to visit</h2>
        <span className="label-eyebrow">{places.length} entries</span>
      </div>

      {places.length === 0 && (
       <p className="label-eyebrow">No published places for this city yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>
    </div>
  );
}
