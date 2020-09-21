import React, { useReducer } from "react";
// import useReducer from "./useReducer";

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return ++state;
    case "decrease":
      return --state;
    default:
      return state;
  }
}

export default function App() {
  const [n, dispatch] = useReducer(reducer, 0, args => {
    console.log(args);
    return 100;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "decrease" });
        }}
      >
        -
      </button>
      <span>{n}</span>
      <button
        onClick={() => {
          dispatch({ type: "increase" });
        }}
      >
        +
      </button>
    </div>
  );
}
