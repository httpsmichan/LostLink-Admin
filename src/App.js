import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import UserManagement from "./components/UserManagement";
import PostModeration from "./components/PostModeration";
import DisputeResolution from "./components/DisputeResolution";
import ReportsAnalytics from "./components/ReportsAnalytics";
import Settings from "./components/Settings";
import Display from "./components/Display";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/postmoderation" element={<PostModeration />} />
        <Route path="/disputeresolution" element={<DisputeResolution />} />
        <Route path="/reports" element={<ReportsAnalytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </Router>
  );
}

export default App;
