import React, { Component } from "react";

export default class TodoEdit extends Component {
  state = {
    isFieldShown: false,
    newTask: "",
    newUsername: "",
  };

  myOnChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  edit = () => {
    this.props.editItem({
      id: this.props.id,
      task: this.state.newTask,
      username: this.state.newUsername,
    });
    this.setState({ isFieldShown: false, newTask: "", newUsername: "" });
  };

  showField = () => {
    this.setState({ isFieldShown: !this.state.isFieldShown });
  };

  render() {
    return (
      <>
        <button onClick={this.showField}>edit</button>
        {this.state.isFieldShown && (
          <>
            <input
              name='newTask'
              placeholder='task'
              value={this.state.newTask}
              onChange={(event) => this.myOnChange(event)}
            />
            <input
              name='newUsername'
              placeholder='username'
              value={this.state.newUsername}
              onChange={(event) => this.myOnChange(event)}
            />
            {this.state.task !== "" && (
              <button onClick={this.edit}>apply</button>
            )}
          </>
        )}
      </>
    );
  }
}
