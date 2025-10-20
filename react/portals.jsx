import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ onClose }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px 30px",
          borderRadius: "8px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>Đây là Modal tạo bằng React Portal</h3>
        <button onClick={onClose}>Đóng</button>
      </div>
    </div>,
    document.body // 👈 Render ra ngoài root component
  );
}

export default function ReactPortalsExample() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>React Portals Example</h2>
      <button onClick={() => setShow(true)}>Mở Modal</button>
      {show && <Modal onClose={() => setShow(false)} />}
    </div>
  );
}
