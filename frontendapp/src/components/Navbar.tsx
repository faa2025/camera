import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav
        className="navbar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            FAA Camera
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
