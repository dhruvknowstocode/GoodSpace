import React from "react";
import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="hero-title">The World's Most Configurable</h2>
        <h1 className="hero-heading">Travel & Expense Management Software</h1>
        <p className="hero-description">
          Configure <span>any</span> rule. Enable a world class mobile
          experience for your users. Get seamless reporting & integrations.
          Inbuilt OCR expense scanning. Manage travel & non-travel expenses.
          Open APIs to connect with external systems.
        </p>
        <form className="hero-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Official email ID" />
          <button type="submit">Start trial</button>
        </form>
        <p className="form-note">
          30 Days free trial <span className="dot">•</span> Upto 10 users
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
