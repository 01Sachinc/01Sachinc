import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronRight, Download } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-500/20 rounded-full blur-[120px] animae-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-primary-500/20 bg-primary-500/10 text-primary-400 text-sm font-medium mb-6 uppercase tracking-wider"
          >
            Available for New Opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
            Hi, I'm <span className="text-gradient">Sachin C S</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8">
            <Typewriter
              words={[
                'Java Fullstack Developer',
                'Cloud & DevOps Engineer',
                'AWS Solutions Architect',
                'AI/ML Enthusiast'
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          
          <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
            Architecting secure, scalable, and automated cloud solutions. Specializing in Java Fullstack development, AWS ecosystem, and AI-driven insights to drive operational excellence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary-600/25"
            >
              View Projects <ChevronRight size={20} />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-primary-500/30 hover:border-primary-500 text-primary-400 rounded-xl font-semibold flex items-center gap-2 transition-all backdrop-blur-sm"
            >
              Resume <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Visual Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hidden lg:block relative"
        >
          <div className="relative z-10 w-full aspect-square glass-dark rounded-3xl border-white/10 flex items-center justify-center p-12 overflow-hidden group">
             {/* Abstract DevOps Shapes */}
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent" />
             <div className="w-full h-full border-2 border-dashed border-primary-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
             <div className="absolute w-2/3 h-2/3 border border-blue-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
             <div className="absolute text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-primary-400/10 transition-colors">
               DEVOPS
             </div>
          </div>
          {/* Floating Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold">AWS</div>
              <div>
                <div className="text-xs text-slate-400">Certifications</div>
                <div className="text-sm font-bold">Solutions Architect</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
