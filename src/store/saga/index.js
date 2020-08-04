import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";

export default function*() {
  console.log("aga启动了");
  const result = yield all([counterTask(), studentTask()]);
  console.log("saga完成了,result :>> ", result);
}
