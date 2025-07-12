import React, { useState } from 'react';
import '../styles/PlantHistory.css';

const PlantHistory = ({ user }) => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const historyData = [
    {
      id: 1,
      date: '2024-01-15',
      cropType: 'Tomato',
      disease: 'Leaf Blight',
      severity: 'Moderate',
      confidence: 92,
      status: 'treated',
      treatment: 'Copper-based fungicide applied',
      image: '/api/placeholder/150/150'
    },
    {
      id: 2,
      date: '2024-01-12',
      cropType: 'Wheat',
      disease: 'Rust',
      severity: 'High',
      confidence: 88,
      status: 'monitoring',
      treatment: 'Fungicide treatment in progress',
      image: '/api/placeholder/150/150'
    },
    {
      id: 3,
      date: '2024-01-10',
      cropType: 'Corn',
      disease: 'Healthy',
      severity: 'None',
      confidence: 95,
      status: 'healthy',
      treatment: 'No treatment needed',
      image: '/api/placeholder/150/150'
    },
    {
      id: 4,
      date: '2024-01-08',
      cropType: 'Potato',
      disease: 'Late Blight',
      severity: 'High',
      confidence: 90,
      status: 'urgent',
      treatment: 'Immediate treatment required',
      image: '/api/placeholder/150/150'
    }
  ];

  const filteredHistory = historyData.filter(item => {
    if (filterStatus === 'all') return true;
    return item.status === filterStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return '#4caf50';
      case 'treated': return '#2196f3';
      case 'monitoring': return '#ff9800';
      case 'urgent': return '#f44336';
      default: return '#757575';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'none': return '#4caf50';
      case 'low': return '#8bc34a';
      case 'moderate': return '#ff9800';
      case 'high': return '#f44336';
      default: return '#757575';
    }
  };

  return (
    <div className="plant-history">
      <div className="history-header">
        <h1>📋 Plant History</h1>
        <p>Track your crop health and treatment history</p>
      </div>

      <div className="history-controls">
        <div className="filter-section">
          <label>Filter by Status:</label>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="healthy">Healthy</option>
            <option value="treated">Treated</option>
            <option value="monitoring">Monitoring</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        <div className="sort-section">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Date</option>
            <option value="severity">Severity</option>
            <option value="confidence">Confidence</option>
          </select>
        </div>
      </div>

      <div className="history-stats">
        <div className="stat-item">
          <span className="stat-number">24</span>
          <span className="stat-label">Total Scans</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">18</span>
          <span className="stat-label">Healthy Plants</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">4</span>
          <span className="stat-label">Under Treatment</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">2</span>
          <span className="stat-label">Need Attention</span>
        </div>
      </div>

      <div className="history-list">
        {filteredHistory.map((item) => (
          <div key={item.id} className="history-item">
            <div className="item-image">
              <img src={item.image} alt={`${item.cropType} scan`} />
            </div>
            
            <div className="item-content">
              <div className="item-header">
                <h3>{item.cropType}</h3>
                <span className="item-date">{new Date(item.date).toLocaleDateString()}</span>
              </div>
              
              <div className="item-details">
                <div className="detail-row">
                  <span className="detail-label">Disease:</span>
                  <span className="detail-value">{item.disease}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Severity:</span>
                  <span 
                    className="severity-badge"
                    style={{ backgroundColor: getSeverityColor(item.severity) }}
                  >
                    {item.severity}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Confidence:</span>
                  <span className="confidence-value">{item.confidence}%</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Treatment:</span>
                  <span className="detail-value">{item.treatment}</span>
                </div>
              </div>
            </div>
            
            <div className="item-status">
              <span 
                className="status-badge"
                style={{ backgroundColor: getStatusColor(item.status) }}
              >
                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>
            </div>
            
            <div className="item-actions">
              <button className="btn-secondary">View Details</button>
              <button className="btn-primary">Update Status</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantHistory;
