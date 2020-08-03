import { createActions, handleActions, combineActions } from "redux-actions";

export const {
  increaseAction,
  decreaseAction,
  asyncIncreaseAction,
  asyncDecreaseAction,
  autoIncreaseAction,
  stopAutoIncreaseAction,
  addAction,
} = createActions({
  INCREASE_ACTION: () => 1,
  DECREASE_ACTION: () => -1,
  ASYNC_INCREASE_ACTION: null,
  ASYNC_DECREASE_ACTION: null,
  AUTO_INCREASE_ACTION: null,
  STOP_AUTO_INCREASE_ACTION: null,
  ADD_ACTION: number => number,
});

const fn = combineActions(
  increaseAction,
  decreaseAction,
  asyncIncreaseAction,
  asyncDecreaseAction,
  autoIncreaseAction,
  stopAutoIncreaseAction,
  addAction,
);

export default handleActions(
  {
    [fn]: (state, { payload }) => state + payload,
  },
  100,
);

// export default handleActions(
//   {
//     [increaseAction]: (state, { payload }) => state + payload,
//     [decreaseAction]: (state, { payload }) => state + payload,
//     [addAction]: (state, { payload }) => state + payload,
//   },
//   100,
// );
