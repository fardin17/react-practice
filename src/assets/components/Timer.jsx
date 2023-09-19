import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  let timerId = useRef(null);
  const startHandler = () => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  useEffect(() => {
    //something
  }, [count]);
  const stopHandler = () => {
    setCount(0);
    clearInterval(timerId.current);
  };
  return (
    <div>
      <p>Count</p>
      <p>{count}</p>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </div>
  );
};

export default Timer;
