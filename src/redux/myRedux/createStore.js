import ActionTypes from './utils/ActionTypes';
import isPlanObject from './utils/isPlainObject'

/**
 * description: 实现createStore
 */
export default (reducer, defaultState) => {

  let currentReducer = reducer;
  let currentState = defaultState;
  let listeners = [];

  function dispatch(action) {
    if (!isPlanObject(action)) {
      throw new TypeError('action must be a plain object')
    }
    if (!action.type) {
      throw new TypeError('action must have a type')
    }
    // dispatch了后，就是运行reducer得到新的state
    currentState = currentReducer(currentState, action)
    // 运行所有订阅者
    for (let item of listeners) {
      item();
    }
  }

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    listeners.push(listener)
    // 移除监听
    return function () {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  // 创建仓库的时候，需要进行一次dispatch，不然第一次getState获得到的是undefined
  dispatch({
    type: ActionTypes.INIT()
    // type: Symbol()
    // '@@redux/INIT'
    // createRandomStr(7)
  })
  return {
    dispatch,
    getState,
    subscribe
  }
}