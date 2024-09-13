import React from "react";
import logo from '../assets/logo.png';
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
        <img src={logo} alt="ExpenseBook Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#integrations">Integrations</a></li>
          </ul>
        </nav>
        <button className="btn-start-trial">Start Trial</button>
      </div>
    </header>
  );
};

export default Header;
