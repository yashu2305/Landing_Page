import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Optimized animations that don\'t slow down your website.'
    },
    {
      icon: '✨',
      title: 'Beautiful Effects',
      description: 'Eye-catching animations that enhance user experience.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Animations that look great on all devices and screen sizes.'
    },
    {
      icon: '🔧',
      title: 'Easy Integration',
      description: 'Simple to implement with any existing website or application.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-bg"></div>
      <div className="features-container">
        <h2>Amazing Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              className="feature-card"
              key={index}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
