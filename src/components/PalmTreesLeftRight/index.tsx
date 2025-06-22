import { motion } from 'framer-motion';

const PalmTreesLeftRight = () => {
  return (
    <div className="relative z-20 w-full pointer-events-none  h-0">


<motion.img
  src="/palm_leaves.png"
  alt="Palm Tree Left"
  className="absolute left-0 top-[-300]  transform rotate-70 
            hidden  md:block md:w-[300px]  md:top-10 md:left-[-230] md:scale-125  lg:left-[-500] lg:block lg:w-[700px]
             drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
  animate={{ rotate: [0, -3, 0, 3, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
/>

<motion.img
  src="/palm_leaves.png"
  alt="Palm Tree Right"
  className="absolute right-0 top-[-150] -translate-y-[120px] transform rotate-360
             hidden md:block md:w-[300px] md:right-[-220] md:top-10 md:scale-120 lg:right-[-530] lg:block lg:w-[700px] lg:scale-120
             drop-shadow-[-10px_8px_rgba(0,0,0,0.50)]"
  animate={{ rotate: [0, 3, 0, -3, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
/>
    </div>




  );
};

export default PalmTreesLeftRight;