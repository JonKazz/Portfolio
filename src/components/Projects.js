import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaLaptopCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Name 1',
      description: 'A brief description of your first project. Explain what it does, what technologies you used, and what you learned.',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
      github: '#',
      demo: '#',
      icon: FaCode
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Description of your second project. Highlight the key features and your role in development.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      github: '#',
      demo: '#',
      icon: FaMobile
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'Description of your third project. Focus on the problem it solves and your technical achievements.',
      technologies: ['JavaScript', 'React', 'Node.js'],
      github: '#',
      demo: '#',
      icon: FaLaptopCode
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <div className="project-placeholder">
                  <project.icon />
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} className="project-link">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 