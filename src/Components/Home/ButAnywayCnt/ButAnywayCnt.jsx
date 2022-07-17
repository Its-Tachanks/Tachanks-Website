import React, { Component } from 'react';
import "./ButAnywayCnt.css";

class ButAnywayCnt extends Component {
  render() { 
    return (
      <div className="row FadeInLoad">
        <div className="column">
          <h2 style={{ marginBottom: "1rem" }}>Languages I know</h2>
          <img
            src="./images/StuffKnow.png"
            className="StuffKnow"
            alt="Stuff I Know"
          ></img>
        </div>
        {/*<div className="linecolumn"><img src="./images/VertLine.png" alt="Vert line"/></div>*/}
        <div className="column">
          <h2 style={{ marginBottom: "1rem" }}>Other things</h2>
          <embed
            src="https://github-readme-stats.vercel.app/api?username=Its-Tachanks"
            className="GithubEmbed"
          />
        </div>
      </div>
    );
  }
}
 
export default ButAnywayCnt;