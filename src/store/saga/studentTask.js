import {
  actionTypes,
  setIsLoadingAction,
} from "../action/student/searchResult";
import { takeEvery, put, select, cps } from "redux-saga/effects";

import { searchAllStudents } from "../../services/student";

function* fetchStudent() {
  yield put(setIsLoadingAction(true));
  const condition = yield select(i => i.students.searchCondition);
  try {
    const res = yield cps(searchAllStudents, condition);
    console.log("res是", res);
    yield put(setIsLoadingAction(false));
  } catch (e) {
    console.log(e);
  }
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudent, fetchStudent);
}
