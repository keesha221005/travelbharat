'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { translate } from './i18n';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const stored = window.localStorage.getItem('travelbharat_lang');
    if (stored === 'hi' || stored === 'en') {
      setLang(stored);
    }
  }, []);

  const changeLang = useCallback((next) => {
    setLang(next);
    window.localStorage.setItem('travelbharat_lang', next);
  }, []);

  const t = useCallback((key) => translate(lang, key), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang: changeLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}