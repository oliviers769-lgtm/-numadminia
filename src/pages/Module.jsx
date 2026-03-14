import React from 'react';
import AppHeader from '../components/AppHeader';
import { MODULES } from '../data/content';
import { COURRIER_LESSONS } from '../data/courrier_lessons';
import { PDF_LESSONS } from '../data/pdf_lessons';
import { EMAIL_LESSONS } from '../data/email_lessons';
import { DOSSIER_LESSONS } from '../data/dossier_lessons';
import { SECURITE_LESSONS } from '../data/securite_lessons';
import { IMPOTS_LESSONS } from '../data/impots_lessons';
import { CARTEVITALE_LESSONS } from '../data/cartevitale_lessons';
import { RSACAF_LESSONS } from '../data/rsacaf_lessons';
import { LOGEMENT_LESSONS } from '../data/logement_lessons';
import { DOSSIERMEDICAL_LESSONS } from '../data/dossiermedical_lessons';
import { FORMATION_LESSONS } from '../data/formation_lessons';
import { PERMIS_LESSONS } from '../data/permis_lessons';
import { BANQUE_LESSONS } from '../data/banque_lessons';
import { SMARTPHONE_LESSONS } from '../data/smartphone_lessons';
import { COURRIER_LESSONS_AR } from '../data/courrier_lessons_ar';
import { PDF_LESSONS_AR } from '../data/pdf_lessons_ar';
import { EMAIL_LESSONS_AR } from '../data/email_lessons_ar';
import { DOSSIER_LESSONS_AR } from '../data/dossier_lessons_ar';
import { SECURITE_LESSONS_AR } from '../data/securite_lessons_ar';
import { IMPOTS_LESSONS_AR } from '../data/impots_lessons_ar';
import { CARTEVITALE_LESSONS_AR } from '../data/cartevitale_lessons_ar';
import { RSACAF_LESSONS_AR } from '../data/rsacaf_lessons_ar';
import { LOGEMENT_LESSONS_AR } from '../data/logement_lessons_ar';
import { DOSSIERMEDICAL_LESSONS_AR } from '../data/dossiermedical_lessons_ar';
import { FORMATION_LESSONS_AR } from '../data/formation_lessons_ar';
import { PERMIS_LESSONS_AR } from '../data/permis_lessons_ar';
import { BANQUE_LESSONS_AR } from '../data/banque_lessons_ar';
import { SMARTPHONE_LESSONS_AR } from '../data/smartphone_lessons_ar';
import { COURRIER_LESSONS_PT } from '../data/courrier_lessons_pt';
import { PDF_LESSONS_PT } from '../data/pdf_lessons_pt';
import { EMAIL_LESSONS_PT } from '../data/email_lessons_pt';
import { DOSSIER_LESSONS_PT } from '../data/dossier_lessons_pt';
import { SECURITE_LESSONS_PT } from '../data/securite_lessons_pt';
import { IMPOTS_LESSONS_PT } from '../data/impots_lessons_pt';
import { CARTEVITALE_LESSONS_PT } from '../data/cartevitale_lessons_pt';
import { RSACAF_LESSONS_PT } from '../data/rsacaf_lessons_pt';
import { LOGEMENT_LESSONS_PT } from '../data/logement_lessons_pt';
import { DOSSIERMEDICAL_LESSONS_PT } from '../data/dossiermedical_lessons_pt';
import { FORMATION_LESSONS_PT } from '../data/formation_lessons_pt';
import { PERMIS_LESSONS_PT } from '../data/permis_lessons_pt';
import { BANQUE_LESSONS_PT } from '../data/banque_lessons_pt';
import { SMARTPHONE_LESSONS_PT } from '../data/smartphone_lessons_pt';
import { COURRIER_LESSONS_EN } from '../data/courrier_lessons_en';
import { PDF_LESSONS_EN } from '../data/pdf_lessons_en';
import { EMAIL_LESSONS_EN } from '../data/email_lessons_en';
import { DOSSIER_LESSONS_EN } from '../data/dossier_lessons_en';
import { SECURITE_LESSONS_EN } from '../data/securite_lessons_en';
import { IMPOTS_LESSONS_EN } from '../data/impots_lessons_en';
import { CARTEVITALE_LESSONS_EN } from '../data/cartevitale_lessons_en';
import { RSACAF_LESSONS_EN } from '../data/rsacaf_lessons_en';
import { LOGEMENT_LESSONS_EN } from '../data/logement_lessons_en';
import { DOSSIERMEDICAL_LESSONS_EN } from '../data/dossiermedical_lessons_en';
import { FORMATION_LESSONS_EN } from '../data/formation_lessons_en';
import { PERMIS_LESSONS_EN } from '../data/permis_lessons_en';
import { BANQUE_LESSONS_EN } from '../data/banque_lessons_en';
import { SMARTPHONE_LESSONS_EN } from '../data/smartphone_lessons_en';
import { COURRIER_LESSONS_IT } from '../data/courrier_lessons_it';
import { PDF_LESSONS_IT } from '../data/pdf_lessons_it';
import { EMAIL_LESSONS_IT } from '../data/email_lessons_it';
import { DOSSIER_LESSONS_IT } from '../data/dossier_lessons_it';
import { SECURITE_LESSONS_IT } from '../data/securite_lessons_it';
import { IMPOTS_LESSONS_IT } from '../data/impots_lessons_it';
import { CARTEVITALE_LESSONS_IT } from '../data/cartevitale_lessons_it';
import { RSACAF_LESSONS_IT } from '../data/rsacaf_lessons_it';
import { LOGEMENT_LESSONS_IT } from '../data/logement_lessons_it';
import { DOSSIERMEDICAL_LESSONS_IT } from '../data/dossiermedical_lessons_it';
import { FORMATION_LESSONS_IT } from '../data/formation_lessons_it';
import { PERMIS_LESSONS_IT } from '../data/permis_lessons_it';
import { BANQUE_LESSONS_IT } from '../data/banque_lessons_it';
import { SMARTPHONE_LESSONS_IT } from '../data/smartphone_lessons_it';
import { COURRIER_LESSONS_ES } from '../data/courrier_lessons_es';
import { PDF_LESSONS_ES } from '../data/pdf_lessons_es';
import { EMAIL_LESSONS_ES } from '../data/email_lessons_es';
import { DOSSIER_LESSONS_ES } from '../data/dossier_lessons_es';
import { SECURITE_LESSONS_ES } from '../data/securite_lessons_es';
import { IMPOTS_LESSONS_ES } from '../data/impots_lessons_es';
import { CARTEVITALE_LESSONS_ES } from '../data/cartevitale_lessons_es';
import { RSACAF_LESSONS_ES } from '../data/rsacaf_lessons_es';
import { LOGEMENT_LESSONS_ES } from '../data/logement_lessons_es';
import { DOSSIERMEDICAL_LESSONS_ES } from '../data/dossiermedical_lessons_es';
import { FORMATION_LESSONS_ES } from '../data/formation_lessons_es';
import { PERMIS_LESSONS_ES } from '../data/permis_lessons_es';
import { BANQUE_LESSONS_ES } from '../data/banque_lessons_es';
import { SMARTPHONE_LESSONS_ES } from '../data/smartphone_lessons_es';
import { COURRIER_LESSONS_ZH } from '../data/courrier_lessons_zh';
import { PDF_LESSONS_ZH } from '../data/pdf_lessons_zh';
import { EMAIL_LESSONS_ZH } from '../data/email_lessons_zh';
import { DOSSIER_LESSONS_ZH } from '../data/dossier_lessons_zh';
import { SECURITE_LESSONS_ZH } from '../data/securite_lessons_zh';
import { IMPOTS_LESSONS_ZH } from '../data/impots_lessons_zh';
import { CARTEVITALE_LESSONS_ZH } from '../data/cartevitale_lessons_zh';
import { RSACAF_LESSONS_ZH } from '../data/rsacaf_lessons_zh';
import { LOGEMENT_LESSONS_ZH } from '../data/logement_lessons_zh';
import { DOSSIERMEDICAL_LESSONS_ZH } from '../data/dossiermedical_lessons_zh';
import { FORMATION_LESSONS_ZH } from '../data/formation_lessons_zh';
import { PERMIS_LESSONS_ZH } from '../data/permis_lessons_zh';
import { BANQUE_LESSONS_ZH } from '../data/banque_lessons_zh';
import { SMARTPHONE_LESSONS_ZH } from '../data/smartphone_lessons_zh';

