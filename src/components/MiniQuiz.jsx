import React, { useState } from 'react';

const QUIZ_FR = [
  {
    id: 'q1',
    question: 'Vous recevez un courrier CAF avec "Objet : demande de justificatifs". Vous devez...',
    options: [
      { id: 'a', text: '😰 Paniquer — c\'est sûrement un problème grave', correct: false },
      { id: 'b', text: '📋 Rassembler les documents demandés et les envoyer dans les délais', correct: true },
      { id: 'c', text: '🙈 Ignorer — ça va s\'arranger tout seul', correct: false },
    ],
    feedback: {
      correct: 'Exactement ! Une demande de justificatifs n\'est pas un refus. C\'est juste une action à faire.',
      wrong: 'Ce n\'est pas la bonne réaction. Ce courrier demande simplement des documents — pas de panique !',
    },
    module: 'courrier',
  },
  {
    id: 'q2',
    question: 'Pour signer un PDF officiel sur votre ordinateur, il faut...',
    options: [
      { id: 'a', text: '🖨️ Imprimer, signer à la main, puis scanner', correct: false },
      { id: 'b', text: '✍️ Utiliser la fonction signature d\'un lecteur PDF comme Adobe ou Acrobat', correct: true },
      { id: 'c', text: '📧 L\'envoyer sans signature en expliquant pourquoi', correct: false },
    ],
    feedback: {
      correct: 'Bravo ! On peut signer numériquement sans imprimer. Un lecteur PDF suffit.',
      wrong: 'Bonne tentative ! Mais on peut signer directement sur ordinateur avec un lecteur PDF.',
    },
    module: 'pdf',
  },
];

const QUIZ_PT = [
  {
    id: 'q1',
    question: 'Recebe uma carta da CAF com "Assunto: pedido de documentos". Deve...',
    options: [
      { id: 'a', text: '😰 Entrar em pânico — é certamente um problema grave', correct: false },
      { id: 'b', text: '📋 Reunir os documentos pedidos e enviá-los dentro do prazo', correct: true },
      { id: 'c', text: '🙈 Ignorar — vai resolver-se sozinho', correct: false },
    ],
    feedback: {
      correct: 'Exacto! Um pedido de documentos não é uma recusa. É apenas uma acção a fazer.',
      wrong: 'Não é a reacção correcta. A carta pede simplesmente documentos — sem pânico!',
    },
    module: 'courrier',
  },
  {
    id: 'q2',
    question: 'Para assinar um PDF oficial no computador, é preciso...',
    options: [
      { id: 'a', text: '🖨️ Imprimir, assinar à mão e depois digitalizar', correct: false },
      { id: 'b', text: '✍️ Usar a função de assinatura de um leitor PDF como Adobe ou Acrobat', correct: true },
      { id: 'c', text: '📧 Enviá-lo sem assinatura a explicar porquê', correct: false },
    ],
    feedback: {
      correct: 'Muito bem! Pode assinar digitalmente sem imprimir. Um leitor PDF é suficiente.',
      wrong: 'Boa tentativa! Mas pode assinar directamente no computador com um leitor PDF.',
    },
    module: 'pdf',
  },
];

const QUIZ_AR = [
  {
    id: 'q1',
    question: 'تلقّيت رسالة من CAF بموضوع "طلب وثائق إثبات". ماذا يجب أن تفعل؟',
    options: [
      { id: 'a', text: '😰 الذعر — إنها بالتأكيد مشكلة خطيرة', correct: false },
      { id: 'b', text: '📋 جمع الوثائق المطلوبة وإرسالها في الأجل المحدد', correct: true },
      { id: 'c', text: '🙈 تجاهلها — ستُحل وحدها', correct: false },
    ],
    feedback: {
      correct: 'صحيح تماماً! طلب الوثائق ليس رفضاً. إنه مجرد إجراء يجب القيام به.',
      wrong: 'هذه ليست ردة الفعل الصحيحة. الرسالة تطلب فقط وثائق — لا داعي للقلق!',
    },
    module: 'courrier',
  },
  {
    id: 'q2',
    question: 'لتوقيع ملف PDF رسمي على حاسوبك، يجب...',
    options: [
      { id: 'a', text: '🖨️ طباعته، التوقيع يدوياً، ثم فحصه', correct: false },
      { id: 'b', text: '✍️ استخدام خاصية التوقيع في قارئ PDF مثل Adobe أو Acrobat', correct: true },
      { id: 'c', text: '📧 إرساله بدون توقيع مع الشرح', correct: false },
    ],
    feedback: {
      correct: 'أحسنت! يمكن التوقيع رقمياً بدون طباعة. قارئ PDF يكفي.',
      wrong: 'محاولة جيدة! لكن يمكن التوقيع مباشرة على الحاسوب بقارئ PDF.',
    },
    module: 'pdf',
  },
];

