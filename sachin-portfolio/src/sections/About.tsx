import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-6 block">
            Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8">
            Building Intelligent, Scalable <br />
            and <span className="text-gradient">Secure Systems</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I am a Java Fullstack Developer and Cloud/DevOps Engineer dedicated to building intelligent, high-performance applications and resilient cloud infrastructures. 
            </p>
            <p>
              By combining Java’s backend power with AI/ML insights and automated AWS deployment patterns, I deliver end-to-end solutions that are as smart as they are stable. My mission is to bridge the gap between development and operations through automation and architectural excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-1 font-heading">Hand-on</div>
              <div className="text-sm text-slate-500 font-medium">AWS Services</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-1 font-heading">CI/CD</div>
              <div className="text-sm text-slate-500 font-medium">Pipeline Focus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-400 mb-1 font-heading">IaC</div>
              <div className="text-sm text-slate-500 font-medium">Terraform/Shell</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] glass-dark rounded-3xl overflow-hidden border-white/10 relative group">
             {/* Decorative Background for Image Placeholder */}
             <div className="absolute inset-0 bg-gradient-to-b from-primary-500/20 to-transparent" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-slate-800/50 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-700" />
                <div className="absolute text-8xl font-black text-white/5 opacity-20 pointer-events-none italic">
                  SACHIN
                </div>
             </div>
          </div>
          {/* Quality Stats Floating */}
          <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl border-primary-500/20 shadow-2xl">
             <div className="text-sm font-medium text-slate-400 mb-1 uppercase tracking-tighter">Security Focused</div>
             <div className="text-xl font-bold text-white">Zero Trust Mindset</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
