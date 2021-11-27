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
            <a href="#">ALL</a>
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="#">Korean</a></li>
              <li><a href="#">HIPHOP</a></li>
              <li><a href="#">ROCK</a></li>
              <li><a href="#">JAZZ</a></li>
            </ul>
          </li>
          <li>
            <a href="#">COMUNITY</a>
            <ul className="js-sub-menu sub-menu">
              <li><a href="#">POST</a></li>
              <li><a href="#">FREE_TALK</a></li>
            </ul>
          </li>
          <li>
            <a href="#">MYPAGE</a>
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="#">MYINFO</a></li>
              <li><a href="#">LOGOUT</a></li>
              <li><a href="#">More</a></li>
            </ul>
          </li>
      </div>

     
    </div>
    </nav>

  );
}

export default App;
