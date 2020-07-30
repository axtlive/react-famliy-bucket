export const actionTypes = {
  increase: Symbol("increase"),
  decrease: Symbol("decrease"),
  asyncIncrease: Symbol("asyncIncrease"),
  asyncDecrease: Symbol("asyncDecrease"),
  autoIncrease: Symbol("autoIncrease"),
  stopAutoIncrease: Symbol("stopAutoIncrease"),
};

export const increaseAction = () => ({
  type: actionTypes.increase,
});

export const decreaseAction = () => ({
  type: actionTypes.decrease,
});

export const asyncIncreaseAction = () => ({
  type: actionTypes.asyncIncrease,
});

export const asyncDecreaseAction = () => ({
  type: actionTypes.asyncDecrease,
});

export const autoIncreaseAction = () => ({
  type: actionTypes.autoIncrease,
});

export const stopAutoIncreaseAction = () => ({
  type: actionTypes.stopAutoIncrease,
});
