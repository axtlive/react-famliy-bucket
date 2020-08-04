import React from "react";
import { Button } from "antd";
import store from "../store";
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

function mapStateToProps(state) {
  return {
    number: state.counter,
  };
}

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

export default class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = mapStateToProps(store.getState());
    store.subscribe(() => {
      this.setState(mapStateToProps(store.getState()));
    });
  }
  render() {
    const events = mapDispatchToProps(store.dispatch);
    return <Counter {...this.state} {...events} />;
  }
}
