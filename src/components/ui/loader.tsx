import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-75 blur-lg"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="relative flex items-center justify-center w-24 h-24"
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full rounded-full border-t-4 border-primary" />
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;