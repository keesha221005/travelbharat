'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  adminGetPlaces, adminVerifyPlace, adminDeletePlace, getStates, getCategories
} from '../../../lib/api';
import { getToken, getAdmin, clearSession } from '../../../lib/auth';

const STATUS_STYLES = {
  draft: 'border-sandstone text-sandstone',
  published: 'border-teal text-teal',
  archived: 'border-ink-soft text-ink-soft'
};

const PAGE_SIZE = 25;

export default function AdminDashboardPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [places, setPlaces] = useState([]);
  const [states, setStates] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionError, setActionError] = useState(null);

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace('/admin/login');
      return;
    }
    setAdmin(getAdmin());
    getStates().then((r) => setStates(r.data)).catch(() => {});
    getCategories().then((r) => setCategories(r.data)).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Any filter change resets back to page 1
  useEffect(() => {
    setPage(1);
  }, [search, status, state, category]);

  useEffect(() => {
    if (!admin) return;
    loadPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin, search, status, state, category, page]);

  async function loadPlaces() {
    setLoading(true);
    setActionError(null);
    try {
      const params = { limit: String(PAGE_SIZE), page: String(page) };
      if (search) params.search = search;
      if (status) params.status = status;
      if (state) params.state = state;
      if (category) params.category = category;

      const res = await adminGetPlaces(getToken(), params);
      setPlaces(res.data);
      setTotalPages(res.meta?.totalPages || 1);
      setTotal(res.meta?.total || res.data.length);
    } catch (err) {
      setActionError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleVerify(id) {
    setActionError(null);
    try {
      await adminVerifyPlace(getToken(), id);
      loadPlaces();
    } catch (err) {
      setActionError(err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Delete this place permanently?')) return;
    setActionError(null);
    try {
      await adminDeletePlace(getToken(), id);
      loadPlaces();
    } catch (err) {
      setActionError(err.message);
    }
  }

  function handleLogout() {
    clearSession();
    router.push('/admin/login');
  }

  function clearFilters() {
    setSearch('');
    setStatus('');
    setState('');
    setCategory('');
  }

  const hasActiveFilters = search || status || state || category;

  if (!admin) return null;

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-baseline justify-between mb-2">
        <p className="label-eyebrow">Signed in as {admin.email} ({admin.role})</p>
        <div className="flex items-center gap-4">
          <Link href="/admin/change-password" className="label-eyebrow hover:text-madder">
            Change password
          </Link>
          <button onClick={handleLogout} className="label-eyebrow hover:text-madder">
            Sign out
          </button>
        </div>
      </div>
      <h1 className="font-display text-4xl text-ink mb-8">Content dashboard</h1>

      <div className="flex flex-wrap gap-3 mb-10">
        <Link
          href="/admin/states/new"
          className="inline-block border border-ink text-ink px-4 py-2.5 font-body hover:bg-ink hover:text-paper transition-colors"
        >
          + Add new state
        </Link>
        <Link
          href="/admin/cities/new"
          className="inline-block border border-ink text-ink px-4 py-2.5 font-body hover:bg-ink hover:text-paper transition-colors"
        >
          + Add new city
        </Link>
        <Link
          href="/admin/manage"
          className="inline-block border border-madder text-madder px-4 py-2.5 font-body hover:bg-madder hover:text-paper transition-colors"
        >
          Manage state/city images
        </Link>
        <Link
          href="/admin/map"
          className="inline-block border border-teal text-teal px-4 py-2.5 font-body hover:bg-teal hover:text-paper transition-colors"
        >
          View places on map
        </Link>
        <Link
          href="/admin/places/new"
          className="inline-block bg-ink text-paper px-4 py-2.5 font-body hover:bg-madder transition-colors"
        >
          + Add new place
        </Link>
      </div>

      {/* Search & filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label htmlFor="dash-search" className="sr-only">Search places</label>
          <input
            id="dash-search"
            type="text"
            placeholder="Search by name…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink placeholder:text-ink-soft"
          />
        </div>
        <div>
          <label htmlFor="dash-status" className="sr-only">Filter by status</label>
          <select
            id="dash-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-ink bg-paper px-4 py-2.5 font-body text-ink"
          >
            <option value="">All statuses</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            <option value="archived">Archived</option>
          </select>
        </div>
        <div>
          <label htmlFor="dash-state" className="sr-only">Filter by state</label>
          <select
            id="dash-state"
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
          <label htmlFor="dash-category" className="sr-only">Filter by category</label>
          <select
            id="dash-category"
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

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="label-eyebrow text-madder hover:underline mb-6"
        >
          Clear all filters
        </button>
      )}

      {actionError && (
        <p className="border border-madder text-madder px-4 py-3 label-eyebrow mb-6">
          {actionError}
        </p>
      )}

      <div className="rule-thick mb-4" />

      {!loading && (
        <p className="label-eyebrow mb-6">
          {total} place{total === 1 ? '' : 's'}
          {totalPages > 1 && ` — page ${page} of ${totalPages}`}
        </p>
      )}

      {loading && <p className="label-eyebrow">Loading places…</p>}

      {!loading && places.length === 0 && (
        <p className="label-eyebrow">No places match these filters.</p>
      )}

      <div className="divide-y divide-line mb-8">
        {places.map((place) => (
          <div key={place.id} className="py-4 flex items-center justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="font-display text-lg text-ink">{place.name}</p>
                <span className={`border px-2 py-0.5 label-eyebrow ${STATUS_STYLES[place.status] || ''}`}>
                  {place.status}
                </span>
              </div>
              <p className="label-eyebrow">
                {place.city?.name}, {place.state?.name} — {place.category?.name}
                {' · '}{place.images?.length || 0} image{place.images?.length === 1 ? '' : 's'}
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href={`/admin/places/${place.id}/edit`}
                className="border border-ink text-ink px-3 py-1.5 text-sm font-body hover:bg-ink hover:text-paper transition-colors"
              >
                Edit &amp; images
              </Link>
              {place.status !== 'published' && (
                <button
                  onClick={() => handleVerify(place.id)}
                  className="border border-teal text-teal px-3 py-1.5 text-sm font-body hover:bg-teal hover:text-paper transition-colors"
                >
                  Verify &amp; publish
                </button>
              )}
              <button
                onClick={() => handleDelete(place.id)}
                className="border border-madder text-madder px-3 py-1.5 text-sm font-body hover:bg-madder hover:text-paper transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {!loading && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="border border-ink px-4 py-2 font-body text-sm hover:bg-ink hover:text-paper transition-colors disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            ← Previous
          </button>
          <span className="label-eyebrow px-3">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
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