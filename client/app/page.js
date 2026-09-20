import Link from 'next/link';
import { getStates, getCategories, getPlaces } from '../lib/api';
import StateIndex from '../components/StateIndex';
import RegionBrowser from '../components/RegionBrowser';
import FeaturedDestinations from '../components/FeaturedDestinations';
import CategoryBadge from '../components/CategoryBadge';
import PublicPlacesMap from '../components/PublicPlacesMap';

export default async function HomePage() {
  let states = [];
  let categories = [];
  let featuredPlaces = [];
  let allPlacesForMap = [];
  let loadError = null;

  try {
    [states, categories, featuredPlaces, allPlacesForMap] = await Promise.all([
      getStates().then((r) => r.data),
      getCategories().then((r) => r.data),
      getPlaces({ limit: 30 }).then((r) => r.data).catch(() => []),
      getPlaces({ limit: '1000' }).then((r) => r.data).catch(() => [])
    ]);
  } catch (err) {
    loadError = err.message;
  }

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-14">
        <p className="label-eyebrow mb-4">Volume I &middot; A digital gazetteer of India</p>
        <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-ink max-w-3xl">
          Every state, city, and destination —
          <span className="italic text-madder"> indexed</span> for the traveler,
          the student, and the curious.
        </h1>
        <p className="font-body text-ink-soft max-w-xl mt-6 leading-relaxed">
          TravelBharat organizes tourist places across India by state and city,
          verified for accuracy, so you spend less time searching and more time planning.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map((c) => (
            <Link key={c.id} href={`/search?category=${c.slug}`}>
              <CategoryBadge category={c} />
            </Link>
          ))}
        </div>
      </section>

      {loadError && (
        <div className="mx-auto max-w-6xl px-6 mb-14">
          <p className="border border-madder text-madder px-4 py-3 label-eyebrow">
            Could not load content: {loadError}. Is the backend running on port 5000?
          </p>
        </div>
      )}

      {!loadError && (
        <>
          {/* Featured destinations - horizontal carousel */}
          {featuredPlaces.length > 0 && (
            <>
              <div className="mx-auto max-w-6xl px-6"><div className="rule-thick" /></div>
              <section className="mx-auto max-w-6xl px-6 py-14">
                <div className="flex items-baseline justify-between mb-8">
                  <h2 className="font-display text-3xl text-ink">Featured destinations</h2>
                  <Link href="/search" className="label-eyebrow hover:text-madder">
                    See all →
                  </Link>
                </div>
                <FeaturedDestinations places={featuredPlaces} />
              </section>
            </>
          )}

          {/* Region browser - interactive tabs */}
          <div className="mx-auto max-w-6xl px-6"><div className="rule-thick" /></div>
          <section className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-display text-3xl text-ink">Browse by region</h2>
              <span className="label-eyebrow">{states.length} states &amp; UTs</span>
            </div>

            {states.length === 0 ? (
              <p className="label-eyebrow">
                No states yet. Log in to the admin panel to add the first entry.
              </p>
            ) : (
              <RegionBrowser states={states} />
            )}
          </section>

          {/* Interactive map of every place */}
          <div className="mx-auto max-w-6xl px-6"><div className="rule-thick" /></div>
          <section className="mx-auto max-w-6xl px-6 py-14">
            <div className="flex items-baseline justify-between mb-8">
              <h2 className="font-display text-3xl text-ink">Explore on the map</h2>
              <span className="label-eyebrow">{allPlacesForMap.length} published places</span>
            </div>
            <PublicPlacesMap places={allPlacesForMap} />
          </section>

          {/* Full alphabetical index */}
          {states.length > 0 && (
            <>
              <div className="mx-auto max-w-6xl px-6"><div className="rule-thick" /></div>
              <section className="mx-auto max-w-6xl px-6 py-14">
                <div className="flex items-baseline justify-between mb-10">
                  <h2 className="font-display text-3xl text-ink">Full index, A–Z</h2>
                  <span className="label-eyebrow">{states.length} entries</span>
                </div>
                <StateIndex states={states} />
              </section>
            </>
          )}
        </>
      )}
    </div>
  );
}