/**
 * description: 判断action是不是一个平面对象
 */
function isPlanObject(obj) {
  if (typeof obj !== 'object') {
    return false;
  }
  return Object.getPrototypeOf(obj) === Object.prototype;
}

export default isPlanObject;