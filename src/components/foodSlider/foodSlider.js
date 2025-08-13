import React, { useState } from "react";
import Slider from "react-slick";
import "./foodSlider.css";
import kottuRoti from "../../images/foodSlider/kottuRoti.jpg";
import lamprais from "../../images/foodSlider/lampRice.jpg";
import biriyani from "../../images/foodSlider/biriyani.jpg";
import yellowRice from "../../images/foodSlider/yellowRice.jpg";
import hoppers from "../../images/foodSlider/hoppers.jpg";

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
    name: "Kottu Roti",
    description: "Available with Eggs, Checkn, Pork and Prawns",
    image: kottuRoti,
    ingredients: [
      "Chopped roti",
      "Mixed vegetables",
      "Eggs",
      "Onions",
      "Carrots",
      "Sri Lankan spices",
    ],
  },
  {
    id: 2,
    name: "Lamprais",
    description: "Available with Checkn, Pork and Prawns",
    image: lamprais,
    ingredients: [
      "Lapmrais",
      "Cashew Curry",
      "Brinjol Moju",
      "Seeni Sambol",
      "Boiled Egg",
      "Fish Cutlet",
      "Sri Lankan spices",
    ],
  },
  {
    id: 3,
    name: "Biriyani",
    description: "Available with Checkn, Mutton and Prawns",
    image: biriyani,
    ingredients: [
      "Cashew & Green Peas Curry",
      "Minchi Sambol",
      "Raita & Onion Sambol",
      "Boiled Egg",
      "Sri Lankan spices",
    ],
  },
  {
    id: 4,
    name: "Yellow Rice",
    description: "Available with Checkn and Prawns",
    image: yellowRice,
    ingredients: [
      "Yellow Rice",
      "Dhal Curry",
      "Mango Curry",
      "Potato Tempered",
      "Seeni Sambol",
      "Fish Cutlet",
      "Sri Lankan spices",
    ],
  },
  {
    id: 5,
    name: "Hoppers",
    description: "Available with Eggs, Honey, Cheese and Egg Masala",
    image: hoppers,
    ingredients: ["Rice Flour", "Milk", "Sri Lankan spices"],
  },
  // Add more items as needed
];

const FoodSlider = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("Modal state:", {
    isOpen: isModalOpen,
    selectedItem: selectedItem?.name,
  });

  const handleOpenModal = (item) => {
    console.log("Opening modal for item:", item.name);
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    accessibility: true,
    adaptiveHeight: false,
    focusOnSelect: false,
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

            <div className="modal-header">
              <h3>{selectedItem.name}</h3>
              {selectedItem.description && (
                <p className="food-description">{selectedItem.description}</p>
              )}
            </div>
            <div className="modal-content-wrapper">
              <ul className="ingredients-list">
                {selectedItem.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FoodSlider;
