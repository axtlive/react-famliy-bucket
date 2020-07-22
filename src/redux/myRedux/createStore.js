import ActionTypes from './utils/ActionTypes';
import isPlanObject from './utils/isPlainObject'

/**
 * description: 实现createStore
 */
export default function createStore(reducer, defaultState, enhanced) {
  if (typeof defaultState === 'function') {
    // 如果第二个参数是函数，则表示，第二个参数是 applyMiddleware
    // 把第二个参数赋值给第三个参数，把默认值设置为undefined
    enhanced = defaultState;
    defaultState = undefined;
  }
  if (typeof enhanced === 'function') {
    // 如果enhanced是函数，则不走下面的创建store，把创建store的事交给 enhanced
    return enhanced(createStore)(reducer, defaultState)
  }

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