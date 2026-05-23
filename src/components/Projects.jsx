import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const projects = [
  {
    title: 'InterviewAI',
    description:
      'An AI-powered interview preparation and report generation platform that analyzes resumes and job descriptions to generate personalized interview reports, skill gap analysis, technical questions, behavioral questions, and match scores.',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Gemini AI integration',
      'Resume analysis',
      'Match score visualization',
      'PDF export',
      'JWT authentication',
      'Report history',
      'Drag-and-drop upload',
      'Responsive UI',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Tailwind CSS'],
    github: 'https://github.com/jigarV045/Interview-A-Project',
    live: 'https://interview-ai-jv.vercel.app',
    accent: 'cyan',
  },
  {
    title: 'IntraFix',
    description:
      'A full-stack IT Service Ticketing and Asset Management System with role-based access, real-time communication, and comprehensive ticket tracking capabilities.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Ticket management',
      'Asset tracking',
      'Role-based authentication',
      'Real-time chat (Socket.IO)',
      'Notifications',
      'Dashboard',
      'Secure JWT authentication',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Socket.IO'],
    github: 'https://github.com/jigarV045/Intrafix',
    live: '#',
    accent: 'blue',
  },
  {
    title: 'TechAdopt AI Chatbot',
    description:
      'An AI-powered chatbot developed during a project-based internship using Botpress Studio to help users understand technology adoption analysis concepts through interactive conversations and intelligent guidance.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'AI-powered conversational assistant',
      'Interactive chatbot workflow',
      'Technology adoption guidance',
      'Context-aware responses',
      'User-friendly chat interface',
      'Real-time conversation handling',
      'Structured conversational flows',
    ],
    tech: ['Botpress Studio', 'AI Integrations', 'Web Technologies', 'Conversational Workflow Design'],
    github: 'https://github.com/jigarV045/TechAdopt-Chatbot',
    live: 'https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/03/23/15/20260323151334-I3SVQ74E.json', 
    accent: 'violet',
  },
];

const accentMap = {
  cyan: {
    border: 'hover:border-cyan-500/40',
    glow: 'group-hover:shadow-cyan-500/10',
    badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    btn: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20',
    dot: 'bg-cyan-400',
  },
  blue: {
    border: 'hover:border-blue-500/40',
    glow: 'group-hover:shadow-blue-500/10',
    badge: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    btn: 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20',
    dot: 'bg-blue-400',
  },
  violet: {
    border: 'hover:border-violet-500/40',
    glow: 'group-hover:shadow-violet-500/10',
    badge: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    btn: 'bg-violet-500/10 border-violet-500/20 text-violet-400 hover:bg-violet-500/20',
    dot: 'bg-violet-400',
  },
};

function ProjectCard({ project, index }) {
  const acc = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col"
    >
      <div
        className={`group flex flex-col rounded-2xl bg-white/[0.02] border border-white/8 ${acc.border} overflow-hidden transition-all duration-500 hover:shadow-2xl ${acc.glow}`}
      >
        {/* Image wrapper */}
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="flex gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg border ${acc.btn} transition-all duration-200`}
                onClick={e => e.stopPropagation()}
              >
                <FiGithub size={15} />
              </a>

              {/* Conditional Live Link or Chat Bot Opener */}
              <a
                href={project.live}
                target="_blank"
                // rel="noopener noreferrer"
                className={`p-2 rounded-lg border ${acc.btn} transition-all duration-200 opacity-40 pointer-events-none ${project.live !== '#' ? 'opacity-100 pointer-events-auto' : ''} `}
              >
                <FiExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 flex flex-col flex-1">
          <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(t => (
              <span key={t} className={`px-2.5 py-1 text-[11px] font-medium rounded-md border ${acc.badge}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-4 block">
            What I've Built
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}