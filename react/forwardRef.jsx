import { useRef, forwardRef } from "react";

const CustomInput = forwardRef((props, ref) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label>{props.label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={props.placeholder}
        style={{ padding: "6px 10px" }}
      />
    </div>
  );
});

export default function ReactForwardRefExample() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus(); 
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>React ForwardRef Example</h2>
      <CustomInput
        ref={inputRef}
        label="Tên người dùng:"
        placeholder="Nhập tên của bạn..."
      />
      <button
        onClick={handleFocus}
        style={{
          marginTop: "10px",
          padding: "6px 12px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Focus vào ô nhập
      </button>
    </div>
  );
}
