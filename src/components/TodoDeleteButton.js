import React, { Component } from "react";

export default class TodoDeleteButton extends Component {
  delete = () => {
    this.props.deleteItem(this.props.index);
  };
  render() {
    return <button onClick={this.delete}>delete</button>;
  }
}
