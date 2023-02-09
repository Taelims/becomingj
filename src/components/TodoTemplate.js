import React from "react";
import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 목록</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;
