import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const spring = useSpring(progress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      style={{ scaleX: spring, transformOrigin: 'left' }}
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 z-[100]"
    />
  );
}
