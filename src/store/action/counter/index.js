export const actionTypes = {
  increase: "INCREASE",
  decrease: "DECREASE",
  asyncIncrease: "ASYNC_INCREASE",
  asyncDecrease: "ASYNC_DECREASE",
  autoIncrease: "AUTO_INCREASE",
  stopAutoIncrease: "STOP_AUTO_INCREASE",
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
