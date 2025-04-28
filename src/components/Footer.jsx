import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Yash<span>X</span></h2>
            <p>Creating stunning web animations</p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web Design</a></li>
                <li><a href="#">Animation</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </div>
            <div className="link-column">
              <h3>Contact</h3>
              <ul>
                <li>info@yashx.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Animation St, Digital City</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook-f">FB</i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter">TW</i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram">IG</i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-linkedin-in">LI</i>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; 2023 yashX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
