import "./App.css";
import React, { useState, useRef, useCallback } from "react";
import { Route } from "react-router-dom";
import "./Slider.js";
import Home from "./components/Home.js";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "0",
      text: "독서 30분",
      checked: "true",
    },
    {
      id: "1",
      text: "운동 1시간",
      checked: "",
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      const todo1 = todos.filter((todo) => todo.id !== id);
      setTodos(todo1);
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="App">
      <>
        <Route
          exact
          path={"/becomingj"}
          render={() => (
            <Home
              todos={todos}
              onInsert={onInsert}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          )}
        />
      </>
    </div>
  );
}

export default App;
