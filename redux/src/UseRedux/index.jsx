import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_todo } from "../Redux/slice/todoSlice";
// import { useReducer } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { add_todo } from "../Redux/action/TodoAction";
// let initialState = [];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return [...state, action.payload];
//     default: {
//       return state;
//     }
//   }
// };

const UseRedux = () => {
  // const [todo, despatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  // const todo = useSelector((state) => state.todo);
  const todo = useSelector((state) => state.todo);
  function handleData() {
    let obj = {
      name: name,
      complete: false,
    };
    dispatch(add_todo(obj));
    // despatch({ type: "ADD_TODO", payload: obj });
  }
  console.log(todo);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleData}>Add</button>
    </div>
  );
};

export default UseRedux;
