import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEye, FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jonathan_Kazmaier_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        {/* Left Side - Initials and Social Icons */}
        <div className="navbar-left">
          <motion.div
            className="navbar-initials"
            whileTap={{ scale: 0.98 }}
          >
            <a href="#home" onClick={() => scrollToSection('home')}>
              JK
            </a>
          </motion.div>
          
          <div className="social-icons">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon github"
              whileTap={{ scale: 0.98 }}
            >
              <FaGithub />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
              whileTap={{ scale: 0.98 }}
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </div>

        {/* Right Side - Navigation and Resume */}
        <div className="navbar-right">
          <div className="nav-buttons">
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('about')}
              whileTap={{ scale: 0.98 }}
            >
              About Me
            </motion.button>
            
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('experience')}
              whileTap={{ scale: 0.98 }}
            >
              Experience
            </motion.button>
            
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('skills')}
              whileTap={{ scale: 0.98 }}
            >
              Skills
            </motion.button>
            
            <motion.button
              className="nav-btn"
              onClick={() => scrollToSection('projects')}
              whileTap={{ scale: 0.98 }}
            >
              Projects
            </motion.button>
          </div>
          
          <div className="resume-section">
            <span className="resume-label">Resume</span>
            <motion.button
              className="resume-btn view"
              onClick={openResume}
              whileTap={{ scale: 0.98 }}
            >
              <FaEye />
              View
            </motion.button>
            
            <motion.button
              className="resume-btn download"
              onClick={downloadResume}
              whileTap={{ scale: 0.98 }}
            >
              <FaDownload />
              Download
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 