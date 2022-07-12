import React, { Component } from "react";

import "./Css/Home.css";
import VideoBg from "./Components/VideoBg";

class Home extends Component {
  render() {
    return (
      <div className="HomeDiv">
        <VideoBg />
        <button onClick={this.playVid}>Balls</button>
      </div>
    );
  }
}

export default Home;
