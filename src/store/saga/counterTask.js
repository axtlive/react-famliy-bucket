import { takeEvery, delay } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

function* asyncIncrease() {
  yield delay(2000);
  console.log("2000s后,触发了 asyncIncrease");
}

function* asyncDecrease() {}

export default function*() {
  // takeEvery会不断的监听action，当某个action到达后，运行某个函数。takeEvery 永远不会结束当前的生成器
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
}
