import React, { Component } from 'react';
import { A } from './components/Comp';
import withLog from './HOC/withLog';
// import withLogin from './HOC/withLogin';

const ALog = withLog(A);
// const BLog = withLogin(withLog(B));
export default class App extends Component {

  myRef = React.createRef()

  render() {
    return (
      <div>
        <ALog a={123} isLogin ref={this.myRef} />
        {/* <BLog b={456} isLogin /> */}
      </div>
    )
  }
}