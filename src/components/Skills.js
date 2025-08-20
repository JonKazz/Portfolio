import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaDatabase, FaJava, FaJs, FaHtml5, FaCss3Alt, FaSearch, 
  FaLayerGroup, FaBrain, FaChartLine, FaCube, FaVial, FaCheckCircle, 
  FaNetworkWired, FaCubes, FaChartBar, FaProjectDiagram, FaTree, 
  FaCalculator, FaRandom, FaFlask, FaVectorSquare, FaChartArea, 
  FaCogs, FaClock, FaTools, FaDocker, FaGithub, FaCodeBranch, 
  FaJenkins, FaAws, FaCloud, FaExchangeAlt, FaEnvelope, FaUserLock, 
  FaPaperPlane, FaBook, FaPython, FaJira
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skills = {
    'Languages & Core Tech': [
      { name: 'Python', icon: FaPython, level: 'proficient' },
      { name: 'SQL', icon: FaDatabase, level: 'proficient' },
      { name: 'SOQL', icon: FaDatabase, level: 'proficient' },
      { name: 'Java', icon: FaJava, level: 'intermediate' },
      { name: 'JavaScript', icon: FaJs, level: 'intermediate' },
      { name: 'Apex', icon: FaCode, level: 'intermediate' },
      { name: 'CSS', icon: FaCss3Alt, level: 'proficient' },
      { name: 'HTML', icon: FaHtml5, level: 'proficient' },
      { name: 'C', icon: FaCode, level: 'familiar' },
      { name: 'C++', icon: FaCode, level: 'familiar' },
      { name: 'Rust', icon: FaCode, level: 'intermediate' }
    ],
    'Frameworks & Libraries': [
      { name: 'Spring Boot', icon: FaJava, level: 'intermediate' },
      { name: 'Pandas', icon: FaPython, level: 'proficient' },
      { name: 'Beautiful Soup', icon: FaPython, level: 'proficient' },
      { name: 'Selenium', icon: FaSearch, level: 'familiar' },
      { name: 'SQLAlchemy', icon: FaDatabase, level: 'intermediate' },
      { name: 'NumPy', icon: FaPython, level: 'intermediate' },
      { name: 'Scikit Learn', icon: FaBrain, level: 'intermediate' },
      { name: 'ReactJS', icon: FaJs, level: 'intermediate' }
    ],
    'DevOps & Tools': [
      { name: 'Git', icon: FaGithub, level: 'proficient' },
      { name: 'GitHub', icon: FaGithub, level: 'proficient' },
      { name: 'Cursor', icon: FaCode, level: 'proficient' },
      { name: 'Salesforce', icon: FaCloud, level: 'familiar' },
      { name: 'PostgreSQL', icon: FaDatabase, level: 'intermediate' },
      { name: 'AWS S3', icon: FaAws, level: 'familiar' },
      { name: 'AWS Glue', icon: FaAws, level: 'familiar' },
      { name: 'AWS Athena', icon: FaAws, level: 'familiar' },
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
        <div className="section-heading">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        
        <div className="skills-legend">
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
        </div>
        
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
                  {category === 'Languages & Core Tech' && <FaCode />}
                  {category === 'Frameworks & Libraries' && <FaLayerGroup />}
                  {category === 'Data Science & Analytics' && <FaChartBar />}
                  {category === 'DevOps & Tools' && <FaTools />}
                </div>
                <h3>{category}</h3>
              </div>
              <div className="skills-tag-cloud">
                {skillList.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className={`skill-tag ${skill.name.includes('AWS') || skill.name.includes('EC2') || skill.name.includes('SQS') || skill.name.includes('SES') || skill.name.includes('Lambda') || skill.name.includes('RDS') || skill.name.includes('Elastic') || skill.name.includes('IAM') || skill.name.includes('CloudWatch') ? 'aws-service' : ''}`}
                    data-level={skill.level}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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