import { actionTypes } from "../../action/counter";

export default (state = 10, { type }) => {
  switch (type) {
    case actionTypes.increase:
      return ++state;
    case actionTypes.decrease:
      return --state;
    default:
      return state;
  }
};
