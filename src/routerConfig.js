import React, { Fragment } from "react";
import Counter from "./Counter";
// import { BrowserRouter as Router,NavLink, Switch, Route } from "dva/router";

import { routerRedux, NavLink, Switch, Route } from "dva/router";
// routerRedux 里面包含了connected-react-router里面的所有东西;

function Main() {
  return <h1>这是主页</h1>;
}

export default function App(props) {
  // prop里面有两个参数，一个app，一个history
  return (
    <Fragment>
      <routerRedux.ConnectedRouter history={props.history}>
        <div>
          <div>
            <ul>
              <li>
                <NavLink to="/">主页</NavLink>
              </li>
              <li>
                <NavLink to="/counter">Counter</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <Switch>
              <Route path="/counter" component={Counter} />
              <Route path="/" exact component={Main} />
            </Switch>
          </div>
        </div>
      </routerRedux.ConnectedRouter>
    </Fragment>
  );
}
