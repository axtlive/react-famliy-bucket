import React from 'react'

/**
 * @description: 高级组件，输出日志
 * @param {type} Comp
 * @return: class
 */
export default function WithLog(Comp) {
  return class componentName extends React.Component {
    componentDidMount() {
      console.log(`组件${Comp.name}被创建了,创建时间是：${Date.now()}`);
    }

    componentWillUnmount() {
      console.log(`组件${Comp.name}被销毁了,销毁时间是：${Date.now()}`);
    }

    render() {
      return <Comp {...this.props} />
    }
  }

}
