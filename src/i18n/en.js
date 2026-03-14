// English translations
// LTR — direction: ltr

export const EN = {
  lang: 'en',
  dir: 'ltr',

  nav: {
    home: 'Home',
    back: 'Back',
    modules: 'Modules',
    about: 'About',
    start: 'Start',
    close: 'Close',
    jeexplique: 'How it works',
    textLarger: 'Larger text?',
  },

  hero: {
    tag: 'Free — No registration — No judgment',
    title: 'French administration,\nwithout the stress',
    subtitle: 'Learn to complete your online procedures, step by step, in plain language.',
    cta: 'Start the test →',
    explain: 'How does it work?',
    badge: '✦ 3 quick questions → your personalised path, live',
  },

  stats: {
    people: '34% lack digital skills, 7% are fully digitally excluded',
    lessons: 'lessons available',
    lessonsCompleted: 'lessons completed',
    free: 'always free',
    modules: 'practical modules',
    source: 'Sources: INSEE & Défenseur des droits 2025',
    statsTitle: '📊 France today',
    sourceBtn: '📰 Read the source',
    stat1num: '1/3',
    stat1label: 'of French people lack digital skills (INSEE 2025)',
    stat2num: '16M',
    stat2label: 'people digitally excluded in France (Crédoc 2023)',
    stat3num: '23%',
    stat3label: 'gave up a right because of administrative procedures (2025)',
  },

  modules: {
    title: 'Choose your module',
    subtitle: 'Each module solves a concrete everyday problem',
    lessons: 'lessons',
    completed: 'completed',
    progress: 'Your progress',
    start: 'Start ←',
    continue: 'Continue ←',
    done: '✓ Completed',
  },

  moduleNames: {
    courrier:       'Reading official mail',
    pdf:            'Filling in a PDF',
    email:          'Emails',
    dossier:        'Building a file',
    securite:       'Digital security',
    impots:         'Tax return',
    cartevitale:    'Carte Vitale & Health',
    rsacaf:         'All about CAF benefits',
    logement:       'Housing & APL',
    dossiermedical: 'Medical file',
    formation:      'Professional training',
    permis:         'Driving licence',
    banque:         'Bank account',
    smartphone:     'Smartphone for beginners',
  },

  lesson: {
    context: 'Scenario',
    question: 'Question',
    validate: 'Validate ✓',
    correct: '✅ Correct!',
    wrong: '❌ Not quite…',
    next: 'Next lesson →',
    finish: '🎉 Finish module',
    explanation: 'Explanation',
    lessonOf: 'Lesson {n} of {total}',
  },

  moduleEnd: {
    congrats: '🎉',
    title: 'Module complete!',
    desc: 'Well done! You have completed the module',
    desc2: 'Every lesson learned is one less procedure to worry about. Keep it up! 💪',
    nextModule: 'Next module',
    allModules: 'See all modules',
  },

  onboarding: {
    title: 'Find your starting point',
    subtitle: '3 quick questions to personalise your journey',
    questions: [
      {
        id: 'besoin',
        question: 'What brings you here today?',
        emoji: '🎯',
        options: [
          { id: 'courrier', text: '📬 I received an official letter and I don\'t understand it', module: 'courrier' },
          { id: 'pdf', text: '📄 I need to fill in an online form or PDF', module: 'pdf' },
          { id: 'email', text: '✉️ I need to send an email to an organisation', module: 'email' },
          { id: 'dossier', text: '📁 I need to put together a file (housing, CAF, job…)', module: 'dossier' },
          { id: 'securite', text: '🔒 I\'m worried about scams and want to protect my data', module: 'securite' },
          { id: 'impots', text: '🧾 I need to file my tax return and don\'t know how', module: 'impots' },
          { id: 'cartevitale', text: '💊 I have questions about my Carte Vitale or reimbursements', module: 'cartevitale' },
          { id: 'rsacaf', text: '🏛️ I want to know my CAF rights — RSA, benefits, aids', module: 'rsacaf' },
          { id: 'logement', text: '🏠 I\'m looking for social housing or want to understand my rights', module: 'logement' },
          { id: 'dossiermedical', text: '🏥 I want to access my medical file or organise my health documents', module: 'dossiermedical' },
        ]
      },
      {
        id: 'niveau',
        question: 'How would you describe yourself?',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 Beginner — digital technology scares me' },
          { id: 'moyen', text: '🌿 Somewhat comfortable — I manage but have gaps' },
          { id: 'avance', text: '🌳 Comfortable — I just want to understand the admin procedures' },
        ]
      },
      {
        id: 'appareil',
        question: 'You mainly use…',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 My phone' },
          { id: 'ordinateur', text: '💻 My computer' },
          { id: 'les_deux', text: '📱💻 Both' },
        ]
      },
    ],
    messages: {
      courrier: { titre: 'Let\'s start with official mail', desc: 'That\'s often where everything gets stuck. We\'ll demystify it together.', module: 'courrier' },
      pdf: { titre: 'Let\'s tackle PDFs', desc: 'Filling in a PDF form without stress — it\'s possible. We\'ll show you.', module: 'pdf' },
      email: { titre: 'Let\'s master emails', desc: 'Sending attachments, spotting scams — we\'ll go step by step.', module: 'email' },
      dossier: { titre: 'Let\'s build your file', desc: 'Gathering the right documents at the right time — we\'ll guide you.', module: 'dossier' },
      securite: { titre: 'Let\'s protect your data', desc: 'Spotting scams, securing your accounts — you\'ll feel confident.', module: 'securite' },
      impots: { titre: 'Let\'s file your taxes together', desc: 'Step by step on impots.gouv.fr — done in a few minutes.', module: 'impots' },
      cartevitale: { titre: 'Let\'s master your Carte Vitale', desc: 'Ameli, reimbursements, updates — we explain everything.', module: 'cartevitale' },
      rsacaf: { titre: 'Let\'s discover everything CAF can do for you', desc: 'RSA, benefits, PAJE — simulate your entitlements in minutes.', module: 'rsacaf' },
      logement: { titre: 'Let\'s find your housing', desc: 'HLM application, APL, tenant rights — we guide you step by step.', module: 'logement' },
      dossiermedical: { titre: 'Let\'s manage your medical file', desc: 'Mon Espace Santé, prescriptions, patient rights — all explained.', module: 'dossiermedical' },
    },
  },

  about: {
    tag: 'About',
    title: 'NumAdminIA — Administration for everyone',
    mission: 'A free and open-source project to help people with digital exclusion complete their online administrative procedures.',
    persona: 'Marie, 62, receives a CAF letter requesting documents within 15 days. NumAdminIA lets her complete the procedure on her own.',
    team: 'The team',
    openSource: 'Open source',
  },

  footer: {
    home: 'Home',
    modules: 'Modules',
    progress: 'Progress',
    about: 'About',
    mention: 'A civic project · Open source · Data protected',
  },

  burger: {
    navigation: 'Navigation',
    modules: 'Modules',
    home: 'Home',
    about: 'About',
    language: 'Language',
  },

  badges: {
    courrier:       'Mail Expert',
    pdf:            'PDF Master',
    email:          'Email Pro',
    dossier:        'File Expert',
    securite:       'Digital Guardian',
    impots:         'Tax Expert',
    cartevitale:    'Health Expert',
    rsacaf:         'CAF Expert',
    logement:       'Housing Expert',
    dossiermedical: 'Medical File Expert',
    formation:      'Training Expert',
    permis:         'Licence Expert',
    banque:         'Banking Expert',
    smartphone:     'Smartphone Expert',
  },

  testimonials: {
    title: 'They share their story',
    t1: { name: 'Claudette, 71 — Creuse', text: 'I kept missing my Ameli appointments because I didn\'t know how to log in. Now I manage on my own.' },
    t2: { name: 'Rachid, 44 — Seine-Saint-Denis', text: 'I had never filed my tax return online. With the dedicated module, I did it alone in 20 minutes.' },
  },

  persona: {
    sectionTitle: 'People like us',
    name: 'Marie, 62',
    story: 'She receives a CAF letter demanding documents within 15 days. Administrative language, filling in a PDF, scanning files — all of it overwhelms her. Stress builds.',
    result: '✓ With NumAdminIA, Marie completes her procedure on her own within a few days. Confidence restored.',
  },

  ia: {
    title: 'AI at the heart of NumAdminIA',
    desc: 'Not a lecture. An AI that observes, adapts and guides you personally.',
    features: [
      { icon: '🎯', label: 'Diagnostic', desc: 'Assesses your level' },
      { icon: '🔄', label: 'Personal path', desc: 'Adapted to you' },
      { icon: '💡', label: 'Feedback', desc: 'Explains mistakes' },
    ],
  },

  errors: {
    moduleNotFound: 'Module not found',
  },

  stickyFooter: {
    title: 'Not sure where to start?',
    subtitle: '3 questions → your personalised path',
    cta: 'Start the test →',
  },
};
