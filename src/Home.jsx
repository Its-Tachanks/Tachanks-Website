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
        <div className="Spacer"></div>
        <VideoBg />
        <div className="HomeElements">
          <h1 className="DayHeader">It's {this.getDay()}!</h1>
          <img src="./images/YeahBitch.gif" className="YeahBitchGif" />
          
          <div className="FunSpacer"></div>

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
