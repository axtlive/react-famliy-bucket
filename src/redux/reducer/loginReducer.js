import { SETLOGIN } from '../action/loginAction';

export default (state = null, { type, payload }) => {
  switch (type) {
    case SETLOGIN:
      return payload
    default:
      return state
  }
}
