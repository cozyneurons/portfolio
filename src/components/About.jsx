import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} style={{ padding: '8rem 0', overflow: 'hidden' }}>
      <div className="container">
        <motion.div style={{ y: yText, opacity: opacityText }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: 0 }}>About</h2>

            {/* Speech Bubble Doodle */}
            <motion.div 
              initial={{ opacity: 0, scale: 0, rotate: 10 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              transition={{ type: 'spring', duration: 1, delay: 0.5 }}
              style={{ position: 'absolute', right: '-55px', top: '-15px', color: 'var(--accent-color)' }}
            >
              <svg width="45" height="45" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 20 45 C 20 20, 80 20, 80 45 C 80 70, 45 70, 35 85 L 35 65 C 20 60, 20 45, 20 45 Z" />
                <circle cx="40" cy="45" r="4" fill="currentColor" stroke="none" />
                <circle cx="50" cy="45" r="4" fill="currentColor" stroke="none" />
                <circle cx="60" cy="45" r="4" fill="currentColor" stroke="none" />
              </svg>
            </motion.div>

            {/* Curly Arrow Doodle */}
            <motion.div 
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.6, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ position: 'absolute', left: '-50px', top: '15px', color: 'var(--accent-color)' }}
            >
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  d="M 10 80 Q 20 10, 60 40 T 90 50" 
                />
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.3, delay: 1.6 }}
                  d="M 75 40 L 90 50 L 80 65" 
                />
              </svg>
            </motion.div>
          </div>
          <p>
            I am a developer who loves building things that live on the internet.
            My focus is on creating simple, functional, and minimalist digital experiences.
          </p>
          <p>
            Currently, I am pursuing my B.Tech in Electronics and Instrumentation Engineering at the <span className="keyword-highlight">National Institute of Technology (NIT), Agartala</span>. 
          </p>
          <p>
            I also serve as a Core Member of the Entrepreneurship Club at NIT Agartala, where I lead frontend architectural improvements and drive UI/UX enhancements to boost user engagement and event registrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
