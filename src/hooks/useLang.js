import { useState, useEffect } from 'react';
import { FR } from '../i18n/fr';
import { AR } from '../i18n/ar';
import { PT } from '../i18n/pt';

const LANGS = { fr: FR, ar: AR, pt: PT };

export function useLang() {
  const [lang, setLang] = useState(() => {
    try { return localStorage.getItem('numadminia_lang') || 'fr'; }
    catch { return 'fr'; }
  });

  const t = LANGS[lang] || FR;

  const switchLang = (code) => {
    setLang(code);
    try { localStorage.setItem('numadminia_lang', code); } catch {}
  };

  // Applique dir au document
  useEffect(() => {
    document.documentElement.setAttribute('dir', t.dir);
    document.documentElement.setAttribute('lang', t.lang);
  }, [t]);

  return { lang, t, switchLang, isRTL: t.dir === 'rtl' };
}
