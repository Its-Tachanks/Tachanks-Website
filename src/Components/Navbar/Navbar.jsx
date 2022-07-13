import React, { Component } from "react";
import "./Navbar.css";
import ReactTypingEffect from "react-typing-effect";

class Navbar extends Component {
  render = () => {
    return (
      <nav className="Navbar">
        <a href="/" className="NavbarTitle">
          <img
            src="./images/NavbarLogo.png"
            alt="Navbar Logo"
            className="NavbarLogo"
          />
          <ReactTypingEffect
            text={["Tachanks.xyz"]}
            eraseSpeed="100"
            typingDelay="2000"
          />
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
  };
}

export default Navbar;
