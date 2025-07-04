import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import { CardHoverEffect } from '../components/ui/CardHoverEffect';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { BackgroundGradient } from '../components/ui/BackgroundGradient';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const categories = ['All', 'Web App', 'E-Commerce', 'Dashboard', 'Mobile'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example.com/ecommerce",
      github: "https://github.com/username/ecommerce",
      featured: true
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Dashboard",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      link: "https://example.com/finance",
      github: "https://github.com/username/finance",
      featured: true
    },
    {
      id: 3,
      title: "Travel Companion App",
      description: "Mobile-first application for travelers with itinerary planning, location bookmarking, and travel recommendations.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Mobile",
      technologies: ["React Native", "GraphQL", "MongoDB", "Google Maps API"],
      link: "https://example.com/travel",
      github: "https://github.com/username/travel",
      featured: false
    },
    {
      id: 4,
      title: "Health & Fitness Tracker",
      description: "Comprehensive fitness tracking application with workout plans, nutrition logging, and progress visualization.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Web App",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      link: "https://example.com/fitness",
      github: "https://github.com/username/fitness",
      featured: false
    },
    {
      id: 5,
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates, team assignments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      category: "Web App",
      technologies: ["React", "Redux", "Firebase", "Tailwind CSS"],
      link: "https://example.com/tasks",
      github: "https://github.com/username/tasks",
      featured: true
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      description: "Property listing and search platform with advanced filtering, virtual tours, and agent communication.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
      category: "E-Commerce",
      technologies: ["Next.js", "MongoDB", "AWS S3", "Mapbox"],
      link: "https://example.com/realestate",
      github: "https://github.com/username/realestate",
      featured: false
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <div className="mb-8">
              <TextGenerateEffect
                words="Explore my portfolio of projects showcasing creative solutions, technical expertise, and attention to detail."
                className="text-lg text-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">Highlighted work that represents my best skills and expertise.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardHoverEffect items={featuredProjects.map(project => ({
              title: project.title,
              description: project.description,
              link: `/projects/${project.id}`,
              thumbnail: project.image
            }))} />
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All Projects</h2>
            <p className="text-slate-400 mb-8">Browse through my complete portfolio of work.</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-indigo-500 text-white' 
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <BackgroundGradient key={project.id} className="rounded-xl overflow-hidden">
                <div className="bg-slate-900 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 flex-1">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        to={`/projects/${project.id}`}
                        className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1 text-sm font-medium"
                      >
                        View Details <ArrowUpRight size={14} />
                      </Link>
                      
                      <div className="flex gap-3">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github size={18} />
                        </a>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </BackgroundGradient>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;