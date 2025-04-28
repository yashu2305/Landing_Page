import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Stunning Animations <br />for Your Website</h1>
          <p>
            Create beautiful, interactive experiences with smooth animations
            that captivate your audience and elevate your brand.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-element one"></div>
          <div className="floating-element two"></div>
          <div className="floating-element three"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
