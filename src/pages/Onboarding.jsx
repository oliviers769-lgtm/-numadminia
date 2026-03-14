import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';

const BG = {
  minHeight: '100vh',
  backgroundImage: "url('/bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};

// Fallback questions (French) if t.onboarding.questions not available
const DEFAULT_QUESTIONS = [
  {
    id: 'defi',
    question: "Quel est votre plus grand défi en ce moment ?",
    emoji: '🎯',
    options: [
      { id: 'courrier', text: '📬 Je reçois des courriers CAF, CPAM, impôts que je ne comprends pas', module: 'courrier' },
      { id: 'pdf', text: '📄 Je dois remplir des formulaires PDF et je ne sais pas comment', module: 'pdf' },
      { id: 'email', text: '✉️ J\'ai du mal à envoyer des emails avec des pièces jointes', module: 'email' },
      { id: 'dossier', text: '📁 Je dois constituer un dossier et rassembler des documents', module: 'dossier' },
      { id: 'securite', text: '🔒 J\'ai peur des arnaques et je veux protéger mes données', module: 'securite' },
      { id: 'impots', text: '🧾 Je dois faire ma déclaration d\'impôts et je ne sais pas comment', module: 'impots' },
      { id: 'cartevitale', text: '💊 J\'ai des questions sur ma carte Vitale ou mes remboursements', module: 'cartevitale' },
      { id: 'rsacaf', text: '🏛️ Je veux connaître mes droits à la CAF — RSA, allocations, aides', module: 'rsacaf' },
      { id: 'logement', text: '🏠 Je cherche un logement social ou je veux comprendre mes droits', module: 'logement' },
      { id: 'dossiermedical', text: '🏥 Je veux accéder à mon dossier médical ou organiser mes documents de santé', module: 'dossiermedical' },
    ]
  },
  {
    id: 'niveau',
    question: "Vous vous considérez plutôt...",
    emoji: '📊',
    options: [
      { id: 'debutant', text: '🌱 Débutant — le numérique me fait peur' },
      { id: 'moyen', text: '🌿 Un peu à l\'aise — je me débrouille mais j\'ai des blocages' },
      { id: 'avance', text: '🌳 À l\'aise — je veux juste comprendre les démarches admin' },
    ]
  },
  {
    id: 'appareil',
    question: "Vous utilisez surtout...",
    emoji: '📱',
    options: [
      { id: 'telephone', text: '📱 Mon téléphone' },
      { id: 'ordinateur', text: '💻 Mon ordinateur' },
      { id: 'les_deux', text: '📱💻 Les deux' },
    ]
  },
];

const DEFAULT_MESSAGES = {
  courrier: { titre: "Commençons par les courriers officiels", desc: "C'est souvent là que tout se bloque. On va démystifier ça ensemble.", module: 'courrier' },
  pdf: { titre: "On attaque les PDF", desc: "Remplir un formulaire PDF sans stress — c'est possible. On vous montre.", module: 'pdf' },
  email: { titre: "Maîtrisons les emails", desc: "Envoyer des pièces jointes, reconnaître les arnaques — on y va pas à pas.", module: 'email' },
  dossier: { titre: "Constituons votre dossier", desc: "Rassembler les bons documents au bon moment — on vous guide.", module: 'dossier' },
  securite: { titre: "Protégeons vos données", desc: "Reconnaître les arnaques, sécuriser vos comptes — vous serez serein.", module: 'securite' },
  impots: { titre: "Déclarons vos impôts ensemble", desc: "Pas à pas sur impots.gouv.fr — en quelques minutes c'est fait.", module: 'impots' },
  cartevitale: { titre: "Maîtrisons votre carte Vitale", desc: "Ameli, remboursements, mise à jour — on vous explique tout.", module: 'cartevitale' },
  rsacaf: { titre: "Découvrons tout ce que la CAF peut faire pour vous", desc: "RSA, allocations, PAJE — simulez vos droits en quelques minutes.", module: 'rsacaf' },
  logement: { titre: "Trouvons votre logement", desc: "Demande HLM, APL, droits locataires — on vous guide pas à pas.", module: 'logement' },
  dossiermedical: { titre: "Gérons votre dossier médical", desc: "Mon Espace Santé, ordonnances, droits patients — tout est expliqué.", module: 'dossiermedical' },
};

export default function Onboarding({ large, toggleText, scale = 1, onNavigate, t, isRTL }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);

  const ob = t?.onboarding || {};
  const QUESTIONS = ob.questions || DEFAULT_QUESTIONS;
  const MESSAGES = ob.messages || DEFAULT_MESSAGES;

  const question = QUESTIONS[step];
  const recommendation = MESSAGES[answers.defi] || MESSAGES.courrier;

  const handleSelect = (optId, moduleId) => {
    setSelected(optId);
    const newAnswers = { ...answers, [question.id]: moduleId || optId };

    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setAnswers(newAnswers);
        setSelected(null);
        setStep(step + 1);
      } else {
        setAnswers(newAnswers);
        setDone(true);
      }
    }, 350);
  };

  const s = {
    main: { maxWidth: 620, margin: '0 auto', padding: '2rem 1.5rem 4rem' },
    card: {
      background: 'rgba(255,255,255,0.95)',
      borderRadius: 24, padding: '2rem',
      boxShadow: '0 8px 40px rgba(30,58,95,0.2)',
      animation: 'fadeUp 0.4s ease both',
    },
    progress: {
      display: 'flex', gap: 6, marginBottom: 24,
    },
    dot: (active, done) => ({
      flex: 1, height: 4, borderRadius: 4,
      background: done ? '#1E3A5F' : active ? '#F59E0B' : '#E5E7EB',
      transition: 'background 0.3s ease',
    }),
    emoji: { fontSize: 36, marginBottom: 12, display: 'block', textAlign: 'center' },
    question: {
      fontFamily: 'Fraunces, serif', fontSize: 20,
      fontWeight: 700, color: '#1E3A5F',
      textAlign: 'center', marginBottom: 24, lineHeight: 1.4,
    },
    optBtn: (sel) => ({
      width: '100%', padding: '14px 18px', borderRadius: 14,
      marginBottom: 10, border: `2px solid ${sel ? '#1E3A5F' : '#E5E7EB'}`,
      background: sel ? '#EFF6FF' : '#FAFAFA',
      color: '#1F2937', fontSize: 14, fontWeight: 500,
      cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s ease',
    }),
    resultBox: {
      textAlign: 'center',
    },
    resultEmoji: { fontSize: 48, marginBottom: 16, display: 'block' },
    resultTitle: {
      fontFamily: 'Fraunces, serif', fontSize: 22,
      fontWeight: 700, color: '#1E3A5F', marginBottom: 10,
    },
    resultDesc: {
      color: '#6B7280', fontSize: 15, lineHeight: 1.6, marginBottom: 28,
    },
    startBtn: {
      display: 'block', width: '100%', padding: '16px',
      background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
      color: '#1E3A5F', fontSize: 16, fontWeight: 700,
      borderRadius: 14, border: 'none', cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
      marginBottom: 12,
    },
    skipBtn: {
      display: 'block', width: '100%', padding: '12px',
      background: 'transparent', color: '#9CA3AF',
      fontSize: 13, border: 'none', cursor: 'pointer',
    },
  };

  return (
    <div style={BG}>
      <AppHeader onNavigate={onNavigate} onBack={() => onNavigate('home')} backLabel={t?.nav?.home || 'Accueil'} large={large} toggleText={toggleText} t={t} isRTL={isRTL} />
      <main style={s.main}>
        <div style={s.card}>
          {!done ? (
            <>
              <div style={s.progress}>
                {QUESTIONS.map((_, i) => (
                  <div key={i} style={s.dot(i === step, i < step)} />
                ))}
              </div>
              <span style={s.emoji}>{question.emoji}</span>
              <div style={s.question}>{question.question}</div>
              {question.options.map(opt => (
                <button key={opt.id}
                  style={s.optBtn(selected === opt.id)}
                  onClick={() => handleSelect(opt.id, opt.module)}
                  onMouseEnter={e => { if (selected !== opt.id) e.currentTarget.style.borderColor = '#F59E0B'; }}
                  onMouseLeave={e => { if (selected !== opt.id) e.currentTarget.style.borderColor = '#E5E7EB'; }}>
                  {opt.text}
                </button>
              ))}
              <button style={s.skipBtn} onClick={() => onNavigate('module', 'courrier')}>
                {ob.skip || 'Passer et commencer directement →'}
              </button>
            </>
          ) : (
            <div style={s.resultBox}>
              <span style={s.resultEmoji}>🎯</span>
              <div style={s.resultTitle}>{recommendation.titre}</div>
              <div style={s.resultDesc}>{recommendation.desc}</div>
              <button style={s.startBtn}
                onClick={() => onNavigate('module', recommendation.module)}>
                {ob.cta || 'C\'est parti ! →'}
              </button>
              <button style={s.skipBtn} onClick={() => onNavigate('home')}>
                {ob.allModules || 'Voir tous les modules'}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
