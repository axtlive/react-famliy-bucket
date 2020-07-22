import { createStore, applyMiddleware } from 'redux';
// import { createStore, applyMiddleware } from '../myRedux';
import reducer from '../reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk'


export default createStore(
  reducer,
  applyMiddleware(
    thunk,
    // thunk.withExtraArgument(21321), thunk的第三个参数，额外参数，一般用不到
    logger
  )
)




