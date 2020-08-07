import { add } from "date-fns";

export default {
  namespace: "counter",
  state: 0,
  reducers: {
    increase(state) {
      return ++state;
    },
    decrease(state) {
      return --state;
    },
    add(state, { payload }) {
      return state + payload;
    },
  },
};
