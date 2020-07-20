import React, { Component } from 'react'
import Shop from './Shop'

export default class ShopList extends Component {

  render() {
    const dataList = this.props.dataList.map(item => <Shop key={item.ctime} {...item} />);
    return (
      <div>
        {dataList}
      </div>
    )
  }
}
