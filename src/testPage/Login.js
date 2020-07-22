import React from 'react';
import loginInfo from './LoginInfo';
import qs from 'query-string';

export default function Login(props) {
  console.log(props)
  return (
    <div>
      <h1>登录界面</h1>
      <button
        onClick={() => {
          loginInfo.login()
          // 登录后跳转回保护的页面
          // 方法1
          // const query = qs.parse(props.location.search)
          // if (query.returnUrl) {
          //   props.history.push(query.returnUrl)
          // } else {
          //   props.history.push('/')
          // }

          // 方法2
          if (props.location.state) {
            props.history.push(props.location.state)
          } else {
            props.history.push('/')
          }
        }}
      >点击登录</button>
    </div>
  )
}
