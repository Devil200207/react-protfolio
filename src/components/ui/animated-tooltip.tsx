import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="flex items-center justify-center">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full h-10 w-10 border-2 border-primary/50 group-hover:border-primary transition-colors"
            />
          </div>

          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className={cn(
                "absolute -top-16 left-1/2 -translate-x-1/2 z-50",
                "flex flex-col items-center justify-center",
                "rounded-md bg-background border border-border/40 shadow-xl px-4 py-2"
              )}
            >
              <div className="flex flex-col items-center gap-1">
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.designation}</p>
              </div>
              <div
                className="absolute -bottom-1 left-1/2 -translate-x-1/2 transform rotate-45 w-2 h-2 bg-background border-r border-b border-border/40"
              ></div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};