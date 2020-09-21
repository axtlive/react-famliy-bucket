import React, { useState, useEffect } from "react";
const divRef = React.createRef();
window.timer = null;

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

function MoveableBlock(props) {
  useEffect(() => {
    const div = divRef.current;
    let curTimes = 0;
    const disX = props.left / 1000;
    const disY = props.top / 1000;
    window.timer = setInterval(() => {
      curTimes++;
      const newLeft = curTimes * disX;
      const newTop = curTimes * disY;
      div.style.left = newLeft + "px";
      div.style.top = newTop + "px";
      if (curTimes === 1000) {
        stop();
      }
    }, 10);
    return stop;
  });

  return (
    <div
      ref={divRef}
      style={{
        width: 100,
        height: 100,
        position: "fixed",
        background: "#f40",
      }}
    ></div>
  );
}

export default function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ paddingTop: "300px" }}>
      {visible && (
        <div>
          <span>
            X:
            <input
              type="number"
              value={point.x}
              onChange={e => {
                setPoint({
                  ...point,
                  x: parseInt(e.target.value),
                });
              }}
            />
          </span>
          <span>
            Y:
            <input
              type="number"
              value={point.y}
              onChange={e => {
                setPoint({
                  ...point,
                  y: parseInt(e.target.value),
                });
              }}
            />
          </span>

          <MoveableBlock left={point.x} top={point.y} />
        </div>
      )}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/影藏
      </button>
    </div>
  );
}
