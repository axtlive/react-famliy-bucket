import React from 'react'

export default function StudentDetail(props) {
  return (
    <div>
      <h1>详情</h1>
      <h3>
        编号：{props.match.params.id}
      </h3>
    </div>
  )
}
