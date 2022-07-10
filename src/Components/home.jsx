import React, { Component } from "react";
import VidBg from "./VidBg";
import Counters from "./counters";

class Home extends Component {
  state = {
    stuff: [Counters, VidBg],
  };
  render = () => {
    return (
      <React.Fragment>
        {this.state.stuff.map((item) => (
          <item></item>
        ))}
      </React.Fragment>
    );
  };
}

export default Home;
