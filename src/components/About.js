import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = {
    'Programming Languages': ['Java', 'Python', 'C++', 'JavaScript'],
    'Web Development': ['HTML/CSS', 'React', 'Node.js', 'SQL'],
    'Tools & Platforms': ['Git', 'VS Code', 'Linux', 'Docker']
  };

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
              I'm a dedicated Computer Science student at the University of Kansas with a passion for technology and innovation. My journey in computer science has equipped me with strong problem-solving skills and a solid foundation in software development.
            </p>
            <p>
              I'm constantly learning and exploring new technologies to stay current with industry trends. When I'm not coding, you can find me working on personal projects, participating in hackathons, or collaborating with fellow developers.
            </p>
          </motion.div>
          
          <motion.div className="skills" variants={itemVariants}>
            <h3>Skills & Technologies</h3>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, skillList]) => (
                <motion.div
                  key={category}
                  className="skill-category"
                  variants={itemVariants}
                >
                  <h4>{category}</h4>
                  <div className="skill-tags">
                    {skillList.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className="skill-tag"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 