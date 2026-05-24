import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const roles = ['MERN Stack Developer', 'Full-Stack Engineer', 'React.js Developer', 'Node.js Developer'];

export default function Hero() {
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const gridRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // GSAP entrance + floating orbs
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 60, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
      );

      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to(orb2Ref.current, {
        y: 25,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      gsap.fromTo(
        gridRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 0.2 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F172A]"
    >
      {/* Animated grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-30"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-25"
        style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <h1
            ref={nameRef}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Jigar Vaghela
            </span>
          </h1>

          <motion.div variants={itemVariants} className="mb-6 h-12 flex items-center">
            <span className="text-2xl sm:text-3xl font-bold text-slate-200">
              {displayText}
              <span className="inline-block w-0.5 h-7 bg-cyan-400 ml-1 animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
          >
            Building scalable, responsive, and modern full-stack web applications with a passion for clean code and exceptional user experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              View Projects
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/15 text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <span className="text-xs text-slate-600 uppercase tracking-widest">Find me on</span>
            <div className="flex gap-3">
              {[
                { icon: <FiGithub size={20} />, href: 'https://github.com/jigarV045', label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/jigar-vaghela', label: 'LinkedIn' },
                { icon: <FiMail size={20} />, href: 'mailto:jigarvaghela2402@gmail.com', label: 'Email' },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
