import React from 'react';
import { motion } from 'framer-motion';
import { TestimonialCard } from './ui/testimonial-card';
import { cn } from '../lib/utils';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      content: "Working with John was an absolute pleasure. His technical expertise and creative approach to problem-solving helped us launch our platform ahead of schedule. He's not just a developer, but a true partner in our success.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager at InnovateCorp",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      content: "John's ability to translate complex requirements into elegant code is remarkable. He consistently delivered high-quality work and was always willing to go the extra mile to ensure our product met the highest standards.",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director at CreativeStudio",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      content: "As a designer, I appreciate developers who pay attention to detail and implement designs with precision. John exceeded my expectations, bringing our designs to life with smooth animations and pixel-perfect implementation.",
    },
    {
      name: "David Kim",
      role: "CTO at FinTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      content: "John's technical knowledge is impressive, but what sets him apart is his ability to understand business objectives. He helped us optimize our application for performance while ensuring it met all regulatory requirements.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/5 to-black/0 z-0" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Testimonials</h2>
          <p className="section-subtitle">What clients and colleagues say about my work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium",
              "hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            )}
          >
            <span>Ready to work together?</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;