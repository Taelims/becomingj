import "./App.css";
import React, { useState, useRef, useCallback } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styled from "styled-components";
import { Link, Route, Switch } from "react-router-dom";
import "./Slider.js";
import Sidebar from "./components/Sidebar.js";
import MyList from "./components/MyList.js";
import Home from "./components/Home.js";
import Memo from "./components/Memo.js";
import Calendar from "./containers/Calendar";

const Center = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: row;
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: "",
      text: "계획적인 사람 되기",
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              Becoming J
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">홈</Nav.Link>
              <Nav.Link href="#link">기타</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <>
        <Center>
          <Sidebar />
          <Switch>
            <Route
              exact
              path={("/", "/todoapp")}
              render={() => (
                <Home
                  todos={todos}
                  onInsert={onInsert}
                  onRemove={onRemove}
                  onToggle={onToggle}
                />
              )}
            />
            <Route path="/mylist" component={MyList} />
            <Route path="/memo" component={Memo} />
            <Route path="/calendar" component={Calendar} />
          </Switch>
        </Center>
      </>
    </div>
  );
}

export default App;
