"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  children,
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        className={cn(
          "cursor-pointer text-sm hover:opacity-[0.9] px-4 py-2",
          active === item ? "text-primary" : "text-muted-foreground"
        )}
      >
        {item}
      </motion.p>
      {active === item && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-0 left-0 right-0 mt-8 bg-background border border-border/40 rounded-md shadow-md overflow-hidden z-50"
        >
          <div className="p-4">{children}</div>
        </motion.div>
      )}
    </div>
  );
};

interface HoveredLinkProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const HoveredLink: React.FC<HoveredLinkProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
    >
      {children}
    </div>
  );
};

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ setActive, children }) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-border/40 bg-background shadow-sm"
    >
      <div className="flex space-x-2 px-2 py-1">{children}</div>
    </nav>
  );
};