import { searchAllStudents } from '../../services/student'

export const ADDUSER = Symbol('add-user');
export const DELETEUSER = Symbol('delete-user');
export const UPDATEUSER = Symbol('update-user');
export const SETUSER = Symbol('set-user');



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

export const setUserAction = (payload) => ({
  type: SETUSER,
  payload
})


export const fetchData = () => {
  // 由于thunk的存在，允许action创建函数返回的不是一个平面对象，可以是一个函数
  // thunk会把store的dispatch方法作为参数传递过来
  return async dispatch => {
    const res = await searchAllStudents()
    if (res) {
      const action = setUserAction(res)
      dispatch(action)
    }
  }
}


// thunk可以有三个参数
// export const fetchData = () => {
//   由于thunk的存在，允许action创建函数返回的不是一个平面对象，可以是一个函数
//   thunk会把store的dispatch方法作为参数传递过来
//   return (dispatch, getState, extra) => {
//     console.log(getState())
//     console.log(extra)
//     searchAllStudents().then(res => {
//       const action = setUserAction(res)
//       dispatch(action)
//     })
//   }
// }