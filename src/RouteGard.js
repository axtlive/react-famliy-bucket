import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom'

class RouteGard extends PureComponent {

  componentDidMount() {
    // 添加一个监听器
    console.log('this.props.history', this.props.history)
    this.unListen = this.props.history.listen((location, action) => {
      const prevLocation = this.props.location
      this.props.onChange && this.props.onChange(prevLocation, location, action, this.unListen)
    })

    // 设置阻塞
    this.props.history.block('这是阻塞的消息')
  }

  componentWillUnmount() {
    // 卸载监听器
    this.unListen()
  }

  render() {
    return this.props.children
  }
}

export default withRouter(RouteGard)


