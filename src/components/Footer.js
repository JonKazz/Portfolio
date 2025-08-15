import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: 'jon.kazmaier3@gmail.com', url: 'mailto:jonathan.kazmaier@example.com' },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/JonKazz', url: 'https://github.com/JonKazz' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/jon-kazmaier', url: 'https://www.linkedin.com/in/jon-kazmaier/' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kansas City, Missouri' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section centered">
            <h3>Jonathan Kazmaier</h3>
          </div>
          
          <div className="footer-section centered">
            <div className="contact-info horizontal">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className="contact-icon" />
                  <div className="contact-details">
                    <span className="contact-label">{contact.label}</span>
                    {contact.url ? (
                      <a href={contact.url} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {contact.value}
                      </a>
                    ) : (
                      <span className="contact-value">{contact.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2024 Jonathan Kazmaier. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 