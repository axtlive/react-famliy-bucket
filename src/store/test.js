import store from "./index";
import { fetchStudentAction } from "./action/student/searchResult";
import {
  asyncIncreaseAction,
  autoIncreaseAction,
  stopAutoIncreaseAction,
  addAction,
} from "./action/counter";

// import { changeAction } from './action/student/searchCondition';

// const action = {
//   key: '安徽',
//   sex: 1,
// }

// store.dispatch(changeAction(action))
// store.dispatch(increaseAction())
// console.log(store.getState());

window.add = function(n) {
  store.dispatch(addAction(n));
};

window.fetchStudent = function() {
  store.dispatch(fetchStudentAction());
};

window.asyncIncrease = function() {
  store.dispatch(asyncIncreaseAction());
};

window.autoIncrease = function() {
  store.dispatch(autoIncreaseAction());
};

window.stopAutoIncrease = function() {
  store.dispatch(stopAutoIncreaseAction());
};
