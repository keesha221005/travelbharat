'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '../lib/LanguageContext';

const PlaceMapClient = dynamic(() => import('./PlaceMapClient'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center label-eyebrow">
      Loading map…
    </div>
  )
});

export default function PlaceMap({ latitude, longitude, name, mapLink }) {
  const hasCoordinates = Boolean(latitude && longitude);
  const { t } = useLanguage();

  if (!hasCoordinates && !mapLink) return null;

  // No coordinates, but a map link was provided — show a simple link instead
  // of nothing, since we can't render an embedded map without lat/lng.
  if (!hasCoordinates) {
    return (
      <div className="border border-ink mb-10 px-4 py-4 flex items-center justify-between">
        <p className="label-eyebrow">No coordinates on file for this place yet.</p>
        <a
          href={mapLink}
          target="_blank"
          rel="noreferrer"
          className="label-eyebrow text-madder hover:underline whitespace-nowrap"
        >
          {t('openInMaps')}
        </a>
      </div>
    );
  }

  return (
    <div className="border border-ink mb-10">
      <p className="sr-only">
        Interactive map showing the location of {name} at coordinates {latitude}, {longitude}.
        {mapLink ? ' A link to open this location in an external maps application follows.' : ''}
      </p>
      <div className="h-80" role="application" aria-label={`Map of ${name}`}>
        <PlaceMapClient latitude={latitude} longitude={longitude} name={name} />
      </div>
      {mapLink && (
        <div className="flex justify-end px-4 py-3 border-t border-line">
          <a
            href={mapLink}
            target="_blank"
            rel="noreferrer"
            className="label-eyebrow text-madder hover:underline"
          >
            Open in Maps →
          </a>
        </div>
      )}
    </div>
  );
}