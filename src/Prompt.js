import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Prompt extends Component {

  static defaultProps = {
    when: false, // 当when为true时添加阻塞
    message: '', // 阻塞的提示消息
  }

  handleChange = e => {
    this.setState({
      val: e.target.value
    })
    this.handleBlock(e.target.value)
  }

  handleBlock = () => {
    if (this.props.when) {
      this.unBlock = this.props.history.block(this.props.message)
    } else {
      this.unBlock && this.unBlock();
    }
  }

  componentDidMount() {
    this.handleBlock();
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleBlock();
  }

  componentWillUnmount() {
    this.unBlock();
  }

  render() {
    return null;
  }
}


export default withRouter(Prompt);