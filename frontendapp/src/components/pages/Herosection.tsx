import React from "react";
import { Button } from "../Button";
import "./Herosection.css";
import { useAuth } from "../Authentication/AuthContext";

const HeroSection: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="hero-container">
      <video src="/camera/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
       {!isAuthenticated && (
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={() => (window.location.href = "/camera/login")}
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