const LESSONS_MAP = {
  courrier: COURRIER_LESSONS, pdf: PDF_LESSONS, email: EMAIL_LESSONS,
  dossier: DOSSIER_LESSONS, securite: SECURITE_LESSONS, impots: IMPOTS_LESSONS,
  cartevitale: CARTEVITALE_LESSONS, rsacaf: RSACAF_LESSONS, logement: LOGEMENT_LESSONS,
  dossiermedical: DOSSIERMEDICAL_LESSONS, formation: FORMATION_LESSONS,
  permis: PERMIS_LESSONS, banque: BANQUE_LESSONS, smartphone: SMARTPHONE_LESSONS,
};

const LESSONS_MAP_AR = {
  courrier: COURRIER_LESSONS_AR, pdf: PDF_LESSONS_AR, email: EMAIL_LESSONS_AR,
  dossier: DOSSIER_LESSONS_AR, securite: SECURITE_LESSONS_AR, impots: IMPOTS_LESSONS_AR,
  cartevitale: CARTEVITALE_LESSONS_AR, rsacaf: RSACAF_LESSONS_AR, logement: LOGEMENT_LESSONS_AR,
  dossiermedical: DOSSIERMEDICAL_LESSONS_AR, formation: FORMATION_LESSONS_AR,
  permis: PERMIS_LESSONS_AR, banque: BANQUE_LESSONS_AR, smartphone: SMARTPHONE_LESSONS_AR,
};

