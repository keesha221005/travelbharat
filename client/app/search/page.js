'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { getPlaces, getCategories, getStates, getCities } from '../../lib/api';
import PlaceCard from '../../components/PlaceCard';

const PAGE_SIZE = 24;

function SearchInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '');
  const [state, setState] = useState(searchParams.get('state') || '');
  const [city, setCity] = useState(searchParams.get('city') || '');
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getCategories().then((r) => setCategories(r.data)).catch(() => {});
    getStates().then((r) => setStates(r.data)).catch(() => {});
  }, []);

  useEffect(() => {
    if (!state) {
      setCities([]);
      return;
    }
    getCities({ state }).then((r) => setCities(r.data)).catch(() => setCities([]));
  }, [state]);

  useEffect(() => {
    if (city && !cities.some((c) => c.slug === city)) {
      setCity('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cities]);

  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, state, city]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const params = { limit: String(PAGE_SIZE), page: String(page) };
    if (search) params.search = search;
    if (category) params.category = category;
    if (state) params.state = state;
    if (city) params.city = city;

    getPlaces(params)
      .then((r) => {
        setPlaces(r.data);
        setTotalPages(r.meta?.totalPages || 1);
        setTotal(r.meta?.total || r.data.length);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    const query = new URLSearchParams(params).toString();
    router.replace(`/search${query ? `?${query}` : ''}`, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, state, city, page]);

  function goToPage(nextPage) {
    if (nextPage < 1 || nextPage > totalPages) return;
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="label-eyebrow mb-3">Search the index</p>
      <h1 className="font-display text-5xl text-ink mb-10">Find a destination</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label htmlFor="search-input" className="sr-only">Search by place name</label>
          <input
            id="search-input"
            type="text"
            placeholder="Search by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink placeholder:text-ink-soft"
          />
        </div>
        <div>
          <label htmlFor="state-select" className="sr-only">Filter by state</label>
          <select
            id="state-select"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink"
          >
            <option value="">All states</option>
            {states.map((s) => (
              <option key={s.id} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city-select" className="sr-only">Filter by city</label>
          <select
            id="city-select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink disabled:opacity-50"
            disabled={!state}
          >
            <option value="">{state ? 'All cities' : 'Select a state first'}</option>
            {cities.map((c) => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category-select" className="sr-only">Filter by category</label>
          <select
            id="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {(state || city || category || search) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {search && <FilterChip label={`"${search}"`} onClear={() => setSearch('')} />}
          {state && (
            <FilterChip
              label={states.find((s) => s.slug === state)?.name || state}
              onClear={() => setState('')}
            />
          )}
          {city && (
            <FilterChip
              label={cities.find((c) => c.slug === city)?.name || city}
              onClear={() => setCity('')}
            />
          )}
          {category && (
            <FilterChip
              label={categories.find((c) => c.slug === category)?.name || category}
              onClear={() => setCategory('')}
            />
          )}
        </div>
      )}

      <div className="rule-thick mb-6" />

      <div aria-live="polite" aria-atomic="true">
        {!loading && !error && (
          <p className="label-eyebrow mb-6">
            {total} {total === 1 ? 'place found' : 'places found'}
            {totalPages > 1 && ` — page ${page} of ${totalPages}`}
          </p>
        )}

        {loading && <p className="label-eyebrow">	Searching…</p>}
        {error && (
          <p className="border border-madder text-madder px-4 py-3 label-eyebrow">
            {error}
          </p>
        )}
        {!loading && !error && places.length === 0 && (
          <p className="label-eyebrow">No places match your search.</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {places.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

      {!loading && !error && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="border border-ink px-4 py-2 font-body text-sm hover:bg-ink hover:text-paper transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            ← Previous
          </button>

          <PageNumbers page={page} totalPages={totalPages} onGoTo={goToPage} />

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === totalPages}
            className="border border-ink px-4 py-2 font-body text-sm hover:bg-ink hover:text-paper transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

function PageNumbers({ page, totalPages, onGoTo }) {
  const pages = [];
  const start = Math.max(1, page - 2);
  const end = Math.min(totalPages, start + 4);

  for (let p = start; p <= end; p += 1) {
    pages.push(p);
  }

  return (
    <div className="flex items-center gap-1 mx-2">
      {start > 1 && <span className="label-eyebrow px-1">…</span>}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onGoTo(p)}
          aria-current={p === page ? 'page' : undefined}
          className={`w-9 h-9 text-sm font-body transition-colors ${
            p === page
              ? 'bg-ink text-paper'
              : 'border border-line text-ink-soft hover:border-ink hover:text-ink'
          }`}
        >
          {p}
        </button>
      ))}
      {end < totalPages && <span className="label-eyebrow px-1">…</span>}
    </div>
  );
}

function FilterChip({ label, onClear }) {
  return (
    <button
      onClick={onClear}
      className="inline-flex items-center gap-1.5 border border-madder text-madder px-3 py-1 text-sm font-body hover:bg-madder hover:text-paper transition-colors"
    >
      {label}
      <span aria-hidden="true">×</span>
    </button>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-14 label-eyebrow">Loading…</div>}>
      <SearchInner />
    </Suspense>
  );
}