import { useState } from "react";

export default function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState Example</h2>
      <p>Bạn đã bấm {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}