import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a href="#home" onClick={() => scrollToSection('home')}>
            JK
          </a>
        </motion.div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a
              href="#home"
              className="nav-link"
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className="nav-link"
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className="nav-link"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </a>
          </li>

        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 