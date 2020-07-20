import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function ThreeLayout(props) {

  const defaultProps = {
    leftWidth: 100,
    rightWidth: 100,
    minWidth: 500,
  }

  const data = Object.assign({}, defaultProps, props)

  return (
    <div className="three-layout" style={{ minWidth: data.minWidth }}>
      <div className="main">
        {props.children}
      </div>
      <div
        className="aside-left"
        style={{ width: data.leftWidth }}
      >
        {props.left}
      </div>
      <div
        className="aside-right"
        style={{ width: data.rightWidth }}
      >
        {props.right}
      </div>
    </div>
  )
}


ThreeLayout.defaultProps = {
  a: PropTypes.number.isRequired, // a 是数字类型并且必传
  b: PropTypes.bool.isRequired, // b 是布尔类型，且必传
  onClick: PropTypes.func.isRequired, // onClick 是个方法，且必传
  d: PropTypes.node,   // d 是个可以渲染的元素，不必传   字符串 数字  React元素
  e: PropTypes.any, // e 可以是任何类型，不必传
  children: PropTypes.element, // children必须是个 React元素（JSX表达式，React.createElement()）   字符串都不行
  F: PropTypes.elementType, // F 必须是一个元素类型（组件类型）  使用的时候   const F = this.props.F;  --->   <F />
  g: PropTypes.instanceOf(), // 也就是g的原型链上必须有括号里
  h: PropTypes.oneOf(['a', 'b']), //  h必须是数组中的某一个
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // 属性必须是数组中的一个
  i: PropTypes.arrayOf(PropTypes.number), // i 必须是有数字组成的数组
  j: PropTypes.objectOf(PropTypes.number), // j 必须是有数字组成的对象
  k: PropTypes.shape({   // 传递的 k 必须满足对象的每个 K V 的类型，如果没有约束的，可以随意多传
    name: PropTypes.string.isRequired,
    age: PropTypes.number
  }),
  l: PropTypes.exact({}), // 必须完全精确匹配
  n: function (props, propName, componentName) {   // n 必须符合函数里面的要求
    console.log(props, propName, componentName)
    const val = props[propName];
    // 必填
    if (!val) {
      return new Error(`invalid prop ${propName} in ${componentName} ,${propName} is Required`)
    }
    // 该属性必须是一个数字
    if (typeof val !== 'number') {
      return new Error(`invalid prop ${propName} in ${componentName} ,${propName} is not a number`)
    }
    // 必须在0-100之间的数字
    if (val < 0 || val > 100) {
      return new Error(`invalid prop ${propName} in ${componentName} ,${propName} must between 0 and 100`)
    }
  }
}