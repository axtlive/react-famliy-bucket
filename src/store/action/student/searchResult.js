export const actionTypes = {
  // 设置查询结果和总数
  setStudentAndTotal: Symbol("setStudentAndTotal"),
  setIsLoading: Symbol("setIsLoading"),
  fetchStudent: Symbol("fetchStudents"),
};

export function fetchStudent() {
  return {
    type: actionTypes.fetchStudent,
  };
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
    total,
  },
});

/**
 * @description: 得到一个设置是否正在加载中的action （action创建函数）
 * @param {type} isLoading
 * @return: {}
 */
export const setIsLoadingAction = isLoading => ({
  type: actionTypes.setIsLoading,
  payload: isLoading,
});
