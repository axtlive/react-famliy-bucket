import isPlainObject from './utils/isPlainObject';
import ActionTypes from './utils/ActionTypes'

export default (reducers) => {
  // 校验reducers是否合法
  const res = validateReducers(reducers)
  if (res) {
    // 返回一个大的reducer函数
    return function (state = {}, action) {
      const newState = {}
      for (const key in reducers) {
        if (reducers.hasOwnProperty(key)) {
          const reducer = reducers[key];
          newState[key] = reducer(state[key], action)
        }
      }
      return newState;
    }
  }

}


function validateReducers(reducers) {
  if (typeof reducers !== 'object') {
    throw new TypeError('reducers must be an object')
  }
  if (!isPlainObject) {
    throw new TypeError('reducers must be an plain-object')
  }
  for (const key in reducers) {
    if (reducers.hasOwnProperty(key)) {
      const reducer = reducers[key];
      let state = reducer(undefined, {
        type: ActionTypes.INIT()
      })
      if (!state) {
        throw new TypeError('reducers must not return undefined')
      }
      state = reducer(undefined, {
        type: ActionTypes.UNKONW()
      })
      if (!state) {
        throw new TypeError('reducers must not return undefined')
      }
    }
  }
}