import React from "react";
import { withRouter } from "umi";

function C(props) {
  return <div>{props.location.pathname}</div>;
}
export default withRouter(C);
