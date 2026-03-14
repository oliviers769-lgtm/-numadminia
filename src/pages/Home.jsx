import React, { useState, useEffect } from 'react';
import AppHeader from '../components/AppHeader';
import MiniQuiz from '../components/MiniQuiz';
import LogoAnimated from '../components/LogoAnimated';
import { MODULES } from '../data/content';

export default function Home({ onNavigate, large, toggleText, scale = 1, totalCompleted = 0, t, isRTL, lang, switchLang, onDiagnostic }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  const s = {
    wrap: {
      minHeight: '100vh',
      direction: isRTL ? 'rtl' : 'ltr',
      backgroundImage: "url('/bg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
    },
    pageLayout: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 16,
      padding: isMobile ? '0' : '0 8px',
    },
    videoCol: {
      display: isMobile ? 'none' : 'flex',
      flexDirection: 'column',
      gap: 12,
      position: 'sticky',
      top: 80,
      flexShrink: 0,
      width: 130,
    },
    videoWrapper: {
      borderRadius: 16,
      overflow: 'hidden',
      background: 'rgba(0,0,0,0.4)',
      border: '1px solid rgba(245,158,11,0.2)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      position: 'relative',
    },
    videoCaption: {
      fontSize: 9,
      color: 'rgba(255,255,255,0.35)',
      textAlign: 'center',
      padding: '3px 4px',
      letterSpacing: 0.3,
    },
    fullscreenBtn: {
      position: 'absolute',
      bottom: 22,
      right: 4,
      background: 'rgba(0,0,0,0.6)',
      border: '1px solid rgba(255,255,255,0.3)',
      borderRadius: 6,
      color: '#fff',
      fontSize: 10,
      padding: '2px 5px',
      cursor: 'pointer',
      zIndex: 2,
    },
    main: {
      maxWidth: 680, flex: 1,
      padding: isMobile ? '1rem 1rem 6rem' : '2rem 0 6rem',
      minWidth: 0, width: '100%', boxSizing: 'border-box',
    },
    hero: {
      background: 'rgba(255,255,255,0.06)',
      backdropFilter: 'blur(20px)',
      borderRadius: isMobile ? 16 : 24,
      padding: isMobile ? '1.5rem 1.2rem' : '2.5rem 2rem',
      marginBottom: 16,
      border: '1px solid rgba(245,158,11,0.2)',
      animation: 'fadeUp 0.5s ease both',
      boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
    },
    badge: {
      display: 'inline-flex', alignItems: 'center', gap: 6,
      background: 'rgba(245,158,11,0.15)',
      border: '1px solid rgba(245,158,11,0.3)',
      borderRadius: 20, padding: '4px 14px',
      fontSize: 12 * scale, fontWeight: 600, color: '#FCD34D',
      marginBottom: 20, letterSpacing: 0.5,
    },
    heroTitle: {
      fontFamily: 'Fraunces, serif',
      fontSize: (isMobile ? 26 : 32) * scale, fontWeight: 700, lineHeight: 1.2,
      color: '#fff', marginBottom: 12,
    },
    heroSub: {
      fontSize: (isMobile ? 14 : 16) * scale, color: 'rgba(255,255,255,0.7)',
      lineHeight: 1.6, marginBottom: 20,
    },
    startBtn: {
      background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
      color: '#1E3A5F', fontSize: (isMobile ? 14 : 15) * scale, fontWeight: 700,
      padding: isMobile ? '12px 20px' : '14px 28px', borderRadius: 14, border: 'none',
      cursor: 'pointer', boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
      width: isMobile ? '100%' : 'auto',
    },
    sectionTitle: {
      fontSize: 12 * scale, fontWeight: 700, color: 'rgba(255,255,255,0.5)',
      letterSpacing: 2, textTransform: 'uppercase',
      marginBottom: 12, marginTop: 8,
    },
    moduleCard: (i) => ({
      background: 'rgba(255,255,255,0.07)',
      backdropFilter: 'blur(12px)',
      borderRadius: 18, padding: isMobile ? '1rem 1rem' : '1.2rem 1.5rem',
      marginBottom: 10, cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex', alignItems: 'center', gap: 12,
      transition: 'all 0.2s ease',
      animation: `fadeUp 0.4s ${0.1 + i * 0.07}s ease both`,
      opacity: 0, animationFillMode: 'forwards',
    }),
    moduleIcon: (color) => ({
      width: 44, height: 44, borderRadius: 12,
      background: `${color}20`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 22, flexShrink: 0,
      border: `1px solid ${color}30`,
    }),
    moduleTitle: { fontWeight: 700, color: '#fff', fontSize: (isMobile ? 14 : 15) * scale, marginBottom: 2 },
    moduleSub: { color: 'rgba(255,255,255,0.5)', fontSize: 11 * scale },
    statsRow: {
      display: 'flex', gap: 8, marginBottom: 16,
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      animation: 'fadeUp 0.4s 0.2s ease both', opacity: 0, animationFillMode: 'forwards',
    },
    stat: {
      flex: isMobile ? '1 1 calc(33% - 6px)' : 1,
      background: 'rgba(255,255,255,0.06)',
      borderRadius: 14, padding: isMobile ? '0.7rem 0.5rem' : '1rem',
      textAlign: 'center', border: '1px solid rgba(255,255,255,0.08)',
      minWidth: isMobile ? 80 : 'auto',
    },
    statNum: { fontSize: (isMobile ? 20 : 24) * scale, fontWeight: 700, color: '#F59E0B', display: 'block' },
    statLabel: { fontSize: 10 * scale, color: 'rgba(255,255,255,0.5)', marginTop: 2 },
  };

  const isAr = lang === 'ar';

  // Labels selon la langue — t est toujours utilisé, fallback FR si absent
  const heroTag = t?.hero?.tag || '✦ Gratuit · Sans inscription · Sans jugement';
  const heroTitle1 = t?.hero?.title?.split('\n')[0] || 'Vos démarches numériques,';
  const heroTitle2 = t?.hero?.title?.split('\n')[1] || 'enfin expliquées simplement.';
  const heroSub = t?.hero?.subtitle || "NumAdminIA vous guide pas à pas dans vos démarches administratives en ligne — courriers CAF, PDF, emails, dossiers. En 5 minutes, vous comprenez et vous agissez.";
  const heroCta = t?.hero?.cta || 'Commencer gratuitement →';
  const heroExplain = t?.hero?.explain || "Je t'explique 😊";
  const heroBadge = t?.hero?.badge || '✦ 3 questions rapides → votre parcours personnalisé en direct';
  const sectionTitleModules = t?.modules?.sectionTitle || 'Modules disponibles';
  const statsTitle = t?.stats?.statsTitle || '📊 En France aujourd\'hui';
  const sourceBtn = t?.stats?.sourceBtn || '📰 Lire la source';
  const testimonialsTitle = t?.testimonials?.title || '💬 Ils témoignent';
  const personaSectionTitle = t?.persona?.sectionTitle || 'Ils nous ressemblent';
  const personaName = t?.persona?.name || 'Marie, 62 ans';
  const personaStory = t?.persona?.story || "Elle reçoit un courrier CAF réclamant des justificatifs sous 15 jours. Le langage administratif, remplir un PDF, scanner et joindre des fichiers… tout ça la dépasse. Le stress monte.";
  const personaResult = t?.persona?.result || "✓ Avec NumAdminIA, Marie boucle sa démarche seule en quelques jours. Confiance retrouvée.";
  const iaTitle = t?.ia?.title || "L'IA au cœur de NumAdminIA";
  const iaDesc = t?.ia?.desc || "Pas un cours magistral. Une IA qui observe, s'adapte et vous guide personnellement.";
  const iaFeatures = t?.ia?.features || [
    { icon: '🎯', label: 'Diagnostic', desc: 'Évalue votre niveau' },
    { icon: '🔄', label: 'Parcours perso', desc: 'Adapté à vous' },
    { icon: '💡', label: 'Feedback', desc: 'Explique les erreurs' },
  ];

  const statsData = [
    { num: t?.stats?.stat1num || '1/3', label: t?.stats?.stat1label || 'des Français manque de compétences numériques (INSEE 2025)', color: '#EF4444' },
    { num: t?.stats?.stat2num || '16M', label: t?.stats?.stat2label || 'de personnes éloignées du numérique en France (Crédoc 2023)', color: '#F59E0B' },
    { num: t?.stats?.stat3num || '23%', label: t?.stats?.stat3label || "ont renoncé à un droit à cause des démarches (Défenseur des droits 2025)", color: '#8B5CF6' },
  ];

  const testimonials = [
    { emoji: '👵', name: t?.testimonials?.t1?.name || 'Claudette, 71 ans — Creuse', text: t?.testimonials?.t1?.text || "Je ratais mes rendez-vous Ameli car je ne savais pas me connecter. Maintenant je gère seule.", color: '#10B981' },
    { emoji: '👨', name: t?.testimonials?.t2?.name || 'Rachid, 44 ans — Seine-Saint-Denis', text: t?.testimonials?.t2?.text || "Je n'avais jamais fait ma déclaration d'impôts en ligne. Avec le module dédié, je l'ai faite seul en 20 minutes.", color: '#3B82F6' },
  ];

  const homeStats = [
    { num: '14', label: t?.stats?.modules || 'modules pratiques' },
    { num: totalCompleted > 0 ? `${totalCompleted}` : '56', label: totalCompleted > 0 ? (t?.stats?.lessonsCompleted || 'leçons complétées') : (t?.stats?.lessons || 'leçons disponibles') },
    { num: '0€', label: t?.stats?.free || 'pour toujours' },
  ];

  const videos = [
    { src: '/CAF_01_GROK.mp4' },
    { src: '/CAF_Grok.mp4' },
    { src: '/CPAM_Grok.mp4' },
    { src: '/grok_video_4.mp4' },
  ];

  const handleFullscreen = (ref) => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    if (v.requestFullscreen) v.requestFullscreen();
    else if (v.webkitRequestFullscreen) v.webkitRequestFullscreen();
  };

  const vid1 = React.useRef(null);
  const vid2 = React.useRef(null);
  const vid3 = React.useRef(null);
  const vid4 = React.useRef(null);
  const vidRefs = [vid1, vid2, vid3, vid4];

  const VideoCard = ({ src, vidRef }) => (
    <div style={s.videoWrapper}>
      <video
        ref={vidRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', display: 'block', borderRadius: 16 }}
      />
      <button style={s.fullscreenBtn} onClick={() => handleFullscreen(vidRef)}>⛶</button>
      <div style={s.videoCaption}>Généré par Grok</div>
    </div>
  );

  return (
    <div style={s.wrap}>
      <AppHeader onNavigate={onNavigate} large={large} toggleText={toggleText} t={t} isRTL={isRTL} lang={lang} switchLang={switchLang} onDiagnostic={onDiagnostic} />
      <div style={s.pageLayout}>

        {/* COL GAUCHE — vidéos sticky */}
        <div style={{ ...s.videoCol, paddingTop: '2rem' }}>
          <VideoCard src={videos[0].src} vidRef={vid1} />
          <VideoCard src={videos[1].src} vidRef={vid2} />
        </div>

        {/* CONTENU CENTRAL */}
        <main style={s.main}>

        {/* HERO */}
        <div style={s.hero}>
          {/* Logo dans le hero — desktop seulement */}
          {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 16 }}>
              <LogoAnimated height={80} />
            </div>
          )}
          <div style={s.badge}>{heroTag}</div>
          <h1 style={s.heroTitle}>
            {heroTitle1}<br />
            <span style={{ color: '#F59E0B' }}>{heroTitle2}</span>
          </h1>
          <p style={s.heroSub}>{heroSub}</p>
          <div style={{ display: 'flex', gap: 10, flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}>
            <button style={s.startBtn} onClick={() => onNavigate('onboarding')}>
              {heroCta}
            </button>
            <button style={{
              background: 'rgba(255,255,255,0.12)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: '#fff', fontSize: (isMobile ? 14 : 15) * scale, fontWeight: 600,
              padding: isMobile ? '12px 20px' : '14px 22px', borderRadius: 14, cursor: 'pointer',
              width: isMobile ? '100%' : 'auto',
            }} onClick={() => onNavigate('jeexplique')}>
              {heroExplain}
            </button>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.4)',
            borderRadius: 20, padding: '8px 14px', marginTop: 14,
            fontSize: (isMobile ? 11 : 13) * scale, color: '#FCD34D', fontWeight: 600,
            flexWrap: 'wrap',
          }}>
            {heroBadge}
          </div>
        </div>

        {/* CARROUSEL VIDÉOS — mobile uniquement */}
        {isMobile && (
          <div style={{
            display: 'flex', gap: 10, overflowX: 'auto',
            padding: '4px 0 10px',
            marginBottom: 16,
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}>
            {videos.map((v, i) => {
              const ref = vidRefs[i];
              return (
                <div key={i} style={{
                  flexShrink: 0, width: 130, borderRadius: 14,
                  overflow: 'hidden', position: 'relative',
                  background: 'rgba(0,0,0,0.4)',
                  border: '1px solid rgba(245,158,11,0.2)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                }}>
                  <video
                    ref={ref}
                    src={v.src}
                    autoPlay muted loop playsInline
                    style={{ width: '100%', display: 'block', height: 185, objectFit: 'cover' }}
                  />
                  <button
                    onClick={() => handleFullscreen(ref)}
                    style={{
                      position: 'absolute', bottom: 18, right: 4,
                      background: 'rgba(0,0,0,0.6)',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: 6, color: '#fff', fontSize: 10,
                      padding: '2px 5px', cursor: 'pointer', zIndex: 2,
                    }}>⛶</button>
                  <div style={{
                    fontSize: 9, color: 'rgba(255,255,255,0.35)',
                    textAlign: 'center', padding: '3px 4px',
                  }}>Généré par Grok</div>
                </div>
              );
            })}
          </div>
        )}

        {/* STATS ROW */}
        <div style={s.statsRow}>
          {homeStats.map((stat, i) => (
            <div key={i} style={s.stat}>
              <span style={s.statNum}>{stat.num}</span>
              <div style={s.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* STATS INSEE + TÉMOIGNAGES */}
        <div style={{
          background: 'rgba(255,255,255,0.06)',
          borderRadius: 20, padding: '1.5rem',
          marginBottom: 16, border: '1px solid rgba(255,255,255,0.1)',
          animation: 'fadeUp 0.4s 0.25s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 14 }}>
            <div style={{ fontSize: 11 * scale, color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase' }}>
              {statsTitle}
            </div>
            <a
              href="https://www.vie-publique.fr/en-bref/302218-numerique-34-de-la-population-francaise-manque-de-competences"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 12 * scale, fontWeight: 700, color: '#FCD34D',
                background: 'rgba(245,158,11,0.15)',
                border: '1.5px solid rgba(245,158,11,0.5)',
                borderRadius: 20, padding: '5px 14px',
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(245,158,11,0.2)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,158,11,0.15)'; }}
            >
              {sourceBtn}
            </a>
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
            {statsData.map((s2, i) => (
              <div key={i} style={{
                flex: 1, minWidth: 90,
                background: `${s2.color}10`,
                border: `1px solid ${s2.color}30`,
                borderRadius: 14, padding: '12px 10px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 22 * scale, fontWeight: 700, color: s2.color, fontFamily: 'Fraunces, serif' }}>{s2.num}</div>
                <div style={{ fontSize: 11 * scale, color: 'rgba(255,255,255,0.5)', marginTop: 4, lineHeight: 1.4 }}>{s2.label}</div>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14 }}>
            <div style={{ fontSize: 11 * scale, color: 'rgba(255,255,255,0.4)', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 12 }}>
              {testimonialsTitle}
            </div>
            {testimonials.map((tm, i) => (
              <div key={i} style={{
                display: 'flex', gap: 12, marginBottom: i === 0 ? 12 : 0,
                padding: '12px', borderRadius: 14,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{tm.emoji}</div>
                <div>
                  <div style={{ fontSize: 12 * scale, fontWeight: 700, color: tm.color, marginBottom: 4 }}>{tm.name}</div>
                  <div style={{ fontSize: 13 * scale, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontStyle: 'italic' }}>"{tm.text}"</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MINI-QUIZ */}
        <MiniQuiz onNavigate={onNavigate} scale={scale} lang={lang} />

        {/* MARIE */}
        <div style={{
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 20, padding: '1.5rem',
          marginBottom: 16, border: '1px solid rgba(255,255,255,0.12)',
          animation: 'fadeUp 0.4s 0.3s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div style={{ fontSize: 13 * scale, color: 'rgba(255,255,255,0.5)', marginBottom: 10, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
            {personaSectionTitle}
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 36, flexShrink: 0 }}>👵</div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16 * scale, fontWeight: 700, color: '#FCD34D', marginBottom: 6 }}>
                {personaName}
              </div>
              <div style={{ fontSize: 13 * scale, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                {personaStory}
              </div>
              <div style={{ fontSize: 13 * scale, color: '#6EE7B7', lineHeight: 1.7, marginTop: 8, fontWeight: 500 }}>
                {personaResult}
              </div>
            </div>
          </div>
        </div>

        {/* IA SECTION */}
        <div style={{
          background: 'rgba(245,158,11,0.08)',
          borderRadius: 20, padding: '1.5rem',
          marginBottom: 16, border: '1px solid rgba(245,158,11,0.2)',
          animation: 'fadeUp 0.4s 0.4s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          <div style={{ fontSize: 13 * scale, color: '#FCD34D', marginBottom: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
            {iaTitle}
          </div>
          <div style={{ fontSize: 13 * scale, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 16 }}>
            {iaDesc}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {iaFeatures.map((item, i) => (
              <div key={i} style={{
                flex: 1, minWidth: 90, background: 'rgba(255,255,255,0.06)',
                borderRadius: 14, padding: '12px 10px', textAlign: 'center',
                border: '1px solid rgba(245,158,11,0.15)',
              }}>
                <div style={{ fontSize: 22, marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontSize: 12 * scale, fontWeight: 700, color: '#FCD34D', marginBottom: 2 }}>{item.label}</div>
                <div style={{ fontSize: 11 * scale, color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* MODULES */}
        <div style={s.sectionTitle}>{sectionTitleModules}</div>
        {MODULES.map((mod, i) => (
          <div key={mod.id} style={s.moduleCard(i)}
            onClick={() => onNavigate('module', mod.id)}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}>
            <div style={s.moduleIcon(mod.color)}>{mod.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={s.moduleTitle}>
                {t?.moduleNames?.[mod.id] || mod.title}
              </div>
              <div style={s.moduleSub}>{mod.subtitle} · {mod.lessons} {t?.modules?.lessons || 'leçons'}</div>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 20 }}>{isRTL ? '‹' : '›'}</div>
          </div>
        ))}

        {/* FOOTER */}
        <div style={{
          marginTop: 32, textAlign: 'center',
          color: 'rgba(255,255,255,0.4)', fontSize: 12 * scale,
          animation: 'fadeUp 0.4s 0.6s ease both', opacity: 0, animationFillMode: 'forwards',
        }}>
          {t?.footer?.mention || 'Un projet citoyen · Open source · Données protégées'}
        </div>
        <div style={{ textAlign: 'center', marginTop: 8, animation: 'fadeUp 0.4s 0.7s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <a href="mailto:contact.numadminia@proton.me?subject=NumAdminIA — Contact"
            style={{ color: 'rgba(245,158,11,0.6)', fontSize: 12 * scale, textDecoration: 'none' }}>
            ✉️ contact.numadminia@proton.me
          </a>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10, animation: 'fadeUp 0.4s 0.8s ease both', opacity: 0, animationFillMode: 'forwards' }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 * scale, fontStyle: 'italic' }}>
            Orchestrateur IA : Jean Luc Descombes — en collaboration avec Claude (Anthropic), Copilot et Grok
          </span>
        </div>
      </main>

        {/* COL DROITE — vidéos sticky */}
        <div style={{ ...s.videoCol, paddingTop: '2rem' }}>
          <VideoCard src={videos[2].src} vidRef={vid3} />
          <VideoCard src={videos[3].src} vidRef={vid4} />
        </div>

      </div>
    </div>
  );
}
