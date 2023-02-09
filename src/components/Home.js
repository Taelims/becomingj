import React from "react";
import TodoList from "./TodoList.js";
import TodoInsert from "./TodoInsert.js";
import TodoTemplate from "./TodoTemplate";

function Home({ todos, onInsert, onRemove, onToggle }) {
  return (
    <div>
      <br></br>

      <div>
        <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
      </div>
    </div>
  );
}

export default Home;
