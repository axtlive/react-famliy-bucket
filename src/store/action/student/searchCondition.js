// action类型
export const actionTypes = {
  change: Symbol('change')
}


// 根据一个新的查询条件，创建一个action
export const changeAction = newCondition => ({
  type: actionTypes.change,
  payload: newCondition
})