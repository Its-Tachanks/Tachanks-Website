import React, { Component } from 'react';

import "./YeahBitch.css"

class YeahBitch extends Component {
  render() { 
    return (
      <section className="FadeInLoad">
        <h1>It's {this.getDay()}!</h1>
      </section>
    );
  }

  getDay() {
    switch (new Date().getDay()) {
      case 0:
        return "Saul Sunday";
        // eslint-disable-next-line
        break;
      case 1:
        return "Mike Monday";
        // eslint-disable-next-line
        break;
      case 2:
        return "Tuco Tuesday";
        // eslint-disable-next-line
        break;
      case 3:
        return "Walter Wednesday";
        // eslint-disable-next-line
        break;
      case 4:
        return "Ted Thursday";
        // eslint-disable-next-line
        break;
      case 5:
        return "Freaky Fring Friday";
        // eslint-disable-next-line
        break;
      case 6:
        return "Skinny Pete Saturday";
        // eslint-disable-next-line
        break;
      default:
        return "maybe Thursday";
        // eslint-disable-next-line
        break;
    }
  }
}
 
export default YeahBitch;