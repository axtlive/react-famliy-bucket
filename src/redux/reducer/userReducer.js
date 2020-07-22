import * as userActions from '../action/userAction';

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActions.ADDUSER:
      return [...state, payload]
    case userActions.DELETEUSER:
      return state.filter(i => i.id !== payload)
    case userActions.UPDATEUSER:
      return state.map(i => i.id === payload.id ? { ...i, ...payload } : i)
    case userActions.SETUSER:
      return payload;
    default:
      return state
  }
}