const LESSONS_MAP_PT = {
  courrier: COURRIER_LESSONS_PT, pdf: PDF_LESSONS_PT, email: EMAIL_LESSONS_PT,
  dossier: DOSSIER_LESSONS_PT, securite: SECURITE_LESSONS_PT, impots: IMPOTS_LESSONS_PT,
  cartevitale: CARTEVITALE_LESSONS_PT, rsacaf: RSACAF_LESSONS_PT, logement: LOGEMENT_LESSONS_PT,
  dossiermedical: DOSSIERMEDICAL_LESSONS_PT, formation: FORMATION_LESSONS_PT,
  permis: PERMIS_LESSONS_PT, banque: BANQUE_LESSONS_PT, smartphone: SMARTPHONE_LESSONS_PT,
};

const LESSONS_MAP_EN = {
  courrier: COURRIER_LESSONS_EN, pdf: PDF_LESSONS_EN, email: EMAIL_LESSONS_EN,
  dossier: DOSSIER_LESSONS_EN, securite: SECURITE_LESSONS_EN, impots: IMPOTS_LESSONS_EN,
  cartevitale: CARTEVITALE_LESSONS_EN, rsacaf: RSACAF_LESSONS_EN, logement: LOGEMENT_LESSONS_EN,
  dossiermedical: DOSSIERMEDICAL_LESSONS_EN, formation: FORMATION_LESSONS_EN,
  permis: PERMIS_LESSONS_EN, banque: BANQUE_LESSONS_EN, smartphone: SMARTPHONE_LESSONS_EN,
};

const LESSONS_MAP_IT = {
  courrier: COURRIER_LESSONS_IT, pdf: PDF_LESSONS_IT, email: EMAIL_LESSONS_IT,
  dossier: DOSSIER_LESSONS_IT, securite: SECURITE_LESSONS_IT, impots: IMPOTS_LESSONS_IT,
  cartevitale: CARTEVITALE_LESSONS_IT, rsacaf: RSACAF_LESSONS_IT, logement: LOGEMENT_LESSONS_IT,
  dossiermedical: DOSSIERMEDICAL_LESSONS_IT, formation: FORMATION_LESSONS_IT,
  permis: PERMIS_LESSONS_IT, banque: BANQUE_LESSONS_IT, smartphone: SMARTPHONE_LESSONS_IT,
};

const LESSONS_MAP_ES = {
  courrier: COURRIER_LESSONS_ES, pdf: PDF_LESSONS_ES, email: EMAIL_LESSONS_ES,
  dossier: DOSSIER_LESSONS_ES, securite: SECURITE_LESSONS_ES, impots: IMPOTS_LESSONS_ES,
  cartevitale: CARTEVITALE_LESSONS_ES, rsacaf: RSACAF_LESSONS_ES, logement: LOGEMENT_LESSONS_ES,
  dossiermedical: DOSSIERMEDICAL_LESSONS_ES, formation: FORMATION_LESSONS_ES,
  permis: PERMIS_LESSONS_ES, banque: BANQUE_LESSONS_ES, smartphone: SMARTPHONE_LESSONS_ES,
};

