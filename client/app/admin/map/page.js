'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { adminGetPlaces } from '../../../lib/api';
import { getToken } from '../../../lib/auth';

const AdminPlacesMapClient = dynamic(() => import('../../../components/AdminPlacesMapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center label-eyebrow">
      Loading map…
    </div>
  )
});

export default function AdminMapPage() {
  const router = useRouter();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!getToken()) {
      router.replace('/admin/login');
      return;
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    setLoading(true);
    try {
      const res = await adminGetPlaces(getToken(), { limit: '1000' });
      setPlaces(res.data);
    } finally {
      setLoading(false);
    }
  }

  const withCoords = places.filter((p) => p.latitude && p.longitude);
  const withoutCoords = places.filter((p) => !p.latitude || !p.longitude);
  const filtered = search
    ? withCoords.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : withCoords;

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="label-eyebrow mb-3">Content management</p>
      <h1 className="font-display text-4xl text-ink mb-2">Places map</h1>
      <p className="label-eyebrow mb-8">
        {withCoords.length} of {places.length} places have coordinates
        {withoutCoords.length > 0 && ` — ${withoutCoords.length} missing coordinates`}
      </p>

      <input
        type="text"
        placeholder="Filter by name…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-80 border border-ink bg-paper px-4 py-2.5 font-body text-ink mb-6"
      />

      {loading ? (
        <p className="label-eyebrow">Loading places…</p>
      ) : (
        <div className="border border-ink h-[600px]">
          <AdminPlacesMapClient places={filtered} />
        </div>
      )}
    </div>
  );
}