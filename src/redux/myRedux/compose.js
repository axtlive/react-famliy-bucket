export default function compose(...funcs) {
  if (funcs.length === 0) {
    return args => args;
  }
  else if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}


  // 易于理解
// export default function compose(...funcs) {
//   if (funcs.length === 0) {
//     return args => args;
//   }
//   else if (funcs.length === 1) {
//     return func[0];
//   }
// return function (...args) {
//   let lastReturn = null; // 记录上一个函数的返回值作为下一个函数的参数
//   for (let i = funcs.length - 1; i >= 0; i--) {
//     const func = funcs[i];
//     if (i === funcs.length - 1) {  // 如果是最后一个函数，就先把参数给他，执行完的结果报错到lastReturn
//       lastReturn = func(...args)
//     } else {
//       lastReturn = func(lastReturn)
//     }
//   }
//   return lastReturn
// }
// }