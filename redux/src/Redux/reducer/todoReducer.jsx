import { ADD_TODO } from "../action/TodoAction";

let initialState = {
  todo: [],
  gig: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
