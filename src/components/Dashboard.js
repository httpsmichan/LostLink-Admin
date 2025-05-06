import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  if (!isLoggedIn) {
    return null; // Or a loading spinner
  }

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-logo">LostLink</div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="active">
            <Link to="/usermanagement">User Management</Link>
          </li>
          <li>
            <Link to="/postmoderation">Post Moderation</Link>
          </li>
          <li>
            <Link to="/disputeresolution">Dispute Resolution</Link>
          </li>
          <li>
            <Link to="/reports">Reports & Analytics</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="logout-button">
              Log Out
            </button>
          </li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Admin Dashboard</h1>
        </header>
        <section className="overview-section">
          <div className="overview-card active-users">
            <div className="card-header">Active Users</div>
            <div className="card-body">
              <span className="metric">128</span>
              <span className="comparison">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon-up"
                >
                  <path d="M13 20V8l-5.5 5.5-1.42-1.42L12 4.16l6.92 6.92-1.42 1.42L13 8v12z" />
                </svg>
                +8% this week
              </span>
            </div>
          </div>
          <div className="overview-card lost-items">
            <div className="card-header">Lost Items reported</div>
            <div className="card-body">
              <span className="metric">8</span>
              <span className="comparison negative">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon-down"
                >
                  <path d="M11 4v12l5.5-5.5 1.42 1.42L12 19.84 5.08 12.92l1.42-1.42L11 16V4z" />
                </svg>
                -5% this week
              </span>
            </div>
          </div>
          <div className="overview-card found-items">
            <div className="card-header">Found Items reported</div>
            <div className="card-body">
              <span className="metric">16</span>
              <span className="comparison positive">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon-up"
                >
                  <path d="M13 20V8l-5.5 5.5-1.42-1.42L12 4.16l6.92 6.92-1.42 1.42L13 8v12z" />
                </svg>
                +7% this week
              </span>
            </div>
          </div>
          <div className="overview-card recovered-items">
            <div className="card-header">Recovered Items</div>
            <div className="card-body">
              <span className="metric">16</span>
              <span className="comparison positive">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon-up"
                >
                  <path d="M13 20V8l-5.5 5.5-1.42-1.42L12 4.16l6.92 6.92-1.42 1.42L13 8v12z" />
                </svg>
                +75% this week
              </span>
            </div>
          </div>
        </section>

        <section className="activities-section">
          <div className="section-header">Recently Activities</div>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="card-title">Latest Lost & Found</div>
              <div className="activity-items">
                <div className="item">
                  <div className="item-image-container">
                    <img
                      src="https://i.pinimg.com/736x/f2/bf/ae/f2bfae7467125698bfc5494374d2d950.jpg"
                      alt="Lost Item"
                      className="item-image"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-title found">Found: Brown Wallet</div>
                    <div className="item-location">Found at the Hall way</div>
                    <div className="item-meta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon-user"
                      >
                        <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                      </svg>
                      Ellen Joe 15 min... ago
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="item-image-container">
                    <img
                      src="https://i.pinimg.com/736x/22/8c/3d/228c3d1d9634dbab92b804acfcd3e1cb.jpg"
                      alt="Found Item"
                      className="item-image"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-title lost">Lost: Brown Wallet</div>
                    <div className="item-location">Lost at the Hall way</div>
                    <div className="item-meta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon-user"
                      >
                        <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                      </svg>
                      John Doe 10 min... ago
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="activity-card">
              <div className="card-title">Matches & Recoveries</div>
              <div className="activity-items">
                <div className="item matched">
                  <div className="item-image-container">
                    <img
                      src="https://i.pinimg.com/736x/f2/bf/ae/f2bfae7467125698bfc5494374d2d950.jpg"
                      alt="Matched Item"
                      className="item-image"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-title found">Found: Brown Wallet</div>
                    <div className="item-location">Found at the Hall way</div>
                    <div className="item-meta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon-user"
                      >
                        <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                      </svg>
                      Ellen Joe 15 min... ago
                    </div>
                  </div>
                </div>
                <div className="item recovered">
                  <div className="item-image-container">
                    <img
                      src="https://i.pinimg.com/736x/22/8c/3d/228c3d1d9634dbab92b804acfcd3e1cb.jpg"
                      alt="Recovered Item"
                      className="item-image"
                    />
                  </div>
                  <div className="item-details">
                    <div className="item-title lost">Lost: Brown Wallet</div>
                    <div className="item-location">Lost at the Hall way</div>
                    <div className="item-meta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="icon-user"
                      >
                        <path d="M12 4a4 4 0 100 8 4 4 0 000-8zm0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4z" />
                      </svg>
                      John Doe 10 min... ago
                    </div>
                  </div>
                </div>
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
