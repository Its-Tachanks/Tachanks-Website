import React, { Component } from "react";

// CSS Import
import "./Css/Home.css";

// Component Imports
import VideoBg from "./Components/VideoBg";
import Navbar from "./Components/Navbar";

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
