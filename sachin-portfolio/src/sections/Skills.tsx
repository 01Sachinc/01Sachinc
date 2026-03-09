import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Expertise
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Technical <span className="text-gradient">Proficiencies</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-xl font-bold font-heading mb-6 text-slate-100 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-primary-500 rounded-full" />
              {skill.category}
            </h3>
            <ul className="space-y-4">
              {skill.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-400 hover:text-primary-300 transition-colors">
                  <div className="w-1 h-1 bg-primary-500/50 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
