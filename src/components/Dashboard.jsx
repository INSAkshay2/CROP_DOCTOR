import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ImageUploader from "./ImageUploader";
import UserProfile from "./UserProfile";
import PlantHistory from "./PlantHistory";
import FertilizerRecommendations from "./FertilizerRecommendations";
import DashboardHome from "./DashboardHome";
import "../styles/Dashboard.css";

const Dashboard = ({ user, onLogout }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return <DashboardHome user={user} />;
      case "upload":
        return <ImageUploader user={user} />;
      case "profile":
        return <UserProfile user={user} />;
      case "history":
        return <PlantHistory user={user} />;
      case "fertilizers":
        return <FertilizerRecommendations user={user} />;
      default:
        return <DashboardHome user={user} />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        onLogout={onLogout}
        user={user}
      />
      <main className={`dashboard-main ${sidebarCollapsed ? "collapsed" : ""}`}>
        <div className="dashboard-content">{renderActiveSection()}</div>
      </main>
    </div>
  );
};

export default Dashboard;
