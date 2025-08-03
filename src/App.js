import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import "./App.css";
import Experience from "./components/experience/experience";
import FoodSlider from "./components/foodSlider/foodSlider";
import Contact from "./components/Contact/contact";
import Events from "./components/Events/events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <FoodSlider />
      <Events />
      <Contact />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
