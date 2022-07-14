import React, { Component } from "react";

// CSS Import
import "./Home.css";

// Component Imports
import VideoBg from "./Components/VideoBg/VideoBg";
import Navbar from "./Components/Navbar/Navbar";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="HomeWrapper">
          <div className="StartColor"></div>
          <div className="VideoBgDiv">
            <VideoBg />
          </div>
          <div className="ScrollingElement1">
            <h3>balllllllllllllllllll llllls</h3>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
