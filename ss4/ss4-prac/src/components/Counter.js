import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      Giá trị {count}
      <div>
        <button onClick={handleClick}>Tăng</button>
      </div>
    </>
  );
}

export default Counter;
