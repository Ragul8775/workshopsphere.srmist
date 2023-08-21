import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the use of "Routes"

import ProjectPage from "./scenes/ProjectPage";
import AdminLogin from "./scenes/AdminLogin";
import AdminRegister from "./scenes/AdminRegister";
import AdminPanel from "./scenes/AdminPanel";
import Homepage from "./scenes/Homepage";
import Navbar from "./components/Navbar";
import PostPage from "./scenes/PostPage";
// Import other components for different pages

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>
        <Route path="/project-page" element={<ProjectPage />} />
        <Route path="/admin" element={isLoggedIn ? <AdminPanel /> : <AdminLogin setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/admin-register" element={<AdminRegister />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/projects/:id" element={<PostPage/>}/>

        
      </Routes>
    </Router>
  );
}

export default App;