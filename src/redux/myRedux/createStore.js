/**
 * description: 判断action是不是一个平面对象
 */
function isPlanObject(obj) {
  if (typeof obj !== 'object') {
    return false;
  }
  return obj.getPrototypeOf(obj) === Object.prototype;
}

/**
 * description: 生成自定义长度的字符串
 */
function createRandomStr(length) {
  return Math.random().toString(36).substr(2, length).split('').join('.')
}

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
    type: Symbol()
    // '@@redux/INIT'
    // createRandomStr(7)
  })
  return {
    dispatch,
    getState,
    subscribe
  }
}