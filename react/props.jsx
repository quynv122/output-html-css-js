// Componennt con
function Welcome(props) {
  return <h2>Xin chào, {props.name}!</h2>;
}

// component cha
export default function App() {
  return (
    <>
      <Welcome name="Đạt" />
      <Welcome name="Tý" />
    </>
  );
}
