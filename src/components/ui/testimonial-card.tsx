import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

export const TestimonialCard = ({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 bg-gray-900 border border-gray-800 group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-4">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-blue-500/30">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-blue-400">{testimonial.role}</p>
          </div>
        </div>
        
        <div className="relative">
          <svg
            className="absolute -top-2 -left-2 h-8 w-8 text-blue-500/20"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <p className="relative text-gray-300 leading-relaxed mt-4">
            {testimonial.content}
          </p>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      />
    </div>
  );
};