import React, { Component } from 'react';
import './Ball.css'

export default class Ball extends Component {

  constructor(props) {
    super(props);

    this.state = {
      left: props.left,
      top: props.top,
      xSpeed: props.xSpeed,
      ySpeed: props.ySpeed,
    }

    const duration = 20;
    setInterval(() => {
      // 每次运行的距离
      const xDis = this.state.xSpeed * duration / 1000;
      const yDis = this.state.ySpeed * duration / 1000;
      // 根据每次运行的距离计算出新的距离
      let newLeft = this.state.left + xDis;
      let newTop = this.state.top + yDis;

      if (newLeft <= 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -(this.state.xSpeed)
        })
      }
      else if (newLeft >= document.documentElement.clientWidth - 100) {
        newLeft = document.documentElement.clientWidth - 100;
        this.setState({
          xSpeed: -(this.state.xSpeed)
        })
      }

      if (newTop <= 0) {
        newTop = 0;
        this.setState({
          ySpeed: -(this.state.ySpeed)
        })
      }
      else if (newTop >= document.documentElement.clientHeight - 100) {
        newTop = document.documentElement.clientHeight - 100;
        this.setState({
          ySpeed: -(this.state.ySpeed)
        })
      }

      this.setState({
        left: newLeft,
        top: newTop,
      })

    }, duration);
  }

  render() {
    return (
      <div className="ball" style={{
        left: this.state.left,
        top: this.state.top,
        background: this.props.bg
      }}>

      </div>
    )
  }
}
