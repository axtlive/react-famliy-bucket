import compose from './compose';

export default function (...middlewares) { // 传入所有的中间件
  // 返回 一个函数，传入createStore 
  return function (createStore) {
    // 再返回一个函数 用于创建store，并传入reducer和initState
    return function (reducer, initState) {
      // 创建仓库
      const store = createStore(reducer, initState);
      let dispatch = () => { throw new Error("目前还不能使用dispatch") }
      const simpleStore = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      }
      // 多个中间件，传入原始getState和dispatch，得到一个dispatch创建函数的数组
      const dispatchProducers = middlewares.map(mid => mid(simpleStore));

      // 对多个中间件函数进行组合，得到一个新的函数
      // const dispatchProducer = compose(...dispatchProducers);

      // 然后传入一开始的dispatch，得到最终的dispatch，然后 给dispatch赋值
      // dispatch = dispatchProducer(store.dispatch)

      // 简写
      dispatch = compose(...dispatchProducers)(store.dispatch)

      return {
        ...store,
        dispatch
      }
    }
  }
}