import Link from 'next/link';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';

export default function PlaceCard({ place }) {
  const cover = place.images?.[0]?.imageUrl;

  return (
    <Link
      href={`/places/${place.slug}`}
      className="group block border border-line bg-paper hover:border-ink transition-colors"
    >
      <div className="relative aspect-[4/3] bg-paper-dim overflow-hidden">
        {cover ? (
          <Image
            src={cover}
            alt={place.images[0].altText || place.name}
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
        <div className="mb-2"><CategoryBadge category={place.category} /></div>
        <h3 className="font-display text-xl text-ink group-hover:text-madder transition-colors">
          {place.name}
        </h3>
        <p className="label-eyebrow mt-1">
          {place.city?.name}{place.city && place.state ? ', ' : ''}{place.state?.name}
        </p>
      </div>
    </Link>
  );
}
