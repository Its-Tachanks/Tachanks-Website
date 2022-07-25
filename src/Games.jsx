import React, { Component } from "react";

import Navbar from "./Components/Navbar/Navbar";

import "./Games.css"

class Games extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <embed id="slope" src="./games/subway" frameBorder="0"></embed>
        <div className="thing">
          <button onClick={() => this.goFullScreen()}>Fullscreen</button>
        </div>
      </React.Fragment>
    );
  }

  goFullScreen() {
    var elem = document.getElementById("slope");

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
}

export default Games;
