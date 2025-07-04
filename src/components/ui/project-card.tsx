import React from 'react';
import { BackgroundGradient } from './background-gradient';
import { Button } from './button';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <BackgroundGradient className="rounded-[22px] p-1 h-full">
      <div className="bg-background rounded-[20px] p-4 h-full flex flex-col">
        <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          
          <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto">
            <Button asChild variant="default" size="sm" className="flex-1">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="flex-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </BackgroundGradient>
  );
};