import { useState } from "react";

export const useIncrement = (addAmount) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + addAmount);
  };

  return [count, increase];
};
