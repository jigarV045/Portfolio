import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiTarget } from 'react-icons/fi';

const highlights = [
  { icon: <FiCode size={20} />, title: 'Full-Stack Development', desc: 'End-to-end web apps with React, Node.js, Express and MongoDB.' },
  { icon: <FiLayers size={20} />, title: 'Modern UI/UX', desc: 'Pixel-perfect interfaces with Tailwind CSS and animation libraries.' },
  { icon: <FiZap size={20} />, title: 'Performance Driven', desc: 'Scalable, optimized applications built for real-world usage.' },
  { icon: <FiTarget size={20} />, title: 'Problem Solver', desc: 'Analytical mindset focused on clean architecture and smart solutions.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-4 block">
              Who I Am
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div variants={itemVariants}>
              <div className="space-y-5 text-slate-400 leading-relaxed text-base">
                <p>
                  I'm <span className="text-white font-semibold">Jigar Vaghela</span>, a passionate{' '}
                  <span className="text-cyan-400 font-medium">MERN Stack Developer</span> and BCA student
                  from Ahmedabad, Gujarat. I specialize in building scalable, responsive, and visually
                  compelling full-stack web applications.
                </p>
                <p>
                  With a strong command of the{' '}
                  <span className="text-blue-400 font-medium">React.js ecosystem</span> on the frontend
                  and <span className="text-blue-400 font-medium">Node.js + Express.js + MongoDB</span> on
                  the backend, I enjoy crafting seamless digital experiences from concept to deployment.
                </p>
                <p>
                  I'm deeply invested in modern UI/UX principles, writing clean and maintainable code,
                  and continuously learning new technologies to stay ahead of the curve. My goal is to
                  build <span className="text-white font-medium">impactful products</span> that solve
                  real-world problems.
                </p>
                <p>
                  When I'm not coding, I explore design trends, experiment with animations, and sharpen
                  my problem-solving skills through personal projects.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'REST APIs'].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(h => (
                <motion.div
                  key={h.title}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-all">
                    {h.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{h.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
