import React, { useState, useEffect } from "react";

function Test() {
  const [, forceUpdate] = useState({});
  useEffect(() => {
    console.log("副作用函数仅在挂载时运行一次");
    return () => {
      console.log("清理函数，仅在卸载运行");
    };
  }, []);
  console.log("渲染组件");

  return (
    <h1>
      Test组件
      <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        刷新
      </button>
    </h1>
  );
}

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ paddingTop: "200px" }}>
      {visible && <Test />}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/影藏
      </button>
    </div>
  );
}
