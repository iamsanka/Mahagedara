import React, { useState } from "react";
import Slider from "react-slick";
import "./foodSlider.css";
import image1 from "../../images/experience1.jpg";

// Add these arrow components at the top of your file (after imports)
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "-25px" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "-25px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const foodItems = [
  {
    id: 1,
    name: "Kottu",
    image: image1,
    ingredients: [
      "Chopped roti",
      "Mixed vegetables",
      "Eggs",
      "Chicken or beef (optional)",
      "Carrots, leeks, and cabbage",
      "Sri Lankan curry powder",
      "Chili flakes",
      "Soy sauce",
      "Salt to taste",
    ],
  },
  {
    id: 2,
    name: "Traditional Sri Lankan Hoppers",
    image: image1,
    ingredients: [
      "Rice flour",
      "Coconut milk",
      "Yeast",
      "Sugar",
      "Salt",
      "Warm water",
      "Pandan leaf (for fragrance)",
    ],
  },
  {
    id: 3,
    name: "Spicy Kottu Roti",
    image: image1,
    ingredients: [
      "Fresh godamba roti",
      "Chicken or mutton",
      "Garlic and ginger paste",
      "Green chilies",
      "Curry leaves",
      "Onions",
      "Tomatoes",
      "Sri Lankan roasted curry powder",
    ],
  },
  {
    id: 3,
    name: "Spicy Kottu Roti",
    image: image1,
    ingredients: [
      "Fresh godamba roti",
      "Chicken or mutton",
      "Garlic and ginger paste",
      "Green chilies",
      "Curry leaves",
      "Onions",
      "Tomatoes",
      "Sri Lankan roasted curry powder",
    ],
  },
  // Add more items as needed
];

const FoodSlider = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    variableWidth: false,
    cssEase: "ease",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <section className="food-slider-section" id="food-slider">
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
                <button
                  className="ingredients-btn"
                  onClick={() => handleOpenModal(item)}
                >
                  View Ingredients
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Ingredients Modal */}
      {isModalOpen && selectedItem && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="ingredients-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={handleCloseModal}>
              &times;
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="modal-food-image"
            />

            <h3>{selectedItem.name} Ingredients</h3>
            <ul className="ingredients-list">
              {selectedItem.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-text">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodSlider;
