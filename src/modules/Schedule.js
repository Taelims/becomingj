import React from "react";

const Schedule = (index, todo) => {
  const result = [];
  if (todo[index] !== undefined) {
    todo[index].map((item) => {
      result.push(<li key={index + item}>{item[0]}</li>);
    });
    return result;
  }
  return null;
};

export default Schedule;
