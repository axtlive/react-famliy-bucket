import { fork, call, race } from "redux-saga/effects";
import { increaseAction, decreaseAction } from "../action/counter";

function asyncAction() {
  const duration = Math.floor(Math.random() * 4000 + 1000);
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(increaseAction());
      } else {
        resolve(decreaseAction());
      }
    }, duration);
  });
}

export default function*() {
  const result = yield race({
    action1: call(asyncAction),
    action2: call(asyncAction),
  });
  console.log("result", result);
}
