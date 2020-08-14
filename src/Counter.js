import React, { useRef, useEffect } from "react";
import { connect } from "dva";

import Modal from "./components/common/Modal";

function Counter(props) {
  const inp = useRef();
  useEffect(() => {
    console.log("进来了");
    return () => {
      console.log("出去了");
    };
  }, []);
  return (
    <div>
      <h1>{props.number}</h1>
      <button
        onClick={() => {
          props.onIncrease();
        }}
      >
        +++++++
      </button>
      <button
        onClick={() => {
          props.onDecrease();
        }}
      >
        ------
      </button>
      <button
        onClick={() => {
          props.onAsyncIncrease();
        }}
      >
        异步+++++
      </button>
      <button
        onClick={() => {
          props.onAsyncDecrease();
        }}
      >
        异步-----
      </button>
      <div>
        <input type="number" ref={inp} />
        <button
          onClick={() => {
            const n = parseInt(inp.current.value);
            props.onAdd(n);
          }}
        >
          加上
        </button>
      </div>
      <Modal show={props.isLoading}>
        <div style={{ color: "#ddd", fontSize: "2em" }}>加载中....</div>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  number: state.counter,
  isLoading: state.handleEffects.models.counter,
});

const mapDispatchToProps = dispatch => ({
  onIncrease: () => {
    dispatch({
      type: "counter/increase",
    });
  },
  onDecrease: () => {
    dispatch({
      type: "counter/decrease",
    });
  },
  onAdd: payload => {
    dispatch({
      type: "counter/add",
      payload,
    });
  },
  onAsyncIncrease: () => {
    dispatch({
      type: "counter/asyncIncrease",
    });
  },
  onAsyncDecrease: () => {
    dispatch({
      type: "counter/asyncDecrease",
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
