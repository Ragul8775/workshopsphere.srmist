import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the use of "Routes"

import ProjectPage from "./scenes/ProjectPage";
import AdminLogin from "./scenes/AdminLogin";
import AdminRegister from "./scenes/AdminRegister";
import AdminPanel from "./scenes/AdminPanel";
import Homepage from "./scenes/Homepage";
// Import other components for different pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/" element={<Homepage />} />

        
      </Routes>
    </Router>
  );
}

export default App;