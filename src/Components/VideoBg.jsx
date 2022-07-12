import React, { Component } from "react";

class VideoBg extends Component {
  state = {};
  render() {
    return (
      <div>
        <video width="100%" playsinline autoplay muted loop id="VideoBg">
          <source src={this.getDay()} type="video/webm" />
          Video dont work for you
        </video>
        <script> document.getElementById('VideoBg').play(); </script>
      </div>
    );
  }

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
