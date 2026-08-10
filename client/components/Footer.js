'use client';

import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="rule-thick mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row justify-between gap-4">
        <p className="font-display text-lg text-ink">TravelBharat</p>
        <p className="label-eyebrow max-w-md">
          {t('footerTagline')}
        </p>
      </div>
    </footer>
  );
}