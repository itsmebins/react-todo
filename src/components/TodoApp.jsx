import React, { Component } from "react";
import PropTypes from "prop-types";
import AddTodo from "./AddTodo";
import Fiter from "./Filter";
import TodoList from "./TodoList";

export class TodoApp extends Component {
  state = {
    todoList: [],
    filter: null
  };

  counter = 1;

  inputRef = React.createRef();
  static propTypes = {};

  addItemToList = () => {
    this.updateTodoList(this.inputRef.current.value);
  };

  filterTodoList = filter => {
    // active
    if (filter === true || filter === false) {
      return this.state.todoList.filter(todo => filter === todo.active);
    }
    return this.state.todoList;
  };

  markComplete = todoId => {
    const todoList = this.state.todoList.map(todo => {
      return {
        ...todo,
        active: todoId === todo.id ? !todo.active : todo.active
      };
    });
    this.setState({ todoList });
  };

  deleteTodoItem = todoId => {
    const todoList = this.state.todoList.filter(todo => todoId !== todo.id);
    this.setState({ todoList });
  };

  updateTodoList = todoItemText => {
    const id = this.counter;
    this.counter++;
    this.setState(prevState => {
      const todoItem = {
        id,
        label: todoItemText,
        active: true
      };
      return {
        todoList: [...prevState.todoList, todoItem]
      };
    });
  };

  render() {
    return (
      <div className="todo">
        <AddTodo addTodo={this.addItemToList} refElement={this.inputRef} />
        <TodoList todoList={this.filterTodoList(this.state.filter)} />
        <div className="todo-filters">
          <Fiter
            onFilter={() => this.setState({ filter: null })}
            label={"All"}
            active={this.state.filter === null}
          />
          <Fiter
            onFilter={() => this.setState({ filter: true })}
            label={"Active"}
            active={this.state.filter === true}
          />
          <Fiter
            onFilter={() => this.setState({ filter: false })}
            label={"Completed"}
            active={this.state.filter === false}
          />
        </div>
      </div>
    );
  }
}

export default TodoApp;
