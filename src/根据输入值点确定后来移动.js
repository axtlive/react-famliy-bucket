import React, { useState, useEffect } from "react";
const divRef = React.createRef();
window.timer = null;

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

function MoveableBlock(props) {
  useEffect(() => {
    console.log("副作用函数");
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
  }, [props.left, props.top]);

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
  const [point, setPoint] = useState({ x: 100, y: 100 });
  const [visible, setVisible] = useState(true);

  const xRef = React.createRef();
  const yRef = React.createRef();

  return (
    <div style={{ paddingTop: "300px" }}>
      {visible && (
        <div>
          X:
          <input type="number" ref={xRef} />
          Y:
          <input type="number" ref={yRef} />
          <button
            onClick={() => {
              setPoint({
                x: xRef.current.value,
                y: yRef.current.value,
              });
            }}
          >
            确定
          </button>
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
