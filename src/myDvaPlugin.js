const logger = store => next => action => {
  console.log("老状态：", store.getState());
  next(action);
  console.log("新的状态：", store.getState());
};

export default {
  onAction: logger,
};
