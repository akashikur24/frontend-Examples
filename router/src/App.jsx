import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    let timmer;
    timmer = setInterval(() => {
      if (count > 0 && startCounter) {
        setCount((pre) => pre - 1);
      } else {
        alert("timmes Up");
        setCount(10);
        clearInterval(timmer);
        setStartCounter(false);
      }
    }, 1000);
    return () => clearInterval(timmer);
  }, [startCounter, count]);

  return (
    <div>
      <p>count:{count}</p>
      <button onClick={() => setStartCounter(true)}>click</button>
    </div>
  );
};

export default App;
