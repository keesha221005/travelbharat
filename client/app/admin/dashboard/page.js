'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { adminGetPlaces, adminVerifyPlace, adminDeletePlace } from '../../../lib/api';
import { getToken, getAdmin, clearSession } from '../../../lib/auth';

const STATUS_STYLES = {
  draft: 'border-sandstone text-sandstone',
  published: 'border-teal text-teal',
  archived: 'border-ink-soft text-ink-soft'
};

export default function AdminDashboardPage() {
  const router = useRouter();
  const [admin, setAdmin] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionError, setActionError] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.replace('/admin/login');
      return;
    }
    setAdmin(getAdmin());
    loadPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadPlaces() {
    setLoading(true);
    try {
      const res = await adminGetPlaces(getToken(), { limit: 100 });
      setPlaces(res.data);
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

      {actionError && (
        <p className="border border-madder text-madder px-4 py-3 label-eyebrow mb-6">
          {actionError}
        </p>
      )}

      <div className="rule-thick mb-6" />

      {loading && <p className="label-eyebrow">Loading places…</p>}

      {!loading && places.length === 0 && (
        <p className="label-eyebrow">No places yet. Add the first one above.</p>
      )}

      <div className="divide-y divide-line">
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
    </div>
  );
}