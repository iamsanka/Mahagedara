import React from "react";
import Slider from "react-slick";
import "./foodSlider.css";
//import images
import image1 from "../../images/experience1.jpg";

// Sample data - replace with your actual 20 items
const foodItems = [
  { id: 1, name: "Kottu", image: image1 },
  { id: 2, name: "Traditional Sri Lankan Hoppers", image: image1 },
  { id: 3, name: "Spicy Kottu Roti", image: image1 },
  { id: 4, name: "Spicy Kottu Roti", image: image1 },
  { id: 4, name: "Spicy Kottu Roti", image: image1 },
  // Add all 20 items here...
];

const FoodSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centermode: false,
    focusOnSelect: true,
    //add space between slides
    variableWidth: false,
    //set gap between slides
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="food-slider-section">
      <h2 className="section-title">Our Signature Dishes</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {foodItems.map((item) => (
            <div key={item.id} className="food-item">
              <div className="food-item-content">
                <h3 className="food-name">{item.name}</h3>
                <div className="food-image-container">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="food-image"
                  />
                </div>
                <button className="ingredients-btn">View Ingredients</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FoodSlider;
