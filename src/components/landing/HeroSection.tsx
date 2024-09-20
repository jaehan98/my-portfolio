import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <div className="text-center space-y-6 px-4"> 
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Jaehan's Portfolio
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full Stack Engineer with expertise in Frontend Development and Data Visualization.
      </motion.p>
      <div className="mt-8">  
        <Button text="Explore My Work" href="#about" />
      </div>
    </div>
  );
};

export default HeroSection;
