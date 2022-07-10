import React, { Component } from "react";
import { Link } from "react-router-dom";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (num) => {
    this.setState({ value: this.state.value + num });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Click for balls
        </button>

        <nav>
          <Link to="/games">games</Link>
        </nav>
      </React.Fragment>
    );
  }

  getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value: count } = this.state;
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
  };
}

export default Counter;
