import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (num) => {
    this.setState({ value: this.state.value + num });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        ></button>
      </div>
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
      return "Zero .";
    } else if (count === 1) {
      return "1 !";
    } else {
      for (let i = 0; i < count; i++) {
        exNum += `!`;
      }
      return count + ` ` + exNum;
    }
  };
}

export default Counter;
