import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default class TodoAdd extends Component {
  state = {
    task: "",
    username: "",
  };

  addTask = () => {
    this.props.addItem({
      id: uuidv4(),
      task: this.state.task,
      username: this.state.username,
      isDeleted: 0,
    });
    this.setState({ task: "", username: "" });
  };

  myOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <Link to="/todo/home">Home</Link>
        </div>
        <h3>AddItem</h3>
        <input
          name="task"
          placeholder="task"
          value={this.state.task}
          onChange={(event) => this.myOnChange(event)}
        />
        <input
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={(event) => this.myOnChange(event)}
        />
        <button onClick={this.addTask}>Add task</button>
      </div>
    );
  }
}
