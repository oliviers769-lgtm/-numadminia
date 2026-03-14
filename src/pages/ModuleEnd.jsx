import React, { useState, useEffect } from 'react';
import AppHeader from '../components/AppHeader';

const BG = {
  minHeight: '100vh',
  backgroundImage: "url('/bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};

const BADGE_META = {
  courrier:       { emoji: '📬', color: '#F59E0B', next: 'pdf' },
  pdf:            { emoji: '📄', color: '#10B981', next: 'email' },
  email:          { emoji: '✉️', color: '#3B82F6', next: 'dossier' },
  dossier:        { emoji: '📁', color: '#8B5CF6', next: 'securite' },
  securite:       { emoji: '🔒', color: '#EF4444', next: 'impots' },
  impots:         { emoji: '🧾', color: '#F97316', next: 'cartevitale' },
  cartevitale:    { emoji: '💊', color: '#06B6D4', next: 'rsacaf' },
  rsacaf:         { emoji: '🏛️', color: '#10B981', next: 'logement' },
  logement:       { emoji: '🏠', color: '#8B5CF6', next: 'dossiermedical' },
  dossiermedical: { emoji: '🏥', color: '#EF4444', next: 'formation' },
  formation:      { emoji: '🎓', color: '#6366F1', next: 'permis' },
  permis:         { emoji: '🚗', color: '#84CC16', next: 'banque' },
  banque:         { emoji: '🏦', color: '#F59E0B', next: 'smartphone' },
  smartphone:     { emoji: '📱', color: '#EC4899', next: null },
};

export default function ModuleEnd({ large, toggleText, scale = 1, moduleId, moduleName, onNavigate, t, isRTL }) {
  const [show, setShow] = useState(false);

  const me = t?.moduleEnd || {};
  const badgeLabels = t?.badges || {};
  const moduleNames = t?.moduleNames || {};

  const meta = BADGE_META[moduleId] || { emoji: '🏆', color: '#F59E0B', next: null };
  const badgeLabel = badgeLabels[moduleId] || moduleId;
  const nextModuleName = meta.next ? (moduleNames[meta.next] || meta.next) : '';

  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  const s = {
    main: { maxWidth: 560, margin: '0 auto', padding: '2rem 1.5rem 4rem' },
    card: {
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 24, padding: '2.5rem 2rem',
      boxShadow: '0 8px 40px rgba(30,58,95,0.2)',
      textAlign: 'center',
      animation: 'fadeUp 0.5s ease both',
    },
    confetti: {
      fontSize: 48, marginBottom: 8, display: 'block',
      animation: show ? 'fadeUp 0.4s ease both' : 'none',
    },
    badgeCircle: {
      width: 100, height: 100, borderRadius: '50%',
      background: `${meta.color}15`,
      border: `3px solid ${meta.color}40`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 44, margin: '0 auto 16px',
      animation: show ? 'fadeUp 0.5s 0.2s ease both' : 'none',
      opacity: show ? 1 : 0, animationFillMode: 'forwards',
    },
    badgeLabel: {
      display: 'inline-block',
      background: `${meta.color}15`,
      color: meta.color, fontSize: 12, fontWeight: 700,
      padding: '4px 14px', borderRadius: 20,
      textTransform: 'uppercase', letterSpacing: 1.5,
      marginBottom: 16,
    },
    title: {
      fontFamily: 'Fraunces, serif', fontSize: 26,
      fontWeight: 700, color: '#1E3A5F', marginBottom: 10,
    },
    desc: {
      color: '#6B7280', fontSize: 14, lineHeight: 1.7,
      marginBottom: 28,
    },
    primaryBtn: {
      display: 'block', width: '100%', padding: '14px',
      background: 'linear-gradient(135deg, #1E3A5F, #2A4F7F)',
      color: '#fff', fontSize: 15, fontWeight: 700,
      borderRadius: 14, border: 'none', cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(30,58,95,0.3)',
      marginBottom: 10,
    },
    secondaryBtn: {
      display: 'block', width: '100%', padding: '14px',
      background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
      color: '#1E3A5F', fontSize: 15, fontWeight: 700,
      borderRadius: 14, border: 'none', cursor: 'pointer',
      boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
      marginBottom: 10,
    },
    ghostBtn: {
      display: 'block', width: '100%', padding: '12px',
      background: 'transparent', color: '#9CA3AF',
      fontSize: 13, border: 'none', cursor: 'pointer',
    },
    statsRow: {
      display: 'flex', gap: 10, marginBottom: 24,
    },
    stat: {
      flex: 1, background: '#F9FAFB', borderRadius: 14,
      padding: '12px 8px', textAlign: 'center',
      border: '1px solid #E5E7EB',
    },
    statNum: { fontSize: 22, fontWeight: 700, color: '#1E3A5F', display: 'block' },
    statLabel: { fontSize: 11, color: '#9CA3AF', marginTop: 2 },
  };

  const stats = me.stats || { lessons: 'leçons', completed: 'complété', badge: 'badge' };

  return (
    <div style={BG}>
      <AppHeader onNavigate={onNavigate} onBack={() => onNavigate('home')} backLabel={t?.nav?.home || 'Accueil'} large={large} toggleText={toggleText} t={t} isRTL={isRTL} />
      <main style={s.main}>
        <div style={s.card}>
          <span style={s.confetti}>{me.congrats || '🎉'}</span>
          <div style={s.badgeCircle}>{meta.emoji}</div>
          <div style={s.badgeLabel}>{badgeLabel}</div>
          <h1 style={s.title}>{me.title || 'Module terminé !'}</h1>
          <p style={s.desc}>
            {me.desc || 'Bravo !'} <strong>"{moduleName}"</strong>.{' '}
            {me.desc2 || "Chaque leçon apprise, c'est une démarche de moins à redouter. Continuez comme ça ! 💪"}
          </p>

          <div style={s.statsRow}>
            {[
              { num: '4', label: stats.lessons },
              { num: '100%', label: stats.completed },
              { num: '1', label: stats.badge },
            ].map((stat, i) => (
              <div key={i} style={s.stat}>
                <span style={s.statNum}>{stat.num}</span>
                <div style={s.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {meta.next && (
            <button style={s.secondaryBtn} onClick={() => onNavigate('module', meta.next)}>
              {me.nextModule || 'Module suivant'} : {nextModuleName} →
            </button>
          )}
          {!meta.next && (
            <button style={s.secondaryBtn} onClick={() => onNavigate('home')}>
              {me.allDone || '🏆 Tous les modules complétés !'}
            </button>
          )}
          <button style={s.primaryBtn} onClick={() => onNavigate('home')}>
            {me.allModules || 'Voir tous les modules'}
          </button>
          <button style={s.ghostBtn} onClick={() => onNavigate('module', moduleId)}>
            {me.retry || 'Revoir ce module'}
          </button>
        </div>
      </main>
    </div>
  );
}
