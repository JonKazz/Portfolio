import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaPlay, FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [showTooltip, setShowTooltip] = useState(null);

  const premierProjects = [
    {
      id: 0,
      title: 'Real-Time Weather Forecasting and Trading Engine',
      description: 'A real-time weather prediction and automated trading system focused on temperature futures on Kalshi, a federally regulated event futures exchange. The system ingestes live weather data from multiple sources, applies time-series and probabilistic forecasting models to predict daily high temperatures, and executes trades based on deviations between forecasted and market-implied outcomes. The project combines data engineering, quantitative modeling, and algorithmic trading to explore how predictive analytics can create an edge in weather-driven financial markets.',
      technologies: ['Python', 'PostgreSQL', 'SQL', 'Kalshi API'],
      github: '#',
      website: 'https://kalshi.com/?category=climate&tag=daily-temperature',
      headerImage: '/images/kalshi-header.png',
      isPremier: true
    },
    {
      id: 1,
      title: 'NFL-Stathead.com',
      description: 'A full-stack web application for exploring NFL data, providing detailed season, game, team, and player statistics across multiple years. The project integrates a React frontend for interactive data visualization, a Spring Boot backend exposing RESTful APIs, and a PostgreSQL database (hosted on Supabase) for persistent storage. Deployed with Docker containers on Render and Vercel, the system enables users to browse all types of metrics through a seamless and scalable interface.',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'JavaScript', 'Java'],
      github: 'https://github.com/JonKazz/NFL-Fullstack-Database',
      website: 'https://nfl-stathead.com',
      headerImage: '/images/nflstathead-header.png',
      isPremier: true
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'EU Parliament Debate Clustering',
      description: 'Topic clustering on European Union parliamentary debates from 2022 using machine learning techniques. The goal is to identify distinct thematic clusters within parliamentary discussions to understand the main topics of debate.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      github: 'https://github.com/JonKazz/EU-Parlimentary-Debate-Clustering',
      headerImage: '/images/debateclustering-header.png'
    },
    {
      id: 2,
      title: 'NFL Data Scraper',
      description: 'Scrapes raw NFL data from ProFootballReference.com. Transformes, organizes, and stores it in a PostgreSQL database. Can retrieve yearly team statistics, game statistics, player statstics, player profiles, and more',
      technologies: ['Python', 'Pandas', 'BeautifulSoup', 'SQLAlchemy', 'PostgreSQL'],
      github: 'https://github.com/JonKazz/NFL-DataCollector',
      headerImage: '/images/nflscraper-header.png'
    },
    {
      id: 3,
      title: 'Algorithmic Pathfinder',
      description: 'A visual sandbox for learning BFS, DFS, and A* pathfinding algorithms. Built in Rust with Macroquad.',
      technologies: ['Rust', 'Macroquad'],
      github: 'https://github.com/JonKazz/AlgorithmicPathfinder',
      demoGif: '/images/rustalgo-demo.gif',
      headerImage: '/images/rustalgo-header.png'
    },
    {
      id: 4,
      title: 'BLOBS',
      description: 'A game where you control a blob that can move around and eat other blobs. Eat small blobs but avoid the large ones. Made using pygame.',
      technologies: ['Python', 'Pygame'],
      github: 'https://github.com/JonKazz/BLOBS',
      demoGif: '/images/blobs-demo.mov',
      headerImage: '/images/blobs-header.png'
    },
    {
      id: 5,
      title: 'Binary Tree Visualizer',
      description: 'A visual sandbox to create, edit, and traverse binary trees for learning purposes. Made using pygame.',
      technologies: ['Python', 'Pygame'],
      github: 'https://github.com/JonKazz/BinaryTreeVisualizer',
      demoGif: '/images/btv-demo.gif',
      headerImage: '/images/btv-header.png'
    },
    {
      id: 6,
      title: 'Chess Endgame Model',
      description: 'Machine learning model that predicts the minimum number of moves to win in King+Rook vs King chess endgames. Achieves 98% accuracy using LightGBM.',
      technologies: ['Python', 'Numpy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'LightGBM'],
      github: 'https://github.com/JonKazz/ChessEndgameModel',
      headerImage: '/images/chessendgame-header.png'
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
        <h2>My Projects</h2>
        
        {/* Premier Projects */}
        {premierProjects.map((premierProject) => (
          <motion.div
            key={premierProject.id}
            className="premier-project"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <div className="project-image">
              <img 
                src={premierProject.headerImage} 
                alt={premierProject.title}
                className="project-header-img"
              />
            </div>
            <div className="project-content">
              <h3 className="project-title">{premierProject.title}</h3>
              <p className="project-description">{premierProject.description}</p>
              <div className="project-tech">
                {premierProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {premierProject.github === '#' ? (
                  <div 
                    className="tooltip-wrapper"
                    onMouseEnter={() => setShowTooltip(premierProject.id)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <span className="project-link project-link-disabled">
                      <FaGithub /> Code
                    </span>
                    <AnimatePresence>
                      {showTooltip === premierProject.id && (
                        <motion.div
                          className="custom-tooltip"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          Due to the nature of this project, showcasing the trading system could allow others to exploit it
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a href={premierProject.github} className="project-link">
                    <FaGithub /> Code
                  </a>
                )}
                {premierProject.website && premierProject.website !== '#' && (
                  <a href={premierProject.website} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        
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
                  {project.demoGif && (
                    <button 
                      className="project-link demo-btn"
                      onClick={() => setSelectedDemo(project.demoGif)}
                    >
                      <FaPlay /> Live Demo
                    </button>
                  )}
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
                {selectedDemo.endsWith('.mov') || selectedDemo.endsWith('.mp4') ? (
                  <video 
                    src={selectedDemo} 
                    controls 
                    autoPlay 
                    muted 
                    loop
                    style={{ maxWidth: '100%', height: 'auto' }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={selectedDemo} alt="Project Demo" />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 