import React, { PureComponent } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'


let prevLocation, newLocation, action, unBlock;

class _GardHelper extends PureComponent {

  componentDidMount() {
    unBlock = this.props.block((curLocation, ac) => {
      prevLocation = this.props.location;
      newLocation = curLocation;
      action = ac;
      return ''
    })

    this.unListen = this.props.history.listen((location, ac) => {
      this.props.onChange && this.props.onChange(prevLocation, location, ac, this.unListen)
    })
  }

  componentWillUnmount() {
    unBlock();
    this.unListen();
  }

  render() {
    return null;
  }
}

const GardHelper = withRouter(_GardHelper);

export default class RouteGard extends PureComponent {

  handleConfirmation = (msg, callback) => {
    if (this.props.beforeChange) {
      this.props.beforeChange(prevLocation, newLocation, action, callback, unBlock)
    } else {
      callback(true)
    }
  }

  render() {
    return (
      <Router
        getUserConfirmation={this.handleConfirmation}
      >
        <GardHelper />
      </Router>
    )
  }
}
