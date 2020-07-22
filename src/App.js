import React, { Component } from 'react';
// import NewContext from './newContext';
// import Test from './components/common/Form/Test'
import TaskContainer from './components/Task/TaskContainer';
export default class App extends Component {

  render() {
    return (
      <div>
        <TaskContainer />
      </div>
    )
  }
}