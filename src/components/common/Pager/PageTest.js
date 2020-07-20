import React, { Component } from 'react';
import Pager from './Pager';
import ShopList from '../Shop/ShopList';
import Modal from './Modal';

export default class PageTest extends Component {

  constructor(props) {
    super(props)
    this.state = {
      current: 1,
      total: 100,
      limit: 3,
      panelNumber: 5,
      dataList: [],
      isLoading: false,
    }
    this.fetchData()
  }

  async  fetchData() {
    this.setState({
      isLoading: true,
    })
    const data = await fetch(`http://localhost:12306/queryBlogByPage?page=${this.state.current}&pageSize=${this.state.limit}`).then(res => res.json()).then(resp => resp.data)
    console.log(data)
    this.setState({
      dataList: data,
      isLoading: false,
    })
  }

  handleChange = newPage => {
    this.setState({
      current: newPage
    }, () => {
      this.fetchData()
    })
  }

  render() {
    return (
      <div className="container">
        <div className="shopList">
          <ShopList dataList={this.state.dataList} />
        </div>
        <div className="pager">
          <Pager {...this.state} onPageChange={this.handleChange} />
        </div>
        <Modal show={this.state.isLoading} />
      </div>
    )
  }
}
