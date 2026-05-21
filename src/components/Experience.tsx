import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCpu } from 'react-icons/fi';

const experience = {
  role: 'Project-Based Intern',
  company: 'CSRBOX × IBM',
  period: '2024',
  location: 'Remote / India',
  description:
    'Worked on developing an AI-powered chatbot using Botpress Studio focused on technology adoption analysis assistance. Designed conversational workflows, chatbot interactions, and user-friendly AI experiences during the internship program.',
  responsibilities: [
    'Designed and configured chatbot conversation flows using Botpress Studio',
    'Built structured user interaction logic and response architectures',
    'Created context-aware dialogue patterns for technology adoption guidance',
    'Focused on improving user engagement through intuitive chatbot UX',
    'Developed structured and user-friendly conversational experiences',
    'Collaborated within the IBM Project-Based Internship framework',
  ],
  tags: ['Botpress Studio', 'AI Chatbot', 'Conversational Design', 'IBM', 'CSRBOX'],
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#080F1E] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-4 block">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Experience &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Internship
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 md:pl-0">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="md:grid md:grid-cols-2 md:gap-12 items-start"
            >
              {/* Left: Meta info */}
              <div className="md:text-right mb-6 md:mb-0 md:pr-12">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
                  <FiBriefcase size={12} />
                  Internship
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                <div className="flex items-center gap-2 justify-start md:justify-end mb-2">
                  <FiCpu className="text-blue-400" size={16} />
                  <span className="text-blue-400 font-semibold text-sm">{experience.company}</span>
                </div>
                <div className="flex items-center gap-3 justify-start md:justify-end text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <FiCalendar size={11} />
                    {experience.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin size={11} />
                    {experience.location}
                  </span>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#080F1E] shadow-lg shadow-cyan-500/50" />

              {/* Right: Details */}
              <div className="md:pl-12">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{experience.description}</p>

                  <ul className="space-y-2.5 mb-5">
                    {experience.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.tags.map(t => (
                      <span key={t} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
