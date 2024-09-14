import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Card from "./component/card";
import Food from "./component/Food";
import Mealitem from "./component/Mealitem";
// import '.App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card/>
      <Food/>
    </>
  );
}

export default App;
