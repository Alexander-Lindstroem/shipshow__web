import { motion } from 'framer-motion';

const PalmTreesLeftRight = () => {
  return (
    <div className="relative z-20 w-full pointer-events-none h-0">
      <motion.img
        src="/pirate_palmtree-left.png"
        alt="Palm Tree Left"
        className="absolute left-0 top-0  transform -translate-y-1/2 w-32 sm:w-48 drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
        animate={{ rotate: [0, -4, 0, 1, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        src="/pirate_palmtree-right.png"
        alt="Palm Tree Right"
        className="absolute right-0 top-0  transform -translate-y-1/2 w-32 sm:w-48 drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
        animate={{ rotate: [0, 4, 0, -1, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default PalmTreesLeftRight;