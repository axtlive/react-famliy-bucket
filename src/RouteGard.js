import React, { PureComponent } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'


let prevLocation, curLocation, action, unblock;

class _GardHelper extends PureComponent {

  componentDidMount() {
    // 添加阻塞
    unblock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      curLocation = newLocation;
      action = ac;
      return ''
    })

    this.unListen = this.props.history.listen((location, action) => {
      const prevLocation = this.props.location
      this.props.onChange && this.props.onChange(prevLocation, location, action, this.unListen)
    })
  }

  componentWillUnmount() {
    // 取消阻塞
    unblock()
    this.unListen()
  }


  render() {
    return null;
  }
}

const GardHelper = withRouter(_GardHelper);

class RouteGard extends PureComponent {

  handleConfirm = (msg, callback) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(prevLocation, curLocation, action, callback, unblock)
    } else {
      callback(true)
    }
  }

  render() {
    return (
      <Router getUserConfirmation={this.handleConfirm} >
        <GardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    )
  }
}

export default RouteGard;


