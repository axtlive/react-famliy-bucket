import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
// import Link from './Link';

function PageA() {
  return (
    <h1>pageA</h1>
  )
}

function PageB() {
  return (
    <h1>pageB</h1>
  )
}

function NavBar() {
  return (
    <div>
      <div>
        <Link to="/a" style={{ marginRight: 30 }}>去A</Link>
        <Link to={{
          pathname: "/b",
          hash: "#ak47",
          search: "?a=1&b=3"
        }}>去B</Link>
      </div>
      <div>
        <NavLink activeClassName="selected" to="/a" style={{ marginRight: 30 }}>去A</NavLink>
        <NavLink to={{
          pathname: "/b",
          hash: "#ak47",
          search: "?a=1&b=3"
        }}>去B</NavLink>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/a" component={PageA} />
        <Route path="/b" component={PageB} />
        <Redirect to="/a" />
      </Switch>
    </Router>
  )
}