const LESSONS_MAP_ZH = {
  courrier: COURRIER_LESSONS_ZH, pdf: PDF_LESSONS_ZH, email: EMAIL_LESSONS_ZH,
  dossier: DOSSIER_LESSONS_ZH, securite: SECURITE_LESSONS_ZH, impots: IMPOTS_LESSONS_ZH,
  cartevitale: CARTEVITALE_LESSONS_ZH, rsacaf: RSACAF_LESSONS_ZH, logement: LOGEMENT_LESSONS_ZH,
  dossiermedical: DOSSIERMEDICAL_LESSONS_ZH, formation: FORMATION_LESSONS_ZH,
  permis: PERMIS_LESSONS_ZH, banque: BANQUE_LESSONS_ZH, smartphone: SMARTPHONE_LESSONS_ZH,
};

const OFFICIAL_LINKS = {
  rsacaf: [{ label: '🏛️ Accéder au site de la CAF', url: 'https://www.caf.fr/' }],
  logement: [
    { label: '🏛️ Accéder au site de la CAF', url: 'https://www.caf.fr/' },
    { label: '🏠 Aides personnelles au logement (APL)', url: 'https://www.caf.fr/allocataires/aides-et-demarches/droits-et-prestations/logement/les-aides-personnelles-au-logement' },
  ],
  cartevitale: [
    { label: '💊 Accéder à Ameli', url: 'https://www.ameli.fr/' },
    { label: '🪪 Ma Carte Vitale', url: 'https://www.ameli.fr/assure/remboursements/etre-bien-rembourse/carte-vitale' },
  ],
  dossiermedical: [{ label: '🏥 Mon Espace Santé', url: 'https://www.monespacesante.fr/' }],
  formation: [{ label: '🎓 Mon Compte Formation (CPF)', url: 'https://travail-emploi.gouv.fr/compte-personnel-de-formation-cpf-services-en-ligne' }],
  permis: [{ label: '🚗 ANTS — Permis de conduire', url: 'https://permisdeconduire.ants.gouv.fr/' }],
  impots: [{ label: '🧾 Déclarer mes impôts', url: 'https://www.service-public.fr/particuliers/vosdroits/R3120' }],
};

