import React from 'react';
import { motion } from 'framer-motion';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    },
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
  const name = "Ankita Kumari".split("");

  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container">
        <motion.h1
          className="hero-title"
          variants={sentence}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', overflow: 'hidden' }}
        >
          {name.map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
                {char}
              </motion.span>
            )
          })}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Software Developer. minimalist & builder.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
