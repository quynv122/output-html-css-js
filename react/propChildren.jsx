function Card({ children }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
        <h1>dưới đây là children</h1>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <Card>
      <h3>đây là children</h3>
    </Card>
  );
}
