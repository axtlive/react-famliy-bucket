import React, { PureComponent } from "react";
import { bindActionCreators } from "redux";
import ctx from "./ctx";

export default (mapStateToProps, mapDispatchToProps) => {
  // 返回一个高阶组件
  return Comp => {
    // 使用PureComponent来进行一定的性能优化;
    class Temp extends PureComponent {
      static contextType = ctx;

      // 得到需要传递的事件处理属性
      getEventHandlers() {
        if (typeof mapDispatchToProps === "function") {
          return mapDispatchToProps(this.store.dispatch);
        } else if (typeof mapDispatchToProps === "object") {
          return bindActionCreators(mapDispatchToProps, this.store.dispatch);
        }
      }

      // 组件如果要使用上下文，则需要把context作为构造函数的第二个参数传入
      constructor(props, context) {
        super(props, context);
        this.store = this.context;
        if (mapStateToProps) {
          // 状态中的数据，来自于仓库中映射的结果
          this.state = mapStateToProps(this.store.getState(), this.props);
          // 监听仓库中的数据变化   得到一个取消监听的函数
          this.unListen = this.store.subscribe(() => {
            this.setState(mapStateToProps(this.store.getState(), this.props));
          });
        }
        if (mapDispatchToProps) {
          this.handlers = this.getEventHandlers();
        }
      }
      componentWillUnmount() {
        // 当组件卸载时 取消监听
        this.unListen && this.unListen();
      }
      render() {
        return <Comp {...this.state} {...this.handlers} {...this.props} />;
      }
    }
    // 使得这个类组件的名称和传入的组件名称相同
    Temp.displayName = Comp.displayName || Comp.name;
    return Temp;
  };
};
