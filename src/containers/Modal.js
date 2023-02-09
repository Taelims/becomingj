import React, { useCallback, useReducer } from "react";
import ModalReducer from "./reducer/ModalReducer";
import CalcDate from "../modules/CalcDate";
import "../style/modal.css";

const Modal = ({ index, visible, onConfirm, onCancel }) => {
  const initialState = {
    todo: "",
    todos: "",
    checked: false,
  };

  const [state, dispatch] = useReducer(ModalReducer, initialState);

  const todo = state.todo;

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onConfirm({ index, todo });
      dispatch({ type: "CHANGE", value: "" });
    }
  };

  // 초기화
  const Initialization = () => {
    dispatch({ type: "INITIALIZATION" });
  };

  // 일정
  const onChange = useCallback((e) => {
    dispatch({ type: "TODO", value: e.target.value });
  }, []);

  // 입력 취소
  const cancel = () => {
    onCancel();
    Initialization();
  };

  // 입력
  const confirm = () => {
    const todos = CalcDate(index);
    onConfirm({ index, todo, todos });
    Initialization();
  };

  if (!visible) return null;
  return (
    <div className="fullscreen">
      <div className="modals">
        <p>{index}</p>
        <div className="input">
          <input
            placeholder="일정"
            value={todo}
            onChange={onChange}
            onKeyPress={onKeyPress}
          ></input>
        </div>
        <div className="footer">
          <button className="choice" onClick={confirm}>
            Confirm
          </button>
          <button className="choice" onClick={cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
