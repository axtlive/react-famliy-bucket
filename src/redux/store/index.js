// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware } from "../myRedux";
import reducer from "../reducer";
import { addUserAction } from "../action/userAction";
// import { deleteUserAction } from "../action/userAction";

// 中间件 logger1、logger2
// function logger1(store) {
//   return function (next) {
//     return function (action) {
//       console.log('logger1');
//       console.log(store.getState());
//       console.log('action:', action);
//       next(action)
//     }
//   }
// }
// function logger2(store) {
//   return function (next) {
// 下面返回的才是最终的dispatch
//     return function (action) {
//       console.log('logger2');
//       console.log(store.getState());
//       console.log('action:', action);
//       next(action)
//     }
//   }
// }

// 简写
const logger1 = store => next => action => {
  console.log("logger2");
  console.log(store.getState());
  console.log("action:", action);
  next(action);
};

const logger2 = store => next => action => {
  console.log("logger2");
  console.log(store.getState());
  console.log("action:", action);
  next(action);
};

// 创建仓库
// 方式1：
const store = createStore(reducer, applyMiddleware(logger1, logger2));

// 创建仓库
// 方式2：
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

// 对dispatch进行修改增强就是中间件的意图
// const oldDispatch = store.dispatch;  // 保留原来的dispatch
// store.dispatch = function (action) { // 更改store中的dispatch
//   console.log('旧数据 :>> ', store.getState());
//   console.log('action :>> ', action);
//   oldDispatch(action);
//   console.log('新数据 :>> ', store.getState());
//   console.log('')
// }

// 仓库添加订阅
// store.subscribe(() => {
//   console.log('监听器', store.getState())
// })
// console.log(store.getState());

store.dispatch(addUserAction({ id: 3, name: "用户3", age: 99 }));
// store.dispatch(deleteUserAction(3))
// console.log(store.getState());
