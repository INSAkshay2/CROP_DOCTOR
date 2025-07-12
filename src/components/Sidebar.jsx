import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ activeSection, setActiveSection, collapsed, setCollapsed, onLogout, user }) => {
  const menuItems = [
    { id: 'home', icon: '🏠', label: 'Dashboard', color: '#2e7d32' },
    { id: 'upload', icon: '📸', label: 'Scan Crop', color: '#4caf50' },
    { id: 'history', icon: '📋', label: 'Plant History', color: '#66bb6a' },
    { id: 'fertilizers', icon: '🌱', label: 'Fertilizers', color: '#81c784' },
    { id: 'profile', icon: '👤', label: 'Profile', color: '#a5d6a7' },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon-container">
            <span className="logo-icon">🌾</span>
          </div>
          {!collapsed && (
            <h2>
              <span className="crop-text">CROP</span>
              <span className="separator">-</span>
              <span className="doctor-text">DOCTOR</span>
            </h2>
          )}
        </div>
        <button 
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
        >
          <span>{collapsed ? '→' : '←'}</span>
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-menu">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
                style={{ '--item-color': item.color }}
              >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        {!collapsed && (
          <div className="user-info">
            <div className="user-avatar">
              <span>{user?.name?.charAt(0) || 'U'}</span>
            </div>
            <div className="user-details">
              <p className="user-name">{user?.name || 'User'}</p>
              <p className="user-email">{user?.email || 'user@example.com'}</p>
            </div>
          </div>
        )}
        <button className="logout-btn" onClick={onLogout}>
          <span className="logout-icon">🚪</span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
