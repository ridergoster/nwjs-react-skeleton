import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from './button';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <br/> <br/>
        <Link to="/Qrcode">
          <Button>Qr Code</Button>
        </Link>
        <Link to="/Idplayer">
          <Button>Id Player</Button>
        </Link>
      </div>
    );
  }
}
export default Home;
