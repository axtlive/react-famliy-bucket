import * as actionTypes from '../action/action-type';

// 纯函数 返回一个新的状态
export default function reducer(state, action) {
  console.log('运行了reducer',state,action);
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case actionTypes.INCREASE:
      return newState + 1;
    case actionTypes.DECREASE:
      return newState - 1;
    case actionTypes.SETVAL:
      return action.val;
    default:
      return newState;
  }
}
