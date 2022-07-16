import React, { Component } from 'react';

import "./Project.css"

class Project extends Component {
  render() { 
    return (
      <React.Fragment>
        <a href={this.props.link}>{this.props.title}</a>
        <p>{this.props.description}</p>
      </React.Fragment>
    );
  }
}
 
export default Project;