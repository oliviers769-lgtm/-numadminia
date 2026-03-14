// Traductions arabes — Arabe Standard Moderne (فصحى) registre simple
// Termes administratifs français conservés dans les leçons
// RTL — direction: rtl

export const AR = {
  lang: 'ar',
  dir: 'rtl',

  nav: {
    home: 'الرئيسية',
    back: 'رجوع',
    modules: 'الدروس',
    about: 'من نحن',
    start: 'ابدأ',
    close: 'إغلاق',
    jeexplique: 'كيفاش يخدم',
    textLarger: 'نص أكبر ؟',
  },

  // Home — Hero
  hero: {
    tag: '✦ مجاني · بدون تسجيل · بدون حكم',
    title: 'مشاورك الإداري الرقمي،\nبلغة واضحة وبسيطة.',
    subtitle: 'NumAdminIA يرشدك خطوة بخطوة في إجراءاتك الإدارية الإلكترونية — رسائل CAF، ملء PDF، الإيميلات، الملفات. في 5 دقائق، تفهم وتتصرف.',
    cta: 'ابدأ مجاناً ←',
    explain: 'كيف يعمل الموقع؟ 😊',
    badge: '✦ 3 أسئلة سريعة ← مسارك الشخصي مباشرةً',
  },

  // Stats home
  stats: {
    modules: 'درساً عملياً',
    lessons: 'درساً متاحاً',
    lessonsCompleted: 'درساً مكتملاً',
    free: 'مجاني للأبد',
    sourceBtn: '📰 اقرأ المصدر',
    statsTitle: '📊 في فرنسا اليوم',
    stat1num: '1/3', stat1label: 'من الفرنسيين يفتقرون لكفاءات رقمية (INSEE 2025)',
    stat2num: '16M', stat2label: 'شخص بعيد عن الرقمي في فرنسا (Crédoc 2023)',
    stat3num: '23%', stat3label: 'تخلوا عن حق بسبب تعقيد الإجراءات (Défenseur des droits 2025)',
  },

  // Témoignages
  testimonials: {
    title: '💬 شهاداتهم',
    t1: { name: 'كلوديت، 71 سنة — Creuse', text: 'كنت أفوّت مواعيد Ameli لأنني لا أعرف كيف أتصل. الآن أدير كل شيء وحدي.' },
    t2: { name: 'رشيد، 44 سنة — Seine-Saint-Denis', text: 'لم أكن أصرّح بالضرائب إلكترونياً قط. بفضل الدرس المخصص، أنجزت كل شيء وحدي في 20 دقيقة.' },
  },

  // Marie persona
  persona: {
    sectionTitle: 'يشبهوننا',
    name: 'مريم، 62 سنة',
    story: 'تلقّت رسالة من CAF تطلب منها وثائق خلال 15 يوماً. اللغة الإدارية، ملء PDF، تصوير الوثائق وإرفاقها... كل هذا يتجاوزها. القلق يتصاعد.',
    result: '✓ مع NumAdminIA، أتمّت مريم إجراءاتها وحدها في أيام قليلة. الثقة عادت.',
  },

  // IA section
  ia: {
    title: 'الذكاء الاصطناعي في قلب NumAdminIA',
    desc: 'ليس درساً نظرياً. ذكاء اصطناعي يراقب ويتكيّف ويرشدك شخصياً.',
    features: [
      { icon: '🎯', label: 'تشخيص', desc: 'يُقيّم مستواك' },
      { icon: '🔄', label: 'مسار شخصي', desc: 'مُكيَّف لك' },
      { icon: '💡', label: 'تغذية راجعة', desc: 'يشرح الأخطاء' },
    ],
  },

  // Modules section
  modules: {
    sectionTitle: 'الدروس المتاحة',
    lessons: 'دروس',
    completed: 'مكتمل',
    progress: 'تقدمك',
    start: 'ابدأ الدرس ←',
    continue: 'تابع ←',
    done: '✓ مكتمل',
    lessonsCount: 'دروس مكتملة',
  },

  moduleNames: {
    courrier:       'فهم الخطابات الرسمية',
    pdf:            'ملء PDF',
    email:          'البريد الإلكتروني',
    dossier:        'تجميع الملف',
    securite:       'الأمان الرقمي',
    impots:         'التصريح بالضرائب',
    cartevitale:    'البطاقة الحيوية والصحة',
    rsacaf:         'كل شيء عن CAF',
    logement:       'السكن و APL',
    dossiermedical: 'الملف الطبي',
    formation:      'التكوين المهني',
    permis:         'رخصة القيادة',
    banque:         'الحساب البنكي',
    smartphone:     'الهاتف الذكي للمبتدئين',
  },

  lesson: {
    context: 'الوضعية',
    question: 'السؤال',
    validate: 'تأكيد ✓',
    correct: '✅ إجابة صحيحة!',
    wrong: '❌ إجابة خاطئة',
    next: 'الدرس التالي ←',
    finish: '🎉 إنهاء الدرس',
    explanation: 'الشرح',
    lessonOf: 'درس {n} من {total}',
  },

  moduleEnd: {
    congrats: '🎉',
    title: 'أنهيت الدرس!',
    desc: 'أحسنت! أكملت درس',
    desc2: 'كل خطوة تعلّمتها هي ورقة أقل تخيفك. واصل!',
    nextModule: 'الدرس التالي',
    allModules: 'جميع الدروس',
    retry: 'راجع هذا الدرس',
    allDone: '🏆 أكملت جميع الدروس!',
    stats: { lessons: 'دروس', completed: 'مكتمل', badge: 'شارة' },
  },

  onboarding: {
    title: 'أهلاً بك 👋',
    subtitle: 'أجب على 3 أسئلة لنوجّهك بشكل أفضل',
    skip: 'تخطّى وابدأ مباشرة →',
    cta: 'انطلق! →',
    allModules: 'شاهد كل الدروس',
    questions: [
      {
        id: 'defi',
        question: 'ما هو أكبر تحدٍّ تواجهه الآن؟',
        emoji: '🎯',
        options: [
          { id: 'courrier', text: '📬 أتلقى رسائل من CAF أو CPAM أو الضرائب لا أفهمها', module: 'courrier' },
          { id: 'pdf', text: '📄 أحتاج إلى ملء نماذج PDF ولا أعرف كيف', module: 'pdf' },
          { id: 'email', text: '✉️ أجد صعوبة في إرسال إيميلات مع المرفقات', module: 'email' },
          { id: 'dossier', text: '📁 أحتاج إلى تجميع ملف وجمع الوثائق', module: 'dossier' },
          { id: 'securite', text: '🔒 أخاف من الاحتيال وأريد حماية بياناتي', module: 'securite' },
          { id: 'impots', text: '🧾 أحتاج إلى تقديم إقرار الضرائب ولا أعرف كيف', module: 'impots' },
          { id: 'cartevitale', text: '💊 لدي أسئلة حول بطاقة Vitale أو التعويضات', module: 'cartevitale' },
          { id: 'rsacaf', text: '🏛️ أريد معرفة حقوقي في CAF — RSA، المنح، المساعدات', module: 'rsacaf' },
          { id: 'logement', text: '🏠 أبحث عن سكن اجتماعي أو أريد فهم حقوقي', module: 'logement' },
          { id: 'dossiermedical', text: '🏥 أريد الوصول إلى ملفي الطبي أو تنظيم وثائق صحتي', module: 'dossiermedical' },
        ]
      },
      {
        id: 'niveau',
        question: 'تعتبر نفسك...',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 مبتدئ — الرقمي يخيفني' },
          { id: 'moyen', text: '🌿 مرتاح نوعاً ما — أتدبّر لكن لدي صعوبات' },
          { id: 'avance', text: '🌳 مرتاح — أريد فقط فهم الإجراءات الإدارية' },
        ]
      },
      {
        id: 'appareil',
        question: 'تستخدم عادةً...',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 هاتفي' },
          { id: 'ordinateur', text: '💻 حاسوبي' },
          { id: 'les_deux', text: '📱💻 كليهما' },
        ]
      },
    ],
    messages: {
      courrier: { titre: 'لنبدأ بالرسائل الرسمية', desc: 'هنا غالباً تتعقّد الأمور. سنكشف الغموض معاً.', module: 'courrier' },
      pdf: { titre: 'لننجز ملفات PDF', desc: 'ملء نموذج PDF بلا توتر — ممكن. سنريك كيف.', module: 'pdf' },
      email: { titre: 'لنتقن الإيميلات', desc: 'إرسال المرفقات، التعرف على الاحتيال — خطوة بخطوة.', module: 'email' },
      dossier: { titre: 'لنجمع ملفك', desc: 'الوثائق الصحيحة في الوقت المناسب — سنوجّهك.', module: 'dossier' },
      securite: { titre: 'لنحمي بياناتك', desc: 'التعرف على الاحتيال، تأمين حساباتك — ستطمئن.', module: 'securite' },
      impots: { titre: 'لنقدّم إقرار الضرائب معاً', desc: 'خطوة بخطوة على impots.gouv.fr — في دقائق ينتهي.', module: 'impots' },
      cartevitale: { titre: 'لنتقن بطاقة Vitale', desc: 'Ameli، التعويضات، التحديث — سنشرح كل شيء.', module: 'cartevitale' },
      rsacaf: { titre: 'لنكتشف ما يمكن لـ CAF أن تقدمه لك', desc: 'RSA، المنح، PAJE — احسب حقوقك في دقائق.', module: 'rsacaf' },
      logement: { titre: 'لنجد سكنك', desc: 'طلب السكن الاجتماعي، APL، حقوق المستأجر — خطوة بخطوة.', module: 'logement' },
      dossiermedical: { titre: 'لندير ملفك الطبي', desc: 'Mon Espace Santé، الوصفات، حقوق المريض — كل شيء مشروح.', module: 'dossiermedical' },
    },
  },

  about: {
    tag: 'من نحن',
    title: 'NumAdminIA — الإدارة للجميع',
    mission: 'مشروع مجاني ومفتوح المصدر، يساعد الأشخاص الذين يعانون من الإقصاء الرقمي في إنجاز إجراءاتهم الإدارية الإلكترونية.',
    persona: 'مريم، 62 سنة، تلقّت رسالة من CAF تطلب وثائق في 15 يوماً. NumAdminIA أتاح لها إتمام كل شيء وحدها.',
    team: 'الفريق',
    openSource: 'مشروع مفتوح المصدر',
  },

  footer: {
    home: 'الرئيسية',
    modules: 'الدروس',
    progress: 'تقدمي',
    about: 'من نحن',
    mention: 'مشروع مدني · مفتوح المصدر · بيانات محمية',
  },

  burger: {
    navigation: 'التنقل',
    modules: 'الدروس',
    home: 'الرئيسية',
    about: 'من نحن',
    language: 'اللغة',
  },

  badges: {
    courrier:       'خبير الخطابات',
    pdf:            'خبير PDF',
    email:          'خبير البريد الإلكتروني',
    dossier:        'خبير الملفات',
    securite:       'الحارس الرقمي',
    impots:         'خبير الضرائب',
    cartevitale:    'خبير الصحة',
    rsacaf:         'خبير CAF',
    logement:       'خبير السكن',
    dossiermedical: 'خبير الملف الطبي',
    formation:      'خبير التكوين',
    permis:         'خبير الرخصة',
    banque:         'خبير البنك',
    smartphone:     'خبير الهاتف',
  },

  errors: {
    moduleNotFound: 'الدرس غير موجود',
  },
  stickyFooter: {
    title: "لا تعرف من أين تبدأ ؟",
    subtitle: "3 أسئلة ← مسارك الشخصي",
    cta: "← اختبار تشخيصي مجاني",
  },
};
