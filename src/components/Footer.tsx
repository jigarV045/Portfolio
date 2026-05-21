import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/jigarV045', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/jigar-vaghela', label: 'LinkedIn' },
  { icon: <FiMail size={18} />, href: 'mailto:jigarvaghela2402@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080F1E] border-t border-white/8 py-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Jigar Vaghela
            </span>
            <p className="text-xs text-slate-600 mt-1">MERN Stack Developer</p>
          </div>

          {/* Built with */}
          <p className="text-xs text-slate-600 flex items-center gap-1.5">
            Built with{' '}
            <FiHeart size={11} className="text-red-500" />
            {' '}using React & Tailwind CSS
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-lg text-slate-600 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-700">
            &copy; {year} Jigar Vaghela. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
