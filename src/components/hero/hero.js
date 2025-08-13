import React, { useState, useEffect } from "react";
import "./hero.css";

// Party Packages Images
import pkg1 from "../../images/packages/pkg1.jpg";
import pkg2 from "../../images/packages/pkg2.jpg";
import pkg3 from "../../images/packages/pkg3.jpg";

// Promotions Images
import promo1 from "../../images/promotions/promo1.jpg";
import promo2 from "../../images/promotions/promo2.jpg";
import promo3 from "../../images/promotions/promo3.jpg";
import promo4 from "../../images/promotions/promo4.jpg";
import promo5 from "../../images/promotions/promo5.jpg";

const Hero = () => {
  const [popupType, setPopupType] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const promotionImages = [promo1, promo2, promo3, promo4, promo5];
  const partyPackageImages = [pkg1, pkg2, pkg3];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = (type) => {
    setPopupType(type);
    setCurrentIndex(0);
    document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
  };

  const closePopup = () => {
    setPopupType(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const getImages = () => {
    if (popupType === "promotions") return promotionImages;
    if (popupType === "packages") return partyPackageImages;
    return [];
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    const images = getImages();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    const images = getImages();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Discover Authentic Sri Lankan Cuisine</h1>
        <p>
          At Maha Gedara, we bring you the rich and vibrant flavors of Sri
          Lanka, crafted from cherished family recipes passed down through
          generations. Our menu celebrates traditional dishes prepared with
          authentic spices and fresh ingredients, available exclusively through
          online orders and catering for your special events.
        </p>
        <div className="hero-buttons">
          <button
            className="secondary-btn"
            onClick={() => window.open("https://wa.me/358451730018", "_blank")}
          >
            Book Catering
          </button>
          <button
            className="secondary-btn"
            onClick={() => openPopup("promotions")}
          >
            Promotions
          </button>
          <button
            className="secondary-btn"
            onClick={() => openPopup("packages")}
          >
            Party Packages
          </button>
        </div>
      </div>

      {popupType && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <button
              className={`slider-btn left ${isMobile ? "mobile" : ""}`}
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <img
              src={getImages()[currentIndex]}
              alt={`${popupType} ${currentIndex + 1}`}
              className="popup-image"
            />
            <button
              className={`slider-btn right ${isMobile ? "mobile" : ""}`}
              onClick={nextSlide}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
