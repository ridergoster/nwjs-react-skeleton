import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'
import App from './app';
import QrCode from './qrcode'
import Button from './button'
import Idplayer from './idplayer'
import Home from './home'
import Back from './back'

class Index extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="QrCode" component={QrCode} />
          <Route path="Idplayer" component={Idplayer} />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
