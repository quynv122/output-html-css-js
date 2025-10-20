import { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef();

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} placeholder="Nhập gì đó..." />
      <button onClick={() => inputRef.current.focus()}>Focus vào input</button>
    </div>
  );
}