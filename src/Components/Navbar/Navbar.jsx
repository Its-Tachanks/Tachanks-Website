import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="Navbar">
        <a href="/" className="NavbarTitle">
          <img
            src="./images/NavbarLogo.png"
            alt="Navbar Logo"
            className="NavbarLogo"
          />
          Tachanks.xyz
        </a>
        <ul>
          <li>
            <a href="/games">Games</a>
          </li>
          <li>
            <a href="/random">Random</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
