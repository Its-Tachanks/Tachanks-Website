import React, { Component } from "react";

import Navbar from "./Components/Navbar/Navbar";

import "./Games.css"

class Games extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <iframe
          id="slope"
          src="./slope"
          frameborder="0"
        ></iframe>
      </React.Fragment>
    );
  }
}

export default Games;
