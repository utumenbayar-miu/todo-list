import React, { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    task: "",
  };

  addTask = () => {
    this.props.addTask(this.state.task);
  };

  taskChanged = (event) => {
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <div>
        <h3>AddItem</h3>
        <input
          name='task'
          value={this.state.task}
          onChange={(event) => this.taskChanged(event)}
        />
        <button onClick={this.addTask}>Add task</button>
      </div>
    );
  }
}
