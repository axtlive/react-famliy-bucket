import { createStore } from 'redux';
import reducer from '../reducer';
import { addUserAction } from '../action/userAction'

const store = createStore(reducer)

console.log(store.getState());
store.dispatch(addUserAction({ id: 3, name: '用户3', age: 99 }))
console.log(store.getState());
