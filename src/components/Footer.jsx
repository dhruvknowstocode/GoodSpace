import React from "react";
import "./Footer.scss";
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="ExpenseBook Logo" />
        </div>
        <div className="footer-contact">
          <div className="footer-info">
            <p><i className="fas fa-map-marker-alt"></i> Address</p>
            <p><i className="fas fa-phone-alt"></i> +91 1234567890</p>
          </div>
          <div className="footer-social">
            <span>Social Media</span>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <ul className="footer-nav">
          <li><a href="#blog">Blogs</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#integrations">Integrations</a></li>
        </ul>
        <p>Copyright © 2024 • ExpenseBook</p>
      </div>
    </footer>
  );
};

export default Footer;
