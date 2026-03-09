import { motion } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';

const ScrollProgress = () => {
  const completion = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-400 to-cyan-400"
        style={{ width: `${completion}%` }}
        initial={{ width: 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ScrollProgress;
