import React from "react";

const AddTodo = ({ refElement, addTodo }) => {
  return (
    <div>
      <div className="todo-input-cr">
        <input
          type="text"
          className="todo-input"
          ref={refElement}
          placeholder="Add todo item"
        />
        <button className="todo-button" onClick={addTodo}>
          {" "}
          Add task
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
