import React, { Component } from 'react';

import "./Whitespace.css"

class Whitespace extends Component {
  render() { 
    return (
      <div className="Whitespace" style={{ "height": this.props.height}}></div>
    );
  }
}
 
export default Whitespace;