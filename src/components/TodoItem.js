import React, { Component } from "react";
import TodoDeleteButton from "./TodoDeleteButton";
import TodoEdit from "./TodoEdit";
import { Link } from "react-router-dom";

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <p>
          id: <b>{this.props.todoItem.id}</b>, task:{" "}
          <b>{this.props.todoItem.task}</b>, user:{" "}
          <b>{this.props.todoItem.username}</b>
          <Link to={`/todo/item/${this.props.todoItem.id}`}>Details</Link>
          <TodoDeleteButton
            deleteItem={this.props.deleteItem}
            id={this.props.todoItem.id}
          />
          <TodoEdit
            editItem={this.props.editItem}
            id={this.props.todoItem.id}
          />
        </p>
      </div>
    );
  }
}
