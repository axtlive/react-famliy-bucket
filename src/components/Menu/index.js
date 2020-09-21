import React from 'react';
import './index.css';

export default function Menu() {
  return (
    <ul className="menu">
      <li><a href="/students">列表</a></li>
      <li><a href="/students/add">学生</a></li>
      <li><a href="/courses">课程</a></li>
      <li><a href="/courses/add">添加</a></li>
    </ul>
  )
}
