import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">EZ Labs</div>
      <div className={`nav-links ${open ? "active" : ""}`}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
