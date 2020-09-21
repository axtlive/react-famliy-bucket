import React, { useEffect, useState } from "react";

export default function App() {
  const [n, setN] = useState(10);

  useEffect(() => {
    if (n === 0) {
      return;
    }
    setTimeout(() => {
      setN(n - 1);
    }, 1000);
  }, [n]);

  return (
    <div>
      <h1>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
