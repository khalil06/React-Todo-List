import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ task: "Walk The Fish" }, { task: "Groom Chickens" }],
    };
  }

  render() {
    const todos = this.state.todos.map((todo) => <Todo task={todo.task} />);
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
      </div>
    );
  }
}
