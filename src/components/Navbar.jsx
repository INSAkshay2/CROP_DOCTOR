import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon-container">
            <span className="logo-icon">🌾</span>
          </div>
          <h2>
            <span className="crop-text">CROP</span>
            <span className="separator">-</span>
            <span className="doctor-text">DOCTOR</span>
          </h2>
        </div>
        <button className="login-btn" onClick={onLoginClick}>
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
