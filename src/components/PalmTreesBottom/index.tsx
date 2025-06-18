import { motion } from 'framer-motion';

const PalmTreesBottom = () => {
  return (
    <div className="relative z-20 w-full pointer-events-none h-0 overflow-hidden">
      <motion.img
        src="/pirate_palmtree-bottom.png"
        alt="Palm Tree Bottom"
        className="absolute right-0 bottom-0 translate-y-6 w-32 sm:w-48 drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
        style={{ transformOrigin: 'bottom center' }}
        animate={{ rotate: [0, 2, 0, -2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default PalmTreesBottom;

