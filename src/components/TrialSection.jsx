import React from 'react';
import './TrialSection.scss'; // Import the SCSS file

const TrialSection = () => {
  return (
    <section className="trial-section">
      <h2>Manage your travel and expenses the smart way!</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Official email ID" />
        <button type="submit" className="trial-button">Start trial</button>
      </form>
      <p className="trial-info">
        30 Days free trial <span>&#8226;</span> Upto 10 users
      </p>
    </section>
  );
};

export default TrialSection;
