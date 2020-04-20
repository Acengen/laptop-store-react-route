import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navi-bar">
      <div>
        <h3>ComputerStore</h3>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <a href="/">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
