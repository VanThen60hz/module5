import { useIncrement } from "./../hooks/useIncrement";

function Counter({ addAmount }) {
  const [count, increase] = useIncrement(addAmount);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increase}>Add {addAmount}</button>
    </>
  );
}
export default Counter;
