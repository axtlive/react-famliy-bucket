const NAMESPACE = "loading"; // 默认命名空间是loading

export default function(opts = {}) {
  const namespace = opts.namespace || NAMESPACE;
  function reducer(state = 123, action) {
    return state;
  }
  return {
    extraReducers: {
      [namespace]: reducer,
    },
  };
}
