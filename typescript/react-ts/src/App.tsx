import React, { useReducer, useState } from "react";

interface Todo {
  id: number;
  text: string;
}
interface AddTodoAction {
  type: "ADD_TODO";
  payload: Todo;
}
type Action = AddTodoAction;

const initialState: Todo[] = [];
type State = Todo[];

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

const App: React.FC = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      Hello
      <CounterComp counter={counter} setCounter={setCounter} />
    </div>
  );
};
interface CounterCompType {
  counter: number;
  setCounter: (prev: number) => void;
}

const CounterComp: React.FC<CounterCompType> = ({ counter, setCounter }) => {
  return (
    <p>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>click</button>
    </p>
  );
};

export default App;
