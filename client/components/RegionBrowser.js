'use client';

import { useState } from 'react';
import Link from 'next/link';

const REGION_ORDER = ['North', 'Northeast', 'East', 'Central', 'West', 'South'];

export default function RegionBrowser({ states }) {
  const availableRegions = REGION_ORDER.filter((r) => states.some((s) => s.region === r));
  const unassigned = states.filter((s) => !s.region);
  const [active, setActive] = useState(availableRegions[0] || null);

  const visibleStates = active
    ? states.filter((s) => s.region === active)
    : unassigned;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {availableRegions.map((region) => (
          <button
            key={region}
            onClick={() => setActive(region)}
            aria-pressed={active === region}
            className={`border px-4 py-2 font-body text-sm transition-colors ${
              active === region
                ? 'bg-ink text-paper border-ink'
                : 'border-line text-ink-soft hover:border-ink hover:text-ink'
            }`}
          >
            {region}
          </button>
        ))}
        {unassigned.length > 0 && (
          <button
            onClick={() => setActive(null)}
            className={`border px-4 py-2 font-body text-sm transition-colors ${
              active === null
                ? 'bg-ink text-paper border-ink'
                : 'border-line text-ink-soft hover:border-ink hover:text-ink'
            }`}
          >
            Unassigned
          </button>
        )}
      </div>

      {visibleStates.length === 0 ? (
        <p className="label-eyebrow">No states in this region yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {visibleStates.map((state) => (
            <Link
              key={state.id}
              href={`/states/${state.slug}`}
              className="border border-line hover:border-madder hover:text-madder transition-colors px-4 py-3 font-body text-ink"
            >
              {state.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}