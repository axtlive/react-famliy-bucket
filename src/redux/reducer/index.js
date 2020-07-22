import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import userReducer from './userReducer';


// 不用combineReducers
// export default (state = {}, action) {
//   const newState = {
//     loginUser: loginReducer(state.loginUser, action),
//     user: userReducer(state.user, action)
//   }
//   return newState;
// }


// 用combineReducers
export default combineReducers({
  loginReducer,
  userReducer
})
