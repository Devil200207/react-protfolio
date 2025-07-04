import React, { useState, useRef } from 'react';
import { cn } from '../../lib/utils';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/40 bg-background p-6",
        "group transition-colors hover:border-border/80",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{
          opacity,
          background: isHovered
            ? `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.1), transparent 40%)`
            : '',
        }}
      />
      {children}
    </div>
  );
};