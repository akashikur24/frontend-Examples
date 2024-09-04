import { useMemo } from "react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const MemoComp = () => {
  const [count, setCount] = useState(0);
  const [mainCounter, setMainCounter] = useState(0);
  const result = useMemo(() => Calculation(count), [count]);

  function Calculation(num) {
    console.log("expensive calculation");
    return num * 2;
  }
  console.log("main Counter");

  return (
    <div>
      <p>expensive : {result}</p>
      <p>main :{mainCounter}</p>
      <button onClick={() => setCount(count + 1)} className="border m-1">
        Count
      </button>

      <button
        onClick={() => setMainCounter(mainCounter + 1)}
        className="border m-2"
      >
        main counter
      </button>
    </div>
  );
};

export default MemoComp;
