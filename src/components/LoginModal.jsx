import React, { useState } from 'react';
import '../styles/LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    alert('Login functionality would be implemented here');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="login-container">
          <h2 className="login-heading">
            Login to CROP-DOCTOR
          </h2>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="email" className="input-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="input-group">
              <label htmlFor="password" className="input-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Enter your password"
              />
            </div>
            
            <button type="submit" className="submit-button">
              <span>Login</span>
            </button>
            
            <div className="login-options">
              <a href="#" className="login-link">
                Forgot Password?
              </a>
              <p className="signup-text">
                Don't have an account?{' '}
                <a href="#" className="login-link">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
