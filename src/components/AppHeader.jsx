import React, { useState } from 'react';
import LogoAnimated from './LogoAnimated';

export default function AppHeader({ onNavigate, onBack, backLabel, large, toggleText, t, isRTL, lang, switchLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fallback si t pas encore passé
  const T = t || {};
  const nav = T.nav || {};
  const burger = T.burger || {};
  const moduleNames = T.moduleNames || {};

  const s = {
    header: {
      background: 'rgba(30,58,95,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,158,11,0.2)',
      padding: '0 1.5rem', height: 64,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      position: 'sticky', top: 0, zIndex: 100,
      direction: isRTL ? 'rtl' : 'ltr',
    },
    logo: {
      fontFamily: 'Fraunces, serif', fontSize: 20, fontWeight: 700,
      color: '#fff', cursor: 'pointer', letterSpacing: '-0.5px',
      display: 'flex', alignItems: 'center',
    },
    logoAccent: { color: '#F59E0B' },
    backBtn: {
      background: 'rgba(245,158,11,0.15)',
      border: '1px solid rgba(245,158,11,0.3)',
      color: '#F59E0B', fontSize: 13, fontWeight: 600,
      padding: '6px 14px', borderRadius: 10, cursor: 'pointer',
      marginLeft: isRTL ? 0 : 0,
      marginRight: isRTL ? 0 : 12,
    },
    burgerBtn: {
      width: 44, height: 44, borderRadius: 12,
      background: 'rgba(245,158,11,0.2)',
      border: '2px solid rgba(245,158,11,0.4)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 5, cursor: 'pointer', padding: 0,
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    },
    line: {
      width: 20, height: 2.5, borderRadius: 2,
      background: '#F59E0B', display: 'block',
    },
    dropdown: {
      position: 'absolute',
      top: 72,
      [isRTL ? 'left' : 'right']: 16,
      background: '#fff', borderRadius: 16,
      boxShadow: '0 8px 40px rgba(30,58,95,0.25)',
      minWidth: 240, zIndex: 200, overflow: 'hidden',
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
    langBtn: (active) => ({
      padding: '6px 14px', borderRadius: 10, cursor: 'pointer',
      fontSize: 13, fontWeight: 700,
      background: active ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.1)',
      border: `2px solid ${active ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.2)'}`,
      color: active ? '#F59E0B' : 'rgba(255,255,255,0.6)',
    }),
  };

  const MODULES_MENU = [
    { icon: '📬', id: 'courrier' },
    { icon: '📄', id: 'pdf' },
    { icon: '✉️', id: 'email' },
    { icon: '📁', id: 'dossier' },
    { icon: '🔒', id: 'securite' },
    { icon: '🧾', id: 'impots' },
    { icon: '💊', id: 'cartevitale' },
    { icon: '🏛️', id: 'rsacaf' },
    { icon: '🏠', id: 'logement' },
    { icon: '🏥', id: 'dossiermedical' },
    { icon: '🎓', id: 'formation' },
    { icon: '🚗', id: 'permis' },
    { icon: '🏦', id: 'banque' },
    { icon: '📱', id: 'smartphone' },
  ];

  return (
    <header style={s.header}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {onBack && (
          <button style={s.backBtn} onClick={onBack}>
            {isRTL ? `${backLabel || nav.back} →` : `← ${backLabel || nav.back}`}
          </button>
        )}
        <div style={s.logo} onClick={() => onNavigate('home')}>
          <LogoAnimated height={56} />
          <span style={{ marginLeft: isRTL ? 0 : 8, marginRight: isRTL ? 8 : 0 }}>
            Num<span style={s.logoAccent}>Admin</span>IA
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

        {/* Sélecteur de langue */}
        {switchLang && (
          <div style={{ display: 'flex', gap: 4 }}>
            <button style={s.langBtn(lang === 'fr')} onClick={() => switchLang('fr')}>FR</button>
            <button style={s.langBtn(lang === 'pt')} onClick={() => switchLang('pt')}>PT</button>
            <button style={s.langBtn(lang === 'ar')} onClick={() => switchLang('ar')}>ع</button>
          </div>
        )}

        {/* Bouton A+ */}
        {toggleText && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 12, fontWeight: 600, color: '#F59E0B',
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: 20, padding: '5px 12px',
              whiteSpace: 'nowrap', cursor: 'pointer',
            }} onClick={toggleText}>
              {isRTL ? `${nav.textLarger || 'نص أكبر ؟'} ✦` : `✦ ${nav.textLarger || 'Texte plus grand ?'}`}
            </span>
            <button onClick={toggleText} style={{
              width: 44, height: 44, borderRadius: 12,
              background: large ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.1)',
              border: `2px solid ${large ? 'rgba(245,158,11,0.6)' : 'rgba(255,255,255,0.2)'}`,
              color: large ? '#F59E0B' : 'rgba(255,255,255,0.6)',
              fontSize: 16, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              A+
            </button>
          </div>
        )}

        {/* Burger */}
        <div style={{ position: 'relative' }}>
          <button style={s.burgerBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={s.line} />
            <span style={s.line} />
            <span style={s.line} />
          </button>

          {menuOpen && (
            <div style={s.dropdown}>
              <div style={s.menuLabel}>{burger.navigation || 'Navigation'}</div>
              {[
                { label: `🏠 ${nav.home || 'Accueil'}`, target: 'home', type: 'nav' },
                { label: `💡 ${nav.jeexplique || (isRTL ? 'كيفاش يخدم' : 'Je t\'explique')}`, target: 'jeexplique', type: 'nav' },
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
          )}
        </div>
      </div>
    </header>
  );
}
