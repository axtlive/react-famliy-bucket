import React, { Component } from 'react'


class A extends Component {
  method() {
    console.log('hello');
  }
  render() {
    return <h1>A组件</h1>
  }
}

export default class componentName extends Component {


  handleClick = () => {
    console.log(this)
  }

  getRef = el => {
    console.log('调用了函数');
    this.txt = el
  }

  render() {
    return (
      <div>
        <input type="text" ref="inp" />
        <A ref={el => { this.txt = el }} />
        <A ref={this.getRef} />
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}
