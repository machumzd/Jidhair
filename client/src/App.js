import React from "react";
import Navbar from "./pages/navbar/Navbar"
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.scss"
import auth from "./pages/auth/Signup";
import LandingPage from "./pages/landingPage/LandingPage";
function App() {
  return (
    <Router>
    <div className="app_container">
      <Navbar />
    <LandingPage/>
    </div>
    </Router>
  );
}

export default App;
