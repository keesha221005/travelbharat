import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPlace, getNearbyPlaces } from '../../../lib/api';
import CategoryBadge from '../../../components/CategoryBadge';
import PlaceMap from '../../../components/PlaceMap';
import FeaturedDestinations from '../../../components/FeaturedDestinations';

export const revalidate = 30;

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export async function generateMetadata({ params }) {
  try {
    const res = await getPlace(params.slug);
    const place = res.data;
    const cover = place.images?.find((i) => i.isCover) || place.images?.[0];
    const description = place.description?.slice(0, 155)
      || `Plan your visit to ${place.name} in ${place.city?.name}, ${place.state?.name}.`;

    return {
      title: `${place.name} — ${place.city?.name}, ${place.state?.name}`,
      description,
      alternates: { canonical: `/places/${place.slug}` },
      openGraph: {
        title: place.name,
        description,
        url: `/places/${place.slug}`,
        type: 'article',
        images: cover ? [{ url: cover.imageUrl }] : undefined
      }
    };
  } catch (err) {
    return { title: 'Place not found' };
  }
}

export default async function PlacePage({ params }) {
  let place;
  try {
    const res = await getPlace(params.slug);
    place = res.data;
  } catch (err) {
    notFound();
  }

  let nearbyPlaces = [];
  try {
    const nearbyRes = await getNearbyPlaces(params.slug, 6);
    nearbyPlaces = nearbyRes.data;
  } catch (err) {
    nearbyPlaces = [];
  }

  const cover = place.images?.find((i) => i.isCover) || place.images?.[0];
  const gallery = place.images?.filter((i) => i.id !== cover?.id) || [];

  const facts = [
    { label: 'Best time to visit', value: place.bestTimeToVisit },
    { label: 'Entry fee', value: place.entryFee },
    { label: 'Timings', value: place.timings }
  ].filter((f) => f.value);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: place.name,
    description: place.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: place.city?.name,
      addressRegion: place.state?.name,
      addressCountry: 'IN'
    },
    ...(place.latitude && place.longitude ? {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: place.latitude,
        longitude: place.longitude
      }
    } : {}),
    image: place.images?.map((img) => img.imageUrl) || []
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'States', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: place.state?.name, item: `${SITE_URL}/states/${place.state?.slug}` },
      { '@type': 'ListItem', position: 3, name: place.city?.name, item: `${SITE_URL}/cities/${place.city?.slug}` },
      { '@type': 'ListItem', position: 4, name: place.name, item: `${SITE_URL}/places/${place.slug}` }
    ]
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <p className="label-eyebrow mb-3">
        <Link href="/" className="hover:text-madder">States</Link> /{' '}
        <Link href={`/states/${place.state?.slug}`} className="hover:text-madder">{place.state?.name}</Link> /{' '}
        <Link href={`/cities/${place.city?.slug}`} className="hover:text-madder">{place.city?.name}</Link> /{' '}
        {place.name}
      </p>

      <div className="mb-4"><CategoryBadge category={place.category} /></div>
      <h1 className="font-display text-5xl text-ink mb-8 max-w-3xl">{place.name}</h1>

      {/* Cover image */}
      {cover && (
        <div className="relative aspect-[16/9] bg-paper-dim mb-10 overflow-hidden">
          <Image
            src={cover.imageUrl}
            alt={cover.altText || place.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl text-ink mb-4">About</h2>
          <p className="font-body text-ink-soft leading-relaxed whitespace-pre-line mb-8">
            {place.description}
          </p>

          {place.historicalSignificance && (
            <>
              <h2 className="font-display text-2xl text-ink mb-4">Historical significance</h2>
              <p className="font-body text-ink-soft leading-relaxed whitespace-pre-line mb-8">
                {place.historicalSignificance}
              </p>
            </>
          )}

          {gallery.length > 0 && (
            <>
              <h2 className="font-display text-2xl text-ink mb-4">Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {gallery.map((img) => (
                  <div key={img.id} className="relative aspect-square bg-paper-dim overflow-hidden">
                    <Image
                      src={img.imageUrl}
                      alt={img.altText || place.name}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {(place.latitude && place.longitude || place.mapLink) && (
            <>
              <h2 className="font-display text-2xl text-ink mb-4">Location</h2>
              <PlaceMap
                latitude={place.latitude ? Number(place.latitude) : null}
                longitude={place.longitude ? Number(place.longitude) : null}
                name={place.name}
                mapLink={place.mapLink}
              />
            </>
          )}
        </div>

        {/* Facts sidebar */}
        <aside>
          <div className="border border-ink p-6 mb-6">
            <p className="label-eyebrow mb-4">Quick facts</p>
            {facts.length === 0 && (
              <p className="font-body text-sm text-ink-soft">No details recorded yet.</p>
            )}
            <dl className="space-y-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="label-eyebrow mb-0.5">{f.label}</dt>
                  <dd className="font-mono text-sm text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {place.nearbyPlaces?.length > 0 && (
            <div className="border border-line p-6">
              <p className="label-eyebrow mb-4">Nearby attractions</p>
              <ul className="space-y-3">
                {place.nearbyPlaces.map((np) => (
                  <li key={np.id} className="flex items-baseline justify-between gap-2">
                    <Link href={`/places/${np.slug}`} className="font-body text-ink hover:text-madder transition-colors">
                      {np.name}
                    </Link>
                    {np.NearbyAttraction?.distanceKm && (
                      <span className="font-mono text-xs text-ink-soft whitespace-nowrap">
                        {np.NearbyAttraction.distanceKm} km
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      {nearbyPlaces.length > 0 && (
        <div className="mt-14">
          <div className="rule-thick mb-10" />
          <h2 className="font-display text-3xl text-ink mb-8">Nearby destinations</h2>
          <FeaturedDestinations places={nearbyPlaces} />
        </div>
      )}
    </div>
  );
}