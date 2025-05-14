import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaExclamationTriangle,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Settings.css";

const Settings = () => {
  const navigate = useNavigate(); // ✅ Move useNavigate inside the component

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };
  const location = useLocation();

  return (
    <div className="settings-container">
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
        <header className="content-header">
          <h2>Admin Settings</h2>
        </header>

        <div className="settings-content">
          <div className="search-and-filter">
            <div className="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="search-icon"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.697 4.697a.75.75 0 01-1.06 1.06l-4.697-4.697A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" placeholder="Search settings" />
            </div>
            <button className="filter-button">Filter</button>
          </div>
          <ul className="settings-list">
            <li>
              <Link to="/settings">Account Management</Link>
            </li>
            <li>
              <Link to="/settings">User Roles & Permissions</Link>
            </li>
            <li>
              <Link to="/settings">Notification Settings</Link>
            </li>
            <li>
              <Link to="/settings">System Preferences</Link>
            </li>
            <li>
              <Link to="/settings">Security Settings</Link>
            </li>
            <li>
              <Link to="/settings">Data Management</Link>
            </li>
            <li>
              <Link to="/settings">Log-out</Link>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Settings;
