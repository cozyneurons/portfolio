import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.05 },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 15, stiffness: 400 },
  },
};

const Hero = () => {
  const name = "Ankita Kumari.".split("");

  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container hero-container">
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <motion.p 
            className="hero-intro font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginBottom: '1rem' }}
          >
            Hi, my name is
          </motion.p>
          {/* Star Doodle */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            animate={{ opacity: 0.8, scale: 1, rotate: 10 }}
            transition={{ type: 'spring', duration: 1, delay: 0.8 }}
            style={{ position: 'absolute', left: '-30px', top: '-10px', color: '#ffb703' }}
          >
            <svg width="25" height="25" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 L58 38 L90 50 L58 62 L50 90 L42 62 L10 50 L42 38 Z" />
            </svg>
          </motion.div>
        </div>
        
        <motion.h1
          className="hero-title"
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', overflow: 'hidden', flexWrap: 'wrap' }}
        >
          {name.map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div style={{ position: 'relative', display: 'inline-block' }}>
          <motion.h2
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ marginBottom: '1.5rem' }}
          >
            I turn ideas into reality.
          </motion.h2>
          
          {/* Swoosh Underline Doodle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ position: 'absolute', left: 0, bottom: '0.2rem', width: '100%', color: 'var(--accent-color)' }}
          >
            <svg width="100%" height="15" viewBox="0 0 200 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" preserveAspectRatio="none">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                d="M 5 10 Q 50 15, 100 5 T 195 10" 
              />
            </svg>
          </motion.div>
        </div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          I'm a <span className="keyword-highlight">Full-Stack Developer</span> specializing in creating exceptional digital experiences. 
          With expertise in building scalable web applications and integrating <span className="keyword-highlight">AI-agent workflows</span>, 
          I enjoy solving challenging problems that drive impactful innovation.
        </motion.p>

        <motion.div
          className="hero-cta-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Magnetic>
            <a href="#!" className="hero-cta-button font-mono">
              Check out my resume!
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
