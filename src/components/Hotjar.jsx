import React from 'react';
import './Hotjar.scss'; 
import hotjarLogo from '../assets/hotjar.png'; 

const EnterpriseSection = () => {
    const logos = Array(6).fill(hotjarLogo); // Create an array of logos
  
    return (
      <div className="enterprise-section">
        <p className="enterprise-text">USED BY OVER 50 ENTERPRISES</p>
        <div className="logo-container">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Enterprise Logo" className="enterprise-logo" />
          ))}
        </div>
      </div>
    );
  };
  

export default EnterpriseSection;
