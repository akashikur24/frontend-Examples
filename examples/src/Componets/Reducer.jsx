import { useReducer, useState } from "react";

let initialTodo = [];
const reducer = (state, action) => {
  switch (action.type) {
    case "add_todo": {
      return [...state, action.payload];
    }
    case "remove_todo": {
      let filtered = state.filter((item) => item.id != action.payload);
      return filtered;
    }
    case "todo_edit": {
      const [id, name] = action.payload;
      console.log(id, name);
      return;
    }
    default: {
      return state;
    }
  }
};
const Reducer = () => {
  const [todo, dispatch] = useReducer(reducer, initialTodo);
  const [name, setName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState("");

  function handleChange() {
    let obj = { id: todo.length + 1 || 0, firstName: name };
    dispatch({ type: "add_todo", payload: obj });
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => handleChange()}> Click</button>
      <ul>
        {todo.map((item) => (
          <>
            {isEdit ? (
              <input
                type="text"
                value={name}
                onChange={(e) => setEditedName(e.target.value)}
              />
            ) : (
              <li key={item.id}>{item.firstName}</li>
            )}

            <button
              onClick={() =>
                dispatch({ type: "remove_todo", payload: item.id })
              }
            >
              delete
            </button>
            {isEdit ? (
              <button
                onClick={() => {
                  dispatch({
                    type: "todo_edit",
                    payload: [item.id, editedName],
                  });
                }}
              >
                add
              </button>
            ) : (
              <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Reducer;
