import {
  actionTypes,
  setIsLoadingAction,
} from "../action/student/searchResult";
import { takeEvery, put } from "redux-saga/effects";

function mockStudents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("okokok~~~");
      } else {
        reject("nonono!!!!");
      }
    }, 2000);
  });
}

function* fetchStudent() {
  yield put(setIsLoadingAction(true));
  // saga发现得到的结果是一个promise，它会自动等待promise完成
  // 完成之后，会把完成的结果作为值传递
  // 如果promise对象被拒绝，则saga会使用generator.throw来抛出错误
  try {
    // 真实的调用异步请求的，见copy2
    const res = yield mockStudents();
    console.log("res是", res);
  } catch (e) {
    // error表是reject的内容
    console.log(e);
  }
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudent, fetchStudent);
}
