import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";

/**
 * @description: 创建dva对象的函数
 * @param {type} opts 配置
 */
export default (opts = {}) => {
  const app = {
    model,
    _models: [], // 记录已经定义的模型
    router,
    _router: null, // 记录路由函数
    start,
  };
  return app;

  /**
   * @description: 根据模型对象定义一个模型
   * @param {type} modelObj
   * @return {type} null
   */
  function model(modelObj) {
    app._models.push(modelObj);
  }

  /**
   * @description: 传入一个路由函数，该函数返回路由配置
   * @param {type} routerFunc
   * @return {type} null
   */
  function router(routerFunc) {
    app._router = routerFunc;
  }

  /**
   * @description: 启动函数
   * @param {type} selector
   * @return {type} null
   */
  function start(selector) {
    const store = getStore();
    render(selector, store);
  }

  // 得到中间件
  function getMiddlewares() {
    return composeWithDevTools(applyMiddleware());
  }

  // 额外reducer
  function getExtraReducer() {
    return {
      routing: (state = null, action) => state,
      "@@dva": (state = 0, action) => state,
    };
  }

  // 得到一个redux仓库
  function getStore(reducer) {
    // 根据模型，得到一个根reducer对象
    let rootReducerObj = {};
    for (const model of app._models) {
      // 将模型转换为reducer
      const obj = getReducer(model);
      rootReducerObj[obj.name] = obj.reducer;
    }
    rootReducerObj = { ...rootReducerObj, ...getExtraReducer() };
    const store = createStore(
      combineReducers(rootReducerObj),
      getMiddlewares(),
    );
    return store;
  }

  // 根据一个模型得到一个reducer
  function getReducer(model) {
    const actionTypes = [];
    if (model.reducers) {
      for (const prop in model.reducers) {
        actionTypes.push({
          type: `${model.namespace}/${prop}`, // 要匹配的action类型
          reducer: model.reducers[prop], // 要运行的reducer函数
        });
      }
    }
    const reducerObj = {
      name: model.namespace,
      reducer: (state = model.state, action) => {
        const temp = actionTypes.find(t => t.type === action.type);
        if (temp) {
          // 类型匹配上了，运行对应的函数
          return temp.reducer(state, action);
        } else {
          return state;
        }
      },
    };
    return reducerObj;
  }

  /**
   * @description: 渲染
   * @param {type} selector store
   * @return {type} null
   */
  function render(selector, store) {
    const routerConfig = app._router();
    const root = <Provider store={store}>{routerConfig}</Provider>;
    ReactDom.render(root, document.querySelector(selector));
  }
};
