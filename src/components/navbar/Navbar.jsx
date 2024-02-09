import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="" />
          <span>Dashboard</span>
        </div>
        <div className="icons">
          <img src="/search.svg" alt="" className="icon" />
          <img src="/app.svg" alt="" className="icon" />
          <img src="/expand.svg" alt="" className="icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="" className="icon" />
            <span>1</span>
          </div>
          <div className="user">
            <img src="/user.svg" alt="" className="icon" />
            <span>Kapil</span>
          </div>
          <img src="/settings.svg" alt="" className="icon" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
