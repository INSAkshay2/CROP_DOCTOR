import React, { useState, useRef } from "react";
import "../styles/ImageUploader.css";

const ImageUploader = ({ user }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      setAnalysisResult(null);
    }
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);

    // Simulate API call
    setTimeout(() => {
      const mockResult = {
        disease: "Leaf Blight",
        confidence: 92,
        severity: "Moderate",
        treatment: "Apply copper-based fungicide every 7-10 days",
        prevention:
          "Ensure proper spacing between plants and avoid overhead watering",
        fertilizer: "Use balanced NPK fertilizer (10-10-10) with added calcium",
      };
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 3000);
  };

  const resetUploader = () => {
    setSelectedImage(null);
    setImagePreview(null);
    setAnalysisResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="image-uploader">
      <div className="uploader-header">
        <h1>🔬 Crop Disease Detection</h1>
        <p>
          Upload an image of your crop to get instant AI-powered disease
          analysis
        </p>
      </div>

      <div className="uploader-content">
        <div className="upload-section">
          {!imagePreview ? (
            <div
              className="upload-area"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className="upload-icon">📸</div>
              <h3>Drop your image here or click to browse</h3>
              <p>Supports JPG, PNG, WebP up to 10MB</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
                style={{ display: "none" }}
              />
            </div>
          ) : (
            <div className="image-preview">
              <img src={imagePreview} alt="Crop preview" />
              <div className="image-actions">
                <button className="btn-secondary" onClick={resetUploader}>
                  Change Image
                </button>
                <button
                  className="btn-primary"
                  onClick={analyzeImage}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze Crop"}
                </button>
              </div>
            </div>
          )}
        </div>

        {isAnalyzing && (
          <div className="analysis-loading">
            <div className="loading-spinner"></div>
            <h3>Analyzing your crop image...</h3>
            <p>Our AI is examining the image for disease patterns</p>
          </div>
        )}

        {analysisResult && (
          <div className="analysis-result">
            <div className="result-header">
              <h2>🎯 Analysis Complete</h2>
              <div className="confidence-badge">
                {analysisResult.confidence}% Confidence
              </div>
            </div>

            <div className="result-grid">
              <div className="result-card disease-card">
                <h3>🦠 Disease Detected</h3>
                <p className="disease-name">{analysisResult.disease}</p>
                <p className="severity">
                  Severity:{" "}
                  <span className="moderate">{analysisResult.severity}</span>
                </p>
              </div>

              <div className="result-card treatment-card">
                <h3>💊 Treatment</h3>
                <p>{analysisResult.treatment}</p>
              </div>

              <div className="result-card prevention-card">
                <h3>🛡️ Prevention</h3>
                <p>{analysisResult.prevention}</p>
              </div>

              <div className="result-card fertilizer-card">
                <h3>🌱 Fertilizer Recommendation</h3>
                <p>{analysisResult.fertilizer}</p>
              </div>
            </div>

            <div className="result-actions">
              <button className="btn-primary">Save to History</button>
              <button className="btn-secondary">Get More Details</button>
              <button className="btn-secondary">Share Results</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
