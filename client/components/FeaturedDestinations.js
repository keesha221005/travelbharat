'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryBadge from './CategoryBadge';

export default function FeaturedDestinations({ places }) {
  const scrollRef = useRef(null);

  function scroll(direction) {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }

  if (!places || places.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {places.map((place) => {
          const cover = place.images?.[0]?.imageUrl;
          return (
            <Link
              key={place.id}
              href={`/places/${place.slug}`}
              className="group flex-shrink-0 w-72 sm:w-80 snap-start border border-line hover:border-ink transition-colors bg-paper"
            >
              <div className="relative aspect-[4/3] bg-paper-dim overflow-hidden">
                {cover ? (
                  <Image
                    src={cover}
                    alt={place.images[0].altText || place.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="320px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center label-eyebrow">
                    No image yet
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="mb-2"><CategoryBadge category={place.category} /></div>
                <h3 className="font-display text-lg text-ink group-hover:text-madder transition-colors">
                  {place.name}
                </h3>
                <p className="label-eyebrow mt-1">
                  {place.city?.name}, {place.state?.name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="border border-ink w-9 h-9 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
        >
          ←
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="border border-ink w-9 h-9 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors"
        >
          →
        </button>
      </div>
    </div>
  );
}