const LEVELS_FR = {
  0: { label: 'Débutant', emoji: '🌱', color: '#10B981', desc: 'Pas d\'inquiétude — NumAdminIA est fait pour vous !', module: 'courrier' },
  1: { label: 'En progression', emoji: '🌿', color: '#F59E0B', desc: 'Vous avez de bonnes bases. Quelques modules vous rendront autonome.', module: 'pdf' },
  2: { label: 'À l\'aise', emoji: '🌳', color: '#3B82F6', desc: 'Vous vous débrouillez bien. Approfondissez vos points faibles.', module: 'securite' },
};

const LEVELS_PT = {
  0: { label: 'Principiante', emoji: '🌱', color: '#10B981', desc: 'Sem preocupação — NumAdminIA foi feito para si!', module: 'courrier' },
  1: { label: 'Em progressão', emoji: '🌿', color: '#F59E0B', desc: 'Tem boas bases. Alguns módulos vão torná-lo autónomo.', module: 'pdf' },
  2: { label: 'À vontade', emoji: '🌳', color: '#3B82F6', desc: 'Desenrasca-se bem. Aprofunde os seus pontos fracos.', module: 'securite' },
};

const LEVELS_AR = {
  0: { label: 'مبتدئ', emoji: '🌱', color: '#10B981', desc: 'لا داعي للقلق — NumAdminIA مصمم لمساعدتك!', module: 'courrier' },
  1: { label: 'في تقدم', emoji: '🌿', color: '#F59E0B', desc: 'لديك أسس جيدة. بعض الدروس ستجعلك مستقلاً.', module: 'pdf' },
  2: { label: 'مرتاح', emoji: '🌳', color: '#3B82F6', desc: 'تتصرف بشكل جيد. عزّز نقاط ضعفك.', module: 'securite' },
};

const UI = {
  fr: {
    title: 'Testez votre niveau en 2 questions',
    subtitle: 'Résultat immédiat + module recommandé',
    start: 'Commencer le test →',
    niveau: 'Niveau',
    bonnes: 'bonnes réponses',
    recommande: 'Module recommandé →',
    recommencer: 'Recommencer le test',
    question: 'Question',
    suivante: 'Question suivante →',
    resultat: 'Voir mon résultat →',
  },
  pt: {
    title: 'Teste o seu nível em 2 perguntas',
    subtitle: 'Resultado imediato + módulo recomendado',
    start: 'Começar o teste →',
    niveau: 'Nível',
    bonnes: 'respostas correctas',
    recommande: 'Módulo recomendado →',
    recommencer: 'Recomeçar o teste',
    question: 'Pergunta',
    suivante: 'Pergunta seguinte →',
    resultat: 'Ver o meu resultado →',
  },
  ar: {
    title: 'اختبر مستواك في سؤالين',
    subtitle: 'نتيجة فورية + درس موصى به',
    start: '← ابدأ الاختبار',
    niveau: 'المستوى',
    bonnes: 'إجابات صحيحة',
    recommande: '← الدرس الموصى به',
    recommencer: 'إعادة الاختبار',
    question: 'سؤال',
    suivante: 'السؤال التالي ←',
    resultat: 'شاهد نتيجتي ←',
  },
};

