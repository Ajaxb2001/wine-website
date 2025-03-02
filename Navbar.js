import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/Brown Abstract Beige Wine Logo.png'; // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Prafulla Winery Logo" className="logo-image" />
        <span>Prafulla Winery</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/wine-info">Beetroot Wine</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;