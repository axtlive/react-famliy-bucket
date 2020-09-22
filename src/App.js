import React, { useContext } from "react";

const ctx = React.createContext();

// 不使用useContext

// function Test() {
//   return (
//     <ctx.Consumer>{val => <h1>Test的上下文的值是：{val}</h1>}</ctx.Consumer>
//   );
// }

// 使用useContext

function Test() {
  const val = useContext(ctx);
  return <h1>Test的上下文的值：{val}</h1>;
}

export default function App() {
  return (
    <div>
      <ctx.Provider value={100}>
        <Test />
      </ctx.Provider>
    </div>
  );
}
