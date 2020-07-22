import store from './index';
// import { changeAction } from './action/student/searchCondition'
// import { setIsLoadingAction, fetchStudentAction } from './action/student/searchResult'
import { fetchStudentAction } from './action/student/searchResult'

// const action = {
//   key: '安徽',
//   sex: 1,
// }

// store.dispatch(changeAction(action))

// store.dispatch(setIsLoadingAction(true))
store.dispatch(fetchStudentAction())
// console.log(store.getState());