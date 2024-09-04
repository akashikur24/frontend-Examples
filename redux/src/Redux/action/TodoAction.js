export const ADD_TODO = "ADD_TODO";

export const add_todo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
