import React from 'react';
import './index.css';

export default function StudentTable(props) {
  let trs;
  if (props.stus.length) {
    trs = props.stus.map(s =>
      <tr key={s.id}>
        <td>{s.name}</td>
        <td>{s.sex === 1 ? '女' : '男'}</td>
        <td>{s.phone}</td>
        <td>{s.email}</td>
        <td>{s.hobby}</td>
        <td>{s.address}</td>
        <td>
          <a href={`/students/${s.id}`}>详情</a>
        </td>
      </tr>)
  }

  return (
    <table className="tab">
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>爱好</th>
          <th>地址</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>{trs}</tbody>
    </table>
  )
}
