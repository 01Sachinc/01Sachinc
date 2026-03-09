import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Expected 2026',
    icon: <Award className="text-primary-400" />
  },
  {
    title: 'Cloud DevOps Internship',
    issuer: 'Tech Innovations Inc.',
    date: '2025',
    icon: <Briefcase className="text-blue-400" />
  },
  {
    title: 'Professional Cloud Engineer Training',
    issuer: 'AWS Academy',
    date: '2025',
    icon: <BookOpen className="text-cyan-400" />
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="flex flex-col items-center mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-primary-400 text-sm font-bold uppercase tracking-[0.3em] mb-4"
        >
          Achievements
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center">
          Certifications & <span className="text-gradient">Experience</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {cert.icon}
            </div>
            <h3 className="text-xl font-bold font-heading mb-2 text-slate-100">{cert.title}</h3>
            <p className="text-primary-500 font-medium text-sm mb-4">{cert.issuer}</p>
            <div className="text-slate-500 text-sm">{cert.date}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
