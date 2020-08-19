import React from "react";
import { NavLink } from "umi";

export default function Index(props) {
  return (
    <div>
      <div>
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          首页
        </NavLink>
        <NavLink
          to="/page1"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          page1
        </NavLink>
        <NavLink
          to="/page2"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          page2
        </NavLink>
        <NavLink
          to="/sub"
          activeStyle={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          sub
        </NavLink>
      </div>
      {props.children}
      <div>
        <h1>页脚</h1>
      </div>
    </div>
  );
}
