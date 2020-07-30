import {
  actionTypes,
  setIsLoadingAction,
} from "../action/student/searchResult";
import { takeEvery, put, delay } from "redux-saga/effects";
import { searchAllStudents } from "../../services/student";

function* fetchStudent() {
  yield put(setIsLoadingAction(true));
  yield delay(1000);
  try {
    // 但是yield后面一般使用指令,所以见 copy3
    const res = yield searchAllStudents();
    console.log("res是", res);
  } catch (e) {
    // error表是reject的内容
    console.log(e);
  }
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudent, fetchStudent);
}
