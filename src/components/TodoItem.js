import React, { Component } from "react";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoEditButton from "./TodoEditButton";

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>
          TodoItem: <b>{this.props.todoItem}</b>
          <TodoDeleteButton
            deleteItem={this.props.deleteItem}
            index={this.props.index}
          />
          <TodoEditButton
            editItem={this.props.editItem}
            index={this.props.index}
          />
        </p>
      </div>
    );
  }
}
