import { actionTypes } from '../../action/student/searchCondition';

const initState = {
  key: '',
  sex: -1,
  page: 1,
  limit: 10,
};
/**
 * @description: 查询条件
 * @param {type} state action
 * @return: state
 */
export default function (state = initState, { type, payload }) {
  switch (type) {
    case actionTypes.change:
      return { ...state, ...payload }
    default:
      return state;
  }
}