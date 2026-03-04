import React, { useState } from 'react';

export default function StickyFooter({ onNavigate, scale = 1, t, isRTL }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const sf = t?.stickyFooter || {};

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'rgba(30,58,95,0.97)',
      backdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(245,158,11,0.3)',
      padding: '12px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      zIndex: 500,
      boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
      direction: isRTL ? 'rtl' : 'ltr',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 20 }}>🎯</span>
        <div>
          <div style={{ fontSize: 13 * scale, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>
            {sf.title || 'Pas sûr par où commencer ?'}
          </div>
          <div style={{ fontSize: 11 * scale, color: 'rgba(255,255,255,0.5)', marginTop: 1 }}>
            {sf.subtitle || '3 questions → votre parcours personnalisé'}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          onClick={() => onNavigate('onboarding')}
          style={{
            background: 'linear-gradient(135deg, #F59E0B, #FCD34D)',
            color: '#1E3A5F', fontSize: 13 * scale, fontWeight: 700,
            padding: '10px 18px', borderRadius: 12, border: 'none',
            cursor: 'pointer', whiteSpace: 'nowrap',
            boxShadow: '0 2px 12px rgba(245,158,11,0.4)',
          }}>
          {sf.cta || 'Test diagnostic gratuit →'}
        </button>
        <button
          onClick={() => setVisible(false)}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.4)', fontSize: 16,
            width: 32, height: 32, borderRadius: 8,
            cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
          ×
        </button>
      </div>
    </div>
  );
}
