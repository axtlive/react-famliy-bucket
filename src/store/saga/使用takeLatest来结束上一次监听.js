import { delay, put, takeLatest } from "redux-saga/effects";
import { actionTypes, increaseAction } from "../action/counter";

let isStop = false;

function* autoIncrease() {
  isStop = false;
  while (true) {
    yield delay(2000);
    if (isStop) {
      break;
    }
    yield put(increaseAction());
  }
}

function stopAutoIncrease() {
  isStop = true;
}

export default function*() {
  yield takeLatest(actionTypes.autoIncrease, autoIncrease);
  yield takeLatest(actionTypes.stopAutoIncrease, stopAutoIncrease);
}
