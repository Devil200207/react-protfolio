"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";

export interface ExperienceCard {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  logo?: string;
  ctaText: string;
  ctaLink?: string;
}

interface ExpandableCardsProps {
  cards: ExperienceCard[];
}

export function ExpandableCards({ cards }: ExpandableCardsProps) {
  const [active, setActive] = useState<ExperienceCard | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* Card list - completely static, no animations */}
      <div className="max-w-4xl mx-auto w-full space-y-4">
        {cards.map((card, index) => (
          <div
            key={`list-card-${index}-${card.company}`}
            onClick={() => setActive(card)}
            className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-neutral-50 dark:hover:bg-neutral-800/50 rounded-xl cursor-pointer transition-colors border border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex-1">
              <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-200 mb-1">
                {card.title}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                {card.company}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {card.duration} • {card.location}
              </p>
            </div>
            <button className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-700 mt-4 md:mt-0 transition-colors">
              {card.ctaText}
            </button>
          </div>
        ))}
      </div>

      {/* Modal - completely separate from the list */}
      <AnimatePresence mode="wait">
        {active && (
          <>
            <motion.div
              key="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 h-full w-full z-[100]"
            />
            <div className="fixed inset-0 grid place-items-center z-[101]">
              <motion.button
                key="modal-close-button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 shadow-lg"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                key={`modal-content-${active.company}-${id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                ref={ref}
                className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-1">
                        {active.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {active.company}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {active.duration} • {active.location}
                      </p>
                    </div>
                    {active.ctaLink && (
                      <a
                        href={active.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm rounded-full font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                      >
                        {active.ctaText}
                      </a>
                    )}
                  </div>

                  <div className="pt-4 relative">
                    <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-h-[400px] overflow-auto space-y-4 [scrollbar-width:thin] [scrollbar-color:rgb(156_163_175)_transparent]">
                      <p className="leading-relaxed">{active.description}</p>
                      <div>
                        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {active.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-neutral-600"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
}; 