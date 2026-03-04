// Traduções em Português Europeu — registo acessível e claro
// RTL: não

export const PT = {
  lang: 'pt',
  dir: 'ltr',

  nav: {
    home: 'Início',
    back: 'Voltar',
    modules: 'Módulos',
    about: 'Sobre nós',
    start: 'Começar',
    close: 'Fechar',
    jeexplique: 'Como funciona?',
    textLarger: 'Texto maior?',
  },

  hero: {
    tag: '✦ Gratuito · Sem inscrição · Sem julgamento',
    title: 'O seu consultor administrativo digital,\numa linguagem clara e simples.',
    subtitle: 'NumAdminIA guia-o passo a passo nos procedimentos administrativos online — cartas da CAF, preencher PDF, emails, processos. Em 5 minutos, compreende e age.',
    cta: 'Começar gratuitamente →',
    explain: 'Como funciona o site? 😊',
    badge: '✦ 3 perguntas rápidas → o seu percurso personalizado imediatamente',
  },

  stats: {
    modules: 'módulos práticos',
    lessons: 'lições disponíveis',
    lessonsCompleted: 'lições completadas',
    free: 'gratuito para sempre',
    sourceBtn: '📰 Ler a fonte',
    statsTitle: '📊 Em França hoje',
    stat1num: '1/3', stat1label: 'dos franceses não têm competências digitais (INSEE 2025)',
    stat2num: '16M', stat2label: 'de pessoas afastadas do digital em França (Crédoc 2023)',
    stat3num: '23%', stat3label: 'desistiram de um direito por causa da complexidade (Défenseur des droits 2025)',
  },

  testimonials: {
    title: '💬 Os seus testemunhos',
    t1: { name: 'Claudette, 71 anos — Creuse', text: 'Perdia as consultas do Ameli porque não sabia ligar-me. Agora faço tudo sozinha.' },
    t2: { name: 'Rachid, 44 anos — Seine-Saint-Denis', text: 'Nunca tinha feito a declaração de impostos online. Com o módulo dedicado, fiz tudo sozinho em 20 minutos.' },
  },

  persona: {
    sectionTitle: 'Parecem-se connosco',
    name: 'Maria, 62 anos',
    story: 'Recebeu uma carta da CAF a pedir documentos em 15 dias. A linguagem administrativa, preencher um PDF, digitalizar e juntar ficheiros... tudo isso a ultrapassa. O stress aumenta.',
    result: '✓ Com o NumAdminIA, Maria completou o processo sozinha em poucos dias. A confiança voltou.',
  },

  ia: {
    title: 'A IA no coração do NumAdminIA',
    desc: 'Não é um curso magistral. Uma IA que observa, se adapta e guia pessoalmente.',
    features: [
      { icon: '🎯', label: 'Diagnóstico', desc: 'Avalia o seu nível' },
      { icon: '🔄', label: 'Percurso pessoal', desc: 'Adaptado a si' },
      { icon: '💡', label: 'Feedback', desc: 'Explica os erros' },
    ],
  },

  modules: {
    sectionTitle: 'Módulos disponíveis',
    lessons: 'lições',
    completed: 'completado',
    progress: 'O seu progresso',
    start: 'Começar a lição →',
    continue: 'Continuar →',
    done: '✓ Completado',
    lessonsCount: 'lições completadas',
  },

  moduleNames: {
    courrier:       'Compreender as cartas oficiais',
    pdf:            'Preencher um PDF',
    email:          'Emails administrativos',
    dossier:        'Organizar o processo',
    securite:       'Segurança digital',
    impots:         'Declaração de impostos',
    cartevitale:    'Cartão Vitale e saúde',
    rsacaf:         'Tudo sobre a CAF',
    logement:       'Habitação e APL',
    dossiermedical: 'Processo médico',
    formation:      'Formação profissional',
    permis:         'Carta de condução',
    banque:         'Conta bancária',
    smartphone:     'Smartphone para principiantes',
  },

  lesson: {
    context: 'Contexto',
    question: 'Pergunta',
    validate: 'Confirmar ✓',
    correct: '✅ Resposta correcta!',
    wrong: '❌ Resposta errada',
    next: 'Próxima lição →',
    finish: '🎉 Terminar o módulo',
    explanation: 'Explicação',
    lessonOf: 'Lição {n} de {total}',
  },

  moduleEnd: {
    congrats: '🎉',
    title: 'Completou a lição!',
    desc: 'Parabéns! Completou a lição',
    desc2: 'Cada passo aprendido é um documento a menos que o assusta. Continue!',
    nextModule: 'Próxima lição',
    allModules: 'Todos os módulos',
    retry: 'Rever esta lição',
    allDone: '🏆 Completou todas as lições!',
    stats: { lessons: 'lições', completed: 'completado', badge: 'medalha' },
  },

  onboarding: {
    title: 'Bem-vindo 👋',
    subtitle: 'Responda a 3 perguntas para o orientarmos melhor',
    skip: 'Saltar e começar directamente →',
    cta: 'Vamos lá! →',
    allModules: 'Ver todos os módulos',
    questions: [
      {
        id: 'defi',
        question: 'Qual é o seu maior desafio neste momento?',
        emoji: '🎯',
        options: [
          { id: 'courrier', text: '📬 Recebo cartas da CAF, CPAM, impostos que não compreendo', module: 'courrier' },
          { id: 'pdf', text: '📄 Tenho de preencher formulários PDF e não sei como', module: 'pdf' },
          { id: 'email', text: '✉️ Tenho dificuldade em enviar emails com anexos', module: 'email' },
          { id: 'dossier', text: '📁 Preciso de organizar um processo e reunir documentos', module: 'dossier' },
          { id: 'securite', text: '🔒 Tenho medo de burlas e quero proteger os meus dados', module: 'securite' },
          { id: 'impots', text: '🧾 Tenho de fazer a declaração de impostos e não sei como', module: 'impots' },
          { id: 'cartevitale', text: '💊 Tenho dúvidas sobre o meu cartão Vitale ou reembolsos', module: 'cartevitale' },
          { id: 'rsacaf', text: '🏛️ Quero conhecer os meus direitos na CAF — RSA, subsídios, ajudas', module: 'rsacaf' },
          { id: 'logement', text: '🏠 Procuro habitação social ou quero compreender os meus direitos', module: 'logement' },
          { id: 'dossiermedical', text: '🏥 Quero aceder ao meu processo médico ou organizar documentos de saúde', module: 'dossiermedical' },
        ]
      },
      {
        id: 'niveau',
        question: 'Considera-se mais...',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 Principiante — o digital assusta-me' },
          { id: 'moyen', text: '🌿 Com alguma facilidade — consigo mas tenho dificuldades' },
          { id: 'avance', text: '🌳 À vontade — quero apenas compreender os processos administrativos' },
        ]
      },
      {
        id: 'appareil',
        question: 'Utiliza principalmente...',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 O meu telemóvel' },
          { id: 'ordinateur', text: '💻 O meu computador' },
          { id: 'les_deux', text: '📱💻 Os dois' },
        ]
      },
    ],
    messages: {
      courrier: { titre: 'Comecemos pelas cartas oficiais', desc: 'É muitas vezes aqui que tudo bloqueia. Vamos desmistificar juntos.', module: 'courrier' },
      pdf: { titre: 'Vamos atacar os PDF', desc: 'Preencher um formulário PDF sem stress — é possível. Mostramos-lhe.', module: 'pdf' },
      email: { titre: 'Vamos dominar os emails', desc: 'Enviar anexos, reconhecer burlas — passo a passo.', module: 'email' },
      dossier: { titre: 'Vamos organizar o seu processo', desc: 'Reunir os documentos certos no momento certo — guiamo-lo.', module: 'dossier' },
      securite: { titre: 'Protejamos os seus dados', desc: 'Reconhecer burlas, proteger as suas contas — ficará tranquilo.', module: 'securite' },
      impots: { titre: 'Vamos fazer a declaração de impostos juntos', desc: 'Passo a passo em impots.gouv.fr — em poucos minutos está feito.', module: 'impots' },
      cartevitale: { titre: 'Vamos dominar o seu cartão Vitale', desc: 'Ameli, reembolsos, actualização — explicamos tudo.', module: 'cartevitale' },
      rsacaf: { titre: 'Descubramos tudo o que a CAF pode fazer por si', desc: 'RSA, subsídios, PAJE — simule os seus direitos em poucos minutos.', module: 'rsacaf' },
      logement: { titre: 'Vamos encontrar a sua habitação', desc: 'Pedido HLM, APL, direitos dos inquilinos — guiamo-lo passo a passo.', module: 'logement' },
      dossiermedical: { titre: 'Vamos gerir o seu processo médico', desc: 'Mon Espace Santé, receitas, direitos dos doentes — tudo explicado.', module: 'dossiermedical' },
    },
  },

  about: {
    tag: 'Sobre nós',
    title: 'NumAdminIA — Administração para todos',
    mission: 'Projecto gratuito e de código aberto, que ajuda pessoas com exclusão digital a tratar dos seus processos administrativos online.',
    persona: 'Maria, 62 anos, recebeu uma carta da CAF a pedir documentos em 15 dias. NumAdminIA permitiu-lhe concluir tudo sozinha.',
    team: 'A equipa',
    openSource: 'Projecto de código aberto',
  },

  footer: {
    home: 'Início',
    modules: 'Módulos',
    progress: 'O meu progresso',
    about: 'Sobre nós',
    mention: 'Um projecto cívico · Código aberto · Dados protegidos',
  },

  burger: {
    navigation: 'Navegação',
    modules: 'Módulos',
    home: 'Início',
    about: 'Sobre nós',
    language: 'Língua',
  },

  badges: {
    courrier:       'Especialista em cartas',
    pdf:            'Especialista PDF',
    email:          'Especialista email',
    dossier:        'Especialista processos',
    securite:       'Guardião digital',
    impots:         'Especialista impostos',
    cartevitale:    'Especialista saúde',
    rsacaf:         'Especialista CAF',
    logement:       'Especialista habitação',
    dossiermedical: 'Especialista processo médico',
    formation:      'Especialista formação',
    permis:         'Especialista carta condução',
    banque:         'Especialista banco',
    smartphone:     'Especialista smartphone',
  },

  errors: {
    moduleNotFound: 'Módulo não encontrado',
  },
  stickyFooter: {
    title: "Não sabe por onde começar?",
    subtitle: "3 perguntas → o seu percurso personalizado",
    cta: "Teste de diagnóstico gratuito →",
  },
};
