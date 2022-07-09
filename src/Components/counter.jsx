import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["ball 1", "ball 2", "ball 3", "ball 4"],
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.formatCount = this.formatCount.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Click for balls
        </button>
        <ul>
          {this.state.tags.length === 4 ? (
            this.state.tags.map((tag) => <li key={tag}>{tag}</li>)
          ) : (
            <p>it isnt 4 long</p>
          )}
        </ul>
        <iframe
          src="https://y8.com/embed/slope"
          scrolling="no"
          width="960"
          height="600"
        />
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
    let exNum = ``;
    if (count === 0) {
      return "Zero balls.";
    } else if (count === 1) {
      return "1 ball!";
    } else {
      for (let i = 0; i < count; i++) {
        exNum += `!`;
      }
      return count + ` balls` + exNum;
    }
  }
}

export default Counter;
