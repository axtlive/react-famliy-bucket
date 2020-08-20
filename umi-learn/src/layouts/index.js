import React from "react";
import { NavLink } from "umi";

import "./index.css";

export default function Index(props) {
  return (
    <div>
      <div>
        <NavLink to="/">首页</NavLink>
        <NavLink to="/login">登录</NavLink>
        <NavLink to="/welcome">欢迎</NavLink>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
