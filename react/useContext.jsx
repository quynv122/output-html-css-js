import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export default function UseContextExample() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

function Header() {
  const theme = useContext(ThemeContext);
  return <h2>useContext Example — Theme: {theme}</h2>;
}