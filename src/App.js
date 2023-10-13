import React from "react";
import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="flex-wrapper">
        <div className="container">
          <div className="App">
            <Carousel />
          </div>
        </div>
      <div className="footer footer-grid"> 

        <div> Contact us </div>
        <div> Hire us</div>
        <div> Give us feedback! </div>
        <div> Careers </div>

      </div>
  </div>
  );
}

export default App;
