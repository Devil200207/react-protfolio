import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/section-heading';
import { ProjectCard } from '../ui/project-card';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { Button } from '../ui/button';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team workspaces, and analytics.",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "An interactive dashboard for financial data visualization with customizable widgets and reports.",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A social networking platform with user profiles, posts, comments, and real-time notifications.",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: "#",
      github: "#"
    },
  ];

  const testimonials = [
    {
      quote: "Working with this developer was an absolute pleasure. They delivered a high-quality product that exceeded our expectations.",
      name: "Sarah Johnson",
      title: "CEO, TechStart",
    },
    {
      quote: "Exceptional attention to detail and a keen eye for design. Our project was completed ahead of schedule with outstanding results.",
      name: "Michael Chen",
      title: "Product Manager, InnovateCorp",
    },
    {
      quote: "The most reliable developer I've worked with. Their technical expertise and communication skills made our collaboration seamless.",
      name: "Emily Rodriguez",
      title: "CTO, DevSolutions",
    },
    {
      quote: "Delivered a complex application with intuitive UX and robust performance. Would definitely hire again for future projects.",
      name: "David Kim",
      title: "Founder, AppLaunch",
    },
    {
      quote: "Transformed our outdated website into a modern, responsive platform that has significantly increased our user engagement.",
      name: "Jessica Taylor",
      title: "Marketing Director, GrowthBrand",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>My Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
        
        <div className="mt-32">
          <h3 className="text-2xl font-bold text-center mb-12">What Clients Say</h3>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;