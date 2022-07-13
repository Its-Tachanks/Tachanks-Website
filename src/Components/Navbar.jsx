import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="Navbar" id="Navbar">
        <a href="/">
          <img
            src="images/NavbarLogo.png"
            alt="Navbar Logo"
            className="NavbarLogo"
          />
        </a>
        <a href="/" className="NavbarTitle">
          Navbar Title
        </a>
        <ul>
          <li className="Active">
            <a href="/games">Games</a>
          </li>
          <li>
            <a href="/random">Random Stuff</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
