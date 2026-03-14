import { useState, useEffect } from 'react';

const STORAGE_KEY = 'numadminia_progress';

export function useProgress() {
  const [progress, setProgress] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setProgress(JSON.parse(saved));
    } catch (e) {}
    setLoaded(true);
  }, []);

  const markComplete = (moduleId, lessonId) => {
    setProgress(prev => {
      const updated = {
        ...prev,
        [moduleId]: [...(prev[moduleId] || []), lessonId].filter((v, i, a) => a.indexOf(v) === i)
      };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch (e) {}
      return updated;
    });
  };

  const getModuleProgress = (moduleId) => progress[moduleId] || [];

  const getTotalCompleted = () => Object.values(progress).reduce((acc, arr) => acc + arr.length, 0);

  const isLessonDone = (moduleId, lessonId) => (progress[moduleId] || []).includes(lessonId);

  const resetProgress = () => {
    setProgress({});
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
  };

  return { progress, markComplete, getModuleProgress, getTotalCompleted, isLessonDone, resetProgress, loaded };
}
