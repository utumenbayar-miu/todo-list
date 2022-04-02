import React from "react";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import TodoAdd from "./components/TodoAdd";

export default class App extends React.Component {
  state = {
    todoItems: [
      {
        id: 1,
        task: "my task 1",
        username: "user1",
        isDeleted: 0,
      },
      {
        id: 2,
        task: "task2",
        username: "user2",
        isDeleted: 0,
      },
      {
        id: 3,
        task: "task3",
        username: "user3",
        isDeleted: 1,
      },
    ],
    somethingInFooter: "Dummy footer data",
    showList: true,
  };

  addItem = (task) => {
    const todoItems = [...this.state.todoItems];
    todoItems.push(task);
    this.setState({ todoItems });
  };

  deleteItem = (id) => {
    const todoItems = [...this.state.todoItems];
    let index = this.findIndexById(id);
    const deletedItem = { ...todoItems[index] };
    deletedItem.isDeleted = 1;
    todoItems[index] = deletedItem;
    this.setState({ todoItems });
  };

  editItem = (newTask) => {
    const todoItems = [...this.state.todoItems];
    let index = this.findIndexById(newTask.id);
    const taskUpdated = { ...todoItems[index] };
    taskUpdated.task = newTask.task;
    taskUpdated.username = newTask.username;
    todoItems[index] = taskUpdated;
    this.setState({ todoItems });
  };

  findIndexById = (id) => {
    let index = -1;
    for (let i = 0; i < this.state.todoItems.length; i++) {
      if (this.state.todoItems[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  render() {
    const { todoItems, showList, somethingInFooter } = this.state;
    return (
      <div style={{ paddingLeft: "25px" }}>
        <h3>It is the app component</h3>
        <TodoAdd addItem={this.addItem} />
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
        <TodoFooter somethingInFooter={somethingInFooter}></TodoFooter>
      </div>
    );
  }
}
