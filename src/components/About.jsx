import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { number: '95%', label: 'Satisfaction' },
    { number: '200+', label: 'Projects' },
    { number: '50+', label: 'Clients' },
    { number: '10+', label: 'Awards' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              We are a team of passionate designers and developers dedicated to creating
              stunning web experiences. Our expertise in animation and interactive design
              helps businesses stand out in the digital landscape.
            </p>
            <p>
              With years of experience and a commitment to excellence, we deliver
              high-quality solutions that engage users and drive results. Our approach
              combines creativity with technical precision to create memorable digital
              experiences.
            </p>
            <button className="about-btn">Learn More</button>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div
              className="stat-box"
              key={index}
            >
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
