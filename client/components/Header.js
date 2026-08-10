'use client';

import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl tracking-tight text-ink">
            Travel<span className="text-madder">Bharat</span>
          </span>
          <span className="hidden sm:inline label-eyebrow">{t('siteTagline')}</span>
        </Link>

        <nav className="flex items-center gap-6 font-body text-sm text-ink-soft">
          <Link href="/" className="hover:text-madder transition-colors">{t('navStates')}</Link>
          <Link href="/search" className="hover:text-madder transition-colors">{t('navSearch')}</Link>
          <Link
            href="/admin/login"
            className="border border-ink px-3 py-1.5 text-ink hover:bg-ink hover:text-paper transition-colors"
          >
            {t('navAdmin')}
          </Link>
          <div className="flex border border-line" role="group" aria-label="Language">
            <button
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1.5 text-xs font-mono transition-colors ${
                lang === 'en' ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              aria-pressed={lang === 'hi'}
              className={`px-2.5 py-1.5 text-xs font-mono transition-colors border-l border-line ${
                lang === 'hi' ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
              }`}
            >
              हिं
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}