import React, { useState } from "react";
import logo from '../assets/logo.png';
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="ExpenseBook Logo" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#blog">Blogs</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Prices</a></li>
            <li><a href="#integrations">Integrations</a></li>
          </ul>
        </nav>
        
        <button className="btn-start-trial">Start Trial</button>
      </div>
    </header>
  );
};

export default Header;
