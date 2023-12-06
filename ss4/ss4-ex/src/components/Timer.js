import { useState, useEffect, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(10);
  //   duration is the value of the input field
  const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => {
        if (timer === 0) {
          return inputRef.current.value;
        }
        return timer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        ref={inputRef}
        id="timer"
        placeholder="Your timer (seconds)"
        onChange={(e) => setTimer(e.target.value)}
      />
    </>
  );
}

export default Timer;
