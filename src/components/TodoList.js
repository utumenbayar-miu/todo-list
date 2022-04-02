import React from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h3>it is the todo list component</h3>

        {this.props.todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoItem={item}
            deleteItem={this.props.deleteItem}
            editItem={this.props.editItem}
            index={index}
          />
        ))}
      </div>
    );
  }
}
