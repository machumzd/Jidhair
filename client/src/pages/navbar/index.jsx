import React from 'react';
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_left  ps-3 pb-1 pt-1">
        <h1 className="navbar_title">Jidhair
          <div className="nowrap ps-2">
            <span>the root of Employment</span>
          </div>
        </h1>
      </div>

      <div className="navbar_right me-3">
        <button className="navbar_right-button1 ps-4 p-2 pe-4 me-2 ">
          Login
        </button>
        <button className="navbar_right-button2 p-2 ps-4 pe-4 ">Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
