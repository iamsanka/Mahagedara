import React from "react";
import "./experience.css";
import cuisineImg from "../../images/experience1.jpg";
import diningImg from "../../images/experience2.jpg";
import cookingImg from "../../images/experience3.jpg";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      {/* Section 1 */}
      <div className="experience-row">
        <div className="experience-content">
          <h1>Our Story</h1>
          <p>
            Founded on January 2nd, 2023, in Jyväskylä, Finland, our catering
            journey began with a simple but heartfelt goal, to bring the
            authentic taste of Sri Lanka to those living far from home. Inspired
            by the longing for familiar flavors, we set out to serve the Sri
            Lankan community in Finland with the comforting dishes they grew up
            with. Whether it’s a spicy curry, a warm roti, or a traditional
            sweet, our mission is to recreate the essence of home through food
            rich in culture, made with love, and always full of flavor.
          </p>
          {/*<a href="#" className="explore-btn">
            Explore more
          </a>*/}
        </div>
        <div className="experience-image">
          <img src={cuisineImg} alt="Authentic Sri Lankan Cuisine" />
        </div>
      </div>

      {/* Section 2 */}
      <div className="experience-row reverse">
        <div className="experience-content">
          <h2>Authentic Sri Lankan Cuisine</h2>
          <p>
            At the heart of our catering service is a deep commitment to
            delivering truly authentic Sri Lankan cuisine. Every dish we prepare
            reflects the vibrant flavors, bold spices, and rich culinary
            traditions of Sri Lanka. From fragrant rice and curry to savory
            street food favorites, our menu is crafted to evoke the tastes and
            aromas that remind you of home. Whether you're craving a comforting
            bowl of dhal or a spicy chicken curry, we use traditional recipes
            and hand-picked ingredients to ensure every bite captures the
            essence of Sri Lankan cooking just the way it’s meant to be.
          </p>
          {/*<a href="#" className="explore-btn">
            Explore more
          </a>*/}
        </div>
        <div className="experience-image">
          <img src={diningImg} alt="Family Dining Experience" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="experience-row">
        <div className="experience-content">
          <h2>Traditional Cooking Methods</h2>
          <p>
            We proudly preserve the traditional cooking methods that give Sri
            Lankan food its unique depth and character. From slow-cooked curries
            simmered with layers of spices to time honored techniques like
            tempering, roasting, and steaming, every dish is prepared with care
            and authenticity. We believe that the soul of Sri Lankan cuisine
            lies in these age-old practices passed down through generations
            which bring out the rich flavors and aromas that can’t be rushed.
            Our kitchen stays true to these roots, offering you a taste
            experience that’s as genuine as it is unforgettable.
          </p>
          {/*<a href="#" className="explore-btn">
            Explore more
          </a>*/}
        </div>
        <div className="experience-image">
          <img src={cookingImg} alt="Traditional Cooking Methods" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
