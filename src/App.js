import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./components/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To do app</h1>
        </header>
        <div className="content">
          <TodoApp />
        </div>
      </div>
    );
  }
}

export default App;
