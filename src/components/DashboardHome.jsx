import React from 'react';
import '../styles/DashboardHome.css';

const DashboardHome = ({ user }) => {
  const stats = [
    { label: 'Scans Completed', value: '24', icon: '📸', color: '#2e7d32' },
    { label: 'Healthy Plants', value: '18', icon: '🌱', color: '#4caf50' },
    { label: 'Issues Detected', value: '6', icon: '⚠️', color: '#ff9800' },
    { label: 'Recommendations', value: '12', icon: '💡', color: '#2196f3' },
  ];

  const recentActivity = [
    { date: '2 hours ago', activity: 'Scanned tomato plant', result: 'Healthy', status: 'success' },
    { date: '1 day ago', activity: 'Scanned wheat crop', result: 'Rust detected', status: 'warning' },
    { date: '3 days ago', activity: 'Applied fertilizer recommendation', result: 'Treatment started', status: 'info' },
    { date: '1 week ago', activity: 'Scanned corn field', result: 'Blight detected', status: 'error' },
  ];

  return (
    <div className="dashboard-home">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name || 'Farmer'}! 🌾</h1>
        <p>Monitor your crops and get AI-powered insights to maximize your harvest.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{ '--card-color': stat.color }}>
            <div className="stat-icon">
              <span>{stat.icon}</span>
            </div>
            <div className="stat-content">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-sections">
        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="action-cards">
            <div className="action-card scan-card">
              <div className="action-icon">📸</div>
              <h3>Scan New Crop</h3>
              <p>Upload an image to detect diseases instantly</p>
              <button className="action-btn">Start Scanning</button>
            </div>
            <div className="action-card history-card">
              <div className="action-icon">📋</div>
              <h3>View History</h3>
              <p>Check your previous scans and treatments</p>
              <button className="action-btn">View History</button>
            </div>
            <div className="action-card fertilizer-card">
              <div className="action-icon">🌱</div>
              <h3>Get Recommendations</h3>
              <p>AI-powered fertilizer and treatment advice</p>
              <button className="action-btn">Get Advice</button>
            </div>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {recentActivity.map((item, index) => (
              <div key={index} className={`activity-item ${item.status}`}>
                <div className="activity-time">{item.date}</div>
                <div className="activity-content">
                  <p className="activity-text">{item.activity}</p>
                  <p className="activity-result">{item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
