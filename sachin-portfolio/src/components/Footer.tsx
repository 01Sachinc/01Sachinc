import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-2xl font-bold font-heading text-gradient mb-2">Sachin C S</div>
          <p className="text-slate-500 text-sm">Cloud & DevOps Engineer</p>
        </div>

        <div className="flex items-center gap-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
            <Github size={20} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
