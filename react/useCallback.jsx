import { useState, useCallback } from "react";

export default function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>useCallback Example</h2>
      <button onClick={handleClick}>Click me</button>
      <p>Count: {count}</p>
    </div>
  );
}