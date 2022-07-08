import React, { Component } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../firebase";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    // const { imageUrl } = this.state;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "caution" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
