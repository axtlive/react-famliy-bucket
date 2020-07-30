import { takeEvery, delay, put, take, fork, cancel } from "redux-saga/effects";
import { actionTypes, increaseAction } from "../action/counter";

function* asyncIncrease() {
  let task;
  while (true) {
    yield take(actionTypes.asyncIncrease);
    if (task) {
      yield cancel(task);
      console.log("the previous task has been cancelled");
    }
    task = yield fork(function*() {
      yield delay(2000);
      yield put(increaseAction());
    });
  }
}

function* asyncDecrease() {}

export default function*() {
  // takeEvery会不断的监听action，当某个action到达后，运行某个函数。takeEvery 永远不会结束当前的生成器
  // yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
  yield fork(asyncIncrease);
  yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
}
