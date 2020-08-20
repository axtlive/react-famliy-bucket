import React from "react";

export default function Welcome() {
  const count = localStorage.getItem("count");
  return <div>欢迎你，{count}</div>;
}
