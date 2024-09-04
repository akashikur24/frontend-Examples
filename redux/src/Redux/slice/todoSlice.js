import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    add_todo: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add_todo } = todoSlice.actions;

export default todoSlice.reducer;
