import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEye } from 'react-icons/fa';
import './About.css';

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a junior Computer Science student at the University of Kansas with 4 years of programming experience and a passion for data engineering. My journey in technology has equipped me with strong problem-solving skills and a comprehensive foundation in software development.
            </p>
            <p>
              My expertise lies in data engineering, where I have hands-on experience in data scraping, pipeline development, data analysis, and storage solutions. I've worked extensively with Python for data manipulation, built robust data pipelines using modern tools, and applied fundamental machine learning concepts to real-world problems. My experience spans from web scraping and data collection to building scalable data storage solutions and creating analytical dashboards.
            </p>
            <p>
              I spent a semester studying abroad in Europe, where I had the incredible opportunity to visit 18 countries while maintaining perfect grades. This experience not only broadened my global perspective but also demonstrated my ability to balance academic excellence with exploration and cultural immersion.
            </p>
          </motion.div>
          
          <motion.div className="education" variants={itemVariants}>
            <div className="education-item">
              <div className="education-header">
                <div className="university-logo">
                  <img src="/images/ku-logo.png" alt="University of Kansas" />
                </div>
                <div className="education-info">
                  <h4>University of Kansas, United States</h4>
                  <p className="degree">Bachelor of Science in Computer Science</p>
                  <p className="details">August 2023 - May 2027 • GPA: 4.0</p>
                </div>
              </div>
              <div className="relevant-classes">
                <h5>Key Classes:</h5>
                <div className="classes-grid">
                  <span className="class-tag">Data Structure and Algorithms</span>
                  <span className="class-tag">Programming Paradigms</span>
                  <span className="class-tag">Operating Systems</span>
                  <span className="class-tag">Computer Systems Architecture</span>
                  <span className="class-tag">Theory of Computing</span>
                </div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-header">
                <div className="university-logo">
                  <img src="/images/tu-graz-logo.png" alt="Graz Technical University" />
                </div>
                <div className="education-info">
                  <h4>Graz Technical University, Austria</h4>
                  <p className="degree">Computer Engineering (Study Abroad)</p>
                  <p className="details">March 2025 - July 2025 • GPA: 4.0</p>
                </div>
              </div>
              <div className="relevant-classes">
                <h5>Key Classes:</h5>
                <div className="classes-grid">
                  <span className="class-tag">Data Management</span>
                  <span className="class-tag">Data Mining and Discovery</span>
                  <span className="class-tag">Intro to Artificial Intelligence</span>
                </div>
              </div>
            </div>
            
            <div className="resume-box">
              <div className="resume-content">
                <h3>My Resume: </h3>
                <div className="resume-actions">
                  <a href="/resume.pdf" className="btn btn-preview" target="_blank" rel="noopener noreferrer">
                    <FaEye />
                    Preview
                  </a>
                  <a href="/resume.pdf" className="btn btn-download" download="">
                    <FaDownload />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 