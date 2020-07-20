import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    console.log('发生错误', error);
    return {
      hasError: true,
    }
  }

  // componentDidCatch(error, info) {
  //   console.log(error, info);
  // }

  render() {
    if (this.state.hasError) {
      return <h1>发生了错误</h1>
    }
    return this.props.children
  }
}
