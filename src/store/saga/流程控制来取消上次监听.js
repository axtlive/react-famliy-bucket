import { fork, take, delay, put, cancel, cancelled } from "redux-saga/effects";
import { actionTypes, increaseAction } from "../action/counter";
/**
 * @description: 流程控制
 * @param {type}
 * @return:
 */
function* autoTask() {
  while (true) {
    yield take(actionTypes.autoIncrease);
    const task = yield fork(function*() {
      try {
        while (true) {
          yield delay(2000);
          yield put(increaseAction());
        }
      } finally {
        if (yield cancelled()) {
          console.log("自动增加任务被取消了");
        }
      }
    });
    yield take(actionTypes.stopAutoIncrease);
    yield cancel(task);
  }
}

export default function*() {
  yield fork(autoTask);
}
