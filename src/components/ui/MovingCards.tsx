import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MovingCardsProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export const MovingCards: React.FC<MovingCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [duplicatedItems, setDuplicatedItems] = useState<React.ReactNode[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  // Set speed values based on the speed prop
  const speedValues = {
    slow: 40,
    normal: 25,
    fast: 15,
  };
  
  const durationSeconds = speedValues[speed];

  useEffect(() => {
    // Duplicate items to create a seamless loop
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 2);
    }
  }, [duplicatedItems]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <motion.div
        ref={containerRef}
        className="flex"
        animate={{
          x: direction === "left" ? -containerWidth : containerWidth,
        }}
        transition={{
          duration: durationSeconds,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{ 
          paddingLeft: "1rem", 
          paddingRight: "1rem",
          animationPlayState: isPaused ? "paused" : "running" 
        }}
      >
        <div className="flex gap-4 md:gap-8">
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};