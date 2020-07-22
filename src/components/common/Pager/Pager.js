import React from 'react'
import './Pager.css'

/**
 * 分页组件
 * 属性
 * 1. current 初始页码
 * 2. total 总数据量
 * 3. limit 每页显示的数据量
 * 4. panelNumber 数字页码最多显示多少个
 */

export default function Pager(props) {
  // console.log('props :>> ', props);
  const pageNumber = getPagerNum(props);
  if (pageNumber === 0) {
    return null;
  }
  const min = getMinNumber(props);
  const max = getMaxNumber(min, pageNumber, props);
  const Numbers = [];
  for (let i = min; i <= max; i++) {
    Numbers.push(<span key={i} onClick={() => { toPage(i, props) }} className={i === props.current ? "item active" : "item"}>{i}</span>)
  }
  return (
    <>
      <span onClick={() => { toPage(1, props) }} className={props.current === 1 ? "item disabled" : "item"}>首页</span>
      <span onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }} className={props.current === 1 ? "item disabled" : "item"}>上一页</span>
      {Numbers}
      <span onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }} className={props.current === pageNumber ? "item disabled" : "item"}>下一页</span>
      <span onClick={() => { toPage(pageNumber, props) }} className={props.current === pageNumber ? "item disabled" : "item"}>末页</span>
      <span>{props.current}</span>
      /
      <span>{pageNumber ? pageNumber : 0}</span>
    </>
  )
}

/**
 * @description: 根据总条数/每页数 获得应该有多少页
 * @param {type} props
 * @return: 
 */
function getPagerNum(props) {
  return Math.ceil(props.total / props.limit)
}

/**
 * @description: 跳转到对应的页数
 * @param {type} target, props
 * @return: 
 */
function toPage(target, props) {
  if (props.current === target) {
    return;
  }
  props.onPageChange && props.onPageChange(target)
}

/**
 * @description: 获取最小页码
 * @param {type} props
 * @return:
 */
function getMinNumber(props) {
  let min = props.current - Math.floor(props.panelNumber / 2);
  if (min < 1) {
    min = 1;
  }
  return min
}

/**
* @description: 获取最大页码
* @param {type}
* @return:
*/
function getMaxNumber(min, pageNumber, props) {
  let max = min + props.panelNumber - 1;
  if (max > pageNumber) {
    max = pageNumber
  }
  return max
}