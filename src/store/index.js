import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import history from "./history";
import reducer from "./reducer/index";
import rootSaga from "./saga";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//   : null;

const sagaMid = createSagaMiddleware(); // 使用createSagaMiddleware方法创建了一个saga的中间件
const routerMid = routerMiddleware(history); // 路由中间件

const enhancer = composeWithDevTools(
  applyMiddleware(routerMid, sagaMid, logger),
);

const store = createStore(reducer, enhancer);

// 在最一开始的时候启动一个saga任务
sagaMid.run(rootSaga);

export default store;
