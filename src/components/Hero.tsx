import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TextRevealCard } from './ui/text-reveal-card';
import { TypewriterEffect } from './ui/typewriter-effect';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const words = [
    {
      text: "Building",
    },
    {
      text: "Softwares",
    },
    {
      text: "to",
    },
    {
      text: "solve",
    },
    {
      text: "real",
    },
    {
      text: "life",
    },
    {
      text: "problems.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-0"
        style={{
          backgroundPosition: `${mousePosition.x / 100}px ${mousePosition.y / 100}px`
        }}
      />
      
      <div className="section-padding relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="px-4 py-1 text-sm font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-blue-400">
            Full-Stack Developer
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <TypewriterEffect words={words} />
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <TextRevealCard
            revealText="By designing accessible interfaces, I make digital products usable for everyone."
            text="Transforming ideas into exceptional digital experiences"
            className="w-full"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex mt-2 flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;