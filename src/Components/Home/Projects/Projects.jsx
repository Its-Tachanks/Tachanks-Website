import React, { Component } from 'react';

import Project from './Project/Project';

import "./Projects.css"

class Projects extends Component {
  render() { 
    return (
      <React.Fragment>
        <h1 style={{ marginBottom: "1rem" }}>Projects</h1>
        <div className="row">
          <ul
            style={{ textAlign: "center", "list-style": "none" }}
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
            style={{ textAlign: "center", "list-style": "none" }}
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
      </React.Fragment>
    );
  }
}
 
export default Projects;