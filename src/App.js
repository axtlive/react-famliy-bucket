import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, NavLink, Prompt } from 'react-router-dom'
// import Prompt from './Prompt';
import './App.css';

function Page1() {
  return <div className="page page1"><h1>Page1</h1></div>
}

class Page2 extends PureComponent {
  state = {
    val: ''
  };

  handleChange = e => {
    this.setState({
      val: e.target.value
    })
  }

  render() {
    return (
      <div className="page page2">
        <Prompt when={this.state.val !== ''} message='跳转将导致数据丢失' />
        <textarea
          value={this.state.val}
          onChange={this.handleChange}
        ></textarea>
      </div>
    )
  }
}


export default function App() {
  return (
    <Router getUserConfirmation={(msg, callback) => {
      console.log('msg :>> ', msg);
      callback(window.confirm(msg))
    }}>
      <div className='nav'>
        <NavLink to='/page1'>page1</NavLink>
        <NavLink to='/page2'>page2</NavLink>
      </div>
      <Route path='/page1' component={Page1} />
      <Route path='/page2' component={Page2} />
    </Router>
  )
}