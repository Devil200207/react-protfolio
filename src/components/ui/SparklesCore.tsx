import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from "framer-motion";

interface SparklesCoreProps {
  id: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  className = "",
  particleColor = "#FFF",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<any[]>([]);
  const windowSize = useWindowSize();
  const canvasSize = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    canvasSize.current.width = canvasRef.current.offsetWidth;
    canvasSize.current.height = canvasRef.current.offsetHeight;
    canvasRef.current.width = canvasSize.current.width;
    canvasRef.current.height = canvasSize.current.height;

    const particleCount = Math.min(
      Math.floor(
        (canvasSize.current.width * canvasSize.current.height) / 10000
      ) * particleDensity,
      1000
    );

    const newParticles = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvasSize.current.width;
      const y = Math.random() * canvasSize.current.height;
      const size = Math.random() * (maxSize - minSize) + minSize;
      const opacity = Math.random() * 0.5 + 0.2;
      const speed = Math.random() * 0.2 + 0.1;
      
      newParticles.push({
        x,
        y,
        size,
        opacity,
        speed,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }
    setParticles(newParticles);
  }, [windowSize, minSize, maxSize, particleDensity]);

  useEffect(() => {
    if (!canvasRef.current || particles.length === 0) return;
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, canvasSize.current.width, canvasSize.current.height);
      
      particles.forEach((particle) => {
        // Update particle position
        particle.y -= particle.speed * deltaTime * 0.05 * particle.direction;
        
        // Reset particle if it goes out of bounds
        if (particle.y < -10) {
          particle.y = canvasSize.current.height + 10;
        } else if (particle.y > canvasSize.current.height + 10) {
          particle.y = -10;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [particles, particleColor]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`absolute inset-0 ${className}`}
      style={{
        background,
      }}
    >
      <canvas
        ref={canvasRef}
        id={id}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </motion.div>
  );
};