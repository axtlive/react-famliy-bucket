import React, { Component } from 'react';
import PropTypes from 'prop-types';

const types = {
  a: PropTypes.number.isRequired,
  b: PropTypes.string.isRequired,
  changeNum: PropTypes.func,
}

function ChildA(props, context) {
  return (
    <div>
      <h1>A组件</h1>
      <h2>AA:{context.a}</h2>
      <h2>AB:{context.b}</h2>
      <ChildB />
    </div>
  )
}
ChildA.contextTypes = types;

class ChildB extends Component {

  static contextTypes = types;

  render() {
    return (
      <div>
        <h1>B组件</h1>
        <h2>A:{this.context.a}</h2>
        <h2>B:{this.context.b}</h2>
        <button onClick={() => {
          this.context.changeNum(this.context.a + 3)
        }}>点击</button>
      </div>
    )
  }
}


export default class oldContext extends Component {

  state = {
    a: 123,
    b: '你好',
  }

  static childContextTypes = types;

  getChildContext() {
    console.log('调用了getChildContext');
    return {
      a: this.state.a,
      b: this.state.b,
      changeNum: newA => {
        this.setState({ a: newA })
      },
    }
  }

  render() {
    return (
      <div>
        <ChildA />
      </div>
    )
  }
}
