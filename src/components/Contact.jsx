import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <Fade direction="bottom" duration={1000} delay={300} triggerOnce>
          <h2 className="section-title">Contact</h2>
        </Fade>
        <Fade direction="bottom" duration={1000} delay={800} triggerOnce>
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">[Put your call to action here]</p>
            <a
              rel="noreferrer"
              target="_blank"
              className="cta-btn cta-btn--resume"
              href="mailto:shubhamamn0709@email.com"
            >
              Call to Action
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
