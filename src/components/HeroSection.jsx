import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to CROP-DOCTOR
        </h1>
        
        <p className="hero-subtitle">
          AI-Powered Crop Disease Detection System
        </p>
        
        <p className="hero-description">
          Revolutionizing agriculture through advanced machine learning technology. 
          Upload images of your crops and get instant, accurate disease predictions 
          to protect your harvest and maximize yield. Join thousands of farmers 
          who trust our AI to safeguard their crops and secure their future.
        </p>
        
        <div className="hero-cta-container">
          <button className="hero-cta-primary">
            <span>Start Protecting Your Crops</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
