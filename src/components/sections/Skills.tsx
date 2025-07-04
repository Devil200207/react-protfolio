import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/section-heading';
import { SkillBar } from '../ui/skill-bar';
import { LampContainer } from '../ui/lamp';
import { cn } from '../../lib/utils';
import { TracingBeam } from '../ui/tracing-beam';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 85 },
    { name: "Redux / Zustand", level: 88 },
  ];

  const backendSkills = [
    { name: "Node.js / Express", level: 90 },
    { name: "PostgreSQL / MongoDB", level: 85 },
    { name: "GraphQL", level: 80 },
    { name: "Firebase", level: 88 },
    { name: "AWS / Vercel", level: 82 },
  ];

  const tools = [
    "VS Code", "Git", "Docker", "Figma", "Jest", "Cypress", 
    "Webpack", "Storybook", "Postman", "GitHub Actions"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading>My Skills</SectionHeading>
        
        <LampContainer>
          <motion.h2
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Technical Expertise
          </motion.h2>
        </LampContainer>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>
        
        <TracingBeam className="mt-32">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium",
                    "bg-secondary/10 text-secondary-foreground",
                    "border border-secondary/20",
                    "hover:bg-secondary/20 transition-colors"
                  )}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </div>
        </TracingBeam>
      </div>
    </section>
  );
};

export default Skills;