import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import createSagaMiddleware from "redux-saga";
import * as sagaEffects from "redux-saga/effects";
import { composeWithDevTools } from "redux-devtools-extension";
import { connectRouter, routerMiddleware } from "connected-react-router";
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
  const options = getOptions();
  return app;

  /**
   * @description: 根据模型对象定义一个模型
   * @param {type} modelObj
   */
  function model(modelObj) {
    app._models.push(modelObj);
  }

  /**
   * @description: 传入一个路由函数，该函数返回路由配置
   * @param {type} routerFunc
   */
  function router(routerFunc) {
    app._router = routerFunc;
  }

  /**
   * @description: 启动函数
   * @param {type} selector
   */
  function start(selector) {
    const store = getStore();
    // 运行注册的一些subscription
    runSubscriptions(store.dispatch);
    render(selector, store);
  }

  // 获取Options
  function getOptions() {
    // 传入的相关配置
    const options = {
      history: opts.history || createHashHistory(),
      initialState: opts.initialState === undefined ? {} : opts.initialState,
      onError: opts.onError || (() => {}),
      onStateChange: opts.onStateChange || (() => {}),
      onReducer:
        opts.onReducer ||
        (reducer => (state, action) => reducer(state, action)),
      onEffect: opts.onEffect || (() => {}),
      extraReducers: opts.extraReducers || {},
      extraEnhancers: opts.extraEnhancers || [],
    };
    if (opts.onAction) {
      if (Array.isArray(opts.onAction)) {
        options.onAction = opts.onAction;
      } else {
        options.onAction = [opts.onAction];
      }
    } else {
      options.onAction = [];
    }
    return options;
  }

  // 运行subscription注册函数
  function runSubscriptions(dispatch) {
    for (const model of app._models) {
      let newDispatch = action => {
        dispatch(getNewAction(action, model));
      };
      if (model.subscriptions) {
        for (const prop in model.subscriptions) {
          const func = model.subscriptions[prop];
          func({
            dispatch: newDispatch,
            history: options.history,
          });
        }
      }
    }
  }

  // 改造action
  function getNewAction(action, model) {
    let newAction = action;
    // 如果type没有加入命名空间，则把当前对象的命名空间加上
    if (!action.type.includes("/")) {
      newAction = {
        ...action,
        type: `${model.namespace}/${action.type}`,
      };
    }
    return newAction;
  }

  // 得到中间件
  function getMiddlewares() {
    const sagaMid = createSagaMiddleware(); // saga中间件
    // getMiddlewares加一个静态方法,适当的时候调用（创建完store后调用）
    getMiddlewares.runSaga = store => {
      const generatorFuncs = []; // 保存副作用函数的数组
      for (const model of app._models) {
        // 改造put
        const put = function(action) {
          return sagaEffects.put(getNewAction(action, model));
        };
        if (model.effects) {
          for (const prop in model.effects) {
            generatorFuncs.push({
              type: `${model.namespace}/${prop}`,
              generatorFunc: model.effects[prop],
              put,
              model,
            });
          }
        }
      }
      sagaMid.run(function*() {
        for (const item of generatorFuncs) {
          let func = function*(action) {
            // 触发副作用的时候可能会出现错误，那就用配置里的onError来处理发生的错误
            try {
              yield item.generatorFunc(action, {
                ...sagaEffects,
                put: item.put,
              });
            } catch (e) {
              options.onError(e, store.dispatch);
            }
          };
          // 如果有onEffects配置，则需要对func做进一步封装
          if (options.onEffect) {
            let oldEffect = func;
            func = options.onEffect(oldEffect, sagaEffects, model, item.type);
          }
          // 对应的action 用对应的generator函数处理
          yield sagaEffects.takeEvery(item.type, func);
        }
      });
    };
    const routerMid = routerMiddleware(options.history); // 路由中间件
    const mids = [routerMid, sagaMid, ...options.onAction]; // 将所有的中间件放一起 然后应用中间件
    return composeWithDevTools(applyMiddleware(...mids));
  }

  // 额外reducer
  function getExtraReducer() {
    return {
      router: connectRouter(options.history),
      "@@dva": (state = 0, action) => state,
      ...opts.extraReducers,
    };
  }

  // 得到一个redux仓库
  function getStore() {
    // 根据模型，得到一个根reducer对象
    let rootReducerObj = {};
    for (const model of app._models) {
      // 将模型转换为reducer
      const obj = getReducer(model);
      rootReducerObj[obj.name] = obj.reducer;
    }
    // 把所有的reducer和额外的reducer进行合并后 使用combineReducers来合成一个大的reducer
    rootReducerObj = { ...rootReducerObj, ...getExtraReducer() };
    let rootReducer = combineReducers(rootReducerObj);
    const oldReducer = rootReducer;
    // 封装了含有onStateChange的大reducer函数
    rootReducer = (state, action) => {
      const newState = oldReducer(state, action);
      options.onStateChange(newState);
      return newState;
    };
    // 进一步封装含有onReducer的大reducer函数;
    const oldReducer2 = rootReducer;
    rootReducer = options.onReducer(oldReducer2);

    // 如果有extraEnhancers 则把原来的createStore做修改后再创建仓库
    let newCreateStore = createStore;
    if (options.extraEnhancers) {
      newCreateStore = options.extraEnhancers.reduce(
        (fn1, fn2) => fn2(fn1),
        createStore,
      );
    }

    const store = newCreateStore(
      rootReducer,
      options.initialState,
      getMiddlewares(),
    );
    // 创建完store，应用完中间件，在返回store之前要 运行saga
    getMiddlewares.runSaga(store);
    window.store = store;
    return store;
  }

  // 根据一个模型 得到一个reducer
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
          // 类型匹配上了，运行对应的函数,返回新的状态
          const newState = temp.reducer(state, action);
          return newState;
        } else {
          return state;
        }
      },
    };
    return reducerObj;
  }

  // 启动就是要进行 渲染
  function render(selector, store) {
    const routerConfig = app._router({
      history: options.history,
      app,
    });
    const root = <Provider store={store}>{routerConfig}</Provider>;
    ReactDom.render(root, document.querySelector(selector));
  }
};
