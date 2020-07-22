import './pages.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export function NavBar() {
  return (
    <div className="header">
      <NavLink to='/' exact>首页</NavLink>
      <NavLink to='/news'>新闻</NavLink>
      <NavLink to='/personal'>个人中心</NavLink>
    </div>
  )
}

export function Home() {
  return <div className="page home">
    <h1>首页</h1>
  </div>
}

export function News() {
  return <div className="page news">
    <h1>新闻</h1>
  </div>
}

export function Personal() {
  return <div className="page personal">
    <h1>个人中心</h1>
  </div>
}
