import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Yash<span>X</span></h1>
      </div>
      <div className="nav-links">
        <ul>
          {['Home', 'Features', 'About', 'Contact'].map((item, index) => (
            <li key={index}>
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
