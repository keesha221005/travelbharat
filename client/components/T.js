'use client';

import { useLanguage } from '../lib/LanguageContext';

export default function T({ k, fallback }) {
  const { t } = useLanguage();
  return <>{t(k) || fallback || k}</>;
}