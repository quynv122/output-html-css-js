import { useState, useTransition } from "react";

export default function ReactTransitionsExample() {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();


  const bigList = Array.from({ length: 2000 }, (_, i) => `Sản phẩm ${i + 1}`);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = bigList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setList(filtered);
    });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>React Transitions Example</h2>
      <input
        type="text"
        placeholder="Nhập để tìm kiếm..."
        value={query}
        onChange={handleChange}
        style={{ padding: "8px", width: "250px" }}
      />
      {isPending && <p>⏳ Đang lọc dữ liệu...</p>}

      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
