import { motion } from 'framer-motion';
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiGreensock,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens,
  SiGit, SiGithub, SiPostman, SiVercel, SiFigma, SiMongoose
} from 'react-icons/si';
import { FiServer } from 'react-icons/fi';
import { TbCloud } from 'react-icons/tb';

const skillGroups = [
  {
    label: 'Frontend',
    color: 'cyan',
    skills: [
      { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
      { name: 'CSS3', icon: <SiCss />, color: '#1572B6' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
      { name: 'React.js', icon: <SiReact />, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
      { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
    ],
  },
  {
    label: 'Backend',
    color: 'blue',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
      { name: 'Express.js', icon: <SiExpress />, color: '#ffffff' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
      { name: 'REST APIs', icon: <FiServer />, color: '#60A5FA' },
      { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: '#D63AFF' },
      { name: 'Mongoose', icon: <SiMongoose />, color: '#880000' },
    ],
  },
  {
    label: 'Tools',
    color: 'violet',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#F05032' },
      { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
      { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
      { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
      { name: 'Render', icon: <TbCloud />, color: '#46E3B7' },
      { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
    ],
  },
];

const colorMap = {
  cyan: 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400',
  blue: 'border-blue-500/30 bg-blue-500/5 text-blue-400',
  violet: 'border-violet-500/30 bg-violet-500/5 text-violet-400',
};

const headerColorMap = {
  cyan: 'from-cyan-400 to-cyan-600',
  blue: 'from-blue-400 to-blue-600',
  violet: 'from-violet-400 to-violet-600',
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#080F1E] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-4 block">
              What I Know
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Technical{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map(group => (
              <motion.div
                key={group.label}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/8 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${headerColorMap[group.color]}`} />
                  <h3 className="text-sm font-bold text-white tracking-wider uppercase">{group.label}</h3>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {group.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border ${colorMap[group.color]} transition-all duration-200 cursor-default`}
                    >
                      <span className="text-2xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </span>
                      <span className="text-[10px] font-medium text-slate-400 text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
