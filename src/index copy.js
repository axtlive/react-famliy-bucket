import dva from "dva";
import { createBrowserHistory } from "history";

import routerConfig from "./routerConfig";

import counterModel from "./models/counter";
import studentModel from "./models/student";

// const logger = store => next => action => {
//   console.log("老状态：", store.getState());
//   next(action);
//   console.log("新的状态：", store.getState());
// };

// 得到一个dva应用程序对象;
const app = dva({
  history: createBrowserHistory(),
  initialState: { counter: 110 },
  onError: (err, dispatch) => {
    console.log(err, dispatch);
  },

  // onAction: logger,

  // onStateChange: state => {
  //   console.log(state.counter);
  // },

  // onReducer: reducer => {
  //   return (state, action) => {
  //     console.log("reducer即将被执行");
  //     const newState = reducer(state, action);
  //     return newState;
  //   };
  // },

  onEffect: (oldEffect, sagaEffects, model, actionType) => {
    return function*(action) {
      console.log("onEffect 即将执行副作用代码");
      yield oldEffect(action);
      console.log("onEffect 副作用代码执行完毕");
    };
  },
  onHmr: () => {},
  extraReducers: {
    abc: (state = 123, action) => {
      return state;
    },
    bcd: (state = 456, action) => {
      return state;
    },
  },
  extraEnhancers: [
    createStore => (...args) => {
      console.log("extraEnhancers 即将创建仓库1");
      return createStore(...args);
    },
    createStore => (...args) => {
      console.log("extraEnhancers 即将创建仓库2");
      return createStore(...args);
    },
  ],
});

// 在启动之前定义模型;
app.model(counterModel);
app.model(studentModel);

// 设置根路由，即启动后，要运行的函数，函数的返回结果会被渲染
// 这个函数会往里面传入两个参数，一个dva（这里就是app），一个history
app.router(routerConfig);

// 启动
app.start("#root");
