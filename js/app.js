import React, { Component } from 'react';
import update from 'react-addons-update';
import { Router, Route, Link } from 'react-router'
import QrCode from './qrcode'
import Button from './button'
import Home from './home'
import Idplayer from './idplayer'

class App extends Component {
  clickHandler() {
    console.log('test');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="logo-header.707b1987.png" className="Appy" />
          <h2>Smash Bros 4 Tournament </h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
