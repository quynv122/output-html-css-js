import { useMemo, useState } from "react";

export default function UseMemoExample() {
  const [products] = useState([
    { id: 1, price: 100 },
    { id: 2, price: 200 },
  ]);

  const total = useMemo(() => {
    console.log("Tính lại total...");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Tổng giá: {total}</p>
    </div>
  );
}