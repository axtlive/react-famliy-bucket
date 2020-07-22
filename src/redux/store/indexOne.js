import { createStore, bindActionCreators } from 'redux';
import * as actionTypes from '../action/action-type';
import * as numberAction from '../action/number-action';

/**
 * description: reducer 本质上就是一个函数
 * @param state: 之前状态的数据
 * @param action: 描述要做什么的对象
 */
function reducer(state, action) {
  const newState = JSON.parse(JSON.stringify(state))
  //  返回一个新的状态
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

const store = createStore(reducer, 10)

/**
 * description: 不使用bindActionCreators
 */

 // const action = {
//   type: actionTypes.INCREASE,
// }

// const action2 = {
//   type: actionTypes.SETVAL,
//   val:999
// }

// 先用store里面的getState方法获取一次
// console.log(store.getState());
//  用store的dispatch 执行一次分发 
// store.dispatch(action) 
// store.dispatch(action2) 

// 用对应的action生成函数生成action
// store.dispatch(numberAction.getIncrease())

// 再获取一次
// console.log(store.getState());


/**
 * description: 使用了 bindActionCreators，
 * @param 第一个：action创建函数合并后的对象
 * @param 第二个: store的dispatch函数
 * 得到一个新的对象，新对象的属性名和第一个参数的属性名一致
 */
const bindAction = bindActionCreators(numberAction, store.dispatch)

console.log(store.getState());

bindAction.getIncrease()

console.log(store.getState());