import React, { Component } from "react";
import $ from "jquery";

// CSS Import
import "./LandingPage.css";

// Component Imports
import Navbar from "./Components/Navbar/Navbar";
import Bg from "./Components/LandingPage/Video/Video";
import Whitespace from "./Components/Whitespace/Whitespace";

// LandingPage-Exclusive Imports
import YeahBitch from "./Components/LandingPage/YeahBitch/YeahBitch"
import ButAnywayCnt from "./Components/LandingPage/ButAnywayCnt/ButAnywayCnt";
import Projects from "./Components/LandingPage/Projects/Projects";

class LandingPage extends Component {
  componentDidMount() {
    $(document).on("scroll", function () {
      var pageTop = $(document).scrollTop();
      var pageBottom = pageTop + $(window).height();
      var tags = $(".FadeInLoad");

      for (var i = 0; i < tags.length; i++) {
        var tag = tags[i];
        if ($(tag).position().top < pageBottom - 30) {
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
        <Bg />

        <div className="LandingPageElements">
          <Whitespace height="2.8rem" />
          <YeahBitch />

          <div className="FadeInLoad">
            <Whitespace height="2rem" />
            <img src="./images/Line.png" alt="Line" className="Line" />
            <Whitespace height="2rem" />
            <h3>But anyway...</h3>
            <Whitespace height="2rem" />
          </div>

          <ButAnywayCnt />

          <div className="FadeInLoad">
            <Whitespace height="2rem" />
            <img src="./images/Line.png" alt="Line" className="Line" />
            <Whitespace height="2rem" />
            <h1 style={{ marginBottom: "1rem" }}>Projects</h1>
          </div>

          <div className="FadeInLoad">
            <Projects />
          </div>
          <Whitespace height="4rem" />
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

export default LandingPage;
