import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
  activeSection,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
  activeSection?: string;
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={cn(
          "fixed top-4 inset-x-0 max-w-fit mx-auto z-50",
          className
        )}
      >
        <div className="flex items-center justify-center space-x-4 bg-black/50 backdrop-blur-md border border-white/[0.1] rounded-full p-2 px-4">
          {navItems.map((navItem: any, idx: number) => {
            const isActive = activeSection === navItem.name.toLowerCase();
            const isHovered = hoveredItem === navItem.name;
            
            return (
              <a
                key={`nav-item-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                )}
                onMouseEnter={() => setHoveredItem(navItem.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="relative z-10">{navItem.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
                {isHovered && !isActive && (
                  <motion.div
                    layoutId="hover-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 25,
                    }}
                  />
                )}
              </a>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};