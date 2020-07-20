import React, { Component } from 'react';

const ctx1 = React.createContext('');
const ctx2 = React.createContext('');


function ChildA() {
  return (
    <ctx2.Provider value={{ a: 999, c: 'gogogogo' }}>
      <ctx1.Consumer>
        {val => <>
          <div>
            <h1>A组件</h1>
            <h2>AA:{val.a}</h2>
            <h2>AB:{val.b}</h2>
            <ChildB />
          </div>
        </>}
      </ctx1.Consumer>
    </ctx2.Provider>
  )
}

class ChildB extends Component {

  render() {
    return (
      <ctx1.Consumer>
        {val =>
          <>
            <div>
              <h1>B组件</h1>
              <h2>A1:{val.a}</h2>
              <h2>B1:{val.b}</h2>
              <div>
                <ctx2.Consumer>
                  {
                    el =>
                      <>
                        <h2>A2:{el.a}</h2>
                        <h2>B2:{el.c}</h2>
                      </>
                  }
                </ctx2.Consumer>
              </div>
              <button onClick={() => {
                val.changeNum(val.a + 3)
              }}>点击</button>
            </div>
          </>
        }
      </ctx1.Consumer>
    )
  }
}


export default class newContext extends Component {

  state = {
    a: 123,
    b: '你好',
    changeNum: n => {
      this.setState({
        a: n
      })
    }
  }

  render() {
    const Provider = ctx1.Provider;
    return (
      <Provider value={this.state}>
        <ChildA />
      </Provider>

    )
  }
}
