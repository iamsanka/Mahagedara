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
        <div className="experience-image">
          <img src={cuisineImg} alt="Authentic Sri Lankan Cuisine" />
        </div>
        <div className="experience-content">
          <h1>Authentic Sri Lankan Cuisine</h1>
          <p>
            At Sand, we take pride in serving dishes crafted from treasured
            family recipes passed down through generations. Each meal is
            thoughtfully prepared using authentic Sri Lankan spices and fresh
            ingredients to ensure every bite is a celebration of genuine
            flavors. Our menu features classics like hoppers, kottu, and
            curries, offering a real taste of Sri Lanka right at your table.
          </p>
          <a href="#" className="explore-btn">
            Explore more
          </a>
        </div>
      </div>

      {/* Section 2 */}
      <div className="experience-row reverse">
        <div className="experience-image">
          <img src={diningImg} alt="Family Dining Experience" />
        </div>
        <div className="experience-content">
          <h2>A True Family Dining Experience</h2>
          <p>
            Sand is more than just a restaurant—it's a place where families and
            friends gather to share delicious meals and create lasting memories.
            Our warm and inviting atmosphere reflects the spirit of Sri Lankan
            hospitality, encouraging guests to relax and connect over generous
            platters and hearty portions.
          </p>
          <a href="#" className="explore-btn">
            Explore more
          </a>
        </div>
      </div>

      {/* Section 3 */}
      <div className="experience-row">
        <div className="experience-image">
          <img src={cookingImg} alt="Traditional Cooking Methods" />
        </div>
        <div className="experience-content">
          <h2>Traditional Cooking Methods</h2>
          <p>
            We preserve the authentic Sri Lankan cooking techniques that have
            been perfected over centuries. Our chefs use traditional clay pots
            and wood-fired ovens to create flavors that can't be replicated with
            modern appliances. Experience the difference that time-honored
            methods make in bringing out the deepest, most authentic flavors.
          </p>
          <a href="#" className="explore-btn">
            Explore more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
