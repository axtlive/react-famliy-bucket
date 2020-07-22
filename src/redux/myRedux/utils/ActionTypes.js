/**
 * description: 生成自定义长度的字符串
 */
function createRandomStr(length) {
  return Math.random().toString(36).substr(2, length).split('').join('.')
}

export default {
  INIT() {
    return `@@redux/INIT${createRandomStr(6)}`
  },
  UNKONW() {
    return `@@redux/UNKONW_ACTION_${createRandomStr(6)}`
  }
}