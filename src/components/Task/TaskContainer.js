import React, { Component } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask'

export default class TaskContainer extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    const ts = [];
    for (let i = 0; i < 10; i++) {
      ts.push({
        name: `任务${i}`,
        isFinish: Math.random() > 0.5
      })
    }
    this.setState({
      tasks: ts
    })
  }

  pushData = newVal => {
    this.setState({
      tasks: [...this.state.tasks, newVal]
    })
  }

  render() {
    return (
      <div>
        <AddTask pushData={this.pushData} />
        <TaskList {...this.state} />
      </div>
    )
  }
}
