// import { createStore } from "redux";
// import { todoReducer } from "./reducer/todoReducer";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";

// const store = createStore(todoReducer);

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
export default store;
