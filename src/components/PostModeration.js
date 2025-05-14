import React, { useState } from "react";
import "./PostModeration.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaFileAlt,
  FaExclamationTriangle,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const PostModeration = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Added useNavigate for programmatic navigation
  const [posts, setPosts] = useState([
    {
      postId: "P12346",
      thumbnail:
        "https://i.pinimg.com/736x/92/af/58/92af58b14f97ae693b2d53c3ff1f78e8.jpg",
      title: "Lost Brown Wallet",
      postedBy: "John Doe",
      dateTime: "04/05/2025 11:51 pm",
      location: "at the Ha...",
      status: "Pending",
      actions: "View",
    },
    {
      postId: "P12345",
      thumbnail:
        "https://i.pinimg.com/736x/77/31/4a/77314ad66a4f20affc33ffb2e078d079.jpg",
      title: "Found Brown Wallet",
      postedBy: "Ellen Joe",
      dateTime: "04/05/2025 11:56 pm",
      location: "at the Ha...",
      status: "Pending",
      actions: "View",
    },
    {
      postId: "P12344",
      thumbnail:
        "https://i.pinimg.com/736x/89/dc/54/89dc54439974a0937d6919e1bc3686c5.jpg",
      title: "Found Brown Wallet",
      postedBy: "Carl Jack",
      dateTime: "01/05/2025 6:45 pm",
      location: "at the Cla...",
      status: "Claimed!",
      actions: "View",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(posts.slice(0, 3));

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Implement actual search filtering logic here
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn"); // Clear session data
    navigate("/login"); // Redirect to login page after logout
  };

  const handleFilterClick = () => {
    console.log("Filter clicked");
    // Implement filter logic here
  };

  const loadMore = () => {
    if (loadingMore || allPostsLoaded) return;
    setLoadingMore(true);
    setTimeout(() => {
      const nextPosts = posts.slice(
        visiblePosts.length,
        visiblePosts.length + 3
      );
      setVisiblePosts([...visiblePosts, ...nextPosts]);
      setLoadingMore(false);
      if (visiblePosts.length + nextPosts.length === posts.length) {
        setAllPostsLoaded(true);
      }
    }, 500);
  };

  return (
    <div className="post-moderation-container">
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
          <h1>Post Moderation</h1>
        </header>

        <div className="moderation-controls">
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

        <div className="post-table-container">
          <table className="post-table">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Posted By</th>
                <th>Date/Time</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {visiblePosts.map((post) => (
                <tr key={post.postId}>
                  <td>{post.postId}</td>
                  <td>
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="thumbnail"
                    />
                  </td>
                  <td>{post.title}</td>
                  <td>{post.postedBy}</td>
                  <td>{post.dateTime}</td>
                  <td>{post.location}</td>
                  <td
                    className={`status-${post.status
                      .toLowerCase()
                      .replace("!", "")}`}
                  >
                    {post.status}
                  </td>
                  <td>
                    <Link to={`/post/${post.postId}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {!allPostsLoaded && (
          <button
            className="load-more-button"
            onClick={loadMore}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "More..."}
          </button>
        )}
      </main>
    </div>
  );
};

export default PostModeration;
