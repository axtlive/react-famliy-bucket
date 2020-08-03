import { createActions, handleActions } from "redux-actions";

export const { changeAction } = createActions({
  CHANGE_ACTION: newCondition => newCondition,
});

export default handleActions(
  {
    [changeAction]: (state, { payload }) => ({ ...state, ...payload }),
  },
  {
    key: "",
    sex: -1,
    page: 1,
    limit: 10,
  },
);
