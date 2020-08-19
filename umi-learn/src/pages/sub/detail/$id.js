import React from "react";

export default function(props) {
  console.log(props);
  return <div>{props.match.params.id}</div>;
}
