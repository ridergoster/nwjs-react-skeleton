import React, { Component } from 'react';
import Back from './back';

class Idplayer extends Component {
  render() {
    return (
      <div>
        <h2>Idplayer</h2>
        { this.props.children }
        <br/><br/><br/><br/><br/><br/><input type="text" />;
        <Back />
      </div>
    );
  }
}
export default Idplayer;
