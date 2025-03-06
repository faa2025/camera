import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "./Authentication/AuthContext";

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);
const { isAuthenticated } = useAuth();
const { logout } = useAuth();

  const handleClick = (): void => setClick(!click);
  const closeMobileMenu = (): void => setClick(false);

  const showButton = (): void => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/camera" className="navbar-logo" onClick={closeMobileMenu}>
            FAA Camera
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/camera"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
             {isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-links" onClick={closeMobileMenu}>
                    Dashboard
                  </Link>
                </li>
                
              </>
            )}
            {!isAuthenticated && (
              <li className="nav-item">
                <Link to="/camera/login" className="nav-links-mobile" onClick={closeMobileMenu}>
                  Log In
                </Link>
              </li>
            )}
          </ul>
          {button && (
            isAuthenticated ? (
              <Button buttonStyle="btn--outline" onClick={logout}>Logout</Button>
            ) : (
              <Button buttonStyle="btn--outline">Login</Button>
            )
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
