import { Todo } from "./contex/TodoProvider";

const App = () => {
  const { counter, handleCounter } = Todo();

  return (
    <div>
      {counter}
      <button onClick={handleCounter}>click</button>
    </div>
  );
};

export default App;
