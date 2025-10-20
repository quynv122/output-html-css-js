import { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Bạn đã click ${count} lần`;
  }, [count]);

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}