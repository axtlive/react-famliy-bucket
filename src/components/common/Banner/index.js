import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImgContainer from './ImgContainer'
import './index.css'

export default class Banner extends Component {

  static defaultProps = {
    width: 520,
    height: 280,
    imgSrcs: [],
    autoDuration: 3000,
    duration: 500,
  }

  static propTypes = {
    width: PropTypes.number.isRequired, // 轮播容器宽度
    height: PropTypes.number.isRequired, // 轮播容器高度
    imgSrcs: PropTypes.arrayOf(PropTypes.string), // 图片路径的数组
    autoDuration: PropTypes.number.isRequired, // 自动切换间隔时间
    duration: PropTypes.number.isRequired, // 一次完成需要的时间
  }

  imgContainerRef = el => {
    this.imgContainer = el;
  }
  handleClick = () => {
    this.imgContainer.switchTo(2);
  }

  render() {
    return (
      <div className="banner-container" style={{
        width: this.props.width,
        height: this.props.height,
      }}>
        <ImgContainer
          ref={this.imgContainerRef}
          imgSrcs={this.props.imgSrcs}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
        />
        <button onClick={this.handleClick}></button>
      </div>
    )
  }
}
