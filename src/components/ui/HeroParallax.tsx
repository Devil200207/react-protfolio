import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export const HeroParallax: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  const firstRow = products.slice(0, 2);
  const secondRow = products.slice(2, 4);
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div
      ref={ref}
      className="h-[40vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y: translateY1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4"
      >
        {firstRow.map((product) => (
          <Link
            key={product.title}
            to={product.link}
            className="group relative h-40 md:h-96 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/0 to-black/60 group-hover:to-black/80 transition-all duration-300" />
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 z-20 p-4">
              <h3 className="text-white font-bold text-xl md:text-2xl">
                {product.title}
              </h3>
            </div>
          </Link>
        ))}
      </motion.div>
      
      <motion.div
        style={{ y: translateY2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-4 mt-4 md:mt-8"
      >
        {secondRow.map((product) => (
          <Link
            key={product.title}
            to={product.link}
            className="group relative h-40 md:h-96 overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/0 via-black/0 to-black/60 group-hover:to-black/80 transition-all duration-300" />
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-full object-cover object-center group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 z-20 p-4">
              <h3 className="text-white font-bold text-xl md:text-2xl">
                {product.title}
              </h3>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};