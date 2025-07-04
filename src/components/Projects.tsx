import React from 'react';
import { motion } from 'framer-motion';
import { HoverEffect } from './ui/card-hover-effect';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { cn } from '../lib/utils';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "InboxDoctor.ai",
      description: "A comprehensive email deliverability platform that provides human-powered email warmups, email health tests, and inbox placement analysis to ensure emails land in primary inboxes instead of spam folders.",
      tags: ["Redis", "Node.js", "Nest.js", "Go", "React", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
      link: "https://inboxdoctor.ai/",
      // features: [
      //   "200+ email health tests within minutes",
      //   "95%+ inbox success rates",
      //   "Real-time analytics dashboards",
      //   "Outlook & Gmail integration for email warmup"
      // ]
    },
    {
      title: "Jewel Boutique Hub",
      description: "A real-time shopping application specializing in gold, silver, and diamond products with comprehensive e-commerce features and optimized user experience.",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap", "CSS"],
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop",
      link: "https://mart-view.onrender.com/",
      // features: [
      //   "86% SEO optimization",
      //   "JWT authentication",
      //   "Lazy Loading implementation",
      //   "HashRouter integration"
      // ]
    }
  ];

  // Since we only have 2 projects, we'll feature both and add some additional showcased work
  const featuredProjects = projects;
  const additionalShowcase = [
    {
      title: "Email Deliverability Solutions",
      description: "Advanced email automation systems with enterprise-grade deliverability monitoring and reputation management.",
      link: "#"
    },
    {
      title: "E-commerce Platform Architecture",
      description: "Scalable real-time shopping applications with comprehensive product management and user authentication systems.",
      link: "#"
    },
    {
      title: "Full-Stack Development",
      description: "End-to-end application development using modern tech stacks including React, Node.js, and database optimization.",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Explore my recent work and creative solutions</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full group/link"
            >
              <CardContainer className="w-full">
                <CardBody className="bg-gray-900 relative group/card rounded-xl border border-gray-800 p-0 h-[500px] w-full cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardItem
                    translateZ="100"
                    className="w-full h-full"
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col">
                          <h3 className="text-xl font-bold mb-2 group-hover/link:text-blue-400 transition-colors duration-300">{project.title}</h3>
                          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                          
                          {/* {project.features && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold mb-2 text-blue-400">Key Features:</h4>
                              <ul className="text-xs text-gray-300 space-y-1">
                                {project.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center">
                                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )} */}
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="text-xs px-2 py-1 bg-gray-800/80 rounded-full border border-gray-700 group-hover/link:border-blue-400/50 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <CardItem
                            translateZ={20}
                            className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium inline-block w-fit hover:bg-blue-600 transition-colors group-hover/link:bg-blue-600 group-hover/link:scale-105"
                          >
                            {project.title === "InboxDoctor.ai" ? "View Live Platform" : "View Live Demo"}
                          </CardItem>
                        </div>
                      </div>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold gradient-heading mb-4">Additional Expertise</h3>
      </motion.div>

      <HoverEffect items={additionalShowcase} />
    </section>
  );
};

export default Projects;