import React from "react";

export default function Index(props) {
  return (
    <div>
      <div>
        <h2>导航sub</h2>
      </div>
      {props.children}
    </div>
  );
}
