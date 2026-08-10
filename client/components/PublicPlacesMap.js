'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const PublicPlacesMapClient = dynamic(() => import('./PublicPlacesMapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center label-eyebrow">
      Loading map…
    </div>
  )
});

export default function PublicPlacesMap({ places }) {
  const [search, setSearch] = useState('');

  const withCoords = useMemo(
    () => places.filter((p) => p.latitude && p.longitude),
    [places]
  );

  const filtered = useMemo(() => {
    if (!search.trim()) return withCoords;
    const q = search.toLowerCase();
    return withCoords.filter((p) => (
      p.name.toLowerCase().includes(q)
      || p.city?.name?.toLowerCase().includes(q)
      || p.state?.name?.toLowerCase().includes(q)
    ));
  }, [withCoords, search]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <input
          type="text"
          placeholder="Search the map by place, city, or state…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-96 border border-ink bg-paper px-4 py-2.5 font-body text-ink placeholder:text-ink-soft"
        />
        <span className="label-eyebrow whitespace-nowrap">
          {filtered.length} of {withCoords.length} places shown
        </span>
      </div>
      <div className="border border-ink h-[500px]">
        <PublicPlacesMapClient places={filtered} />
      </div>
    </div>
  );
}