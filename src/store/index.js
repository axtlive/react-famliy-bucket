import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import reducer from "./action/index";
import rootSaga from "./saga";

const sagaMid = createSagaMiddleware(); // 使用createSagaMiddleware方法创建了一个saga的中间件

const store = createStore(reducer, applyMiddleware(sagaMid, logger));

// 在最一开始的时候启动一个saga任务
sagaMid.run(rootSaga);

export default store;
