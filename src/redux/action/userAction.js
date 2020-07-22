export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');

export const addUserAction = (payload) => ({
  type: ADDUSER,
  payload
})

export const deleteUserAction = (payload) => ({
  type: DELETEUSER,
  payload
})

export const updateUserAction = (payload) => ({
  type: UPDATEUSER,
  payload
})