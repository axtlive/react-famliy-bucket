import React, { useEffect, useState } from "react";

let n = 0;

function fun1() {
  console.log("fun1的副作用函数");
  return () => {
    console.log("fun1的清理函数");
  };
}

function fun2() {
  console.log("fun2的副作用函数");
  return () => {
    console.log("fun2的清理函数");
  };
}

export default function App() {
  const [, forceUpdate] = useState({});

  useEffect(n % 2 === 0 ? fun1 : fun2);

  n++;

  return (
    <div>
      <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        +
      </button>
    </div>
  );
}
