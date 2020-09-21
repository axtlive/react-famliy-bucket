import React, { useState, useEffect } from "react";

// 以下是错误的代码示范
export default function App() {
  const [n, setN] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      const newN = n - 1;
      console.log(newN)
      setN(newN);
      if (newN === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return ()=>{
      clearInterval(timer);
    }
  }, []);

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
