import React from "react";
import Navbar from "Pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import LandingPage from "Pages/LandingPage";
import AppRouter from "Routes";
function App() {
  return (
    <>
      <AppRouter />
    </>
    //   <Router>
    //   <div className="app_container">
    //     <Navbar />
    //   <LandingPage/>
    //   </div>
    //   </Router>
  );
}

export default App;
