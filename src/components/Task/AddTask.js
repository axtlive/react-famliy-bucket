import React, { useState } from 'react';


export default function AddTask(props) {

  const [data, setData] = useState('')

  return (
    <div>
      <input type="text" value={data} onChange={e => {
        setData(e.target.value)
      }} />
      <button onClick={() => {
        console.log(data);
        props.pushData({
          name: data,
          isFinish: false,
        })
      }}>添加</button>
    </div>
  )
}
