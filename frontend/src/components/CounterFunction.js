import React, { useState } from "react";

function CounterFunction() {
  let [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <div>
      <h1>functon </h1>
      <h1>Counter = {number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default CounterFunction;