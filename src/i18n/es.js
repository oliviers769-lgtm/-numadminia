// Traducciones al español
// LTR — direction: ltr

export const ES = {
  lang: 'es',
  dir: 'ltr',

  nav: {
    home: 'Inicio',
    back: 'Volver',
    modules: 'Módulos',
    about: 'Acerca de',
    start: 'Empezar',
    close: 'Cerrar',
    jeexplique: 'Cómo funciona',
    textLarger: '¿Texto más grande?',
  },

  hero: {
    tag: 'Gratuito — Sin registro — Sin juicios',
    title: 'La administración francesa,\nsin estrés',
    subtitle: 'Aprende a realizar tus trámites en línea, paso a paso, con palabras sencillas.',
    cta: 'Empezar el test →',
    explain: '¿Cómo funciona?',
    badge: '✦ 3 preguntas rápidas → tu recorrido personalizado en directo',
  },

  stats: {
    people: 'El 34% carece de competencias digitales',
    lessons: 'lecciones disponibles',
    lessonsCompleted: 'lecciones completadas',
    free: 'siempre gratis',
    modules: 'módulos prácticos',
    statsTitle: '📊 En Francia hoy',
    sourceBtn: '📰 Leer la fuente',
    stat1num: '1/3',
    stat1label: 'de los franceses carece de competencias digitales (INSEE 2025)',
    stat2num: '16M',
    stat2label: 'personas excluidas de lo digital en Francia (Crédoc 2023)',
    stat3num: '23%',
    stat3label: 'renunció a un derecho por los trámites administrativos (2025)',
  },

  modules: {
    title: 'Elige tu módulo',
    subtitle: 'Cada módulo resuelve un problema concreto del día a día',
    lessons: 'lecciones',
    completed: 'completado',
    progress: 'Tu progreso',
    start: 'Empezar ←',
    continue: 'Continuar ←',
    done: '✓ Completado',
  },

  moduleNames: {
    courrier:       'Leer el correo oficial',
    pdf:            'Rellenar un PDF',
    email:          'Los correos electrónicos',
    dossier:        'Preparar un expediente',
    securite:       'Seguridad digital',
    impots:         'Declaración de impuestos',
    cartevitale:    'Carte Vitale & Salud',
    rsacaf:         'Todo sobre la CAF',
    logement:       'Vivienda & APL',
    dossiermedical: 'Expediente médico',
    formation:      'Formación profesional',
    permis:         'Carnet de conducir',
    banque:         'Cuenta bancaria',
    smartphone:     'Smartphone para principiantes',
  },

  lesson: {
    context: 'Situación',
    question: 'Pregunta',
    validate: 'Validar ✓',
    correct: '✅ ¡Respuesta correcta!',
    wrong: '❌ No del todo…',
    next: 'Siguiente lección →',
    finish: '🎉 Terminar el módulo',
    explanation: 'Explicación',
    lessonOf: 'Lección {n} de {total}',
  },

  moduleEnd: {
    congrats: '🎉',
    title: '¡Módulo completado!',
    desc: '¡Bravo! Has completado el módulo',
    desc2: 'Cada lección aprendida es un trámite menos que temer. ¡Sigue así! 💪',
    nextModule: 'Módulo siguiente',
    allModules: 'Ver todos los módulos',
  },

  onboarding: {
    title: 'Encuentra tu punto de partida',
    subtitle: '3 preguntas rápidas para personalizar tu recorrido',
    questions: [
      {
        id: 'besoin',
        question: '¿Qué te trae aquí hoy?',
        emoji: '🎯',
        options: [
          { id: 'courrier', text: '📬 Recibí una carta oficial y no la entiendo', module: 'courrier' },
          { id: 'pdf', text: '📄 Necesito rellenar un formulario en línea o un PDF', module: 'pdf' },
          { id: 'email', text: '✉️ Necesito enviar un correo a un organismo', module: 'email' },
          { id: 'dossier', text: '📁 Necesito preparar un expediente (vivienda, CAF, trabajo…)', module: 'dossier' },
          { id: 'securite', text: '🔒 Me preocupan las estafas y quiero proteger mis datos', module: 'securite' },
          { id: 'impots', text: '🧾 Debo hacer mi declaración de impuestos y no sé cómo', module: 'impots' },
          { id: 'cartevitale', text: '💊 Tengo preguntas sobre mi Carte Vitale o los reembolsos', module: 'cartevitale' },
          { id: 'rsacaf', text: '🏛️ Quiero conocer mis derechos en la CAF — RSA, prestaciones, ayudas', module: 'rsacaf' },
          { id: 'logement', text: '🏠 Busco una vivienda social o quiero entender mis derechos', module: 'logement' },
          { id: 'dossiermedical', text: '🏥 Quiero acceder a mi expediente médico u organizar mis documentos de salud', module: 'dossiermedical' },
        ]
      },
      {
        id: 'niveau',
        question: '¿Cómo te describirías?',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 Principiante — lo digital me da miedo' },
          { id: 'moyen', text: '🌿 Bastante cómodo — me apaño pero tengo lagunas' },
          { id: 'avance', text: '🌳 Cómodo — solo quiero entender los trámites administrativos' },
        ]
      },
      {
        id: 'appareil',
        question: 'Usas principalmente…',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 Mi teléfono' },
          { id: 'ordinateur', text: '💻 Mi ordenador' },
          { id: 'les_deux', text: '📱💻 Los dos' },
        ]
      },
    ],
    messages: {
      courrier: { titre: 'Empecemos por el correo oficial', desc: 'A menudo ahí es donde todo se bloquea. Lo desmitificaremos juntos.', module: 'courrier' },
      pdf: { titre: 'Afrontemos los PDF', desc: 'Rellenar un formulario PDF sin estrés — es posible. Te lo mostramos.', module: 'pdf' },
      email: { titre: 'Dominemos los correos', desc: 'Enviar adjuntos, reconocer estafas — paso a paso.', module: 'email' },
      dossier: { titre: 'Preparemos tu expediente', desc: 'Reunir los documentos correctos en el momento adecuado — te guiamos.', module: 'dossier' },
      securite: { titre: 'Protejamos tus datos', desc: 'Reconocer estafas, proteger tus cuentas — estarás tranquilo.', module: 'securite' },
      impots: { titre: 'Hagamos tu declaración de impuestos juntos', desc: 'Paso a paso en impots.gouv.fr — listo en pocos minutos.', module: 'impots' },
      cartevitale: { titre: 'Dominemos tu Carte Vitale', desc: 'Ameli, reembolsos, actualización — te explicamos todo.', module: 'cartevitale' },
      rsacaf: { titre: 'Descubramos todo lo que la CAF puede hacer por ti', desc: 'RSA, prestaciones, PAJE — simula tus derechos en minutos.', module: 'rsacaf' },
      logement: { titre: 'Encontremos tu vivienda', desc: 'Solicitud HLM, APL, derechos del inquilino — te guiamos paso a paso.', module: 'logement' },
      dossiermedical: { titre: 'Gestionemos tu expediente médico', desc: 'Mon Espace Santé, recetas, derechos del paciente — todo explicado.', module: 'dossiermedical' },
    },
  },

  about: {
    tag: 'Acerca de',
    title: 'NumAdminIA — La administración para todos',
    mission: 'Un proyecto gratuito y de código abierto para ayudar a las personas en situación de exclusión digital a realizar sus trámites administrativos en línea.',
    persona: 'Marie, 62 años, recibe una carta de la CAF que pide documentos en 15 días. NumAdminIA le permite completar el trámite sola.',
    team: 'El equipo',
    openSource: 'Código abierto',
  },

  footer: {
    home: 'Inicio',
    modules: 'Módulos',
    progress: 'Progreso',
    about: 'Acerca de',
    mention: 'Un proyecto cívico · Código abierto · Datos protegidos',
  },

  burger: {
    navigation: 'Navegación',
    modules: 'Módulos',
    home: 'Inicio',
    about: 'Acerca de',
    language: 'Idioma',
  },

  badges: {
    courrier:       'Experto en Correo',
    pdf:            'Maestro PDF',
    email:          'Pro Email',
    dossier:        'As de Expedientes',
    securite:       'Guardián Digital',
    impots:         'Experto Fiscal',
    cartevitale:    'Experto en Salud',
    rsacaf:         'Experto CAF',
    logement:       'Experto en Vivienda',
    dossiermedical: 'Experto en Expediente Médico',
    formation:      'Experto en Formación',
    permis:         'Experto en Carnet',
    banque:         'Experto Bancario',
    smartphone:     'Experto Smartphone',
  },

  testimonials: {
    title: 'Sus testimonios',
    t1: { name: 'Claudette, 71 años — Creuse', text: 'Me perdía mis citas Ameli porque no sabía cómo conectarme. Ahora lo gestiono sola.' },
    t2: { name: 'Rachid, 44 años — Seine-Saint-Denis', text: 'Nunca había hecho mi declaración de impuestos en línea. Con el módulo dedicado, lo hice solo en 20 minutos.' },
  },


  persona: {
    sectionTitle: 'Como nosotros',
    name: 'Marie, 62 años',
    story: 'Recibe una carta de la CAF que exige documentos en 15 días. El lenguaje administrativo, rellenar un PDF, escanear archivos — todo la supera. El estrés aumenta.',
    result: '✓ Con NumAdminIA, Marie completa su trámite sola en pocos días. Confianza recuperada.',
  },

  ia: {
    title: 'La IA en el corazón de NumAdminIA',
    desc: 'No una clase magistral. Una IA que observa, se adapta y te guía personalmente.',
    features: [
      { icon: '🎯', label: 'Diagnóstico', desc: 'Evalúa tu nivel' },
      { icon: '🔄', label: 'Camino personal', desc: 'Adaptado a ti' },
      { icon: '💡', label: 'Retroalimentación', desc: 'Explica los errores' },
    ],
  },

  errors: {
    moduleNotFound: 'Módulo no encontrado',
  },

  stickyFooter: {
    title: '¿No sabes por dónde empezar?',
    subtitle: '3 preguntas → tu recorrido personalizado',
    cta: 'Empezar el test →',
  },
};
