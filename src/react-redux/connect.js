/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import ctx from "./ctx";

// 性能优化，对两次的状态进行浅比较，类似于class组件的PureComponent
function compare(obj1, obj2) {
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

export default (mapStateToProps, mapDispatchToProps) => {
  // 返回一个高阶组件
  return Comp => {
    // 使用PureComponent来进行一定的性能优化;
    function Temp(props) {
      // 从上下文里面拿到仓库数据
      const store = useContext(ctx);
      const [state, setState] = useState(
        mapStateToProps && mapStateToProps(store.getState()),
      );
      useEffect(() => {
        return store.subscribe(() => {
          const newState = mapStateToProps && mapStateToProps(store.getState());
          setState(prevState => {
            if (compare(state, newState)) {
              return prevState;
            } else {
              return newState;
            }
          });
        });
      }, [store]);

      // 得到需要传递的事件处理属性
      function getEventHandlers() {
        if (typeof mapDispatchToProps === "function") {
          return mapDispatchToProps(store.dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          return bindActionCreators(mapDispatchToProps, store.dispatch);
        }
      }
      let handlers = {};
      mapDispatchToProps && (handlers = getEventHandlers());
      return <Comp {...state} {...handlers} {...props} />;
    }
    // 使得这个类组件的名称和传入的组件名称相同
    Temp.displayName = Comp.displayName || Comp.name;
    return Temp;
  };
};
