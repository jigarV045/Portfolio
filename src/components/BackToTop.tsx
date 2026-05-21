import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl shadow-cyan-500/25 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
