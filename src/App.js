import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement"; // ✅ Added

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/usermanagement" element={<UserManagement />} />{" "}
          {/* ✅ New Route */}
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2 style={{ color: "black" }}>Welcome to the Admin Panel</h2>
                <button onClick={() => (window.location.href = "/login")}>
                  Go to Login
                </button>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
