import store from './index';
import { increaseAction } from './action/counter'

// import { changeAction } from './action/student/searchCondition';

// const action = {
//   key: '安徽',
//   sex: 1,
// }

// store.dispatch(changeAction(action))
store.dispatch(increaseAction())
// console.log(store.getState());