const BG = {
  minHeight: '100vh',
  backgroundImage: "url('/bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};

export default function Module({ moduleId, onNavigate, onStartLesson, completedLessons = [], large, toggleText, scale = 1, t, isRTL, lang }) {
  const mod = MODULES.find(m => m.id === moduleId);
  const lessons = (lang === 'ar' && LESSONS_MAP_AR[moduleId]) ? LESSONS_MAP_AR[moduleId]
    : (lang === 'pt' && LESSONS_MAP_PT[moduleId]) ? LESSONS_MAP_PT[moduleId]
    : (lang === 'en' && LESSONS_MAP_EN[moduleId]) ? LESSONS_MAP_EN[moduleId]
    : (lang === 'it' && LESSONS_MAP_IT[moduleId]) ? LESSONS_MAP_IT[moduleId]
    : (lang === 'es' && LESSONS_MAP_ES[moduleId]) ? LESSONS_MAP_ES[moduleId]
    : (lang === 'zh' && LESSONS_MAP_ZH[moduleId]) ? LESSONS_MAP_ZH[moduleId]
    : (LESSONS_MAP[moduleId] || []);
  const completed = completedLessons;
  const officialLinks = OFFICIAL_LINKS[moduleId] || [];

  const officialLabel = lang === 'ar' ? 'الوصول المباشر إلى المواقع الرسمية'
    : lang === 'pt' ? 'Acesso directo aos sites oficiais'
    : 'Accès direct aux sites officiels';
  const officialBadge = lang === 'ar' ? 'الموقع الرسمي ←'
    : lang === 'pt' ? 'Site oficial →'
    : 'Site officiel →';
  const lessonsCountLabel = t?.modules?.lessonsCount || (lang === 'pt' ? 'lições completadas' : 'leçons complétées');

  if (!mod) return (
    <div style={{ ...BG, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#fff', fontSize: 18 }}>{t?.errors?.moduleNotFound || 'Module introuvable'}</div>
    </div>
  );

  const s = {
    main: { maxWidth: 680, margin: '0 auto', padding: '2rem 1rem 6rem' },
    card: {
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)',
      borderRadius: 24, padding: '2rem', marginBottom: 16,
      boxShadow: '0 8px 40px rgba(30,58,95,0.2)', animation: 'fadeUp 0.4s ease both',
    },
    tag: {
      display: 'inline-block', background: 'rgba(245,158,11,0.15)', color: '#B45309',
      fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 20,
      textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 16,
    },
    title: { fontFamily: 'Fraunces, serif', fontSize: 24 * (scale || 1), fontWeight: 700, color: '#1E3A5F', marginBottom: 8 },
    desc: { color: '#6B7280', fontSize: 15 * (scale || 1), lineHeight: 1.6, marginBottom: 20 },
    progress: { background: '#F3F4F6', borderRadius: 8, height: 8, overflow: 'hidden', marginBottom: 8 },
    progressBar: {
      height: '100%', borderRadius: 8,
      background: 'linear-gradient(90deg, #F59E0B, #FCD34D)',
      width: `${lessons.length ? Math.round((completed.length / lessons.length) * 100) : 0}%`,
      transition: 'width 0.6s ease',
    },
    lessonCard: (done, i) => ({
      display: 'flex', alignItems: 'center', gap: 16,
      padding: '1.2rem 1.4rem', borderRadius: 16, marginBottom: 10,
      background: done ? '#F0FDF4' : '#FAFAFA',
      border: `2px solid ${done ? '#10B981' : '#E5E7EB'}`,
      cursor: 'pointer', transition: 'all 0.2s ease',
      animation: `fadeUp 0.4s ${0.1 + i * 0.08}s ease both`,
      opacity: 0, animationFillMode: 'forwards',
    }),
    lessonNum: (done) => ({
      width: 40, height: 40, borderRadius: 12,
      background: done ? '#D1FAE5' : 'rgba(30,58,95,0.08)',
      color: done ? '#10B981' : '#1E3A5F',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: done ? 18 : 14, fontWeight: 700, flexShrink: 0,
    }),
  };

  return (
    <div style={{ ...BG, direction: isRTL ? 'rtl' : 'ltr' }}>
      <AppHeader onNavigate={onNavigate} onBack={() => onNavigate('home')} backLabel={t?.nav?.home || 'Accueil'} large={large} toggleText={toggleText} t={t} isRTL={isRTL} />
      <main style={s.main}>
        <div style={s.card}>
          <div style={s.tag}>{mod.icon} {mod.subtitle}</div>
          <h1 style={s.title}>{mod.title}</h1>
          <p style={s.desc}>{mod.description}</p>
          <div style={s.progress}><div style={s.progressBar} /></div>
          <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 20 }}>
            {completed.length} / {lessons.length} {lessonsCountLabel}
          </div>

          {lessons.map((lesson, i) => {
            const done = completed.includes(lesson.id);
            return (
              <div key={lesson.id} style={s.lessonCard(done, i)}
                onClick={() => onStartLesson(lesson, moduleId, lessons.length, mod.title)}
                onMouseEnter={e => { if (!done) e.currentTarget.style.borderColor = '#F59E0B'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = done ? '#10B981' : '#E5E7EB'; }}>
                <div style={s.lessonNum(done)}>{done ? '✓' : lesson.numero}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#1E3A5F', fontSize: 14 * (scale || 1), marginBottom: 2 }}>{lesson.titre}</div>
                  <div style={{ color: '#9CA3AF', fontSize: 12 }}>{lesson.sousTitre}</div>
                </div>
                <div style={{ color: '#D1D5DB', fontSize: 18 }}>{isRTL ? '‹' : '›'}</div>
              </div>
            );
          })}

          {officialLinks.length > 0 && (
            <div style={{ marginTop: 24, borderTop: '1.5px solid #F3F4F6', paddingTop: 20 }}>
              <div style={{ fontSize: 11 * (scale || 1), fontWeight: 700, color: '#9CA3AF', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
                🔗 {officialLabel}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {officialLinks.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 18px', borderRadius: 14,
                      background: 'linear-gradient(135deg, #1E3A5F, #2A4F7F)',
                      color: '#fff', textDecoration: 'none',
                      fontWeight: 700, fontSize: 14 * (scale || 1),
                      boxShadow: '0 4px 16px rgba(30,58,95,0.25)',
                      transition: 'all 0.2s ease',
                      border: '1.5px solid rgba(245,158,11,0.3)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #2A4F7F, #3B6BA5)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg, #1E3A5F, #2A4F7F)'; }}>
                    <span>{link.label}</span>
                    <span style={{ fontSize: 12 * (scale || 1), color: '#FCD34D', fontWeight: 600 }}>✅ {officialBadge}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
