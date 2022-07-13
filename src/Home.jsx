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
        <VideoBg />
      </React.Fragment>
    );
  }
}

export default Home;
