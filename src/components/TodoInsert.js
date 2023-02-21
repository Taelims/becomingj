import React from "react";
import { useState, useCallback } from "react";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );
  return (
    <div>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input
          placeholder="목표를 입력 해주세요"
          value={value}
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
};

export default TodoInsert;
