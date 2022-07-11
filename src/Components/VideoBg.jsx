import React, { Component } from "react";

class VideoBg extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <video autoplay loop id="VideoBg">
          <source src={this.getDay}></source>
        </video>
        <h1>hi</h1>
      </React.Fragment>
    );
  }

  getDay() {
    switch (new Date().getDay()) {
      case 0:
        return "./WeekVideos/sunday.mp4";
        // eslint-disable-next-line
        break;
      case 1:
        return "./WeekVideos/monday.mp4";
        // eslint-disable-next-line
        break;
      case 2:
        return "./WeekVideos/tuesday.mp4";
        // eslint-disable-next-line
        break;
      case 3:
        return "./WeekVideos/wednesday.mp4";
        // eslint-disable-next-line
        break;
      case 4:
        return "./WeekVideos/thursday.mp4";
        // eslint-disable-next-line
        break;
      case 5:
        return "./WeekVideos/friday.mp4";
        // eslint-disable-next-line
        break;
      case 6:
        return "./WeekVideos/saturday.mp4";
        // eslint-disable-next-line
        break;
      default:
        return "./WeekVideos/sunday.mp4";
        // eslint-disable-next-line
        break;
    }
  }
}

export default VideoBg;
