import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../css/index.css';
import QrCode from './Qrcode'
import Button from './Button'
import Idplayer from './Idplayer'
import Home from './home'
import Back from './Back'
import { browserHistory, Router, Route, Link, IndexRoute } from 'react-router'

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
