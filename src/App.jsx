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

  const sharedProps = { onNavigate: navigate, large, toggleText, scale, t, isRTL, lang, switchLang };

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
    </>
  );
}
