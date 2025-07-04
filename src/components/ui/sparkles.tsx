"use client";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

export const SparklesCore = ({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<
    {
      x: number;
      y: number;
      size: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const particleCount = particleDensity || 50;
    const minSizeValue = minSize || 1;
    const maxSizeValue = maxSize || 3;

    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSizeValue - minSizeValue) + minSizeValue,
      delay: Math.random() * 2,
    }));

    setParticles(newParticles);
  }, [minSize, maxSize, particleDensity]);

  return (
    <div
      id={id}
      className={cn(
        "w-full h-full absolute inset-0 overflow-hidden",
        className
      )}
      style={{
        background: background || "transparent",
      }}
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: 3 + particle.delay,
          }}
          style={{
            position: "absolute",
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            backgroundColor: particleColor || "white",
          }}
        />
      ))}
    </div>
  );
};