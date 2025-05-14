import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaExclamationTriangle,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Display.css";

const Display = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (state?.item) {
      setItem(state.item);
    } else {
      navigate(-1);
    }
  }, [state, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  const adminActions = [
    "Verify Ownership",
    "Flag as Dispute",
    "Edit Report",
    "Mark as Resolved",
    "Delete",
  ];

  if (!item) return null;

  return (
    <div className="display-container">
      <aside className="sidebar">
        <div className="sidebar-logo">LostLink</div>
        <ul className="sidebar-menu">
          <li className={location.pathname === "/dashboard" ? "active" : ""}>
            <Link to="/dashboard">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>
          <li
            className={location.pathname === "/usermanagement" ? "active" : ""}
          >
            <Link to="/usermanagement">
              <FaUsers /> User Management
            </Link>
          </li>
          <li>
            <Link to="/postmoderation">
              <FaFileAlt /> Post Moderation
            </Link>
          </li>
          <li>
            <Link to="/disputeresolution">
              <FaExclamationTriangle /> Dispute Resolution
            </Link>
          </li>
          <li>
            <Link to="/reports">
              <FaChartBar /> Reports & Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <FaCog /> Settings
            </Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              <FaSignOutAlt /> Log Out
            </button>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="displaydashboard-header">
          <h1>Admin Dashboard</h1>
          <button onClick={() => navigate(-1)} className="back-button">
            ← Back
          </button>
        </header>

        <div className="display-card">
          <div className="item-details-container">
            <img src={item.image} alt={item.label} className="display-image" />
            <div className="item-details-info">
              <p>
                <strong>Found:</strong>{" "}
                <span className="found-text">{item.label}</span>
              </p>
              <p>
                <strong>Category:</strong> {item.label}
              </p>
              <p>
                <strong>Found at:</strong> {item.location}
              </p>
              <p>
                {item.time?.split(" ")[0]}{" "}
                <span className="time-text">{item.time?.split(" ")[1]}</span>
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {item.description || "No description provided."}
              </p>
            </div>
          </div>

          <div className="reported-by-container">
            <strong>Reported by:</strong>
            <div className="reporter-info">
              <span className="user-icon">👤</span>
              <span>{item.name || "Unknown Reporter"}</span>
              <p className="email-text">{item.email || "No email provided."}</p>
            </div>
          </div>

          <div className="status-container">
            <p>
              <strong>Current Status:</strong> {item.currentStatus || "Pending"}
            </p>
            <p>
              <strong>Number of Claims:</strong> {item.numberOfClaims ?? "0"}
            </p>
            <p>
              <strong>Matching Activities:</strong>{" "}
              {item.matchingActivities || "None"}
            </p>
          </div>

          <div className="admin-actions-container">
            <h3>Admin Actions</h3>
            <div className="admin-actions-grid">
              {adminActions.map((action) => (
                <button key={action} className="admin-action-button">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Display;
