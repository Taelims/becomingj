import React, { useState } from "react";
import "./Tab.scss";
import TodoList from "./TodoList.js";
import TodoInsert from "./TodoInsert.js";
import TodoTemplate from "./TodoTemplate";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css";
import moment from "moment";

function Home({ todos, onInsert, onRemove, onToggle }) {
  const [value, onChange] = useState(new Date());
  const [marks, setMarks] = useState([
    "03-02-2023",
    "05-02-2023",
    "07-02-2023",
    "09-02-2023",
    "15-02-2023",
    "18-02-2023",
    "17-02-2023",
  ]);
  return (
    <div>
      <br></br>
      <br></br>
      <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="home" title="하루 목표">
          <TodoTemplate marks={marks} setMarks={setMarks}>
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          </TodoTemplate>
        </Tab>
        <Tab eventKey="calendar" title="달성 결과">
          <TodoTemplate>
            <Calendar
              className="react-calendar"
              onChange={onChange}
              value={value}
              locale="en-EN"
              tileClassName={({ date, view }) => {
                if (
                  marks.find((x) => x === moment(date).format("DD-MM-YYYY"))
                ) {
                  return "highlight";
                }
              }}
            ></Calendar>
          </TodoTemplate>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Home;
