import React, { useState } from "react";
import "./navbar.css";
import logo from "../../images/Logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div
        className="logo-container"
        onClick={scrollToHero}
        style={{ cursor: "pointer" }}
      >
        <img src={logo} alt="Maha Gedara Logo" className="logo-img" />
        <div className="logo-text">
          <span className="main-text">MAHA GEDARA</span>
          <span className="sub-text">
            The Real Authentic Sri Lankan Cuisine
          </span>
        </div>
      </div>

      {/* Mobile menu button */}
      <div
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            Products
          </a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Gallery</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
