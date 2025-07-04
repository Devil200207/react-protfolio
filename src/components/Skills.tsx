import React from 'react';
import { motion } from 'framer-motion';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { TracingBeam } from './ui/tracing-beam';
import { cn } from '../lib/utils';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Sass", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Go-Lang", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Nest.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  ];

  const otherSkills = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    // { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    // { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  ];

  const timelineItems = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries.",
      skills: frontendSkills.map(skill => skill.name).join(", ")
    },
    {
      title: "Backend Development",
      description: "Creating robust server-side applications and APIs to power web applications.",
      skills: backendSkills.map(skill => skill.name).join(", ")
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database schemas for efficient data storage and retrieval.",
      skills: "MongoDB, PostgreSQL, MySQL, Redis"
    },
    {
      title: "DevOps & Deployment",
      description: "Automating deployment processes and managing cloud infrastructure.",
      skills: "Docker, AWS, CI/CD, Netlify, Vercel, Digital Ocean"
    },
  ];

  return (
    <section id="skills" className="section-padding py-24 bg-black/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>

      <div className="mb-20">
        <InfiniteMovingCards
          items={frontendSkills.map(skill => ({
            content: (
              <div className="flex flex-col items-center justify-center gap-3">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            )
          }))}
          direction="left"
          speed="fast"
        />

        <InfiniteMovingCards
          items={backendSkills.map(skill => ({
            content: (
              <div className="flex flex-col items-center justify-center gap-3">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            )
          }))}
          direction="right"
          speed="normal"
        />

        <InfiniteMovingCards
          items={otherSkills.map(skill => ({
            content: (
              <div className="flex flex-col items-center justify-center gap-3">
                <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            )
          }))}
          direction="left"
          speed="fast"
        />
      </div>

      {/* <TracingBeam className="px-4"> */}
        <div className="max-w-2xl mx-auto">
          {timelineItems.map((item, index) => (
            <div key={index} className="mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative pl-8 py-6",
                  index !== timelineItems.length - 1 && "border-l border-gray-800"
                )}
              >
                <div className="absolute left-0 top-6 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
                <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-3">{item.description}</p>
                <div className="bg-gray-900 rounded-lg p-3 border border-gray-800">
                  <p className="text-sm text-gray-300">{item.skills}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      {/* </TracingBeam> */}
    </section>
  );
};

export default Skills;