import { motion } from 'framer-motion';
import React from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, delay = 0 }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95,
      filter: 'blur(10px)',
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
        staggerChildren: 0.2,
        when: "beforeChildren"
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  } as const;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      style={{
        willChange: 'transform',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
