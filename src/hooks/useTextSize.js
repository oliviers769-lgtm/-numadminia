import { useState, useEffect } from 'react';

export function useTextSize() {
  const [large, setLarge] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('numadminia_largetext');
      if (saved === 'true') setLarge(true);
    } catch (e) {}
  }, []);

  const toggle = () => {
    setLarge(prev => {
      const next = !prev;
      try { localStorage.setItem('numadminia_largetext', String(next)); } catch (e) {}
      return next;
    });
  };

  // Base font size multiplier
  const scale = large ? 1.2 : 1;

  return { large, toggle, scale };
}
