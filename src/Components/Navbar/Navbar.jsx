import React, { Component } from "react";
import "./Navbar.css";
import ReactTypingEffect from "react-typing-effect";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render = () => {
    return (
      <React.Fragment>
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
              cursor="_"
            />
          </Link>
          <ul>
            <li>
              <NavLink to="/games">Games</NavLink>
            </li>
            <li>
              <NavLink to="/random">Random</NavLink>
            </li>
          </ul>
        </nav>
        <div className="NavbarSpacer"></div>
      </React.Fragment>
    );
  };
}

export default Navbar;
