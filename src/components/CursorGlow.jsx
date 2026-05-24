import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      // Dot follows instantly
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    // Glow lerps toward cursor for smooth lag effect
    const animate = () => {
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.08;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.08;
      glow.style.transform = `translate(${glowPos.current.x - 200}px, ${glowPos.current.y - 200}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      dot.style.transform += ' scale(2.5)';
      dot.style.background = '#22d3ee';
      glow.style.opacity = '0.25';
    };

    const onLeaveLink = () => {
      dot.style.background = '#06b6d4';
      glow.style.opacity = '0.15';
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    // Scale dot on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink);
      el.addEventListener('mouseleave', onLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Small sharp dot — follows cursor instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[999] pointer-events-none"
        style={{
          width: '18px',
          height: '18px',
          borderRadius: '50%',
          background: '#06b6d4',
          transition: 'background 0.2s, transform 0.05s linear',
          mixBlendMode: 'normal',
        }}
      />

      {/* Large soft glow — lags behind cursor */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 z-[998] pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)',
          opacity: 0.15,
          transition: 'opacity 0.3s',
        }}
      />
    </>
  );
}