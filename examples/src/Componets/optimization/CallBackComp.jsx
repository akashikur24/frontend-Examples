/* eslint-disable react/prop-types */
import React, { useCallback, useState } from "react";

const CallBackComp = () => {
  const [count, setCount] = useState(0);
  const [counterMain, setCounterMain] = useState(0);
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);
  return (
    <div>
      <Button onClick={increment}>Increment</Button>
      <button onClick={() => setCounterMain(counterMain + 1)}>Toggle</button>
      <p>Count: {count}</p>
      <p>Main : {counterMain}</p>
    </div>
  );
};

const Button = React.memo(({ onClick, children }) => {
  console.log(`Rendering button - ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

export default CallBackComp;
