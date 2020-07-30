import store from "./index";
import { fetchStudent } from "./action/student/searchResult";
import {
  asyncIncreaseAction,
  autoIncreaseAction,
  stopAutoIncreaseAction,
} from "./action/counter";

// import { changeAction } from './action/student/searchCondition';

// const action = {
//   key: '安徽',
//   sex: 1,
// }

// store.dispatch(changeAction(action))
// store.dispatch(increaseAction())
// console.log(store.getState());

window.fetchStudent = function() {
  store.dispatch(fetchStudent());
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
