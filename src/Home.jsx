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
        <div className="StartSpacer"></div>
        <VideoBg />
        <div className="HomeElements">
          <h1>It's {this.getDay()}!</h1>
          <img
            src="./images/YeahBitch.gif"
            className="YeahBitchGif"
            alt="YeahBitch"
          />

          <div className="Whitespace"></div>
          <img src="./images/Line.png" alt="Line" className="Line" />
          <div className="Whitespace"></div>

          <h1>But anyway...</h1>
          <div className="row">
            <div className="column">
              <h2 style={{ "margin-bottom": "1rem" }}>
                Here's some stuff I know
              </h2>
              <img src="./images/StuffKnow.png" className="StuffKnow"></img>
            </div>
            {/*<div className="linecolumn"><img src="./images/VertLine.png" alt="Vert line"/></div>*/}
            <div className="column">
              <h2 style={{ "margin-bottom": "1rem" }}>Other stuff</h2>
              <embed
                src="https://github-readme-stats.vercel.app/api?username=Its-Tachanks"
                className="GithubEmbed"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
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
        return "Skinny Pete Saturday";
        // eslint-disable-next-line
        break;
      default:
        return "maybe Thursday";
        // eslint-disable-next-line
        break;
    }
  }

  getDayDiff(startDay) {
    var oldDate = new Date(startDay);
    var curDate = new Date();
    var timeDiff = curDate.getTime() - oldDate.getTime();
    var dayDiff = timeDiff / (1000 * 3600 * 24);
    return dayDiff;
  }
}

export default Home;
