import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Discover Authentic Sri Lankan Cuisine</h1>
        <p>
          At Maha Gedara, we bring you the rich and vibrant flavors of Sri
          Lanka, crafted from cherished family recipes passed down through
          generations. Our menu celebrates traditional dishes prepared with
          authentic spices and fresh ingredients.
        </p>
        <div className="hero-buttons">
          <button className="primary-btn">Explore Our Menu</button>
          <button className="secondary-btn">Book a Table</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
