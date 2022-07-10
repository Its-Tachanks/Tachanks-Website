import React, { Component } from "react";

class Game extends Component {
  render() {
    return (
      <div>
        <iframe
          src="https://y8.com/embed/slope"
          scrolling="no"
          style={{
            width: "960px",
            height: "600px",
            border: 0,
            margin: 0,
            padding: 0,
          }}
          title="Game"
        ></iframe>
      </div>
    );
  }
}

export default Game;
