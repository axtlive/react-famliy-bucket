import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,  // 图片路径数组
    imgWidth: PropTypes.number.isRequired, // 单张图片宽度
    imgHeight: PropTypes.number.isRequired, // 单张图片高度
    duration: PropTypes.number.isRequired, // 在多长时间内完成切换
  }

  containerRef = el => {
    this.div = el;
  }

  switchTo = index => {
    if (index < 0) {
      index = 0;
    }
    if (index > this.props.imgSrcs.length - 1) {
      index = this.props.imgSrcs.length - 1
    }
    // 需要切换到的marginLeft
    const targetLeft = -index * this.props.imgWidth;
    this.div.style = targetLeft + 'px';
    let curLeft = parseFloat(window.getComputedStyle(this.div).marginLeft);
    console.log(curLeft, targetLeft);
  }

  render() {

    const imgs = this.props.imgSrcs.map(i => <img src={i} key={i} alt="" />)

    return (
      <div
        ref={this.containerRef}
        style={{
          width: this.props.imgSrcs.length * this.props.imgWidth,
          height: this.props.imgHeight,
        }}>
        {imgs}
      </div>
    )
  }
}
