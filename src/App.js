import React from "react";
// import Counter from "./components/Counter";
import { Provider } from "./react-redux";

import store from "./store";

import StudentSearch from "./components/StudentSearch";

// abc;会在Counter的mapStateToProps的第二个参数ownProps中

export default function App() {
  return (
    <Provider store={store}>
      <StudentSearch />
    </Provider>
  );
}

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import Layout from './components/layout';
// import Login from './pages/Login.js';
// import Admin from './pages/Admin.js';

// export default class App extends Component {

//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path='/login' exact component={Login} />
//           <Route path='/' component={Admin} />
//         </Switch>
//       </Router>
//     )
//   }
// }
