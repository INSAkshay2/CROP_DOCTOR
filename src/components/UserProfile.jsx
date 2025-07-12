import React, { useState } from "react";
import "../styles/UserProfile.css";

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "John Farmer",
    email: user?.email || "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "California, USA",
    farmSize: "50 acres",
    cropTypes: "Wheat, Corn, Tomatoes",
    experience: "15 years",
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  });

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNotificationChange = (type) => {
    setProfileData((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }));
  };

  const saveProfile = () => {
    // Save profile logic here
    setIsEditing(false);
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <h1>👤 User Profile</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              <span>{profileData.name.charAt(0)}</span>
            </div>
            <button className="change-avatar-btn">Change Photo</button>
          </div>

          <div className="profile-form">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.name}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.email}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.phone}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.location}
                      onChange={(e) =>
                        handleInputChange("location", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.location}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Farm Information</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Farm Size</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.farmSize}
                      onChange={(e) =>
                        handleInputChange("farmSize", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.farmSize}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Crop Types</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.cropTypes}
                      onChange={(e) =>
                        handleInputChange("cropTypes", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.cropTypes}</p>
                  )}
                </div>

                <div className="form-group">
                  <label>Farming Experience</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profileData.experience}
                      onChange={(e) =>
                        handleInputChange("experience", e.target.value)
                      }
                    />
                  ) : (
                    <p>{profileData.experience}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="form-section">
              <h3>Notification Preferences</h3>
              <div className="notification-settings">
                <div className="notification-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={profileData.notifications.email}
                      onChange={() => handleNotificationChange("email")}
                      disabled={!isEditing}
                    />
                    Email Notifications
                  </label>
                </div>
                <div className="notification-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={profileData.notifications.sms}
                      onChange={() => handleNotificationChange("sms")}
                      disabled={!isEditing}
                    />
                    SMS Notifications
                  </label>
                </div>
                <div className="notification-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={profileData.notifications.push}
                      onChange={() => handleNotificationChange("push")}
                      disabled={!isEditing}
                    />
                    Push Notifications
                  </label>
                </div>
              </div>
            </div>

            <div className="profile-actions">
              {isEditing ? (
                <>
                  <button className="btn-primary" onClick={saveProfile}>
                    Save Changes
                  </button>
                  <button
                    className="btn-secondary"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  className="btn-primary"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
