import React from "react";
import { useIncrement } from "../hooks/useIncrement";
import Counter from "./Counter";

function Counter1() {
  return (
    <>
      <Counter addAmount={1} />
    </>
  );
}

export default Counter1;
