import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Portfolio
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group glass-card rounded-3xl overflow-hidden border-white/5"
          >
            {/* Project Image Placeholder / Abstract Visual */}
            <div className="relative h-60 bg-dark-lighter overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-blue-600/10 group-hover:scale-110 transition-transform duration-700" />
               <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="text-4xl font-black font-heading text-white select-none">
                    {project.tech[0]}
                  </div>
               </div>
            </div>

            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-300 font-semibold uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-100 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-white transition-colors"
                >
                  <Github size={18} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
