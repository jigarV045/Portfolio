import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/jigarV045', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/jigar-vaghela', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:jigarvaghela2402@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#080F1E] border-t border-white/8 pt-16 pb-8 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(6,182,212,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main footer row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

            {/* Brand column */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent w-fit"
              >
                Jigar Vaghela
              </button>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                MERN Stack Developer building scalable, modern full-stack web applications with clean code and great UX.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-2 mt-1">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/10 transition-colors duration-200"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick links */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-slate-500 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-cyan-400 transition-all duration-300 rounded-full" />
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* CTA column */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase">Get In Touch</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Open to new opportunities and collaborations. Let's build something great together.
              </p>
              <motion.a
                href="mailto:jigarvaghela2402@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-fit hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
              >
                <FiMail size={15} />
                Say Hello
              </motion.a>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"
          />

          {/* Bottom bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-slate-700 flex items-center gap-1.5">
              &copy; {year} Jigar Vaghela. Built with
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2 }}
              >
                <FiHeart size={11} className="text-red-500" />
              </motion.span>
              using React & Tailwind CSS
            </p>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-cyan-400 transition-colors duration-200 group"
            >
              Back to top
              <span className="p-1 rounded-md border border-white/10 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-200">
                <FiArrowUp size={11} />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}