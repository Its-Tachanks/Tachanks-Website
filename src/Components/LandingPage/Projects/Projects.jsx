import React, { Component } from 'react';

import Project from './Project/Project';

import "./Projects.css"

class Projects extends Component {
  render() { 
    return (
      <div className="row">
        <ul
          style={{ textAlign: "center", "listStyle": "none" }}
          className="Projects column"
        >
          <li className="proj">
            <Project
              title="Tachanks.xyz"
              link="https://github.com/Its-Tachanks/Tachanks-Website"
              description="This website's repository"
            />
          </li>
        </ul>
        <ul
          style={{ textAlign: "center", "listStyle": "none" }}
          className="Projects column"
        >
          <li className="proj">
            <Project
              title="Bratukha"
              link="https://github.com/Its-Tachanks/Bratukha"
              description="A discord bot I made"
            />
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Projects;