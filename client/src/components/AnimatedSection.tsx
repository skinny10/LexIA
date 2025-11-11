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
      y: 30,
      scale: 0.98,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeOut",
        staggerChildren: 0.15,
        when: "beforeChildren"
      },
    },
    hover: {
      scale: 1.01,
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
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      style={{
        willChange: 'transform, opacity',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;