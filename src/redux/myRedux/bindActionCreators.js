export default (actionCreators, dispatch) => {
  if (typeof actionCreators === 'function') {
    return getAutoDispatchActionCreator(actionCreators, dispatch)
  }
  if (typeof actionCreators === 'object') {
    const result = {};// 返回结果
    for (const key in actionCreators) {
      if (actionCreators.hasOwnProperty(key)) {
        const element = actionCreators[key]; // 得到这个对象里面key对应的fn
        if (typeof element === 'function') { // 只有这个fn是个函数才执行，不然什么都不做
          result[key] = getAutoDispatchActionCreator(element, dispatch) // 给返回结果根据key来赋值对应的fn，然后返回
        }
      }
    }
    return result;
  } else {
    throw new TypeError('actionCreators must be a function or an object')
  }
}

function getAutoDispatchActionCreator(actionCreators, dispatch) {
  return function (...args) {
    const action = actionCreators(...args)
    dispatch(action)
  }
}