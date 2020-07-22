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