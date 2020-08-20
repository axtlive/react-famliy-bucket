import React, { useRef } from "react";

export default function Login({ history }) {
  const countRef = useRef();
  const pwdRef = useRef();

  return (
    <div>
      <div>
        账号：
        <input type="text" ref={countRef} />
      </div>
      <div>
        密码：
        <input type="password" ref={pwdRef} />
      </div>
      <div>
        <button
          onClick={() => {
            if (pwdRef.current.value === "admin") {
              localStorage.setItem("count", countRef.current.value);
              history.push("/welcome");
            } else {
              alert("账号密码错误");
            }
          }}
        >
          登录
        </button>
      </div>
    </div>
  );
}
