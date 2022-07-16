import React, { Component } from "react";
import $ from "jquery"
// eslint-disable-next-line

import "./Video.css";

class Bg extends Component {
  render() {
    return (
      <div className="BgDiv">
        <video
          autoPlay
          loop
          muted
          className="Bg"
          id="Bg"
          onClick={() => this.unmuteVid()}
          tooltip="Click to unmute"
        >
          <source src={this.getDayVid()} type="video/webm" />
          Video dont work for you
        </video>
        {/*<img src={this.getDayGif()} alt="Background Day GIF" className="Bg"/>*/}
        <div className="BgOverlay" onClick={() => this.unmuteVid()}>
          <div className="BgTitle"></div>
        </div>
      </div>
    );
  }

  getDay() {
    switch (new Date().getDay()) {
      case 0:
        return "Saul Sunday";
        // eslint-disable-next-line
        break;
      case 1:
        return "Mike Monday";
        // eslint-disable-next-line
        break;
      case 2:
        return "Tuco Tuesday";
        // eslint-disable-next-line
        break;
      case 3:
        return "Walter Wednesday";
        // eslint-disable-next-line
        break;
      case 4:
        return "Ted Thursday";
        // eslint-disable-next-line
        break;
      case 5:
        return "Freaky Fring Friday";
        // eslint-disable-next-line
        break;
      case 6:
        return "Salamanca Saturday";
        // eslint-disable-next-line
        break;
      default:
        return "maybe Thursday";
        // eslint-disable-next-line
        break;
    }
  }

  unmuteVid = () => {
    var vid = document.getElementById("Bg");
    if (vid.muted) {
      vid.muted = false;
    } else if (!vid.muted) {
      vid.muted = true;
      vid.playbackRate += 0.25;
    }
  };

  getDayVid() {
    switch (new Date().getDay()) {
      case 0:
        return process.env.PUBLIC_URL + "/WeekVideos/sunday.webm";
        // eslint-disable-next-line
        break;
      case 1:
        return process.env.PUBLIC_URL + "/WeekVideos/monday.webm";
        // eslint-disable-next-line
        break;
      case 2:
        return process.env.PUBLIC_URL + "/WeekVideos/tuesday.webm";
        // eslint-disable-next-line
        break;
      case 3:
        return process.env.PUBLIC_URL + "/WeekVideos/wednesday.webm";
        // eslint-disable-next-line
        break;
      case 4:
        return process.env.PUBLIC_URL + "/WeekVideos/thursday.webm";
        // eslint-disable-next-line
        break;
      case 5:
        return process.env.PUBLIC_URL + "/WeekVideos/friday.webm";
        // eslint-disable-next-line
        break;
      case 6:
        return process.env.PUBLIC_URL + "/WeekVideos/saturday.webm";
        // eslint-disable-next-line
        break;
      default:
        return process.env.PUBLIC_URL + "/WeekVideos/sunday.webm";
        // eslint-disable-next-line
        break;
    }
  }
  getDayGif() {
    switch (new Date().getDay()) {
      case 0:
        return process.env.PUBLIC_URL + "/WeekGifs/sunday.gif";
        // eslint-disable-next-line
        break;
      case 1:
        return process.env.PUBLIC_URL + "/WeekGifs/monday.gif";
        // eslint-disable-next-line
        break;
      case 2:
        return process.env.PUBLIC_URL + "/WeekGifs/tuesday.gif";
        // eslint-disable-next-line
        break;
      case 3:
        return process.env.PUBLIC_URL + "/WeekGifs/wednesday.gif";
        // eslint-disable-next-line
        break;
      case 4:
        return process.env.PUBLIC_URL + "/WeekGifs/thursday.gif";
        // eslint-disable-next-line
        break;
      case 5:
        return process.env.PUBLIC_URL + "/WeekGifs/friday.gif";
        // eslint-disable-next-line
        break;
      case 6:
        return process.env.PUBLIC_URL + "/WeekGifs/saturday.gif";
        // eslint-disable-next-line
        break;
      default:
        return process.env.PUBLIC_URL + "/WeekGifs/sunday.gif";
        // eslint-disable-next-line
        break;
    }
  }
}

export default Bg;
