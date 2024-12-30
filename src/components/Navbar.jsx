import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_items">Portfolio</div>

      {/* Toggle Button for Small Screens */}
      <div className="nav_toggle" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`right ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" className="nav_items">Home</a>
        <a href="#experience" className="nav_items">Experience</a>
        <a href="#skills" className="nav_items">Skills</a>
        <a href="#projects" className="nav_items">Projects</a>
        <a href="#contact" className="nav_items">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
