import React from "react";
import { Button } from "../Button";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
