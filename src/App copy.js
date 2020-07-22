import React from 'react'
import RouteGard from './RouteGard copy';
import { Route, Link } from 'react-route-dom';

function PageA() {
  return <h1>这是页面A</h1>
}

function PageB() {
  return <h1>这是页面B</h1>
}

export default function App2() {
  return (
    <RouteGard
      beforeChange={(prev, cur, action, callback, unBlock) => {
        console.log(`页面从${prev.pathname}跳转到${cur.pathname},跳转方式是${action}`);
        unBlock()
        callback(true)
      }}
    >
      <ul>
        <li>
          <Link to='pageA'>页面A</Link>
        </li>
        <li>
          <Link to='pageB'>页面B</Link>
        </li>
      </ul>
      <Route path='/pageA' component={PageA} />
      <Route path='/pageB' component={PageB} />
    </RouteGard>
  )
}
