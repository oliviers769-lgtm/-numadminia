import React from 'react';
import AppHeader from '../components/AppHeader';

const BG = {
  minHeight: '100vh',
  backgroundImage: "url('/bg.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
};

export default function JeExplique({ large, toggleText, scale = 1, onNavigate, t, isRTL }) {
  const s = {
    main: { maxWidth: 680, margin: '0 auto', padding: '2rem 1.5rem 4rem' },
    card: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: 24, padding: '2rem', marginBottom: 16,
      boxShadow: '0 8px 40px rgba(30,58,95,0.2)',
      animation: 'fadeUp 0.4s ease both',
    },
    tag: {
      display: 'inline-block',
      background: 'rgba(245,158,11,0.15)', color: '#B45309',
      fontSize: 11, fontWeight: 700, padding: '4px 12px',
      borderRadius: 20, textTransform: 'uppercase', letterSpacing: 1.5,
      marginBottom: 16,
    },
    title: {
      fontFamily: 'Fraunces, serif', fontSize: 28,
      fontWeight: 700, color: '#1E3A5F', marginBottom: 12,
    },
    intro: {
      fontSize: 15, color: '#374151', lineHeight: 1.7,
      marginBottom: 28,
    },
    h2: {
      fontFamily: 'Fraunces, serif', fontSize: 18,
      fontWeight: 700, color: '#1E3A5F', marginBottom: 16,
      paddingBottom: 8,
      borderBottom: '2px solid rgba(245,158,11,0.3)',
    },
    stepRow: {
      display: 'flex', gap: 16, marginBottom: 16, alignItems: 'flex-start',
    },
    stepNum: {
      width: 40, height: 40, borderRadius: 12, flexShrink: 0,
      background: 'linear-gradient(135deg, #1E3A5F, #2A4F7F)',
      color: '#F59E0B', display: 'flex', alignItems: 'center',
      justifyContent: 'center', fontSize: 16, fontWeight: 700,
    },
    stepText: { flex: 1 },
    stepTitle: { fontWeight: 700, color: '#1E3A5F', fontSize: 14, marginBottom: 4 },
    stepDesc: { color: '#6B7280', fontSize: 13, lineHeight: 1.6 },
    gratuitBox: {
      background: '#F0FDF4', border: '1px solid #BBF7D0',
      borderRadius: 16, padding: '1.2rem 1.5rem', marginBottom: 20,
    },
    gratuitTitle: { fontWeight: 700, color: '#065F46', fontSize: 14, marginBottom: 6 },
    gratuitText: { color: '#374151', fontSize: 13, lineHeight: 1.6 },
    contactBtn: {
      display: 'block', width: '100%', padding: '14px',
      background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
      color: '#1E3A5F', fontSize: 15, fontWeight: 700,
      borderRadius: 14, border: 'none', cursor: 'pointer',
      textAlign: 'center', textDecoration: 'none',
      boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
      marginTop: 8,
    },
    separator: {
      borderTop: '1px solid #E5E7EB', margin: '24px 0',
    },
    iaRow: {
      display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12,
    },
    iaBadge: {
      background: 'rgba(30,58,95,0.08)', color: '#1E3A5F',
      fontSize: 12, fontWeight: 600, padding: '4px 12px',
      borderRadius: 20, border: '1px solid rgba(30,58,95,0.1)',
    },
  };

  const steps = [
    {
      num: '1',
      title: 'Choisissez un module',
      desc: "Sélectionnez le sujet qui vous pose problème : un courrier CAF, un PDF à remplir, un email à envoyer... Commencez par ce qui est le plus urgent pour vous.",
    },
    {
      num: '2',
      title: 'Suivez les leçons à votre rythme',
      desc: "Chaque leçon dure 5 à 10 minutes. On vous explique simplement, avec des exemples concrets tirés du quotidien. Pas de jargon, pas de pression.",
    },
    {
      num: '3',
      title: 'Répondez à la question',
      desc: "À la fin de chaque leçon, une question simple vérifie votre compréhension. Si vous vous trompez, on vous explique pourquoi — sans jugement. L'erreur fait partie de l'apprentissage.",
    },
  ];

  return (
    <div style={BG}>
      <AppHeader onNavigate={onNavigate} onBack={() => onNavigate('home')} backLabel={t?.nav?.home || "Accueil"} large={large} toggleText={toggleText} t={t} isRTL={isRTL} />
      <main style={s.main}>
        <div style={s.card}>
          <div style={s.tag}>✦ À propos</div>
          <h1 style={s.title}>Je t'explique 😊</h1>
          <p style={s.intro}>
            NumAdminIA est né d'un constat simple : des millions de Français perdent des droits, 
            ratent des délais ou vivent dans le stress à cause de démarches numériques qu'on 
            ne leur a jamais expliquées. Pas parce qu'ils sont incapables — mais parce qu'on 
            ne leur a jamais vraiment montré comment faire.
          </p>
          <p style={s.intro}>
            <strong>NumAdminIA, c'est le tuteur patient qui explique sans juger.</strong> Disponible 
            24h/24, sans rendez-vous, sans déplacement, sans abonnement.
          </p>

          <div style={s.separator} />

          <h2 style={s.h2}>Comment ça marche ?</h2>
          {steps.map(step => (
            <div key={step.num} style={s.stepRow}>
              <div style={s.stepNum}>{step.num}</div>
              <div style={s.stepText}>
                <div style={s.stepTitle}>{step.title}</div>
                <div style={s.stepDesc}>{step.desc}</div>
              </div>
            </div>
          ))}

          <div style={s.separator} />

          <h2 style={s.h2}>Pourquoi c'est gratuit ?</h2>
          <div style={s.gratuitBox}>
            <div style={s.gratuitTitle}>✓ Gratuit pour toujours — sans publicité, sans abonnement</div>
            <div style={s.gratuitText}>
              NumAdminIA est un projet citoyen à but non lucratif. Il a été conçu pour être 
              accessible à tous, en particulier aux personnes qui en ont le plus besoin. 
              Le code source est entièrement ouvert (open source). Vos données ne sont 
              jamais collectées ni revendues.
            </div>
          </div>

          <div style={s.separator} />

          <h2 style={s.h2}>Qui l'a créé ?</h2>
          <p style={{ color: '#374151', fontSize: 14, lineHeight: 1.7, marginBottom: 12 }}>
            NumAdminIA est né de la collaboration entre <strong>Olivier</strong>, agent hospitalier 
            et orchestrateur IA, et une équipe d'intelligences artificielles complémentaires.
          </p>
          <div style={s.iaRow}>
            {['Copilot — Vision', 'Grok — Design', 'Perplexity — Nom', 'Claude — Code', 'ChatGPT — Contenu', 'Gemini — Validation'].map(ia => (
              <span key={ia} style={s.iaBadge}>{ia}</span>
            ))}
          </div>

          <div style={s.separator} />

          <h2 style={s.h2}>Nous contacter</h2>
          <p style={{ color: '#6B7280', fontSize: 13, marginBottom: 12 }}>
            Une question, une suggestion, un bug ? Écrivez-nous — chaque retour nous aide à améliorer NumAdminIA.
          </p>
          <a
            href="mailto:contact.numadminia@proton.me?subject=NumAdminIA — Contact&body=Bonjour,%0A%0A"
            style={s.contactBtn}>
            ✉️ Nous écrire
          </a>
        </div>
      </main>
    </div>
  );
}
