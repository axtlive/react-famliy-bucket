import React from 'react'
import './index.css'

export default function Modal(props) {
  const defaultProps = {
    bg: 'rgba(0, 0, 0, 0.5)'
  }
  const data = Object.assign({}, defaultProps, props)

  if (!data.show) {
    return null;
  }

  return (
    <div className="modal" style={{ background: data.bg }} onClick={e => { if (e.target.className === "modal") { data.onClose && data.onClose() } }}>
      <div className="modal-center">
        {data.children}
        <button onClick={() => { data.onClose && data.onClose() }}>关闭蒙层</button>
      </div>
    </div>
  )
}
