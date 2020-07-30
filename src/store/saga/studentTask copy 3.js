import {
  actionTypes,
  setIsLoadingAction,
} from "../action/student/searchResult";
import { takeEvery, put, call, select } from "redux-saga/effects";
import { searchAllStudents } from "../../services/student";

function* fetchStudent() {
  yield put(setIsLoadingAction(true));
  try {
    // 此处用到call指令 后面传入异步函数
    const res = yield call(searchAllStudents);
    console.log("res是", res);
    // 1.
    // 如果要使用到this，则第一个参数为数组，数组里面第一项为this,如下'abc'就是this
    // 要传参则为第二个参数,123就是参数
    // const res = yield call(['abc',searchAllStudents],1,2,3);

    // 2.
    // 第二种方式使用this，context就是this，fn是异步函数
    // const res = yield call({
    //   context: 'abc',
    //   fn: searchAllStudents
    // })

    // 3.
    // 使用apply指令也可以实现跟call一样的功能
    // 第一个参数是this指向
    // 第二个参数是异步方法
    // 第三个参数是异步方法的参数，是个数组形式
    // const res = yield apply(null, searchAllStudents, []);

    // select指令可以 获取到仓库里的所有数据
    // 传入一个函数可以进行数据的筛选
    const state = yield select();
    console.log(state);
    const state2 = yield select(i => i.students.searchCondition);
    console.log(state2);
  } catch (e) {
    // error表是reject的内容
    console.log(e);
  }
}

export default function*() {
  yield takeEvery(actionTypes.fetchStudent, fetchStudent);
}
