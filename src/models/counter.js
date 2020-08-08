export default {
  namespace: "counter", // 命名空间
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
  effects: {
    // 在model内部触发action，不需要添加模型的命名空间前缀
    // dispatch({type:"increase"}) 即可，无需 dispatch({type:"counter/increase"})
    *asyncIncrease(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: "increase" });
      console.log("异步加");
    },
    *asyncDecrease(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: "decrease" });
    },
  },
  subscriptions: {
    // 在模型安装好后，这里面的方法会立即执行，且只执行一次
    fun1({ dispatch }) {
      // 这个obj里面有dispatch方法和history对象
      console.log("fun1 execute");
      window.onresize = () => {
        dispatch({ type: "increase" });
      };
    },
    fun2({ dispatch, history }) {
      console.log("fun2 execute");
      history.listen(() => {
        dispatch({ type: "decrease" });
      });
    },
  },
};

function delay(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
