import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/section-heading';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { BackgroundBeams } from '../ui/background-beams';
import { HoverEffect } from '../ui/card-hover-effect';

const About: React.FC = () => {
  const aboutText = "I'm a passionate full-stack developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that combine beautiful design with robust functionality. My approach focuses on user-centered design principles, performance optimization, and writing clean, maintainable code.";
  
  const cards = [
    {
      title: "Frontend Development",
      description: "Creating responsive, interactive UIs with React, Next.js, and modern CSS frameworks",
      link: "#skills",
    },
    {
      title: "Backend Development",
      description: "Building scalable APIs and server-side applications with Node.js, Express, and databases",
      link: "#skills",
    },
    {
      title: "UI/UX Design",
      description: "Designing intuitive user experiences with a focus on accessibility and modern aesthetics",
      link: "#skills",
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/50 to-secondary/50 blur-lg opacity-75"></div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold">Full-Stack Developer & UI/UX Enthusiast</h3>
            
            <div className="text-muted-foreground">
              <TextGenerateEffect words={aboutText} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium">John Doe</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Email</span>
                <span className="font-medium">hello@example.com</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Location</span>
                <span className="font-medium">San Francisco, CA</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted-foreground">Availability</span>
                <span className="font-medium">Open to opportunities</span>
              </div>
            </div>
            
            <div className="mt-4">
              <a 
                href="/resume.pdf" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                Download Resume
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">What I Do</h3>
          <HoverEffect items={cards} />
        </div>
      </div>
    </section>
  );
};

export default About;