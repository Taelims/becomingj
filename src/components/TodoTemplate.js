import React from "react";
import "./TodoTemplate.scss";
import Button from "react-bootstrap/Button";
import moment from "moment";

const TodoTemplate = ({ children, marks, setMarks }) => {
  const today = new Date();

  function setDark() {
    let copy = [...marks];
    copy.push(moment(today).format("DD-MM-YYYY"));
    setMarks(copy);
  }

  return (
    <div className="TodoTemplate">
      <div className="app-title">목표 목록</div>
      <div>{children}</div>
      <div>
        <Button variant="outline-dark" onClick={setDark}>
          목표 달성 등록
        </Button>
      </div>
    </div>
  );
};

export default TodoTemplate;
