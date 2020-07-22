import { take } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

export default function*() {
  // take会监听某个action，如果action发生了，进行下一步处理，take只监听一次（会造成阻塞）
  // yield得到的是完整的action对象
  const data = yield take(actionTypes.asyncIncrease);
  console.log("data111111111111 :>> ", data);
}
