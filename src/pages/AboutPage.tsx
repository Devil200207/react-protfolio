import React from 'react';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import { StickyScroll } from '../components/ui/StickyScroll';
import { BackgroundGradient } from '../components/ui/BackgroundGradient';
import { Code, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const content = [
    {
      title: "My Journey",
      description: "I started my career as a self-taught developer, driven by curiosity and passion for creating digital experiences. Over the years, I've evolved from building simple websites to architecting complex web applications that solve real-world problems.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Technical Expertise",
      description: "Specializing in modern JavaScript frameworks like React, Next.js, and Vue.js, I build performant, accessible, and visually stunning web applications. My expertise extends to backend technologies including Node.js, Express, and database systems.",
      icon: <Code className="h-6 w-6" />
    },
    {
      title: "Professional Experience",
      description: "With over 5 years of experience working with startups and established companies, I've delivered projects ranging from e-commerce platforms to data visualization dashboards and content management systems.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Design Philosophy",
      description: "I believe in creating digital experiences that are not only visually appealing but also intuitive and accessible. Every project I undertake is approached with a focus on user experience, performance, and maintainability.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "Recognition",
      description: "My work has been recognized for its innovation and quality, earning awards and features in design publications. I continuously strive to push boundaries and explore new technologies and design trends.",
      icon: <Award className="h-6 w-6" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
            <div className="mb-8">
              <TextGenerateEffect
                words="I'm a passionate developer and designer dedicated to creating exceptional digital experiences that combine aesthetic beauty with functional excellence."
                className="text-lg text-slate-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section className="py-10 bg-slate-900">
        <StickyScroll content={content} />
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400">A comprehensive overview of my technical expertise and capabilities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Framer Motion
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Redux & Context API
                </li>
              </ul>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Node.js & Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  PostgreSQL & MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  RESTful APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  GraphQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Authentication & Security
                </li>
              </ul>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-4">Design & Tools</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Figma & Adobe XD
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  CI/CD Pipelines
                </li>
              </ul>
            </BackgroundGradient>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
            <p className="text-slate-400">A timeline of my professional journey and career milestones.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative border-l border-slate-700 pl-8 ml-4">
              <div className="mb-12">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border-4 border-slate-900"></div>
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <span className="text-xs font-medium bg-indigo-500/10 text-indigo-400 py-1 px-2 rounded-full mb-2 inline-block">2022 - Present</span>
                  <h3 className="text-xl font-semibold mb-2">Senior Frontend Developer</h3>
                  <p className="text-slate-400 mb-2">TechInnovate Inc.</p>
                  <p className="text-slate-300">Led the development of a complex SaaS platform, improving performance by 40% and implementing a comprehensive component library used across multiple projects.</p>
                </div>
              </div>
              
              <div className="mb-12">
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border-4 border-slate-900"></div>
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <span className="text-xs font-medium bg-indigo-500/10 text-indigo-400 py-1 px-2 rounded-full mb-2 inline-block">2020 - 2022</span>
                  <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                  <p className="text-slate-400 mb-2">WebSolutions Co.</p>
                  <p className="text-slate-300">Developed and maintained multiple client projects, from e-commerce platforms to content management systems, using React, Node.js, and PostgreSQL.</p>
                </div>
              </div>
              
              <div>
                <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2 border-4 border-slate-900"></div>
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <span className="text-xs font-medium bg-indigo-500/10 text-indigo-400 py-1 px-2 rounded-full mb-2 inline-block">2018 - 2020</span>
                  <h3 className="text-xl font-semibold mb-2">Frontend Developer</h3>
                  <p className="text-slate-400 mb-2">CreativeDigital Agency</p>
                  <p className="text-slate-300">Created responsive and interactive web applications for clients across various industries, focusing on performance optimization and cross-browser compatibility.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-slate-400">Academic background and professional certifications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-2">B.S. Computer Science</h3>
              <p className="text-slate-400 mb-4">University of Technology, 2014-2018</p>
              <p className="text-slate-300">Graduated with honors, specializing in web technologies and software engineering.</p>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-2">AWS Certified Developer</h3>
              <p className="text-slate-400 mb-4">Amazon Web Services, 2020</p>
              <p className="text-slate-300">Expertise in developing, deploying, and debugging cloud-based applications using AWS.</p>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-2">Google UX Design Certificate</h3>
              <p className="text-slate-400 mb-4">Google, 2021</p>
              <p className="text-slate-300">Comprehensive training in user experience design principles and methodologies.</p>
            </BackgroundGradient>
            
            <BackgroundGradient className="rounded-xl p-6 bg-slate-900">
              <h3 className="text-xl font-semibold mb-2">Advanced React Patterns</h3>
              <p className="text-slate-400 mb-4">Frontend Masters, 2022</p>
              <p className="text-slate-300">Mastery of advanced React patterns, performance optimization, and state management.</p>
            </BackgroundGradient>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;