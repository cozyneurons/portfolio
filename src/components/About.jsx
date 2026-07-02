import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <Fade direction="bottom" duration={1000} delay={300} triggerOnce>
          <h2 className="section-title">About me</h2>
        </Fade>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <Fade direction="bottom" duration={1000} delay={600} triggerOnce>
              <div className="about-wrapper__image">
                <img
                  alt="Profile"
                  className="img-fluid rounded shadow-lg"
                  height="auto"
                  width="300px"
                  src="/assets/profile.jpg"
                />
              </div>
            </Fade>
          </div>
          <div className="col-md-6 col-sm-12">
            <Fade direction="left" duration={1000} delay={1000} triggerOnce>
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  This is where you can describe about yourself. The more you
                  describe about yourself, the more chances you have!
                </p>
                <p className="about-wrapper__info-text">
                  Extra Information about you! like hobbies and your goals.
                </p>
                <span className="d-flex mt-3">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--resume"
                    href="/assets/Resume_1.pdf"
                  >
                    View Resume
                  </a>
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
