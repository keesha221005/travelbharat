import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getState } from '../../../lib/api';

export const revalidate = 60;

export async function generateMetadata({ params }) {
  try {
    const res = await getState(params.slug);
    const state = res.data;
    const description = state.description?.slice(0, 155)
      || `Explore tourist destinations, cities, and places to visit in ${state.name}, India.`;

    return {
      title: `${state.name} Travel Guide — Places to Visit`,
      description,
      alternates: { canonical: `/states/${state.slug}` },
      openGraph: {
        title: `${state.name} Travel Guide`,
        description,
        url: `/states/${state.slug}`,
        images: state.coverImageUrl ? [{ url: state.coverImageUrl }] : undefined
      }
    };
  } catch (err) {
    return { title: 'State not found' };
  }
}

export default async function StatePage({ params }) {
  let state;
  try {
    const res = await getState(params.slug);
    state = res.data;
  } catch (err) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="label-eyebrow mb-3">
        <Link href="/" className="hover:text-madder">States</Link> / {state.name}
      </p>
      <h1 className="font-display text-5xl text-ink mb-4">{state.name}</h1>
      {state.region && <p className="label-eyebrow mb-6">{state.region} India</p>}
      {state.description && (
        <p className="font-body text-ink-soft max-w-2xl leading-relaxed mb-10">
          {state.description}
        </p>
      )}

      <div className="rule-thick mb-10" />

      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-2xl text-ink">Cities</h2>
        <span className="label-eyebrow">{state.cities?.length || 0} entries</span>
      </div>

      {(!state.cities || state.cities.length === 0) && (
        <p className="label-eyebrow">No cities added for this state yet.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {state.cities?.map((city) => (
          <Link
            key={city.id}
            href={`/cities/${city.slug}`}
            className="group border border-line hover:border-ink transition-colors block"
          >
            <div className="relative aspect-[4/3] bg-paper-dim overflow-hidden">
              {city.coverImageUrl ? (
                <Image
                  src={city.coverImageUrl}
                  alt={city.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center label-eyebrow">
                  No image yet
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-display text-xl text-ink group-hover:text-madder transition-colors">
                {city.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
