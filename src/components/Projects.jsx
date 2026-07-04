import React from 'react';
import { motion } from 'framer-motion';
import TiltWrapper from './TiltWrapper';

const FeaturedProject = ({ title, description, techList, alignRight, imgSrc, imgAlt }) => {
  return (
    <motion.div 
      className={`featured-project ${alignRight ? 'align-right' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <TiltWrapper className="project-image-container" options={{ max: 10, scale: 1.05 }}>
        <a href="#!" className="project-image-link">
          <div className="image-overlay"></div>
          <img src={imgSrc} alt={imgAlt} className="project-image" />
        </a>
      </TiltWrapper>
      <div className="project-content-container">
        <p className="project-overline font-mono">Featured Project</p>
        <h3 className="project-title">{title}</h3>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <ul className="project-tech-list font-mono">
          {techList.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href="#!" aria-label="GitHub Link">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="#!" aria-label="External Link">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: 0 }}>Some Things I've Built</h2>
          
          {/* Sparkle Doodle */}
          <motion.div 
            initial={{ opacity: 0, rotate: -30, scale: 0 }}
            whileInView={{ opacity: 0.6, rotate: 0, scale: 1 }}
            transition={{ type: 'spring', duration: 1, delay: 0.5 }}
            style={{ position: 'absolute', right: '-45px', top: '-25px', color: 'var(--accent-color)' }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 L55 35 L80 40 L55 45 L50 70 L45 45 L20 40 L45 35 Z" />
              <path d="M80 10 L83 18 L91 21 L83 24 L80 32 L77 24 L69 21 L77 18 Z" />
            </svg>
          </motion.div>

          {/* Squiggly Underline Doodle */}
          <motion.div 
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.6, pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{ position: 'absolute', left: '10px', bottom: '-20px', color: 'var(--accent-color)', width: '100%' }}
          >
            <svg width="100%" height="20" viewBox="0 0 200 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                d="M5 10 Q 25 20, 45 10 T 85 10 T 125 10 T 165 10 T 195 10" 
              />
            </svg>
          </motion.div>
        </div>
        <div className="featured-projects-list">
          <FeaturedProject 
            title="StrongApe – Fitness Accountability Buddy" 
            description="A full-stack gamified fitness platform with real-time social features, XP tracking, and custom UI animations to keep users engaged and motivated." 
            techList={["React", "FastAPI", "WebSockets", "PostgreSQL", "TailwindCSS"]}
            imgSrc="/strongape_preview.png"
            imgAlt="StrongApe Gamified Fitness Dashboard"
            alignRight={false}
          />
          <FeaturedProject 
            title="LabelX – Food Label Analyzer AI Agent" 
            description="A full-stack AI food safety analyzer using a multi-agent LangGraph workflow. Includes vector search infrastructure, OCR, and a personalized health scoring engine." 
            techList={["React", "FastAPI", "LangGraph", "Qdrant", "Gemini Vision"]}
            imgSrc="/labelx_preview.png"
            imgAlt="LabelX AI Food Analyzer App"
            alignRight={true}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
