import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Login from "./pages/Login.js";
import Admin from "./pages/Admin.js";

import store from "./store";

import history from "./store/history";

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Admin} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
