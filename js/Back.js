import React, { Component } from 'react';
import { Link } from 'react-router';
import Button from './button';

class Back extends Component {
  render() {
    return (
      <Link to="/">
        <Button>Precedent</Button>
      </Link>
    );
  }
}
export default Back;
