import React from "react";
import "./App.css";

import { TodoApp, Filter, styles } from "shared";

function App() {
  return (
    <TodoApp
      render={({
        todos,
        toggleDone,
        setFilter,
        newTodoInputValue,
        setNewTodoInputValue,
        addTodo,
      }) => {
        const listItems = todos?.map((todo) => (
          <li
            key={todo.text + todo.isDone}
            onClick={() => toggleDone(todo.text)}
            style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}
          >
            {todo.text}
          </li>
        ));

        return (
          <div>
            <h1 style={styles}>Todos:</h1>
            <ul>{listItems}</ul>
            <input
              value={newTodoInputValue}
              onChange={(e) => setNewTodoInputValue(e.target.value)}
              onKeyUp={(e) => {
                if (e.keyCode === 13) {
                  e.preventDefault();
                  addTodo();
                }
              }}
            ></input>
            <div>
              <button onClick={() => setFilter(Filter.ALL)}>All</button>
              <button onClick={() => setFilter(Filter.DONE)}>Done</button>
              <button onClick={() => setFilter(Filter.NOT_DONE)}>
                Remaining
              </button>
            </div>
          </div>
        );
      }}
    />
  );
}

export default App;
