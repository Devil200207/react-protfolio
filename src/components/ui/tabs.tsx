"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    setActive(selectedTab[0]);
  };

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-2 relative",
        containerClassName
      )}
    >
      <div className="flex flex-col gap-2 w-full md:w-32">
        {propTabs.map((tab, idx) => (
          <button
            key={tab.value}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium",
              "bg-gray-900 text-white hover:bg-gray-800 transition-colors",
              active.value === tab.value && "bg-blue-600 hover:bg-blue-700",
              tabClassName
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="w-full overflow-hidden rounded-md p-2">
        <motion.div
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          key={active.value}
          className={cn("w-full h-full", contentClassName)}
        >
          {active.content}
        </motion.div>
      </div>
    </div>
  );
};