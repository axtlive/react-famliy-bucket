import * as userActions from '../action/userAction';

const initialState = [
  { id: 1, name: '用户1', age: 20 },
  { id: 2, name: '用户2', age: 30 }
]

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.ADDUSER:
      return [...state, payload]
    case userActions.DELETEUSER:
      return state.filter(i => i.id !== payload)
    case userActions.UPDATEUSER:
      return state.map(i => i.id === payload.id ? { ...i, ...payload } : i)
    default:
      return state
  }
}
