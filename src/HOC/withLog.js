import React from 'react'

/**
 * @description: 高级组件，输出日志
 * @param {type} Comp
 * @return: class
 */
export default function WithLog(Comp) {
  class logWrapper extends React.Component {
    componentDidMount() {
      console.log(`组件${Comp.name}被创建了,创建时间是：${Date.now()}`);
    }
    componentWillUnmount() {
      console.log(`组件${Comp.name}被销毁了,销毁时间是：${Date.now()}`);
    }
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Comp ref={forwardRef} {...rest} />
    }
  }

  return React.forwardRef((props, ref) => {
    return <logWrapper forwardRef={ref} {...props} />
  })
}
