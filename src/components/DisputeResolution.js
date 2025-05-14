import React, { useState } from "react";
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
import "./DisputeResolution.css";

const DisputeResolution = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [disputes, setDisputes] = useState([
    {
      disputeId: "D12345",
      involves: "John Doe, Ellen Joe",
      item: "Lost Brown Wallet",
      dateTime: "04/05/2025 11:58 pm",
      status: "Pending...",
      actions: "View",
      thumbnail:
        "https://i.pinimg.com/736x/45/9d/77/459d77b635e572bed6045ba75a310618.jpg",
    },
    {
      disputeId: "D12346",
      involves: "James Coll, Carl Jack",
      item: "Lost Green Umbrella",
      dateTime: "01/05/2025 11:58 pm",
      status: "Claimed!",
      actions: "View",
      thumbnail:
        "https://i.pinimg.com/736x/d3/08/8a/d3088a46a974597a452da4a854f6ab2d.jpg",
    },
    // Add more disputes as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [allDisputesLoaded, setAllDisputesLoaded] = useState(false);
  const [visibleDisputes, setVisibleDisputes] = useState(disputes.slice(0, 3));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  const handleFilterClick = () => {
    console.log("Filter Clicked");
    // Add filter logic here
  };

  const loadMore = () => {
    if (loadingMore || allDisputesLoaded) return;
    setLoadingMore(true);
    setTimeout(() => {
      const nextDisputes = disputes.slice(
        visibleDisputes.length,
        visibleDisputes.length + 3
      );
      setVisibleDisputes([...visibleDisputes, ...nextDisputes]);
      setLoadingMore(false);
      if (visibleDisputes.length + nextDisputes.length === disputes.length) {
        setAllDisputesLoaded(true);
      }
    }, 500);
  };

  return (
    <div className="dispute-resolution-container">
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
          <h2>Dispute Resolution</h2>
        </header>
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
            <input
              type="text"
              placeholder="Search Post"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <button className="filter-button" onClick={handleFilterClick}>
            Filter
          </button>
        </div>

        <div className="dispute-list">
          <table className="dispute-table">
            <thead>
              <tr>
                <th>Dispute ID</th>
                <th>Involves</th>
                <th>Item</th>
                <th>Date/Time</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleDisputes.map((dispute) => (
                <tr key={dispute.disputeId}>
                  <td>{dispute.disputeId}</td>
                  <td>{dispute.involves}</td>
                  <td>
                    <div className="item-cell">
                      <img
                        src={dispute.thumbnail}
                        alt={dispute.item}
                        className="thumbnail"
                      />
                      <p>{dispute.item}</p>
                    </div>
                  </td>
                  <td>{dispute.dateTime}</td>
                  <td
                    className={`status-${dispute.status
                      .toLowerCase()
                      .replace(/[^a-z!]/g, "")}`}
                  >
                    {dispute.status}
                  </td>
                  <td>
                    <Link to={`/dispute/${dispute.disputeId}`}>
                      {dispute.actions}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!allDisputesLoaded && (
          <div className="more-button-container">
            <button
              className="more-button"
              onClick={loadMore}
              disabled={loadingMore}
            >
              {loadingMore ? "Loading..." : "More..."}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default DisputeResolution;
