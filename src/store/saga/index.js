import { all } from "redux-saga/effects";
import counterTask from "./counterTask";
import studentTask from "./studentTask";
import counterTask2 from "./counterTask2";

export default function*() {
  console.log("aga启动了");
  // 分文件的saga指令编写用all;
  // all: 【阻塞】该函数传入一个数组，数组中放入生成器函数执行得到生成器，saga会等待所有的生成器全部完成后才会进一步处理
  const result = yield all([counterTask(), counterTask2(), studentTask()]);
  console.log("saga完成了");
  console.log("result :>> ", result);
}
