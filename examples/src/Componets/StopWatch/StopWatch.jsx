import { useEffect } from "react";
import { useState } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minit, setMinit] = useState(0);

  const [isStart, setIsStart] = useState(false);

  useEffect(() => {
    let timmer;
    if (isStart) {
      timmer = setInterval(() => {
        if (isStart) {
          setSeconds((prev) => prev + 1);
        } else {
          clearInterval(timmer);
        }
      }, 1000);
    }

    return () => clearInterval(timmer);
  }, [isStart]);

  return (
    <div>
      {minit}:{seconds}
      <button onClick={() => setIsStart(true)}>start</button>
      <button onClick={() => setIsStart(false)}>Stop</button>
      <button onClick={() => setIsStart(true)}>Pause</button>
      <button
        onClick={() => {
          setMinit(0);
          setSeconds(0);
        }}
      >
        reset
      </button>
    </div>
  );
};

export default StopWatch;
