/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import TodoContex from "./TodoContex";

export const TodoProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <TodoContex.Provider value={{ counter, handleCounter }}>
      {children}
    </TodoContex.Provider>
  );
};
export const Todo = () => useContext(TodoContex);
