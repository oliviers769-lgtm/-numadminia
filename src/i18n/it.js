// Traduzioni italiane
// LTR — direction: ltr

export const IT = {
  lang: 'it',
  dir: 'ltr',

  nav: {
    home: 'Home',
    back: 'Indietro',
    modules: 'Moduli',
    about: 'Chi siamo',
    start: 'Inizia',
    close: 'Chiudi',
    jeexplique: 'Come funziona',
    textLarger: 'Testo più grande?',
  },

  hero: {
    tag: 'Gratuito — Senza registrazione — Senza giudizi',
    title: 'L\'amministrazione francese,\nsenza stress',
    subtitle: 'Impara a completare le tue pratiche online, passo dopo passo, con parole semplici.',
    cta: 'Inizia il test →',
    explain: 'Come funziona?',
    badge: '✦ 3 domande rapide → il vostro percorso personalizzato in diretta',
  },

  stats: {
    people: 'Il 34% manca di competenze digitali',
    lessons: 'lezioni disponibili',
    lessonsCompleted: 'lezioni completate',
    free: 'sempre gratuito',
    modules: 'moduli pratici',
    statsTitle: '📊 In Francia oggi',
    sourceBtn: '📰 Leggi la fonte',
    stat1num: '1/3',
    stat1label: 'dei Francesi manca di competenze digitali (INSEE 2025)',
    stat2num: '16M',
    stat2label: 'persone escluse dal digitale in Francia (Crédoc 2023)',
    stat3num: '23%',
    stat3label: 'ha rinunciato a un diritto per le pratiche burocratiche (2025)',
  },

  modules: {
    title: 'Scegli il tuo modulo',
    subtitle: 'Ogni modulo risolve un problema concreto della vita quotidiana',
    lessons: 'lezioni',
    completed: 'completato',
    progress: 'I tuoi progressi',
    start: 'Inizia ←',
    continue: 'Continua ←',
    done: '✓ Completato',
  },

  moduleNames: {
    courrier:       'Leggere la posta ufficiale',
    pdf:            'Compilare un PDF',
    email:          'Le email',
    dossier:        'Costituire un fascicolo',
    securite:       'Sicurezza digitale',
    impots:         'Dichiarazione dei redditi',
    cartevitale:    'Carte Vitale & Salute',
    rsacaf:         'Tutto sulla CAF',
    logement:       'Alloggio & APL',
    dossiermedical: 'Fascicolo medico',
    formation:      'Formazione professionale',
    permis:         'Patente di guida',
    banque:         'Conto bancario',
    smartphone:     'Smartphone per principianti',
  },

  lesson: {
    context: 'Situazione',
    question: 'Domanda',
    validate: 'Valida ✓',
    correct: '✅ Risposta corretta!',
    wrong: '❌ Non proprio…',
    next: 'Lezione successiva →',
    finish: '🎉 Termina il modulo',
    explanation: 'Spiegazione',
    lessonOf: 'Lezione {n} di {total}',
  },

  moduleEnd: {
    congrats: '🎉',
    title: 'Modulo completato!',
    desc: 'Bravo! Hai completato il modulo',
    desc2: 'Ogni lezione imparata è una pratica in meno da temere. Continua così! 💪',
    nextModule: 'Modulo successivo',
    allModules: 'Vedi tutti i moduli',
  },

  onboarding: {
    title: 'Trova il tuo punto di partenza',
    subtitle: '3 domande rapide per personalizzare il tuo percorso',
    questions: [
      {
        id: 'besoin',
        question: 'Cosa ti ha portato qui oggi?',
        emoji: '🎯',
        options: [
          { id: 'courrier', text: '📬 Ho ricevuto una lettera ufficiale e non la capisco', module: 'courrier' },
          { id: 'pdf', text: '📄 Devo compilare un modulo online o un PDF', module: 'pdf' },
          { id: 'email', text: '✉️ Devo inviare un\'email a un\'organizzazione', module: 'email' },
          { id: 'dossier', text: '📁 Devo preparare un fascicolo (alloggio, CAF, lavoro…)', module: 'dossier' },
          { id: 'securite', text: '🔒 Temo le truffe e voglio proteggere i miei dati', module: 'securite' },
          { id: 'impots', text: '🧾 Devo fare la dichiarazione dei redditi e non so come', module: 'impots' },
          { id: 'cartevitale', text: '💊 Ho domande sulla mia Carte Vitale o sui rimborsi', module: 'cartevitale' },
          { id: 'rsacaf', text: '🏛️ Voglio conoscere i miei diritti CAF — RSA, assegni, aiuti', module: 'rsacaf' },
          { id: 'logement', text: '🏠 Cerco un alloggio sociale o voglio capire i miei diritti', module: 'logement' },
          { id: 'dossiermedical', text: '🏥 Voglio accedere al mio fascicolo medico o organizzare i miei documenti sanitari', module: 'dossiermedical' },
        ]
      },
      {
        id: 'niveau',
        question: 'Come ti descriveresti?',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 Principiante — il digitale mi spaventa' },
          { id: 'moyen', text: '🌿 Abbastanza a mio agio — me la cavo ma ho lacune' },
          { id: 'avance', text: '🌳 A mio agio — voglio solo capire le pratiche amministrative' },
        ]
      },
      {
        id: 'appareil',
        question: 'Utilizzi principalmente…',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 Il mio telefono' },
          { id: 'ordinateur', text: '💻 Il mio computer' },
          { id: 'les_deux', text: '📱💻 Entrambi' },
        ]
      },
    ],
    messages: {
      courrier: { titre: 'Iniziamo dalla posta ufficiale', desc: 'È spesso lì che tutto si blocca. Lo demistificheremo insieme.', module: 'courrier' },
      pdf: { titre: 'Affrontiamo i PDF', desc: 'Compilare un modulo PDF senza stress — è possibile. Te lo mostriamo.', module: 'pdf' },
      email: { titre: 'Padroneggiamo le email', desc: 'Inviare allegati, riconoscere le truffe — passo dopo passo.', module: 'email' },
      dossier: { titre: 'Costituiamo il tuo fascicolo', desc: 'Raccogliere i documenti giusti al momento giusto — ti guidiamo.', module: 'dossier' },
      securite: { titre: 'Proteggiamo i tuoi dati', desc: 'Riconoscere le truffe, mettere in sicurezza i tuoi account — sarai tranquillo.', module: 'securite' },
      impots: { titre: 'Facciamo la dichiarazione dei redditi insieme', desc: 'Passo dopo passo su impots.gouv.fr — fatto in pochi minuti.', module: 'impots' },
      cartevitale: { titre: 'Padroneggiamo la tua Carte Vitale', desc: 'Ameli, rimborsi, aggiornamento — ti spieghiamo tutto.', module: 'cartevitale' },
      rsacaf: { titre: 'Scopriamo tutto ciò che la CAF può fare per te', desc: 'RSA, assegni, PAJE — simula i tuoi diritti in pochi minuti.', module: 'rsacaf' },
      logement: { titre: 'Troviamo il tuo alloggio', desc: 'Domanda HLM, APL, diritti degli inquilini — ti guidiamo passo dopo passo.', module: 'logement' },
      dossiermedical: { titre: 'Gestiamo il tuo fascicolo medico', desc: 'Mon Espace Santé, ricette, diritti dei pazienti — tutto spiegato.', module: 'dossiermedical' },
    },
  },

  about: {
    tag: 'Chi siamo',
    title: 'NumAdminIA — L\'amministrazione per tutti',
    mission: 'Un progetto gratuito e open source per aiutare le persone in situazione di esclusione digitale a svolgere le proprie pratiche amministrative online.',
    persona: 'Marie, 62 anni, riceve una lettera CAF che richiede documenti entro 15 giorni. NumAdminIA le permette di completare la pratica da sola.',
    team: 'Il team',
    openSource: 'Open source',
  },

  footer: {
    home: 'Home',
    modules: 'Moduli',
    progress: 'Progressi',
    about: 'Chi siamo',
    mention: 'Un progetto civico · Open source · Dati protetti',
  },

  burger: {
    navigation: 'Navigazione',
    modules: 'Moduli',
    home: 'Home',
    about: 'Chi siamo',
    language: 'Lingua',
  },

  badges: {
    courrier:       'Esperto Posta',
    pdf:            'Maestro PDF',
    email:          'Pro Email',
    dossier:        'Asso dei Fascicoli',
    securite:       'Guardiano Digitale',
    impots:         'Esperto Fiscale',
    cartevitale:    'Esperto Salute',
    rsacaf:         'Esperto CAF',
    logement:       'Esperto Alloggio',
    dossiermedical: 'Esperto Fascicolo Medico',
    formation:      'Esperto Formazione',
    permis:         'Esperto Patente',
    banque:         'Esperto Bancario',
    smartphone:     'Esperto Smartphone',
  },

  testimonials: {
    title: 'Le loro testimonianze',
    t1: { name: 'Claudette, 71 anni — Creuse', text: 'Perdevo i miei appuntamenti Ameli perché non sapevo come accedere. Ora me la cavo da sola.' },
    t2: { name: 'Rachid, 44 anni — Seine-Saint-Denis', text: 'Non avevo mai fatto la dichiarazione dei redditi online. Con il modulo dedicato, l\'ho fatta da solo in 20 minuti.' },
  },


  persona: {
    sectionTitle: 'Come noi',
    name: 'Marie, 62 anni',
    story: 'Riceve una lettera CAF che richiede documenti entro 15 giorni. Il linguaggio amministrativo, compilare un PDF, scansionare file — tutto la supera. Lo stress sale.',
    result: '✓ Con NumAdminIA, Marie completa la sua pratica da sola in pochi giorni. Fiducia ritrovata.',
  },

  ia: {
    title: "L\'IA al cuore di NumAdminIA",
    desc: "Non una lezione. Un\'IA che osserva, si adatta e vi guida personalmente.",
    features: [
      { icon: '🎯', label: 'Diagnostico', desc: 'Valuta il vostro livello' },
      { icon: '🔄', label: 'Percorso personale', desc: 'Adattato a voi' },
      { icon: '💡', label: 'Feedback', desc: 'Spiega gli errori' },
    ],
  },

  errors: {
    moduleNotFound: 'Modulo non trovato',
  },

  stickyFooter: {
    title: 'Non sai da dove iniziare?',
    subtitle: '3 domande → il tuo percorso personalizzato',
    cta: 'Inizia il test →',
  },
};
