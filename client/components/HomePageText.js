'use client';

import { useLanguage } from '../lib/LanguageContext';

export function HeroText() {
  const { t } = useLanguage();
  return (
    <>
      <p className="label-eyebrow mb-4">{t('heroEyebrow')}</p>
      <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] text-ink max-w-3xl">
        Every state, city, and destination —
        <span className="italic text-madder"> indexed</span> for the traveler,
        the student, and the curious.
      </h1>
      <p className="font-body text-ink-soft max-w-xl mt-6 leading-relaxed">
        {t('heroSubtitle')}
      </p>
    </>
  );
}

export function SectionHeading({ i18nKey, fallback }) {
  const { t } = useLanguage();
  return <>{t(i18nKey) || fallback}</>;
}