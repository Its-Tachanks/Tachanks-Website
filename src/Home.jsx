import React, { Component } from "react";
import $ from "jquery";

// CSS Import
import "./Home.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";
import VideoBg from "./Components/VideoBg/VideoBg";
import Whitespace from "./Components/Whitespace/Whitespace";

// Home-Exclusive Imports
import YeahBitch from "./Components/Home/YeahBitch/YeahBitch"
import ButAnywayCnt from "./Components/Home/ButAnywayCnt/ButAnywayCnt";

class Home extends Component {
  componentDidMount() {
    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".FadeInLoad");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom - 100) {
          $(tag).addClass("visible");
        } else {
          $(tag).removeClass("visible");
        }
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <VideoBg />

        <div className="HomeElements">
          <YeahBitch />

          <div className="FadeInLoad">
            <Whitespace height="2rem" />
            <img src="./images/Line.png" alt="Line" className="Line" />
            <Whitespace height="2rem" />
            <h1>But anyway...</h1>
            <Whitespace height="2rem" />
          </div>

          <ButAnywayCnt />
        </div>
      </React.Fragment>
    );
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
