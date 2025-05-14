import React from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaExclamationTriangle,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./ReportsAnalytics.css"; // Import CSS

const ReportsAnalytics = () => {
  // Sample data for the charts

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
  };

  const lostFoundData = [
    { name: "Jan", Lost: 20, Found: 15 },
    { name: "Feb", Lost: 25, Found: 18 },
    { name: "Mar", Lost: 30, Found: 22 },
    { name: "Apr", Lost: 35, Found: 28 },
  ];

  const categoryData = [
    { name: "Electronics", value: 35 },
    { name: "Bags", value: 20 },
    { name: "IDs", value: 15 },
    { name: "Clothing", value: 15 },
    { name: "Others", value: 15 },
  ];

  const matchData = [
    { name: "January", matches: 10 },
    { name: "February", matches: 15 },
    { name: "March", matches: 25 },
    { name: "April", matches: 30 },
    { name: "May", matches: 35 },
    { name: "June", matches: 40 },
  ];

  const pieColors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

  const users = [
    {
      userId: "U12346",
      name: "Ellen Joe",
      reportsSubmitted: 23,
      matchesMade: 18,
    },
    {
      userId: "U12345",
      name: "John Doe",
      reportsSubmitted: 21,
      matchesMade: 15,
    },
    {
      userId: "U12347",
      name: "Jane Doe",
      reportsSubmitted: 18,
      matchesMade: 11,
    },
    {
      userId: "U12348",
      name: "Carl Jack",
      reportsSubmitted: 9,
      matchesMade: 5,
    },
    {
      userId: "U12367",
      name: "Paul Voron",
      reportsSubmitted: 9,
      matchesMade: 4,
    },
  ];

  return (
    <div className="reports-analytics-container">
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
          <h2>Reports & Analytics</h2>
        </header>

        <div className="kpi-section">
          <div className="kpi-card">
            <div className="kpi-title">Total Reported Lost Items</div>
            <div className="kpi-value">23</div>
            <div className="kpi-trend">+47% this week</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Total Reported Found Items</div>
            <div className="kpi-value">12</div>
            <div className="kpi-trend">+23% this week</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Successful Matches</div>
            <div className="kpi-value">8</div>
            <div className="kpi-trend">+23% this week</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Pending Dispute</div>
            <div className="kpi-value">2</div>
            <div className="kpi-trend">+50% this week</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Flagged Post</div>
            <div className="kpi-value">20</div>
            <div className="kpi-trend">+50% this week</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-title">Active Users this Week</div>
            <div className="kpi-value">256</div>
            <div className="kpi-trend">+50% this week</div>
          </div>
        </div>

        <div className="statistics-section">
          <h2>Statistics</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={lostFoundData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Lost" fill="#8884d8" />
                <Bar dataKey="Found" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-title">Lost vs Found Reports (Monthly)</div>

          <div className="chart-container chart-row">
            <div className="chart-item pie-chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({
                      cx,
                      cy,
                      midAngle,
                      innerRadius,
                      outerRadius,
                      value,
                      index,
                    }) => {
                      const RADIAN = Math.PI / 180;
                      const radius =
                        25 + innerRadius + (outerRadius - innerRadius);
                      const x = cx + radius * Math.cos(-midAngle * RADIAN);
                      const y = cy + radius * Math.sin(-midAngle * RADIAN);

                      return (
                        <text
                          x={x}
                          y={y}
                          fill={pieColors[index % pieColors.length]}
                          textAnchor={x > cx ? "start" : "end"}
                          dominantBaseline="central"
                        >
                          {categoryData[index].name} ({value}%)
                        </text>
                      );
                    }}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={pieColors[index % pieColors.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="chart-title">Lost Item Categories</div>
            </div>

            <div className="chart-item line-chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={matchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="matches"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="chart-title">Successful Matches Over Time</div>
            </div>
          </div>

          {/* User Activity Stats Table */}
          <div className="user-activity-section">
            <h2>User Activity Stats</h2>
            <div className="search-filter-bar">
              <input type="text" placeholder="Search User" />
              <button>Filter</button>
            </div>
            <table className="user-activity-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Report Submitted</th>
                  <th>Matches Made</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.userId}>
                    <td>{user.userId}</td>
                    <td>{user.name}</td>
                    <td>{user.reportsSubmitted}</td>
                    <td>{user.matchesMade}</td>
                    <td>
                      <Link to={`/user/${user.userId}`}>View</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="more-button">More...</button>
          </div>

          {/* System Health Section */}
          <div className="system-health-section">
            <h2>System Health</h2>
            <div className="health-item">
              <div className="health-title">
                Average Time to Resolve Disputes
              </div>
              <div className="health-value">2.4 days</div>
            </div>
            <div className="health-item">
              <div className="health-title">Match Success Rate</div>
              <div className="health-value">78%</div>
              <div className="health-description">
                (Out of 100 found items, 78 were claimed successfully)
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReportsAnalytics;
