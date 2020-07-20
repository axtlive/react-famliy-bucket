import React, { Component } from 'react';
import { A, B } from './components/Comp';
import withLog from './HOC/withLog';
import withLogin from './HOC/withLogin';

const ALog = withLogin(withLog(A));
const BLog = withLogin(withLog(B));
export default class App extends Component {

  render() {
    return (
      <div>
        <ALog a={123} isLogin />
        <BLog b={456} isLogin />
      </div>
    )
  }
}