export default function MiniQuiz({ onNavigate, scale = 1, lang }) {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const isAr = lang === 'ar';
  const isPt = lang === 'pt';

  const QUIZ = isAr ? QUIZ_AR : isPt ? QUIZ_PT : QUIZ_FR;
  const LEVELS = isAr ? LEVELS_AR : isPt ? LEVELS_PT : LEVELS_FR;
  const ui = UI[lang] || UI.fr;

  const q = QUIZ[step];
  const result = LEVELS[score] || LEVELS[0];

  const handleAnswer = (opt) => {
    if (answered) return;
    setAnswered(opt.id);
    if (opt.correct) setScore(s => s + 1);
    setTimeout(() => setShowFeedback(true), 400);
  };

  const handleNext = () => {
    if (step < QUIZ.length - 1) {
      setStep(s => s + 1);
      setAnswered(null);
      setShowFeedback(false);
    } else {
      setDone(true);
    }
  };

  const reset = () => {
    setStarted(false); setStep(0); setAnswered(null);
    setShowFeedback(false); setScore(0); setDone(false);
  };

  const getState = (opt) => {
    if (!answered) return 'default';
    if (opt.correct) return 'correct';
    if (opt.id === answered && !opt.correct) return 'wrong';
    return 'default';
  };

  if (!started) {
    return (
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        border: '1px solid rgba(245,158,11,0.2)',
        borderRadius: 20, padding: '1.5rem', marginBottom: 16,
        animation: 'fadeUp 0.3s ease both',
        direction: isAr ? 'rtl' : 'ltr',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 32 }}>🧠</span>
          <div>
            <div style={{ fontSize: 15 * scale, fontWeight: 700, color: '#F59E0B', fontFamily: 'Fraunces, serif' }}>
              {ui.title}
            </div>
            <div style={{ fontSize: 12 * scale, color: 'rgba(255,255,255,0.6)', marginTop: 2 }}>
              {ui.subtitle}
            </div>
          </div>
        </div>
        <button onClick={() => setStarted(true)} style={{
          width: '100%', padding: '13px',
          background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
          color: '#1E3A5F', fontSize: 14 * scale, fontWeight: 700,
          borderRadius: 14, border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(245,158,11,0.3)',
        }}>
          {ui.start}
        </button>
      </div>
    );
  }

  if (done) {
    return (
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        border: `1px solid ${result.color}40`,
        borderRadius: 20, padding: '1.5rem', marginBottom: 16,
        animation: 'fadeUp 0.4s ease both',
        textAlign: 'center',
        direction: isAr ? 'rtl' : 'ltr',
      }}>
        <div style={{ fontSize: 40, marginBottom: 8 }}>{result.emoji}</div>
        <div style={{ fontSize: 18 * scale, fontWeight: 700, color: '#fff', marginBottom: 6, fontFamily: 'Fraunces, serif' }}>
          {ui.niveau} : {result.label}
        </div>
        <div style={{
          display: 'inline-block',
          background: `${result.color}20`, color: result.color,
          fontSize: 12 * scale, fontWeight: 700,
          padding: '4px 14px', borderRadius: 20, marginBottom: 12,
        }}>
          {score} / {QUIZ.length} {ui.bonnes}
        </div>
        <div style={{ fontSize: 13 * scale, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 20 }}>
          {result.desc}
        </div>
        <button onClick={() => onNavigate('module', result.module)} style={{
          width: '100%', padding: '12px',
          background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
          color: '#1E3A5F', fontSize: 14 * scale, fontWeight: 700,
          borderRadius: 12, border: 'none', cursor: 'pointer', marginBottom: 8,
        }}>
          {ui.recommande}
        </button>
        <button onClick={reset} style={{
          width: '100%', padding: '10px',
          background: 'transparent', color: 'rgba(255,255,255,0.4)',
          fontSize: 12 * scale, border: 'none', cursor: 'pointer',
        }}>
          {ui.recommencer}
        </button>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      border: '1px solid rgba(245,158,11,0.2)',
      borderRadius: 20, padding: '1.5rem', marginBottom: 16,
      animation: 'fadeUp 0.3s ease both',
      direction: isAr ? 'rtl' : 'ltr',
    }}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
        {QUIZ.map((_, i) => (
          <div key={i} style={{
            flex: 1, height: 4, borderRadius: 4,
            background: i < step ? '#F59E0B' : i === step ? '#FCD34D' : 'rgba(255,255,255,0.15)',
            transition: 'background 0.3s ease',
          }} />
        ))}
      </div>
      <div style={{ fontSize: 11 * scale, color: '#F59E0B', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
        🧠 {ui.question} {step + 1} / {QUIZ.length}
      </div>
      <div style={{ fontSize: 15 * scale, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.5, fontFamily: 'Fraunces, serif' }}>
        {q.question}
      </div>
      {q.options.map(opt => {
        const state = getState(opt);
        return (
          <button key={opt.id} onClick={() => handleAnswer(opt)} style={{
            width: '100%', padding: '12px 16px', borderRadius: 12, marginBottom: 8,
            border: `2px solid ${state === 'correct' ? '#10B981' : state === 'wrong' ? '#EF4444' : 'rgba(255,255,255,0.15)'}`,
            background: state === 'correct' ? 'rgba(16,185,129,0.15)' : state === 'wrong' ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)',
            color: '#fff', fontSize: 13 * scale, fontWeight: 500,
            cursor: answered ? 'default' : 'pointer',
            textAlign: isAr ? 'right' : 'left',
            transition: 'all 0.2s ease',
          }}>
            {state === 'correct' ? '✓ ' : state === 'wrong' ? '✗ ' : ''}{opt.text}
          </button>
        );
      })}
      {showFeedback && (
        <>
          <div style={{
            background: answered && q.options.find(o => o.id === answered)?.correct
              ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.1)',
            border: `1px solid ${answered && q.options.find(o => o.id === answered)?.correct ? '#10B981' : '#EF4444'}40`,
            borderRadius: 12, padding: '12px', marginTop: 4,
            fontSize: 13 * scale, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5,
          }}>
            💡 {answered && q.options.find(o => o.id === answered)?.correct
              ? q.feedback.correct : q.feedback.wrong}
          </div>
          <button onClick={handleNext} style={{
            width: '100%', padding: '12px', marginTop: 10,
            background: 'linear-gradient(135deg, #1E3A5F, #2A4F7F)',
            color: '#fff', fontSize: 13 * scale, fontWeight: 700,
            borderRadius: 12, border: 'none', cursor: 'pointer',
          }}>
            {step < QUIZ.length - 1 ? ui.suivante : ui.resultat}
          </button>
        </>
      )}
    </div>
  );
}
