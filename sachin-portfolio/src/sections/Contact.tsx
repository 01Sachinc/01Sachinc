import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check, Send } from 'lucide-react';
import { useState } from 'react';
import { SOCIAL_LINKS } from '../constants';

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Get in Touch
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Let's Build Something <span className="text-gradient">Great</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card p-8 rounded-3xl flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
              <Mail size={24} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-500 font-medium mb-1">Email Me</div>
              <div className="text-lg font-bold text-slate-200">{SOCIAL_LINKS.email}</div>
            </div>
            <button 
              onClick={() => copyToClipboard(SOCIAL_LINKS.email, 'email')}
              className="p-2 text-slate-500 hover:text-primary-400 transition-colors"
            >
              {copied === 'email' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
            </button>
          </div>

          <div className="glass-card p-8 rounded-3xl flex items-center gap-6 group">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
              <Phone size={24} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-500 font-medium mb-1">Call Me</div>
              <div className="text-lg font-bold text-slate-200">{SOCIAL_LINKS.phone}</div>
            </div>
            <button 
              onClick={() => copyToClipboard(SOCIAL_LINKS.phone, 'phone')}
              className="p-2 text-slate-500 hover:text-primary-400 transition-colors"
            >
              {copied === 'phone' ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
            </button>
          </div>

          <div className="flex gap-4">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex-1 glass-card p-6 rounded-3xl flex flex-col items-center gap-3 hover:border-primary-500/30 transition-all">
              <Github size={24} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-300">GitHub</span>
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1 glass-card p-6 rounded-3xl flex flex-col items-center gap-3 hover:border-primary-500/30 transition-all">
              <Linkedin size={24} className="text-slate-400" />
              <span className="text-sm font-bold text-slate-300">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Form UI */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="glass-card p-10 rounded-3xl"
        >
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Subject</label>
              <input type="text" placeholder="Project Inquiry" className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
              <textarea rows={4} placeholder="How can I help you?" className="w-full bg-dark-lighter border border-white/10 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary-500 transition-colors resize-none"></textarea>
            </div>
            <button className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all group">
              Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
