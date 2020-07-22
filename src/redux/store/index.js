import { createStore } from 'redux';
import reducer from '../reducer';
import * as numberAction from '../action/number-action';

const store = createStore(reducer, 10)

console.log(store.getState());
store.dispatch(numberAction.getIncrease())
console.log(store.getState());
