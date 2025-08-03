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
            Who We Are
          </a>
        </li>
        <li>
          <a href="#food-slider" onClick={() => setIsMenuOpen(false)}>
            Our Foods
          </a>
        </li>
        <li>
          <a href="#events-slider" onClick={() => setIsMenuOpen(false)}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
