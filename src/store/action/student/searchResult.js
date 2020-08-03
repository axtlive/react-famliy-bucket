import { createActions, handleActions } from "redux-actions";

export const {
  setStudentAndTotalAction,
  setIsLoadingAction,
  fetchStudentAction,
} = createActions({
  AET_STUDENT_AND_TOTAL_ACTION: (arr, total) => ({
    arr,
    total,
  }),
  SET_IS_LOADING_ACTION: isLoading => isLoading,
  FETCH_STUDENT_ACTION: null,
});

export default handleActions(
  {
    [setStudentAndTotalAction]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [setIsLoadingAction]: (state, { payload }) => ({
      ...state,
      isLoading: payload,
    }),
  },
  {
    arr: [],
    total: 0,
    isLoading: false,
  },
);
