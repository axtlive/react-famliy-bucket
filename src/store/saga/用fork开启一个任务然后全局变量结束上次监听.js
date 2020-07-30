import { delay, put, takeEvery, take, cancel, fork } from "redux-saga/effects";
import { actionTypes, increaseAction } from "../action/counter";

function* stopTask() {
  if (task) {
    yield cancel(task);
    console.log("the previous task has been cancelled");
  }
}

let task;
function* autoIncrease() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    yield* stopTask();
    task = yield fork(function*() {
      while (true) {
        yield delay(2000);
        yield put(increaseAction());
      }
    });
  }
}

function* stopAutoIncrease() {
  yield* stopTask();
}

export default function*() {
  yield fork(autoIncrease);
  yield takeEvery(actionTypes.stopAutoIncrease, stopAutoIncrease);
}
