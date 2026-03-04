// Módulo piloto — Correio oficial — Português europeu
// Termos administrativos franceses conservados em negrito

export const COURRIER_LESSONS_PT = [
  {
    id: 'courrier-1',
    numero: 1,
    titre: "Identificar o remetente",
    sousTitre: "Quem lhe enviou esta carta?",
    contexte: "A Marie recebeu uma carta da **CAF**. Não sabe de onde vem nem porquê. Tem medo de a abrir.",
    explication: [
      "Na parte superior da carta, encontra sempre o **nome da entidade remetente** — como CAF, CPAM, impôts, ou a câmara municipal.",
      "Procure o **número do processo** (numéro de dossier) — é o seu número pessoal junto dessa entidade.",
      "A **data** é importante — veja a data da carta, não a data em que a recebeu.",
      "As entidades oficiais têm sempre um **logótipo oficial** (logo) no topo da página.",
      "Se não reconhecer o remetente, **não responda** a nenhuma carta antes de verificar.",
    ],
    question: "Onde encontra o nome da entidade que lhe enviou a carta?",
    options: [
      { id: 'a', text: "No fim da carta", correct: false },
      { id: 'b', text: "No topo da carta, com o logótipo oficial", correct: true },
      { id: 'c', text: "Apenas no envelope", correct: false },
    ],
    explication_reponse: "Olhe sempre para o topo da página — aí encontra o nome da entidade, o número do processo e a data. São as informações essenciais.",
  },
  {
    id: 'courrier-2',
    numero: 2,
    titre: "Compreender o assunto da carta",
    sousTitre: "Porque é que lha enviaram?",
    contexte: "A Marie abriu a carta. Viu a palavra **'convocation'**. Ficou assustada. O que significa isso?",
    explication: [
      "As cartas oficiais têm **3 tipos principais**: pedido de documentos, marcação de consulta (convocation), ou notificação de decisão.",
      "**'Convocation'** significa uma convocatória para uma reunião — não é problema, apenas tem de comparecer.",
      "Procure a palavra **'objet'** ou **'concerne'** — explica-lhe porque é que lhe escreveram.",
      "Palavras como 'mise en demeure' ou 'suspension' significam um problema sério — aja rapidamente.",
      "Se não compreender, **contacte diretamente a entidade** pelo número indicado na carta.",
    ],
    question: "Onde encontra rapidamente o assunto da carta?",
    options: [
      { id: 'a', text: "Na última página", correct: false },
      { id: 'b', text: "Junto à palavra 'objet' ou 'concerne'", correct: true },
      { id: 'c', text: "No envelope", correct: false },
    ],
    explication_reponse: "A palavra 'objet' ou 'concerne' no início da carta — uma ou duas frases resumem o assunto completo.",
  },
  {
    id: 'courrier-3',
    numero: 3,
    titre: "Identificar os prazos",
    sousTitre: "Quanto tempo tem?",
    contexte: "A carta diz **'sous 15 jours'**. A Marie não sabe se conta a partir da data da carta ou da data em que a recebeu.",
    explication: [
      "O prazo conta a partir da **data da carta** (la date du courrier), não do dia em que a recebeu.",
      "**'Sous 15 jours'** = 15 dias a partir da data da carta. **'Avant le [data]'** = antes dessa data exata.",
      "Se lhe restarem menos de 5 dias, **contacte imediatamente a entidade** e explique a situação.",
      "Guarde sempre **uma cópia** de cada documento que enviar, com prova de envio.",
      "Em caso de dúvida, **contacte antes do prazo terminar** — as entidades oficiais geralmente aceitam prorrogações.",
    ],
    question: "A partir de quando se conta o prazo de 15 dias?",
    options: [
      { id: 'a', text: "Do dia em que recebeu a carta", correct: false },
      { id: 'b', text: "Da data escrita na carta", correct: true },
      { id: 'c', text: "Do dia em que abriu a carta", correct: false },
    ],
    explication_reponse: "O prazo conta a partir da data da carta — mesmo que a tenha recebido tarde. Se o tempo é curto, contacte a entidade imediatamente.",
  },
  {
    id: 'courrier-4',
    numero: 4,
    titre: "Identificar os documentos pedidos",
    sousTitre: "O que lhe pedem?",
    contexte: "A carta pede um **'justificatif de domicile'**. A Marie não sabe que documento deve apresentar.",
    explication: [
      "**'Justificatif de domicile'** = documento que comprova a sua morada — fatura de eletricidade, gás ou renda — **com menos de 3 meses**.",
      "**'Pièce d'identité'** = bilhete de identidade ou passaporte — tem de estar válido.",
      "**'Relevé d'identité bancaire (RIB)'** = documento com os dados da sua conta bancária — obtém no banco ou online.",
      "Antes de enviar, **tire uma fotocópia** de cada documento e guarde-a.",
      "Se não tiver um documento específico, **contacte a entidade** e pergunte por uma alternativa — há sempre solução.",
    ],
    question: "O que é um 'justificatif de domicile'?",
    options: [
      { id: 'a', text: "O bilhete de identidade", correct: false },
      { id: 'b', text: "Uma fatura de eletricidade ou recibo de renda recente (menos de 3 meses)", correct: true },
      { id: 'c', text: "A certidão de nascimento", correct: false },
    ],
    explication_reponse: "O justificatif de domicile é um documento que comprova a sua morada atual — fatura de eletricidade, água ou recibo de renda — com menos de 3 meses.",
  },
];
