import { combineReducers } from 'redux';

import searchCondition from './searchCondition';
import searchResult from './searchResult';

export default combineReducers({
  searchCondition,
  searchResult
})