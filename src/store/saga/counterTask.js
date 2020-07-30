import { fork } from "redux-saga/effects";
import { actionTypes, increaseAction } from "../action/counter";

function* autoTask() {}

export default function*() {
  yield fork(autoTask);
}
