import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FloatingNav } from './components/ui/floating-navbar';
import { Meteors } from './components/ui/meteors';
import { SparklesCore } from './components/ui/sparkles';
import { cn } from './lib/utils';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = ['home', 'projects', 'about', 'skills', 'testimonials', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      <div className="absolute top-0 right-0 z-0">
        <Meteors number={20} />
      </div>
      
      <div className={cn(
        "fixed top-6 left-0 right-0 z-50 mx-auto transition-opacity duration-500",
        scrollY > 100 ? "opacity-100" : "opacity-0"
      )}>
        <FloatingNav navItems={navItems} activeSection={activeSection} />
      </div>
      
      <div className={cn(
        "transition-opacity duration-500",
        scrollY > 100 ? "opacity-0" : "opacity-100"
      )}>
        <Navbar activeSection={activeSection} />
      </div>
      
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default App;