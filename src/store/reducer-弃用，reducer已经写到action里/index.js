// 合并reducers
import { combineReducers } from 'redux';

import students from './student';
import counter from './counter'

export default combineReducers({
  students,
  counter
})