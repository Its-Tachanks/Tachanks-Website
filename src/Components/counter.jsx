import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["ball 1", "ball 2", "ball 3"],
  };

  render() {
    // const { imageUrl } = this.state;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Click for balls</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
