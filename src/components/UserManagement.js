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
import "./Dashboard.css"; // Assuming you have some base dashboard styles
import "./UserManagement.css"; // Import specific styles for User Management

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState([
    {
      id: "U12345",
      name: "John Doe",
      email: "JohnDoe@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: "U12346",
      name: "Ellen Joe",
      email: "ellenjoe@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: "U12347",
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: "U12348",
      name: "Carl Jack",
      email: "carljack@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "U12349",
      name: "Chris Bezos...",
      email: "chrisbezos@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "U12348",
      name: "Mark Johnson",
      email: "markjohnson@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "U12349",
      name: "Emma Davis",
      email: "emmadavis@gmail.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "U12350",
      name: "Aiden Smith",
      email: "aidensmith@gmail.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "U12351",
      name: "Isabella White",
      email: "isabellawhite@gmail.com",
      role: "User",
      status: "Active",
    },
    {
      id: "U12352",
      name: "Lucas Taylor",
      email: "lucastaylor@gmail.com",
      role: "User",
      status: "Inactive",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsLoggedIn(adminLoggedIn);
    if (!adminLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const results = users.filter(
      (user) =>
        user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilter = () => {
    // Implement your filter logic here if needed
    console.log("Filter button clicked");
  };

  const handleView = (userId) => {
    console.log(`View user with ID: ${userId}`);
    // Implement navigation or modal to view user details
  };

  if (!isLoggedIn) {
    return null; // Or a loading spinner
  }

  return (
    <div className="userdashboard-container">
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
      <main className="usermain-content">
        <header className="userdashboard-header">
          <h1>User Management</h1>
        </header>
        <section className="user-management-section">
          <div className="user-management-header">
            <div className="user-search-bar">
              <input
                type="text"
                placeholder="Search User..."
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="user-filter-button" onClick={handleFilter}>
                Filter
              </button>
            </div>
          </div>

          <div className="user-list-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`status ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button
                        className="user-view-button"
                        onClick={() => handleView(user.id)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredUsers.length === 0 && (
                  <tr>
                    <td colSpan="6" className="user-no-users">
                      No users found.
                    </td>
                  </tr>
                )}
                <tr>
                  <td colSpan="6" className="user-more-users">
                    More...
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
