import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface CardHoverEffectItem {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface CardHoverEffectProps {
  items: CardHoverEffectItem[];
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, idx) => (
        <Link
          to={item.link}
          key={idx}
          className="block group relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          <motion.div
            className="relative h-full w-full bg-slate-900 rounded-xl overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 z-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="relative h-full w-full p-6 flex flex-col justify-end z-20">
              <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};