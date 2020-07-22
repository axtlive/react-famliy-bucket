import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from '../myRedux';
import reducer from '../reducer';
import { addUserAction, deleteUserAction } from '../action/userAction'
import logger from 'redux-logger';


// 创建仓库
// 方式1：
const store = createStore(reducer, applyMiddleware(logger))

// 创建仓库
// 方式2：
// const store = applyMiddleware(logger1, logger2)(createStore)(reducer)

store.dispatch(addUserAction({ id: 3, name: '用户3', age: 99 }))
store.dispatch(deleteUserAction(3))



