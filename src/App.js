import React, { Component } from "react";
import UseAllStudent from "./customHook/useAllStudent";
import UseTimer from './customHook/useTimer'

function Test() {
  const res = UseAllStudent(Test);
  UseTimer(()=>{console.log('Test组件的副作用操作')},1000)
  console.log(res);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}
export default class App extends Component {
  render() {
    return <Test />;
  }
}
