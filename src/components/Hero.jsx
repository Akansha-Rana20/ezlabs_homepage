import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Innovate. Build. Scale.</h1>
        <p>
          At EZ Labs, we transform ideas into digital solutions that inspire and empower.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
