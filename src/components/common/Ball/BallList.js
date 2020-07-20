import React, { Component } from 'react'
import { getRandom } from './utils';
import Ball from './Ball';

export default class BallList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ballInfo: []
    }
    const timer = setInterval(() => {
      const obj = {
        left: getRandom(0, document.documentElement.clientWidth - 100),
        top: getRandom(0, document.documentElement.clientHeight - 100),
        xSpeed: getRandom(50, 500),
        ySpeed: getRandom(50, 500),
        bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
      }
      this.setState({
        ballInfo: [...this.state.ballInfo, obj]
      })
      if (this.state.ballInfo.length === 20) {
        clearInterval(timer)
      }
    }, 200);
  }

  render() {
    const list = this.state.ballInfo.map((item, index) => <Ball {...item} key={index} />)
    return (
      <div>
        {list}
      </div>
    )
  }
}
