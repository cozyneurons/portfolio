import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <Fade direction="left" duration={1000} delay={500} triggerOnce>
          <h1 className="hero-title">
            Hi, my name is <span className="text-color-main">Ankita Kumari</span>
            <br />
            I'm the Unknown Developer.
          </h1>
        </Fade>
        <Fade direction="left" duration={1000} delay={1000} triggerOnce>
          <p className="hero-cta">
            <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
              Know more
            </a>
          </p>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
