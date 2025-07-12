import React, { useState } from "react";
import "../styles/FertilizerRecommendations.css";

const FertilizerRecommendations = ({ user }) => {
  const [selectedCrop, setSelectedCrop] = useState("");
  const [soilType, setSoilType] = useState("");
  const [season, setSeason] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const cropOptions = [
    "Wheat",
    "Corn",
    "Rice",
    "Tomato",
    "Potato",
    "Soybean",
    "Cotton",
    "Barley",
  ];

  const soilOptions = ["Clay", "Sandy", "Loamy", "Silty", "Peaty", "Chalky"];

  const seasonOptions = ["Spring", "Summer", "Fall", "Winter"];

  const fertilizerData = [
    {
      id: 1,
      name: "NPK 10-10-10",
      type: "Balanced",
      nutrients: "Nitrogen, Phosphorus, Potassium",
      application: "Apply 2-3 lbs per 100 sq ft",
      timing: "Early spring and mid-summer",
      benefits: "Promotes overall plant health and growth",
      price: "$24.99",
      rating: 4.5,
      suitable: ["Wheat", "Corn", "Tomato"],
    },
    {
      id: 2,
      name: "Organic Compost",
      type: "Organic",
      nutrients: "Slow-release nutrients",
      application: "Mix 2-4 inches into soil",
      timing: "Before planting season",
      benefits: "Improves soil structure and water retention",
      price: "$18.99",
      rating: 4.8,
      suitable: ["Tomato", "Potato", "All vegetables"],
    },
    {
      id: 3,
      name: "Calcium Nitrate",
      type: "Specialty",
      nutrients: "Calcium, Nitrogen",
      application: "1-2 lbs per 1000 sq ft",
      timing: "During active growth",
      benefits: "Prevents blossom end rot, strengthens cell walls",
      price: "$32.99",
      rating: 4.3,
      suitable: ["Tomato", "Pepper", "Leafy greens"],
    },
    {
      id: 4,
      name: "Phosphorus Booster",
      type: "Specialty",
      nutrients: "High Phosphorus",
      application: "Apply during flowering stage",
      timing: "Pre-bloom and early bloom",
      benefits: "Enhances root development and flowering",
      price: "$28.99",
      rating: 4.6,
      suitable: ["Corn", "Wheat", "Rice"],
    },
  ];

  const generateRecommendations = () => {
    if (!selectedCrop || !soilType || !season) {
      alert("Please select all options to get recommendations");
      return;
    }

    const filtered = fertilizerData.filter(
      (fertilizer) =>
        fertilizer.suitable.includes(selectedCrop) ||
        fertilizer.suitable.includes("All vegetables")
    );

    setRecommendations(filtered);
  };

  return (
    <div className="fertilizer-recommendations">
      <div className="recommendations-header">
        <h1>🌱 Fertilizer Recommendations</h1>
        <p>
          Get AI-powered fertilizer suggestions based on your crop and soil
          conditions
        </p>
      </div>

      <div className="recommendation-form">
        <div className="form-card">
          <h3>Tell us about your crop</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Crop Type</label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
              >
                <option value="">Select crop type</option>
                {cropOptions.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Soil Type</label>
              <select
                value={soilType}
                onChange={(e) => setSoilType(e.target.value)}
              >
                <option value="">Select soil type</option>
                {soilOptions.map((soil) => (
                  <option key={soil} value={soil}>
                    {soil}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Season</label>
              <select
                value={season}
                onChange={(e) => setSeason(e.target.value)}
              >
                <option value="">Select season</option>
                {seasonOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button className="btn-primary" onClick={generateRecommendations}>
            Get Recommendations
          </button>
        </div>
      </div>

      {recommendations.length > 0 && (
        <div className="recommendations-results">
          <h2>Recommended Fertilizers for {selectedCrop}</h2>
          <div className="fertilizer-grid">
            {recommendations.map((fertilizer) => (
              <div key={fertilizer.id} className="fertilizer-card">
                <div className="fertilizer-header">
                  <h3>{fertilizer.name}</h3>
                  <span className="fertilizer-type">{fertilizer.type}</span>
                </div>

                <div className="fertilizer-content">
                  <div className="nutrient-info">
                    <h4>Nutrients</h4>
                    <p>{fertilizer.nutrients}</p>
                  </div>

                  <div className="application-info">
                    <h4>Application</h4>
                    <p>{fertilizer.application}</p>
                  </div>

                  <div className="timing-info">
                    <h4>Best Timing</h4>
                    <p>{fertilizer.timing}</p>
                  </div>

                  <div className="benefits-info">
                    <h4>Benefits</h4>
                    <p>{fertilizer.benefits}</p>
                  </div>
                </div>

                <div className="fertilizer-footer">
                  <div className="price-rating">
                    <span className="price">{fertilizer.price}</span>
                    <div className="rating">
                      <span className="stars">
                        {"★".repeat(Math.floor(fertilizer.rating))}
                      </span>
                      <span className="rating-value">{fertilizer.rating}</span>
                    </div>
                  </div>
                  <button className="btn-primary">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="fertilizer-tips">
        <h2>💡 Fertilizer Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <div className="tip-icon">🌱</div>
            <h3>Soil Testing</h3>
            <p>
              Always test your soil pH and nutrient levels before applying
              fertilizers for best results.
            </p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">💧</div>
            <h3>Watering</h3>
            <p>
              Water thoroughly after fertilizer application to help nutrients
              reach the root zone.
            </p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">📅</div>
            <h3>Timing</h3>
            <p>
              Apply fertilizers during the plant's active growing season for
              maximum effectiveness.
            </p>
          </div>
          <div className="tip-card">
            <div className="tip-icon">⚖️</div>
            <h3>Dosage</h3>
            <p>
              Follow recommended application rates - more isn't always better
              and can harm plants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilizerRecommendations;
