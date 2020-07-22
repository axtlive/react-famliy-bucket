import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Layout from './components/layout';
import Login from './pages/Login.js';
import Admin from './pages/Admin.js';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/' component={Admin} />
        </Switch>
      </Router>
    )
  }
}