import React from 'react';
import { Route, Link } from 'react-router-dom';
import RouteGard from './RouteGard'

function PageA() {
  return <h1>PageA</h1>
}

function PageB() {
  return <h1>PageB</h1>
}

let count = 0;

export default function App() {
  return (
    <RouteGard
      onBeforeChange={(prev, cur, action, callback, unBlock) => {
        console.log('页面想要改变');
        console.log(`页面从${prev.pathname}跳转到${cur.pathname},跳转方式是${action}`);
        unBlock()
        callback(true)
      }}
      onChange={(prvLocation, location, action, unListen) => {
        count++;
        console.log(`日志   count:${count},从${prvLocation.pathname}进入页面${location.pathname},进入方式是${action}`);
        count === 5 && unListen()
      }}>
      <ul>
        <li>
          <Link to='/pageA'>页面A</Link>
        </li>
        <li>
          <Link to="/pageB">页面B</Link>
        </li>
      </ul>
      <Route path='/pageA' component={PageA} />
      <Route path='/pageB' component={PageB} />
    </RouteGard >
  )
}

