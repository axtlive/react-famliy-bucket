import { searchStudents, searchStudentsCount } from '../../../services/student';

export const actionTypes = {
  // 设置查询结果和总数
  setStudentAndTotal: Symbol('setStudentAndTotal'),
  setIsLoading: Symbol('setIsLoading')
}

/**
 * @description: 得到一个设置学生数组和总数的action （action创建函数） 
 * @param {type} arr, total
 * @return: {}
 */
export const setStudentAndTotalAction = (arr, total) => ({
  type: actionTypes.setStudentAndTotal,
  payload: {
    arr,
    total
  }
})

/**
 * @description: 得到一个设置是否正在加载中的action （action创建函数） 
 * @param {type} isLoading
 * @return: {}
 */
export const setIsLoadingAction = isLoading => ({
  type: actionTypes.setIsLoading,
  payload: isLoading
})

/**
 * @description: 根据当前仓库中的查询条件查询学生
 * @param {type} isLoading
 * @return: {}
 */
// redux-thunk用法：
export const fetchStudentAction = () => {
  return async (dispatch, getState) => {
    dispatch(setIsLoadingAction(true))
    const condition = getState().students.searchCondition;
    console.log(condition)
    const arr = await searchStudents(condition);
    const count = await searchStudentsCount({ key: condition.key, sex: condition.sex })
    dispatch(setStudentAndTotalAction(arr.data, count.total))
    dispatch(setIsLoadingAction(false))
  }
}

// redux-promise用法1： 
// 直接返回一个promise
// export const fetchStudentAction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const action = setStudentAndTotalAction([{ id: 1, name: 2 }, { id: 3, name: 4 }], 2)
//       resolve(action)
//     }, 2000);
//   })
// }

// redux-promise用法2： 
// 用 async await 结果返回action创建函数即可
// export const fetchStudentAction = async (condition) => {
//   const arr = await searchStudents(condition);
//   const count = await searchStudentsCount({ key: condition.key, sex: condition.sex })
//   return setStudentAndTotalAction(arr.data, count.total)
// }

// redux-promise用法3： 
// 返回一个平面对象，但是payload里面返回一个promise
// export const fetchStudentAction = async (condition) => {
//   return {
//     type: actionTypes.setStudentAndTotalAction,
//     payload: searchStudents(condition).then(res => ({
//       arr: res.data,
//       total: res.total
//     }))
//   }
// }