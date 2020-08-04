import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";

import { increaseAction, decreaseAction } from "../store/action/counter";

function Counter(props) {
  console.log("dispatch", props.dispatch);
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

const creators = {
  increase: increaseAction,
  decrease: decreaseAction,
};
// 如果上述需要在dispatch后做一些事，就不能只用一个对象了，还是要用mapDispatchToProps

export default connect(mapStateToProps, creators)(Counter);
