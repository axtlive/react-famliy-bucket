import {
  fetchStudentAction,
  setIsLoadingAction,
} from "../action/student/searchResult";
import { takeEvery, put, select, cps } from "redux-saga/effects";

function mockStudents(condition, callback) {
  console.log("condition", condition);
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(null, {
        count: 100,
        datas: [
          { id: 1, name: "a" },
          { id: 2, name: "b" },
        ],
      });
    } else {
      callback(new Error("出错了"), null);
    }
  }, 2000);
}

function* fetchStudent() {
  yield put(setIsLoadingAction(true));
  const condition = yield select(i => i.students.searchCondition);
  try {
    const res = yield cps(mockStudents, condition);
    console.log("res是", res);
    yield put(setIsLoadingAction(false));
  } catch (e) {
    console.log(e);
  }
}

export default function*() {
  yield takeEvery(fetchStudentAction.toString(), fetchStudent);
}
