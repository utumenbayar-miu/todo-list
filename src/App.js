import React from "react";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import TodoAdd from "./components/TodoAdd";

export default class App extends React.Component {
  state = {
    todoItems: ["my task 1", "task2", "my task 3"],
    todoItemsJson: [
      {
        id: 1,
        task: "my task 1",
        isDeleted: 0,
        createdAt: new Date(),
      },
      {
        id: 2,
        task: "task2",
        isDeleted: 0,
        createdAt: new Date(),
      },
      {
        id: 3,
        task: "task3",
        isDeleted: 1,
        createdAt: new Date(),
      },
    ],
    somethingDisplayInFooter: "Dummy footer data",
    showList: true,
  };

  addTask = (task) => {
    const todoItems = [...this.state.todoItems];
    todoItems.push(task);
    this.setState({ todoItems });
  };

  deleteItem = (index) => {
    const todoItems = [...this.state.todoItems];
    todoItems.splice(index, 1);
    this.setState({ todoItems });
  };

  editItem = (index, newTask) => {
    const todoItems = [...this.state.todoItems];
    todoItems[index] = newTask;
    this.setState({ todoItems });
  };

  render() {
    const { todoItems, showList, somethingDisplayInFooter } = this.state;
    return (
      <div style={{ paddingLeft: "25px" }}>
        <h3>It is the app component</h3>
        <TodoAdd addTask={this.addTask} />
        <button
          onClick={() => {
            this.setState({ showList: !showList });
          }}>
          show/hide todo list
        </button>
        {showList && (
          <TodoList
            todoItems={todoItems}
            deleteItem={this.deleteItem}
            editItem={this.editItem}></TodoList>
        )}
        <TodoFooter
          somethingDisplayInFooter={somethingDisplayInFooter}></TodoFooter>
      </div>
    );
  }
}
