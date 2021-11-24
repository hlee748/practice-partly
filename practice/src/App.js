import React from "react";
import './App.css';

function App() {
  return (
    <nav>
    <div id="navbar">
      <div className="logo"><a href="#">DONUT</a></div>
        <div className="nav-links">
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">HTML & CSS</a>
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Form</a></li>
              <li><a href="#">Card Design</a></li>
              <li><a href="#">More</a></li>
            </ul>
          </li>
          <li>
            <a href="#">JAVASCRIPT</a>
            <ul className="js-sub-menu sub-menu">
              <li><a href="#">Dynamic Calculator</a></li>
              <li><a href="#">Form Validation</a></li>
              <li><a href="#">Calendar</a></li>
              <li><a href="#">Digital Clock</a></li>
            </ul>
          </li>
          <li>
            <a href="#">ABOUT US</a>
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Form</a></li>
              <li><a href="#">Card Design</a></li>
              <li><a href="#">More</a></li>
            </ul>
          </li>
      </div>

     
    </div>
    </nav>
  );
}

export default App;
