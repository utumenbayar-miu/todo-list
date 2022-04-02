import React, { Component } from "react";

export default class TodoEditButton extends Component {
  state = {
    isFieldShown: false,
    newTask: "",
  };

  taskChangedEdit = (event) => {
    this.setState({ newTask: event.target.value });
  };

  edit = () => {
    this.props.editItem(this.props.index, this.state.newTask);
    this.setState({ isFieldShown: false, newTask: "" });
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
              name='task'
              value={this.state.newTask}
              onChange={(event) => this.taskChangedEdit(event)}
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
