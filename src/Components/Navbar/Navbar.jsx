import React, { Component } from "react";
import "./Navbar.css";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render = () => {
    return (
      <nav className="Navbar">
        <Link to="/" className="NavbarTitle">
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
        </Link>
        <ul>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/random">Random</Link>
          </li>
        </ul>
      </nav>
    );
  };
}

export default Navbar;
