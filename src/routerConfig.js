import React, { Fragment } from "react";
import Counter from "./Counter";
import { routerRedux, Route, NavLink, Switch } from "dva/router";

function Main() {
  return <h1>主页</h1>;
}

export default function App({ history }) {
  return (
    <Fragment>
      <routerRedux.ConnectedRouter history={history}>
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
