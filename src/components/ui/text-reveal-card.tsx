"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  className,
}: {
  text: string;
  revealText: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative w-full max-w-md h-40 rounded-lg p-8 overflow-hidden bg-gray-900 border border-gray-800",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg text-gray-300 font-medium">{text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute top-0 left-0"
        >
          <p className="text-lg text-blue-400 font-medium">{revealText}</p>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ transform: "translateY(100%)" }}
          animate={{ transform: isHovered ? "translateY(0%)" : "translateY(100%)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20"
        />
      </div>
    </div>
  );
};