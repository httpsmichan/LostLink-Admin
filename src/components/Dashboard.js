import React, { useEffect, useState } from "react";
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
import "./Dashboard.css";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsLoggedIn(adminLoggedIn);
    if (!adminLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  if (!isLoggedIn) return null;

  return (
    <div className="dashboard-container">
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
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </header>

        <section className="overview-section">
          {[
            {
              title: "Active Users",
              value: "128",
              change: "+8%",
              positive: true,
            },
            {
              title: "Lost Items reported",
              value: "8",
              change: "-5%",
              positive: false,
            },
            {
              title: "Found Items reported",
              value: "16",
              change: "+7%",
              positive: true,
            },
            {
              title: "Recovered Items",
              value: "16",
              change: "+75%",
              positive: true,
            },
          ].map((card, i) => (
            <div className="overview-card" key={i}>
              <div className="card-header">{card.title}</div>
              <div className="card-body">
                <span className="metric">{card.value}</span>
                <span
                  className={`comparison ${
                    card.positive ? "positive" : "negative"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={card.positive ? "icon-up" : "icon-down"}
                  >
                    <path
                      d={
                        card.positive
                          ? "M13 20V8l-5.5 5.5-1.42-1.42L12 4.16l6.92 6.92-1.42 1.42L13 8v12z"
                          : "M11 4v12l5.5-5.5 1.42 1.42L12 19.84 5.08 12.92l1.42-1.42L11 16V4z"
                      }
                    />
                  </svg>
                  {card.change} this week
                </span>
              </div>
            </div>
          ))}
        </section>

        <section className="activities-section">
          <div className="section-header">Recent Activities</div>
          <div className="activities-grid">
            {/* Latest Lost & Found */}
            <div className="activity-card">
              <div className="card-title">Latest Lost & Found</div>
              <div className="activity-items">
                {[
                  {
                    type: "Found",
                    label: "Found: Brown Wallet",
                    location: "Found at the Hall way",
                    name: "Ellen Joe",
                    time: "15 min... ago",
                    image:
                      "https://i.pinimg.com/736x/f2/bf/ae/f2bfae7467125698bfc5494374d2d950.jpg",
                    className: "found",
                  },
                  {
                    type: "Lost",
                    label: "Lost: Brown Wallet",
                    location: "Lost at the Hall way",
                    name: "John Doe",
                    time: "10 min... ago",
                    image:
                      "https://i.pinimg.com/736x/22/8c/3d/228c3d1d9634dbab92b804acfcd3e1cb.jpg",
                    className: "lost",
                  },
                ].map((item, idx) => (
                  <Link
                    to="/display"
                    state={{ item }}
                    key={idx}
                    className="item-link-wrapper"
                  >
                    <div className="item">
                      <div className="item-image-container">
                        <img
                          src={item.image}
                          alt={`${item.type} Item`}
                          className="item-image"
                        />
                      </div>
                      <div className="item-details">
                        <div className={`item-title ${item.className}`}>
                          {item.label}
                        </div>
                        <div className="item-location">{item.location}</div>
                        <div className="item-meta">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="icon-user"
                          >
                            <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                          </svg>
                          {item.name} {item.time}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Matches & Recoveries */}
            <div className="activity-card">
              <div className="card-title">Matches & Recoveries</div>
              <div className="activity-items">
                {[
                  {
                    type: "Found",
                    label: "Found: Brown Wallet",
                    location: "Found at the Hall way",
                    name: "Ellen Joe",
                    time: "15 min... ago",
                    image:
                      "https://i.pinimg.com/736x/f2/bf/ae/f2bfae7467125698bfc5494374d2d950.jpg",
                    className: "found",
                  },
                  {
                    type: "Lost",
                    label: "Lost: Brown Wallet",
                    location: "Lost at the Hall way",
                    name: "John Doe",
                    time: "10 min... ago",
                    image:
                      "https://i.pinimg.com/736x/22/8c/3d/228c3d1d9634dbab92b804acfcd3e1cb.jpg",
                    className: "lost",
                  },
                ].map((item, idx) => (
                  <Link
                    to="/display"
                    state={{ item }}
                    key={idx}
                    className="item-link-wrapper"
                  >
                    <div className="item">
                      <div className="item-image-container">
                        <img
                          src={item.image}
                          alt={`${item.type} Item`}
                          className="item-image"
                        />
                      </div>
                      <div className="item-details">
                        <div className={`item-title ${item.className}`}>
                          {item.label}
                        </div>
                        <div className="item-location">{item.location}</div>
                        <div className="item-meta">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="icon-user"
                          >
                            <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                          </svg>
                          {item.name} {item.time}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="activity-card">
              <div className="card-title">New Dispute</div>
              <div className="empty-state">No new disputes at the moment.</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
