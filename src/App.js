import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
    <Router
      // 设置了阻塞下面这个函数才会生效,this.props.history.block('这是阻塞的消息')
      // getUserConfirmation={(msg, callback) => {
      //   console.log('不准跳转,消息是:' + msg);
      //   callback(true)
      // }}
      getUserConfirmation={(msg, callback) => { callback(window.confirm(msg)) }}
    >
      <ul>
        <li>
          <Link to='/pageA'>页面A</Link>
        </li>
        <li>
          <Link to="/pageB">页面B</Link>
        </li>
      </ul>
      <RouteGard onChange={(prvLocation, location, action, unListen) => {
        count++;
        console.log(`日志   count:${count},从${prvLocation.pathname}进入页面${location.pathname},进入方式是${action}`);
        count === 5 && unListen()
      }}>
        <Route path='/pageA' component={PageA} />
        <Route path='/pageB' component={PageB} />
      </RouteGard>
    </Router>
  )
}

