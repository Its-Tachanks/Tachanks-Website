import React, { Component } from "react";
import sunday from "./weekVideos/sunday.mp4";
import monday from "./weekVideos/monday.mp4";
import tuesday from "./weekVideos/tuesday.mp4";
import wednesday from "./weekVideos/wednesday.mp4";
import thursday from "./weekVideos/thursday.mp4";
import friday from "./weekVideos/friday.mp4";
import saturday from "./weekVideos/saturday.mp4";

import VideoBg from "reactjs-videobg";

class VidBg extends Component {
  state = {
    video: this.getDayOfWeek(),
  };

  render = () => {
    return (
      <div className="videoBg">
        <VideoBg muted={false}>
          <VideoBg.Source src={this.state.video} type="video/mp4" />
        </VideoBg>
        ;
      </div>
    );
  };

  getDayOfWeek() {
    switch (new Date().getDay()) {
      case 0:
        return sunday;
        break;
      case 1:
        return monday;
        break;
      case 2:
        return tuesday;
        break;
      case 3:
        return wednesday;
        break;
      case 4:
        return thursday;
        break;
      case 5:
        return friday;
        break;
      case 6:
        return saturday;
    }
  }
}

export default VidBg;
