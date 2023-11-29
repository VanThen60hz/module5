import React, { useState } from "react";

export const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <div>
        <input
          type="number"
          onChange={(e) => setNum1(e.target.value)}
          placeholder="0"
        />
        <br />
        <input
          type="number"
          onChange={(e) => setNum2(e.target.value)}
          placeholder="0"
        />
      </div>
      <p>Result: {result == 0 ? " " : result.toFixed(2)} </p>
      <button onClick={() => setResult(parseInt(num1) + parseInt(num2))}>
        +
      </button>
      <button onClick={() => setResult(parseInt(num1) - parseInt(num2))}>
        -
      </button>
      <button onClick={() => setResult(parseInt(num1) * parseInt(num2))}>
        *
      </button>
      <button onClick={() => setResult(parseInt(num1) / parseInt(num2))}>
        /
      </button>
    </>
  );
};
