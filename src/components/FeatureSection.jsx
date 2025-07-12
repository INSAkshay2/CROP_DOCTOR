import React from "react";
import "../styles/FeatureSection.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <h3 className="feature-title">
        {icon} {title}
      </h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: "🔬",
      title: "Advanced AI Detection",
      description:
        "Our machine learning model analyzes crop images with high precision to identify diseases early.",
    },
    {
      icon: "⚡",
      title: "Instant Results",
      description:
        "Get immediate disease predictions and recommendations within seconds of uploading your image.",
    },
    {
      icon: "🌱",
      title: "Crop Protection",
      description:
        "Early detection helps prevent disease spread and protects your entire crop yield.",
    },
    {
      icon: "📱",
      title: "Easy to Use",
      description:
        "Simple interface - just upload, analyze, and get actionable insights for your crops.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-heading">Why Choose CROP-DOCTOR?</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
