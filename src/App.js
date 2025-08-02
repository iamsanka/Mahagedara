import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import "./App.css";
import Experience from "./components/experience/experience";
import FoodSlider from "./components/foodSlider/foodSlider";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Experience />
      <FoodSlider />
      <Contact />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
