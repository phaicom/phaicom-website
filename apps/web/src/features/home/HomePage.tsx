import { useState } from "react";

export function HomePage() {
  const [num, setNum] = useState(10);

  return (
    <section className="flex flex-col gap-2">
      <h1 className="text-red-400">test</h1>
      <div>Count: {num}</div>
      <input
        type="number"
        value={num}
        className="max-w-50 border-2 px-2 py-1"
        onChange={(e) => {
          setNum(parseInt(e.target.value, 10));
        }}
      />
    </section>
  );
}
