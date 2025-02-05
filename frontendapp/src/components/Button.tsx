import React, { ReactNode } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  buttonStyle?: "btn--primary" | "btn--outline" | "btn--test";
  buttonSize?: "btn--medium" | "btn--large";
};

const STYLES: ButtonProps["buttonStyle"][] = ["btn--primary", "btn--outline"];
const SIZES: ButtonProps["buttonSize"][] = ["btn--medium", "btn--large"];

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle =
    buttonStyle && STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize =
    buttonSize && SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
