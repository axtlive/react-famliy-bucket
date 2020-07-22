import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import loginInfo from './testPage/LoginInfo';

export default function ProtectedRoute({ component: Component, children, render, ...rest }) {
  return <Route {...rest}
    render={val => {
      if (loginInfo.isLogin) {
        // 可以正常展示
        return <Component />
      } else {
        // 登录后跳转回保护的页面
        // 方法1
        // return <Redirect to={{
        //   pathname: '/login',
        //   search: '?returnUrl=' + val.location.pathname
        // }} />

        // 方法2
        return <Redirect to={{
          pathname: '/login',
          state: val.location.pathname
        }} />
      }
    }}
  />
}
