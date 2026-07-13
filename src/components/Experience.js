import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Power Marketing Analyst Intern',
      company: 'Energy Transfer',
      location: 'Overland Park, Kansas',
      period: 'May 2026 - Present',
      type: 'Internship',
      icon: FaBriefcase,
      description: 'Analytics and forecasting internship supporting proprietary power trading across wholesale electricity markets.',
      bulletPoints: [
        'Developed custom analytics platforms, interactive dashboards, and automated reporting tools supporting proprietary trading across the ERCOT, PJM, MISO, and SPP wholesale electricity markets',
        'Built short and long-term forecasting models for nodal prices, forward power prices, load, and generation mix using weather and historical market data to support speculative trading decisions'
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
