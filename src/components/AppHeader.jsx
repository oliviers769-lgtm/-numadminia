import React, { useState, useEffect } from 'react';

export default function AppHeader({ onNavigate, onBack, backLabel, large, toggleText, t, isRTL, lang, switchLang, onDiagnostic }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const T = t || {};
  const nav = T.nav || {};
  const burger = T.burger || {};
  const moduleNames = T.moduleNames || {};

  const s = {
    header: {
      background: 'rgba(30,58,95,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,158,11,0.2)',
      padding: '0 1rem', height: isMobile ? 56 : 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 100,
      direction: isRTL ? 'rtl' : 'ltr',
      boxSizing: 'border-box', width: '100%',
    },
    logo: {
      fontFamily: 'Fraunces, serif',
      fontSize: isMobile ? 22 : 40,
      fontWeight: 700,
      color: '#fff', cursor: 'pointer', letterSpacing: '-0.5px',
      position: 'absolute', left: '50%', transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
    },
    logoAccent: { color: '#F59E0B' },
    backBtn: {
      background: 'rgba(245,158,11,0.15)',
      border: '1px solid rgba(245,158,11,0.3)',
      color: '#F59E0B', fontSize: 13, fontWeight: 600,
      padding: '6px 14px', borderRadius: 10, cursor: 'pointer',
    },
    burgerBtn: {
      width: 40, height: 40, borderRadius: 12,
      background: 'rgba(245,158,11,0.2)',
      border: '2px solid rgba(245,158,11,0.4)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 5, cursor: 'pointer', padding: 0,
      flexShrink: 0,
    },
    line: {
      width: 18, height: 2.5, borderRadius: 2,
      background: '#F59E0B', display: 'block',
    },
    dropdown: {
      position: 'fixed',
      top: isMobile ? 56 : 64,
      [isRTL ? 'left' : 'right']: 0,
      left: isMobile ? 0 : 'auto',
      background: '#fff', borderRadius: isMobile ? '0 0 16px 16px' : 16,
      boxShadow: '0 8px 40px rgba(30,58,95,0.25)',
      minWidth: isMobile ? '100vw' : 240,
      zIndex: 200, overflow: 'hidden',
      animation: 'fadeUp 0.2s ease both',
      direction: isRTL ? 'rtl' : 'ltr',
      maxHeight: '80vh', overflowY: 'auto',
    },
    menuItem: {
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 18px', cursor: 'pointer',
      fontSize: 14, fontWeight: 500, color: '#1F2937',
      background: 'none', border: 'none', width: '100%',
      textAlign: isRTL ? 'right' : 'left',
    },
    menuLabel: {
      fontSize: 11, fontWeight: 700, color: '#9CA3AF',
      letterSpacing: 1.5, textTransform: 'uppercase',
      padding: '10px 18px 4px',
      textAlign: isRTL ? 'right' : 'left',
    },
  };

  const MODULES_MENU = [
    { icon: '📬', id: 'courrier' }, { icon: '📄', id: 'pdf' },
    { icon: '✉️', id: 'email' }, { icon: '📁', id: 'dossier' },
    { icon: '🔒', id: 'securite' }, { icon: '🧾', id: 'impots' },
    { icon: '💊', id: 'cartevitale' }, { icon: '🏛️', id: 'rsacaf' },
    { icon: '🏠', id: 'logement' }, { icon: '🏥', id: 'dossiermedical' },
    { icon: '🎓', id: 'formation' }, { icon: '🚗', id: 'permis' },
    { icon: '🏦', id: 'banque' }, { icon: '📱', id: 'smartphone' },
  ];

  // Sur mobile : sélecteur de langue dans le burger menu
  const LANGS = [
    { code: 'fr', label: 'FR', color: '#003189' },
    { code: 'en', label: 'EN', color: '#C8102E' },
    { code: 'it', label: 'IT', color: '#009246' },
    { code: 'es', label: 'ES', color: '#AA151B' },
    { code: 'zh', label: '中', color: '#DE2910' },
    { code: 'ar', label: 'ع', color: '#007A3D' },
    { code: 'pt', label: 'PT', color: '#006600' },
  ];

  return (
    <header style={s.header}>
      {/* GAUCHE */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, zIndex: 1 }}>
        {onBack ? (
          <button style={s.backBtn} onClick={onBack}>
            {isRTL ? `${backLabel || nav.back} →` : `← ${backLabel || nav.back}`}
          </button>
        ) : (
          onDiagnostic && (
            <button onClick={onDiagnostic} style={{
              width: 36, height: 36, borderRadius: 10,
              background: 'rgba(6,182,212,0.2)',
              border: '2px solid rgba(6,182,212,0.5)',
              color: '#06B6D4', fontSize: '1.1rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              🤖
            </button>
          )
        )}
      </div>

      {/* CENTRE — Nom */}
      <div style={s.logo} onClick={() => onNavigate('home')}>
        Num<span style={s.logoAccent}>Admin</span>IA
      </div>

      {/* DROITE */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, zIndex: 1 }}>

        {/* Sélecteur langue — desktop seulement */}
        {!isMobile && switchLang && (
          <div style={{ display: 'flex', gap: 4 }}>
            {LANGS.map(({ code, label, color }) => (
              <button key={code} onClick={() => switchLang(code)} style={{
                background: lang === code ? color : 'rgba(255,255,255,0.08)',
                border: `2px solid ${lang === code ? color : 'rgba(255,255,255,0.2)'}`,
                color: '#fff', borderRadius: 8, padding: '4px 9px',
                fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer',
                opacity: lang === code ? 1 : 0.65, transition: 'all 0.15s',
              }}>
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Bouton A+ — desktop seulement */}
        {!isMobile && toggleText && (
          <button onClick={toggleText} style={{
            width: 40, height: 40, borderRadius: 10,
            background: large ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.1)',
            border: `2px solid ${large ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.2)'}`,
            color: large ? '#F59E0B' : 'rgba(255,255,255,0.6)',
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            A+
          </button>
        )}

        {/* Burger */}
        <div style={{ position: 'relative' }}>
          <button style={s.burgerBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={s.line} />
            <span style={s.line} />
            <span style={s.line} />
          </button>

          {menuOpen && (
            <>
              {/* Overlay mobile */}
              {isMobile && (
                <div onClick={() => setMenuOpen(false)} style={{
                  position: 'fixed', inset: 0, zIndex: 199,
                  background: 'rgba(0,0,0,0.3)',
                }} />
              )}
              <div style={s.dropdown}>
                {/* Sélecteur langue dans le menu mobile */}
                {isMobile && switchLang && (
                  <>
                    <div style={s.menuLabel}>{burger.language || 'Langue'}</div>
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', padding: '8px 18px 12px' }}>
                      {LANGS.map(({ code, label, color }) => (
                        <button key={code} onClick={() => { switchLang(code); setMenuOpen(false); }} style={{
                          background: lang === code ? color : 'rgba(30,58,95,0.1)',
                          border: `2px solid ${lang === code ? color : 'rgba(30,58,95,0.2)'}`,
                          color: lang === code ? '#fff' : '#374151',
                          borderRadius: 8, padding: '5px 12px',
                          fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer',
                        }}>
                          {label}
                        </button>
                      ))}
                    </div>
                    <div style={{ borderTop: '1px solid #F3F4F6' }} />
                  </>
                )}

                {/* A+ dans le menu mobile */}
                {isMobile && toggleText && (
                  <>
                    <button style={s.menuItem} onClick={() => { toggleText(); setMenuOpen(false); }}>
                      🔤 {nav.textLarger || 'Texte plus grand'}
                    </button>
                    <div style={{ borderTop: '1px solid #F3F4F6' }} />
                  </>
                )}

                <div style={s.menuLabel}>{burger.navigation || 'Navigation'}</div>
                {[
                  { label: `🏠 ${nav.home || 'Accueil'}`, target: 'home' },
                  { label: `💡 ${nav.jeexplique || "Je t'explique"}`, target: 'jeexplique' },
                ].map(item => (
                  <button key={item.target} style={s.menuItem}
                    onClick={() => { onNavigate(item.target); setMenuOpen(false); }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                    {item.label}
                  </button>
                ))}
                <div style={{ borderTop: '1px solid #F3F4F6' }} />
                <div style={s.menuLabel}>{burger.modules || 'Modules'}</div>
                {MODULES_MENU.map(item => (
                  <button key={item.id} style={s.menuItem}
                    onClick={() => { onNavigate('module', item.id); setMenuOpen(false); }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                    onMouseLeave={e => e.currentTarget.style.background = 'none'}>
                    {item.icon} {moduleNames[item.id] || item.id}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
