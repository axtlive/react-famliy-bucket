import React from "react";
import { useHistory } from "umi";

export default function Page1() {
  console.log(useHistory());
  const router = useHistory();
  return (
    <div>
      <div>page1</div>
      <button onClick={() => router.push("/page2")}>去page2</button>
    </div>
  );
}
