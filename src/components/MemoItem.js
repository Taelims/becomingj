import React from "react";
import "./MemoItem.scss";
import { AiOutlinePlus } from "react-icons/ai";

const MemoItem = () => {
  return (
    <div className="memo">
      <div className="title">
        <AiOutlinePlus />
      </div>
      <div contenteditable="true"></div>
    </div>
  );
};

export default MemoItem;
