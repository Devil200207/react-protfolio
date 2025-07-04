"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [isInView, setIsInView] = useState(false);
  const [wordArray, setWordArray] = useState<string[]>([]);

  useEffect(() => {
    setWordArray(words.split(" "));
  }, [words]);

  useEffect(() => {
    setIsInView(true);
  }, []);

  const renderWords = () => {
    return (
      <div>
        {wordArray.map((word, idx) => {
          return (
            <div key={idx} className="inline-block">
              <div className="inline-block overflow-hidden">
                <motion.div
                  className="inline-block"
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 0.5, delay: idx * 0.03 }}
                >
                  {word}
                </motion.div>
              </div>
              <span className="inline-block">&nbsp;</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("font-medium", className)}>
      <div className="mt-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};