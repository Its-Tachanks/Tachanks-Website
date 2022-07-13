import React, { Component } from "react";

// CSS Import
import "./CSS/Home.css";

// Component Imports
import VideoBg from "./Components/VideoBg/VideoBg";
import Navbar from "./Components/Navbar/Navbar";

class Home extends Component {
  render() {
    return (
      <div className="HomeDiv">
        <Navbar />
        <VideoBg />
      </div>
    );
  }
}

export default Home;
