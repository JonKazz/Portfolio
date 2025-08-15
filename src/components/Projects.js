import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaMobile, FaLaptopCode, FaGithub, FaPlay, FaTimes } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Algorithmic Pathfinder',
      description: 'A visual sandbox for learning BFS, DFS, and A* pathfinding algorithms. Built in Rust with Macroquad.',
      technologies: ['Rust', 'Macroquad'],
      github: 'https://github.com/JonKazz/AlgorithmicPathfinder',
      demoGif: '/images/rustalgo-demo.gif',
      headerImage: '/images/rustalgo-header.png'
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Description of your second project. Highlight the key features and your role in development.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project2-repo',
      demoGif: '/images/project2-demo.gif',
      headerImage: '/images/project2-header.jpg'
    },
    {
      id: 3,
      title: 'Binary Tree Visualizer',
      description: 'A visual sandbox to create, edit, and traverse binary trees for learning purposes. Made using pygame.',
      technologies: ['JavaScript', 'React', 'Node.js'],
      github: 'https://github.com/JonKazz/BinaryTreeVisualizer',
      demoGif: '/images/btv-demo.gif',
      headerImage: '/images/btv-header.png'
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
              transition={{ duration: 0.3 }}
            >
              <div className="project-image">
                <img 
                  src={project.headerImage} 
                  alt={project.title}
                  className="project-header-img"
                />
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
                  <button 
                    className="project-link demo-btn"
                    onClick={() => setSelectedDemo(project.demoGif)}
                  >
                    <FaPlay /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {selectedDemo && (
          <motion.div
            className="demo-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDemo(null)}
          >
            <motion.div
              className="demo-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="demo-modal-header">
                <h3>Live Demo</h3>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedDemo(null)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="demo-content">
                <img src={selectedDemo} alt="Project Demo" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 