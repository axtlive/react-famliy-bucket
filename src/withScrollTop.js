import React, { PureComponent } from 'react';
import reset from './resetScroll';

export default function withScrollTop(Comp) {
  return class withScrollTopWrapper extends PureComponent {

    componentDidMount() {
      // window.scrollTo(0, 0)
      reset()
    }

    render() {
      return (
        <Comp {...this.props} />
      )
    }
  }
}
