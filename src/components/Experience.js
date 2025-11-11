import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaGlobe, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Study Abroad Program',
      company: 'TUGraz',
      location: 'Graz, Austria',
      period: 'March 2025 - July 2025',
      type: 'Academic',
      compensation: 'Educational',
      icon: FaGlobe,
      description: 'Comprehensive study abroad experience across multiple European countries.',
      bulletPoints: [
        'Worked an international program coordinator position in leadership, organizing and leading groups of 10-35 Erasmus students on international trips throughout Europe',
        'Visited 18 countries across Europe, experiencing diverse cultures, educational systems, and international perspectives',
        'Met people from all types of backgrounds and perspectives, broadening my worldview and learning valuable lessons about global collaboration and cultural understanding'
      ],
      showTechStack: false
    },
    {
      id: 2,
      title: 'Mathematics Expert',
      company: 'Outlier.ai',
      location: 'Remote',
      period: 'June 2024 - March 2025',
      type: 'Contract',
      compensation: '$50/hour',
      icon: FaGraduationCap,
      description: 'Mathematics expert role providing specialized knowledge and support.',
      bulletPoints: [
        'Designed and authored advanced algebra, calculus, and statistics questions to train and evaluate advanced LLMs, guiding them through multi-step reasoning and reinforcement learning',
        'Reviewed and mentored other colleagues in mathematical content creation and quality assurance',
        'Learned how to effectively use AI exactly how it was intended to be used to maximize its potential'
      ],
      techStack: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib', 'LaTeX', 'Jupyter'],
      showTechStack: true
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'UGA Finance',
      location: 'Parkville, MO',
      period: 'January 2023 - August 2023',
      type: 'Internship',
      compensation: 'Unpaid',
      icon: FaBriefcase,
      description: 'Software engineering internship focusing on financial systems and applications.',
      bulletPoints: [
        'Designed Apex classes, triggers, and batch jobs for data preparation and analytics, while optimizing SOQL queries and refactoring test classes to improve system performance and deployment speed',
        'Collaborated with senior developers to build custom Salesforce UI features using Lightning Web Components, supporting real-time KPI and performance dashboards for internal teams',
        'Learned agile software development methodologies and best coding practices from senior engineers, gaining hands-on experience with professional development workflows'
      ],
      techStack: ['Python', 'SQL', 'Java', 'JavaScript', 'React', 'PostgreSQL', 'AWS'],
      showTechStack: true
   },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-heading">
          <h2>My Experience</h2>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <experience.icon />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="company-info">
                    <div className="job-title">
                      {experience.title}
                      <span className="company-name">• {experience.company}</span>
                    </div>
                    <div className="company-location">
                      <FaMapMarkerAlt /> {experience.location}
                    </div>
                    <div className="job-duration">
                      <FaCalendarAlt /> {experience.period}
                    </div>
                  </div>
                </div>
                <div className="job-description">
                  <ul>
                    {experience.bulletPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
