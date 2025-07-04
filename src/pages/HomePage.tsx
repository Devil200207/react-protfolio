import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Layers, Zap } from 'lucide-react';
import { AnimatedText } from '../components/ui/AnimatedText';
import { HeroParallax } from '../components/ui/HeroParallax';
import { MovingCards } from '../components/ui/MovingCards';
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import { SparklesCore } from '../components/ui/SparklesCore';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';

const HomePage: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      link: "/projects/ecommerce",
      thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "Finance Dashboard",
      link: "/projects/finance",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "Travel App",
      link: "/projects/travel",
      thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
    },
    {
      title: "Health & Fitness",
      link: "/projects/health",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
    },
  ];

  const testimonials = [
    {
      content: "Working with this developer was an absolute pleasure. They delivered a stunning website that exceeded our expectations.",
      author: "Sarah Johnson",
      role: "CEO, TechStart"
    },
    {
      content: "Incredible attention to detail and a keen eye for design. Our project was completed ahead of schedule and with perfect execution.",
      author: "Michael Chen",
      role: "Marketing Director, Innovate Inc."
    },
    {
      content: "The most talented developer we've worked with. They transformed our vision into reality with remarkable precision.",
      author: "Emily Rodriguez",
      role: "Product Manager, CreativeFlow"
    },
  ];

  const skills = [
    { name: "React", icon: <Code size={20} /> },
    { name: "TypeScript", icon: <Code size={20} /> },
    { name: "Next.js", icon: <Code size={20} /> },
    { name: "Node.js", icon: <Code size={20} /> },
    { name: "UI/UX Design", icon: <Layers size={20} /> },
    { name: "Performance Optimization", icon: <Zap size={20} /> },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#4F46E5"
          />
          <BackgroundBeams className="opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block">
              <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 mb-4">
                Full-Stack Developer & UI Designer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <AnimatedText
                text="Crafting Digital Experiences"
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
              />
            </h1>
            
            <div className="mb-8">
              <TextGenerateEffect
                words="Transforming ideas into elegant, functional, and user-centric web applications with modern technologies and creative design."
                className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/projects"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 flex items-center gap-2"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg bg-slate-800 text-white font-medium hover:bg-slate-700 transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-400">Explore a selection of my recent work showcasing creative solutions and technical expertise.</p>
          </div>
        </div>
        
        <HeroParallax products={projects.map(project => ({
          title: project.title,
          link: project.link,
          thumbnail: project.thumbnail
        }))} />
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-slate-400">Leveraging modern technologies to build exceptional digital experiences.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-indigo-500/50 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-indigo-500/10 text-indigo-400 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-slate-400">What clients say about working with me.</p>
          </div>
          
          <MovingCards items={testimonials.map(testimonial => (
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl max-w-md">
              <p className="text-slate-300 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.author}</p>
                <p className="text-slate-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-slate-400 mb-8">Let's collaborate to bring your vision to life with cutting-edge technology and stunning design.</p>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-indigo-500/25 inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;