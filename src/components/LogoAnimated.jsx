import React from 'react';

export default function LogoAnimated({ height = 48 }) {
  return (
    <div style={{ height, width: height, position: 'relative', flexShrink: 0 }}>
      <video
        src="/logo.mp4"
        autoPlay loop muted playsInline
        style={{
          height: '100%', width: '100%',
          objectFit: 'contain',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
