import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import { increaseAction, decreaseAction } from "../store/action/counter";

function Counter(props) {
  return (
    <div>
      <Button type="primary" onClick={props.increase}>
        加
      </Button>
      {props.number}
      <Button type="primary" onClick={props.decrease}>
        减
      </Button>
    </div>
  );
}

// 映射数据，把仓库里数据，映射到该组件
function mapStateToProps(state, ownProps) {
  console.log("ownProps", ownProps);
  return {
    number: state.counter,
  };
}

// 映射方法
function mapDispatchToProps(dispatch) {
  return {
    increase() {
      dispatch(increaseAction());
    },
    decrease() {
      dispatch(decreaseAction());
    },
  };
}

// connect返回一个高阶组件
// const hoc = connect(mapStateToProps, mapDispatchToProps);

// 传入显示组件，返回一个容器组件
// export default hoc(Counter)

// 将上面两句 合并成一句
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
