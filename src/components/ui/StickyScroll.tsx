import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface StickyScrollItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollItem[];
}

export const StickyScroll: React.FC<StickyScrollProps> = ({ content }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.3, 1, 0.3]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["20%", "0%", "-20%"]
  );

  useEffect(() => {
    if (!ref.current || !containerRef.current) return;

    const handleScroll = () => {
      if (!ref.current || !containerRef.current) return;

      const container = containerRef.current;
      const containerHeight = container.offsetHeight;
      const containerTop = container.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const cardHeight = containerHeight / content.length;
      const currentCardIndex = Math.floor(
        (scrollPosition - containerTop) / cardHeight
      );

      if (
        currentCardIndex >= 0 &&
        currentCardIndex < content.length &&
        currentCardIndex !== activeCard
      ) {
        setActiveCard(currentCardIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCard, content.length]);

  return (
    <div ref={ref} className="relative h-[300vh]">
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden"
      >
        <div className="w-full md:w-1/2 px-4 md:px-8 py-12">
          <div className="max-w-lg mx-auto">
            {content.map((item, index) => (
              <motion.div
                key={index}
                className="mb-10 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm"
                style={{
                  opacity: activeCard === index ? 1 : 0.3,
                  scale: activeCard === index ? 1 : 0.95,
                  transition: "all 0.4s ease-out",
                }}
              >
                {item.icon && (
                  <div className="w-12 h-12 mb-4 flex items-center justify-center bg-indigo-500/10 text-indigo-400 rounded-lg">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <motion.div
            style={{ opacity, y }}
            className="w-full max-w-md p-8"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4">My Journey</h2>
                  <p className="max-w-xs mx-auto">
                    Scroll to explore my professional path and expertise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};