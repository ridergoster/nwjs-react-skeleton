import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'

class Button extends Component {
  render() {
    return (
      <div>
        <br/><br/>
        <button className="btn">{ this.props.children }</button>
      </div>
    );
  }
}
export default Button;
