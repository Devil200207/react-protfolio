import React from "react";
import { motion } from "framer-motion";

interface BackgroundGradientProps {
  children: React.ReactNode;
  className?: string;
}

export const BackgroundGradient: React.FC<BackgroundGradientProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-400 opacity-50 blur-xl"
        animate={{
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};