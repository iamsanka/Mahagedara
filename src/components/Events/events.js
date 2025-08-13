// events.js
import React from "react";
import Slider from "react-slick";
import "./events.css"; // Import the styles

// Generate image paths dynamically
const imageCount = 26; // You can adjust this if you add more images
const images = Array.from({ length: imageCount }, (_, i) => ({
  src: require(`../../images/events/event${i + 1}.jpg`),
  alt: `Event ${i + 1}`,
}));

const EventsSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    fade: true,
    adaptiveHeight: true, // This helps with varying image heights
  };

  return (
    <div className="slider-container" id="events-slider">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div className="slide" key={index}>
            <img src={img.src} alt={img.alt} className="event-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventsSlider;
