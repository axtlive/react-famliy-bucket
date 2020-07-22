export const actionTypes = {
  increase: Symbol('increase'),
  decrease: Symbol('decrease'),
  asyncIncrease: Symbol('asyncIncrease'),
  asyncDecrease: Symbol('asyncDecrease')
}

export const increaseAction = () => ({
  type: actionTypes.increase
})

export const decreaseAction = () => ({
  type: actionTypes.decrease
})

export const asyncIncreaseAction = () => ({
  type: actionTypes.asyncIncrease
})

export const asyncDecreaseAction = () => ({
  type: actionTypes.asyncDecrease
})