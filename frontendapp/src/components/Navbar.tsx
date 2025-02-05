import React, { useState, useEffect } from "react";
import { Button as MuiButton } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonStyle?: string;
  buttonSize?: string;
};

const STYLE = ["btn--primary", "btn--outline"];
const SIZE = ["btn--medium", "btn--large"];

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle || "")
    ? buttonStyle
    : STYLE[0];
  const checkButtonSize = SIZE.includes(buttonSize || "")
    ? buttonSize
    : SIZE[0];

  return (
    <Link to="/signup" className="btn-mobile">
      <MuiButton
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </MuiButton>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

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
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          FAA CAMERA
          <i className="fab fa-typo3" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
