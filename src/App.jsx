import React, { useState } from 'react';
import Home from './pages/Home';
import Module from './pages/Module';
import Lesson from './pages/Lesson';
import JeExplique from './pages/JeExplique';
import Onboarding from './pages/Onboarding';
import ModuleEnd from './pages/ModuleEnd';
import StickyFooter from './components/StickyFooter';
import { useProgress } from './hooks/useProgress';
import { useTextSize } from './hooks/useTextSize';
import { useLang } from './hooks/useLang';

export default function App() {
  const [view, setView] = useState('home');
  const [currentModule, setCurrentModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessonTotal, setLessonTotal] = useState(0);
  const [currentModuleName, setCurrentModuleName] = useState('');
  const { markComplete, getModuleProgress, getTotalCompleted } = useProgress();
  const { large, toggle: toggleText, scale } = useTextSize();
  const { lang, t, switchLang, isRTL } = useLang();

  const navigate = (target, data) => {
    if (target === 'home') setView('home');
    else if (target === 'module') { setCurrentModule(data); setView('module'); }
    else if (target === 'jeexplique') setView('jeexplique');
    else if (target === 'onboarding') setView('onboarding');
    else if (target === 'moduleend') setView('moduleend');
  };

  const startLesson = (lesson, moduleId, total, moduleName) => {
    setCurrentLesson(lesson);
    setCurrentModule(moduleId);
    setLessonTotal(total);
    setCurrentModuleName(moduleName || moduleId);
    setView('lesson');
  };

  const handleLessonComplete = (lessonId, isLast) => {
    markComplete(currentModule, lessonId);
    if (isLast) setView('moduleend');
    else navigate('module', currentModule);
  };

  const sharedProps = { onNavigate: navigate, large, toggleText, scale, t, isRTL, lang, switchLang, onDiagnostic: () => navigate('onboarding') };

  return (
    <>
      {view === 'home' && <Home {...sharedProps} totalCompleted={getTotalCompleted()} />}
      {view === 'module' && (
        <Module
          moduleId={currentModule}
          onNavigate={navigate}
          onStartLesson={startLesson}
          completedLessons={getModuleProgress(currentModule)}
          large={large} toggleText={toggleText} scale={scale}
          t={t} isRTL={isRTL} lang={lang}
        />
      )}
      {view === 'lesson' && currentLesson && (
        <Lesson
          lesson={currentLesson}
          moduleId={currentModule}
          total={lessonTotal}
          onNavigate={navigate}
          onComplete={handleLessonComplete}
          large={large} toggleText={toggleText} scale={scale}
          t={t} isRTL={isRTL}
        />
      )}
      {view === 'jeexplique' && <JeExplique {...sharedProps} />}
      {view === 'onboarding' && <Onboarding {...sharedProps} />}
      {view === 'moduleend' && (
        <ModuleEnd
          moduleId={currentModule}
          moduleName={currentModuleName}
          onNavigate={navigate}
          large={large} toggleText={toggleText} scale={scale}
          t={t} isRTL={isRTL}
        />
      )}
      <StickyFooter onNavigate={navigate} scale={scale} t={t} isRTL={isRTL} />

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/jean-luc-descombes/" target="_blank" rel="noreferrer"
        style={{
          position: 'fixed', bottom: 24, right: 94, width: 58, height: 58,
          borderRadius: '50%', background: '#0077B5', color: '#fff',
          fontSize: '1.4rem', cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(0,119,181,0.5)', zIndex: 900,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none', fontWeight: 900, fontFamily: 'Arial, sans-serif',
          letterSpacing: '-0.5px',
        }}>
        in
      </a>

      {/* WhatsApp */}
      <a href="https://wa.me/33770007335" target="_blank" rel="noreferrer"
        style={{
          position: 'fixed', bottom: 24, right: 24, width: 58, height: 58,
          borderRadius: '50%', background: '#25D366', color: '#fff',
          fontSize: '1.6rem', cursor: 'pointer',
          boxShadow: '0 4px 24px rgba(37,211,102,0.5)', zIndex: 900,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none',
        }}>
        💬
      </a>
    </>
  );
}
