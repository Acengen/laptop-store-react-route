import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navi-bar">
      <div>
        <h3>
          <Link className="pc" to="/">
            ComputerStore
          </Link>
        </h3>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
