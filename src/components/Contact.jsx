import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';

const contactInfo = [
  { icon: <FiMail size={18} />, label: 'Email', value: 'jigarvaghela2402@gmail.com', href: 'mailto:jigarvaghela2402@gmail.com' },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', value: 'linkedin.com/in/jigar-vaghela', href: 'https://linkedin.com/in/jigar-vaghela' },
  { icon: <FiGithub size={18} />, label: 'GitHub', value: 'github.com/jigarV045', href: 'https://github.com/jigarV045' },
  { icon: <FiMapPin size={18} />, label: 'Location', value: 'Ahmedabad, Gujarat, India', href: null },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-28 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Subtle background orb */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <span className="text-xs font-semibold tracking-[0.3em] text-cyan-400 uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let's{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto" />
            <p className="mt-6 text-slate-400 text-sm max-w-md mx-auto">
              I'm actively looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-4">
              {contactInfo.map(c => (
                <motion.div
                  key={c.label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    {c.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-slate-300 hover:text-cyan-400 transition-colors truncate block"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-300 truncate">{c.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                ].map(field => (
                  <div key={field.id}>
                    <label className="block text-xs font-medium text-slate-400 mb-2">{field.label}</label>
                    <input
                      type={field.type}
                      value={form[field.id]}
                      onChange={e => setForm(prev => ({ ...prev, [field.id]: e.target.value }))}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      placeholder={field.placeholder}
                      required
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 ${
                        focused === field.id
                          ? 'border-cyan-500/60 bg-cyan-500/5 shadow-lg shadow-cyan-500/10'
                          : 'border-white/10 hover:border-white/20'
                      }`}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none ${
                      focused === 'message'
                        ? 'border-cyan-500/60 bg-cyan-500/5 shadow-lg shadow-cyan-500/10'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2.5 transition-all duration-300 ${
                    submitted
                      ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-xl hover:shadow-cyan-500/25'
                  }`}
                >
                  {submitted ? (
                    <>
                      <FiCheck size={16} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
