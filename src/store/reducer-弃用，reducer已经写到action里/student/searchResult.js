import { actionTypes } from '../../action/student/searchResult'

const initState = {
  arr: [],
  total: 0,
  isLoading: false,
};


/**
 * @description: 查询结果
 * @param {type} state action
 * @return: state
 */
export default function (state = initState, { type, payload }) {
  switch (type) {
    case actionTypes.setIsLoading:
      return { ...state, isLoading: payload }
    case actionTypes.setStudentAndTotal:
      return {
        ...state,
        ...payload
      }
    default:
      return state;
  }
}