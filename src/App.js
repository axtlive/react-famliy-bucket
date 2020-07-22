import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './testPage/Home'
import Login from './testPage/Login'
import Personal from './testPage/Personal'
import ProtectedRoute from './ProtectedRoute';

export default function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/login">登录页</Link></li>
        <li><Link to="/personal">个人中心</Link></li>
      </ul>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/personal" component={Personal} />

          {/* render和children的区别：render是在匹配后才会运行，但是children无论是否匹配都是会运行的 */}
          {/* <Route path="/personal" render={val => {
            // val是上下文
            console.log(val);
            return <h1>hello world</h1>
          }} /> */}

          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

