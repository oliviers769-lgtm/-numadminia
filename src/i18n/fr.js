// Traductions françaises — langue de référence
// LTR — direction: ltr

export const FR = {
  lang: 'fr',
  dir: 'ltr',

  nav: {
    home: 'Accueil',
    back: 'Retour',
    modules: 'Modules',
    about: 'À propos',
    start: 'Commencer',
    close: 'Fermer',
    jeexplique: 'Je t\'explique',
    textLarger: 'Texte plus grand ?',
  },

  hero: {
    tag: 'Gratuit — Sans inscription — Sans jugement',
    title: 'L\'administration numérique,\nsans stress',
    subtitle: 'Apprenez à accomplir vos démarches en ligne, étape par étape, avec des mots simples.',
    cta: 'Commencer gratuitement ←',
    explain: 'Comment ça marche ?',
  },

  stats: {
    people: '34% manquent de compétences numériques, 7% en illectronisme strict',
    lessons: 'leçons pratiques',
    free: 'entièrement gratuit',
    source: 'Sources : INSEE & Défenseur des droits 2025',
  },

  modules: {
    title: 'Choisissez votre module',
    subtitle: 'Chaque module résout un problème concret du quotidien',
    lessons: 'leçons',
    completed: 'complété',
    progress: 'Votre progression',
    start: 'Commencer ←',
    continue: 'Continuer ←',
    done: '✓ Complété',
  },

  moduleNames: {
    courrier:       'Décoder un courrier officiel',
    pdf:            'Remplir un PDF',
    email:          'Les emails',
    dossier:        'Constituer un dossier',
    securite:       'Sécurité numérique',
    impots:         'Déclaration d\'impôts',
    cartevitale:    'Carte Vitale & Santé',
    rsacaf:         'Tout sur la CAF',
    logement:       'Logement & APL',
    dossiermedical: 'Dossier médical',
    formation:      'Formation professionnelle',
    permis:         'Permis de conduire',
    banque:         'Compte bancaire',
    smartphone:     'Smartphone pour débutants',
  },

  lesson: {
    context: 'Mise en situation',
    question: 'Question',
    validate: 'Valider ✓',
    correct: '✅ Bonne réponse !',
    wrong: '❌ Pas tout à fait…',
    next: 'Leçon suivante →',
    finish: '🎉 Terminer le module',
    explanation: 'Explication',
    lessonOf: 'Leçon {n} sur {total}',
  },

  moduleEnd: {
    congrats: '🎉',
    title: 'Module terminé !',
    desc: 'Bravo ! Vous avez complété le module',
    desc2: 'Chaque leçon apprise, c\'est une démarche de moins à redouter. Continuez comme ça ! 💪',
    nextModule: 'Module suivant',
    allModules: 'Voir tous les modules',
    retry: 'Revoir ce module',
    allDone: '🏆 Tous les modules complétés !',
    stats: {
      lessons: 'leçons',
      completed: 'complété',
      badge: 'badge',
    },
  },

  onboarding: {
    title: 'Bienvenue 👋',
    subtitle: 'Répondez à 3 questions pour qu\'on vous guide au mieux',
    skip: 'Passer et commencer directement →',
    cta: 'C\'est parti ! →',
    allModules: 'Voir tous les modules',
    questions: [
      {
        id: 'defi',
        question: 'Quel est votre plus grand défi en ce moment ?',
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
        question: 'Vous vous considérez plutôt...',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 Débutant — le numérique me fait peur' },
          { id: 'moyen', text: '🌿 Un peu à l\'aise — je me débrouille mais j\'ai des blocages' },
          { id: 'avance', text: '🌳 À l\'aise — je veux juste comprendre les démarches admin' },
        ]
      },
      {
        id: 'appareil',
        question: 'Vous utilisez surtout...',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 Mon téléphone' },
          { id: 'ordinateur', text: '💻 Mon ordinateur' },
          { id: 'les_deux', text: '📱💻 Les deux' },
        ]
      },
    ],
    messages: {
      courrier: { titre: 'Commençons par les courriers officiels', desc: 'C\'est souvent là que tout se bloque. On va démystifier ça ensemble.', module: 'courrier' },
      pdf: { titre: 'On attaque les PDF', desc: 'Remplir un formulaire PDF sans stress — c\'est possible. On vous montre.', module: 'pdf' },
      email: { titre: 'Maîtrisons les emails', desc: 'Envoyer des pièces jointes, reconnaître les arnaques — on y va pas à pas.', module: 'email' },
      dossier: { titre: 'Constituons votre dossier', desc: 'Rassembler les bons documents au bon moment — on vous guide.', module: 'dossier' },
      securite: { titre: 'Protégeons vos données', desc: 'Reconnaître les arnaques, sécuriser vos comptes — vous serez serein.', module: 'securite' },
      impots: { titre: 'Déclarons vos impôts ensemble', desc: 'Pas à pas sur impots.gouv.fr — en quelques minutes c\'est fait.', module: 'impots' },
      cartevitale: { titre: 'Maîtrisons votre carte Vitale', desc: 'Ameli, remboursements, mise à jour — on vous explique tout.', module: 'cartevitale' },
      rsacaf: { titre: 'Découvrons tout ce que la CAF peut faire pour vous', desc: 'RSA, allocations, PAJE — simulez vos droits en quelques minutes.', module: 'rsacaf' },
      logement: { titre: 'Trouvons votre logement', desc: 'Demande HLM, APL, droits locataires — on vous guide pas à pas.', module: 'logement' },
      dossiermedical: { titre: 'Gérons votre dossier médical', desc: 'Mon Espace Santé, ordonnances, droits patients — tout est expliqué.', module: 'dossiermedical' },
    },
  },

  about: {
    tag: 'À propos',
    title: 'NumAdminIA — L\'administration pour tous',
    mission: 'Projet gratuit et open source pour aider les personnes en situation d\'illectronisme à accomplir leurs démarches administratives numériques.',
    persona: 'Marie, 62 ans, reçoit un courrier CAF réclamant des justificatifs sous 15 jours. NumAdminIA lui permet de boucler sa démarche seule.',
    team: 'L\'équipe',
    openSource: 'Open source',
  },

  footer: {
    home: 'Accueil',
    modules: 'Modules',
    progress: 'Progression',
    about: 'À propos',
    mention: 'Un projet citoyen · Open source · Données protégées',
  },

  burger: {
    navigation: 'Navigation',
    modules: 'Modules',
    home: 'Accueil',
    about: 'À propos',
    language: 'Langue',
  },

  badges: {
    courrier:       'Expert Courrier',
    pdf:            'Maître PDF',
    email:          'Pro Email',
    dossier:        'As du Dossier',
    securite:       'Gardien Numérique',
    impots:         'Expert Impôts',
    cartevitale:    'Expert Santé',
    rsacaf:         'Expert CAF',
    logement:       'Expert Logement',
    dossiermedical: 'Expert Dossier Médical',
    formation:      'Expert Formation',
    permis:         'Expert Permis',
    banque:         'Expert Bancaire',
    smartphone:     'Expert Smartphone',
  },

  testimonials: {
    title: 'Ils témoignent',
    t1: { name: 'Claudette, 71 ans — Creuse', text: 'Je ratais mes rendez-vous Ameli car je ne savais pas me connecter. Maintenant je gère seule.' },
    t2: { name: 'Rachid, 44 ans — Seine-Saint-Denis', text: 'Je n\'avais jamais fait ma déclaration d\'impôts en ligne. Avec le module dédié, je l\'ai faite seul en 20 minutes.' },
  },

  errors: {
    moduleNotFound: 'Module introuvable',
  },
  stickyFooter: {
    title: "Pas sûr par où commencer ?",
    subtitle: "3 questions → votre parcours personnalisé",
    cta: "Test diagnostic gratuit →",
  },
};
