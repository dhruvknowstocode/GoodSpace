import React from 'react';
import './Features.scss';
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 
import icon3 from '../assets/icon3.png'; 
import icon4 from '../assets/icon4.png'; 
import icon5 from '../assets/icon5.png'; 
import icon6 from '../assets/icon6.png'; 
import icon7 from '../assets/icon7.png'; 
import icon8 from '../assets/icon8.png'; 
import icon9 from '../assets/icon9.png';


const features = [
  {
    icon: icon1,
    title: 'Setup Employee Groups',
    description: 'Use any parameter to setup distinct employee groups to implement policies.',
  },
  {
    icon: icon2,
    title: 'The Definitive Rule Engine',
    description: 'Configure ANY policy - and if you can’t configure it, we promise to work on it for free.',
  },
  {
    icon: icon3,
    title: 'Customized Reports',
    description: 'Setup the reports that you want using our seamless reporting engine.',
  },
  {
    icon: icon4,
    title: 'Superior Employee Experience',
    description: 'Manage all expenses and travel requests easily. Empower your employees with personalized reports.',
  },
  {
    icon: icon5,
    title: 'Easy Integrations',
    description: 'Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value.',
  },
  {
    icon: icon6,
    title: 'Configurable Workflows',
    description: 'Configure approvals or rejections. Escalations and reports. At will. Setup new groups.',
  },
  {
    icon: icon7,
    title: 'Scan any Bill',
    description: 'The world\'s best OCR system backs up this product. All data goes in. 99% success.',
  },
  {
    icon: icon8,
    title: 'AI-Based Concierge',
    description: 'Ask the concierge to change things during your travel - and it will trigger relevant actions 24×7.',
    badge: 'Coming Soon',
  },
  {
    icon: icon9,
    title: 'AI-Assisted Trip Planning',
    description: 'Just tell us what you want to do in normal language and we will try to put together the best itinerary for you.',
    badge: 'Coming Soon',
  },
];

const FeaturesSection = () => {
  return (
    <div className="features-section">
      <h2 className="features-title">Features that suit your needs</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.icon} alt={`${feature.title} icon`} className="feature-icon" />
            <div className="feature-content">
              <h3 className="feature-title">
                {feature.title}
                {feature.badge && <span className="badge">{feature.badge}</span>}
              </h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
