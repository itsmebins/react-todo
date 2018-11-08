import React from "react";
import PropTypes from "prop-types";

const TodoList = ({ todoList }) => {
  return (
    <div className="todo-list">
      {todoList.map(todo => {
        return (
          <div className="todo-item" key={todo.id}>
            <span className="todo-item-label">
              {todo.active === false ? "C" : "A"}
            </span>
            <span
              className="todo-item-label"
              onClick={() => this.markComplete(todo.id)}
            >
              {todo.label}
            </span>
            <span
              className="todo-item-label"
              onClick={() => this.deleteTodoItem(todo.id)}
            >
              {"X"}
            </span>
          </div>
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired
};

export default TodoList;
