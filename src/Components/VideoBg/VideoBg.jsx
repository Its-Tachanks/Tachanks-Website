import React, { Component } from "react";

import "./VideoBg.css";

class VideoBg extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <video
          autoPlay
          loop
          muted
          id="VideoBg"
          className="VideoBg"
          onClick={() => this.unmuteVid()}
        >
          <source src={this.getDay()} type="video/webm" />
          Video dont work for you
        </video>
      </React.Fragment>
    );
  }

  unmuteVid = () => {
    var vid = document.getElementById("VideoBg");
    vid.muted = false;
  };

  getDay() {
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
}

export default VideoBg;