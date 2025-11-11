import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaDatabase, FaJava, FaJs, FaHtml5, FaCss3Alt, FaSearch, 
  FaLayerGroup, FaBrain, FaTools, FaGithub, FaPython, FaRust, FaCloud, FaAws
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = {
    'Languages': [
      { name: 'Python', icon: FaPython, level: 'proficient' },
      { name: 'SQL', icon: FaDatabase, level: 'proficient' },
      { name: 'CSS', icon: FaCss3Alt, level: 'proficient' },
      { name: 'HTML', icon: FaHtml5, level: 'proficient' },
      { name: 'JavaScript', icon: FaJs, level: 'proficient' },
      { name: 'Java', icon: FaJava, level: 'proficient' },
      { name: 'Apex', icon: FaJava, level: 'intermediate' },
      { name: 'SOQL', icon: FaDatabase, level: 'intermediate' },
      { name: 'Rust', icon: FaRust, level: 'intermediate' },
      { name: 'C++', icon: FaCode, level: 'familiar' },
      { name: 'C', icon: FaCode, level: 'familiar' }
    ],
    'Libraries': [
      { name: 'Beautiful Soup', icon: FaPython, level: 'proficient' },
      { name: 'SQLAlchemy', icon: FaDatabase, level: 'proficient' },
      { name: 'Matplotlib', icon: FaSearch, level: 'proficient' },
      { name: 'Pandas', icon: FaSearch, level: 'proficient' },
      { name: 'Spring Boot', icon: FaJava, level: 'intermediate' },
      { name: 'NumPy', icon: FaPython, level: 'intermediate' },
      { name: 'Scikit Learn', icon: FaBrain, level: 'intermediate' },
      { name: 'ReactJS', icon: FaJs, level: 'intermediate' }
    ],
    'Frameworks': [
      { name: 'Git', icon: FaGithub, level: 'proficient' },
      { name: 'VSCode', icon: FaCode, level: 'proficient' },
      { name: 'Cursor', icon: FaCode, level: 'proficient' },
      { name: 'PostgreSQL', icon: FaDatabase, level: 'proficient' },
      { name: 'Salesforce', icon: FaCloud, level: 'intermediate' },
      { name: 'Supabase', icon: FaCloud, level: 'intermediate' },
      { name: 'Vercel', icon: FaCloud, level: 'intermediate' },
      { name: 'Render', icon: FaCloud, level: 'intermediate' },
      { name: 'AWS S3', icon: FaAws, level: 'familiar' }
    ]
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
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div 
          className="section-heading-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>My Skills</h2>
          <div className="underline"></div>
        </motion.div>
        
        <motion.div 
          className="skills-legend"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="legend-item">
            <div className="legend-dot proficient"></div>
            <span>Proficient</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot intermediate"></div>
            <span>Intermediate</span>
          </div>
          <div className="legend-item">
            <div className="legend-dot familiar"></div>
            <span>Familiar</span>
          </div>
        </motion.div>
        
        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <motion.div
              key={category}
              className="skills-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category === 'Languages' && <FaCode />}
                  {category === 'Libraries' && <FaLayerGroup />}
                  {category === 'Frameworks' && <FaTools />}
                </div>
                <h3>{category}</h3>
              </div>
              <div className="skills-tag-cloud">
                {skillList.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-tag ${skill.name.includes('AWS') || skill.name.includes('EC2') || skill.name.includes('SQS') || skill.name.includes('SES') || skill.name.includes('Lambda') || skill.name.includes('RDS') || skill.name.includes('Elastic') || skill.name.includes('IAM') || skill.name.includes('CloudWatch') ? 'aws-service' : ''}`}
                    data-level={skill.level}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <skill.icon />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 