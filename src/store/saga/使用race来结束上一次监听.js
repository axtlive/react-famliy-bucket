import { fork, take, delay, put, race, call } from "redux-saga/effects";
import { actionTypes, increaseAction } from "../action/counter";
/**
 * @description: 流程控制
 * @param {type}
 * @return:
 */
function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    yield race({
      autoIncrease: call(function*() {
        while (true) {
          yield delay(2000);
          yield put(increaseAction());
        }
      }),
      cancel: take(actionTypes.autoIncrease),
    });
  }
}

export default function*() {
  yield fork(autoTask);
}
