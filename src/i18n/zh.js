// 中文翻译
// LTR — direction: ltr

export const ZH = {
  lang: 'zh',
  dir: 'ltr',

  nav: {
    home: '首页',
    back: '返回',
    modules: '模块',
    about: '关于',
    start: '开始',
    close: '关闭',
    jeexplique: '如何使用',
    textLarger: '放大字体？',
  },

  hero: {
    tag: '免费 — 无需注册 — 无需担心',
    title: '法国行政事务，\n轻松搞定',
    subtitle: '逐步学习如何在线完成您的行政手续，用简单易懂的语言。',
    cta: '开始测试 →',
    explain: '如何使用？',
    badge: '✦ 3个快速问题 → 您的个性化学习路径，即时生成',
  },

  stats: {
    people: '34%缺乏数字技能',
    lessons: '可用课程',
    lessonsCompleted: '已完成课程',
    free: '永远免费',
    modules: '实用模块',
    statsTitle: '📊 法国今日',
    sourceBtn: '📰 阅读来源',
    stat1num: '1/3',
    stat1label: '的法国人缺乏数字技能（INSEE 2025）',
    stat2num: '1600万',
    stat2label: '人在法国被数字化排除在外（Crédoc 2023）',
    stat3num: '23%',
    stat3label: '因行政手续而放弃权利（2025）',
  },

  modules: {
    title: '选择您的模块',
    subtitle: '每个模块解决一个具体的日常问题',
    lessons: '课程',
    completed: '已完成',
    progress: '您的进度',
    start: '开始 ←',
    continue: '继续 ←',
    done: '✓ 已完成',
  },

  moduleNames: {
    courrier:       '阅读官方信件',
    pdf:            '填写PDF表格',
    email:          '电子邮件',
    dossier:        '准备申请材料',
    securite:       '数字安全',
    impots:         '报税',
    cartevitale:    '医保卡与健康',
    rsacaf:         '关于CAF福利',
    logement:       '住房与APL补贴',
    dossiermedical: '医疗档案',
    formation:      '职业培训',
    permis:         '驾驶执照',
    banque:         '银行账户',
    smartphone:     '智能手机入门',
  },

  lesson: {
    context: '情境',
    question: '问题',
    validate: '确认 ✓',
    correct: '✅ 回答正确！',
    wrong: '❌ 不太对…',
    next: '下一课 →',
    finish: '🎉 完成模块',
    explanation: '解释',
    lessonOf: '第 {n} 课，共 {total} 课',
  },

  moduleEnd: {
    congrats: '🎉',
    title: '模块完成！',
    desc: '太棒了！您已完成该模块',
    desc2: '每学一课，就少一项需要担心的手续。继续加油！ 💪',
    nextModule: '下一模块',
    allModules: '查看所有模块',
  },

  onboarding: {
    title: '找到您的起点',
    subtitle: '3个简短问题，为您量身定制学习路径',
    questions: [
      {
        id: 'besoin',
        question: '您今天来这里是因为什么？',
        emoji: '🎯',
        options: [
          { id: 'courrier', text: '📬 我收到了一封官方信件，看不懂', module: 'courrier' },
          { id: 'pdf', text: '📄 我需要填写一个在线表格或PDF', module: 'pdf' },
          { id: 'email', text: '✉️ 我需要给某个机构发送电子邮件', module: 'email' },
          { id: 'dossier', text: '📁 我需要准备一份材料（住房、CAF、工作…）', module: 'dossier' },
          { id: 'securite', text: '🔒 我担心网络诈骗，想保护我的数据', module: 'securite' },
          { id: 'impots', text: '🧾 我需要报税，但不知道怎么做', module: 'impots' },
          { id: 'cartevitale', text: '💊 我有关于医保卡或报销的问题', module: 'cartevitale' },
          { id: 'rsacaf', text: '🏛️ 我想了解我在CAF的权益——RSA、补贴、援助', module: 'rsacaf' },
          { id: 'logement', text: '🏠 我在寻找社会住房或想了解我的权利', module: 'logement' },
          { id: 'dossiermedical', text: '🏥 我想查阅我的医疗档案或整理健康文件', module: 'dossiermedical' },
        ]
      },
      {
        id: 'niveau',
        question: '您如何描述自己？',
        emoji: '📊',
        options: [
          { id: 'debutant', text: '🌱 初学者 — 数字技术让我感到害怕' },
          { id: 'moyen', text: '🌿 比较熟悉 — 能应付，但有不懂的地方' },
          { id: 'avance', text: '🌳 熟悉 — 只是想了解行政手续' },
        ]
      },
      {
        id: 'appareil',
        question: '您主要使用…',
        emoji: '📱',
        options: [
          { id: 'telephone', text: '📱 我的手机' },
          { id: 'ordinateur', text: '💻 我的电脑' },
          { id: 'les_deux', text: '📱💻 两者都用' },
        ]
      },
    ],
    messages: {
      courrier: { titre: '让我们从官方信件开始', desc: '这往往是一切卡住的地方。我们一起来解开谜团。', module: 'courrier' },
      pdf: { titre: '来搞定PDF', desc: '无压力填写PDF表格——完全可以做到。我们来教您。', module: 'pdf' },
      email: { titre: '掌握电子邮件', desc: '发送附件、识别诈骗——一步一步来。', module: 'email' },
      dossier: { titre: '准备您的材料', desc: '在正确的时间收集正确的文件——我们来引导您。', module: 'dossier' },
      securite: { titre: '保护您的数据', desc: '识别诈骗、保护您的账户——让您安心。', module: 'securite' },
      impots: { titre: '一起完成报税', desc: '在impots.gouv.fr上逐步操作——几分钟搞定。', module: 'impots' },
      cartevitale: { titre: '掌握您的医保卡', desc: 'Ameli、报销、更新——我们为您解释一切。', module: 'cartevitale' },
      rsacaf: { titre: '了解CAF能为您做什么', desc: 'RSA、补贴、PAJE——几分钟内模拟您的权益。', module: 'rsacaf' },
      logement: { titre: '找到您的住房', desc: 'HLM申请、APL、租客权利——我们逐步引导您。', module: 'logement' },
      dossiermedical: { titre: '管理您的医疗档案', desc: 'Mon Espace Santé、处方、患者权利——全部解释清楚。', module: 'dossiermedical' },
    },
  },

  about: {
    tag: '关于',
    title: 'NumAdminIA — 人人都能使用的行政服务',
    mission: '一个免费的开源项目，帮助数字技能不足的人完成在线行政手续。',
    persona: 'Marie，62岁，收到一封CAF信件要求15天内提交材料。NumAdminIA让她能够独立完成整个手续。',
    team: '团队',
    openSource: '开源',
  },

  footer: {
    home: '首页',
    modules: '模块',
    progress: '进度',
    about: '关于',
    mention: '公益项目 · 开源 · 数据受保护',
  },

  burger: {
    navigation: '导航',
    modules: '模块',
    home: '首页',
    about: '关于',
    language: '语言',
  },

  badges: {
    courrier:       '信件专家',
    pdf:            'PDF达人',
    email:          '邮件达人',
    dossier:        '材料专家',
    securite:       '数字卫士',
    impots:         '税务专家',
    cartevitale:    '健康专家',
    rsacaf:         'CAF专家',
    logement:       '住房专家',
    dossiermedical: '医疗档案专家',
    formation:      '培训专家',
    permis:         '驾照专家',
    banque:         '银行专家',
    smartphone:     '智能手机专家',
  },

  testimonials: {
    title: '他们的经历',
    t1: { name: 'Claudette，71岁 — Creuse', text: '我总是错过Ameli预约，因为不知道如何登录。现在我自己就能搞定了。' },
    t2: { name: 'Rachid，44岁 — Seine-Saint-Denis', text: '我从来没有在网上报过税。用了专属模块后，我自己20分钟就完成了。' },
  },


  persona: {
    sectionTitle: '和我们一样的人',
    name: 'Marie，62岁',
    story: '她收到一封CAF信件，要求在15天内提交材料。行政语言、填写PDF、扫描文件——这一切让她不知所措。压力越来越大。',
    result: '✓ 有了NumAdminIA，Marie在几天内独立完成了手续。重拾信心。',
  },

  ia: {
    title: 'AI是NumAdminIA的核心',
    desc: '不是填鸭式教学。一个观察、适应并个性化引导您的AI。',
    features: [
      { icon: '🎯', label: '诊断', desc: '评估您的水平' },
      { icon: '🔄', label: '个人化路径', desc: '为您量身定制' },
      { icon: '💡', label: '反馈', desc: '解释错误' },
    ],
  },

  errors: {
    moduleNotFound: '模块未找到',
  },

  stickyFooter: {
    title: '不知道从哪里开始？',
    subtitle: '3个问题 → 您的个性化路径',
    cta: '开始测试 →',
  },
};
