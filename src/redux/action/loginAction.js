export const SETLOGIN = Symbol('set-login');

export const setLoginAction = (payload) => ({
  type: SETLOGIN,
  payload
})
