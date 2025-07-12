import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { initializeAdvancedAnimations } from "./animation.js";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import LoginModal from "./components/LoginModal";
import Dashboard from './components/Dashboard.jsx'; 

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  useEffect(() => {
    initializeAdvancedAnimations();
  }, []);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <div className="App">
      <Navbar onLoginClick={openLoginModal} />
      <main className="main-content">
        <HeroSection />
        <FeatureSection />
      </main>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}

export default App;
