import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { isObjEqual } from '../../utils/helper'
import './Task.css';

// function Task2(props) {
//   return (
//     <div>
//       <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
//     </div>
//   )
// }

// export default React.memo(Task2)


// function memo(Comp) {
//   return class memo extends React.PureComponent {
//     render() {
//       return (
//         <Comp />
//       )
//     }
//   }
// }

// export default memo(Task2)


export default class Task extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,  // 任务名称
    isFinish: PropTypes.bool.isRequired,//任务是否完成
  }
  // 用了PureComponent以后，就会执行下面这个shouldComponentUpdate来对props和state的前后进行一个浅比较

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('是否要重新渲染');
  //   if (isObjEqual(this.props, nextProps) && isObjEqual(this.state, nextState)) {
  //     return false;
  //   }
  //   return true;
  // }


  render() {
    return (
      <div>
        <li className={this.props.isFinish ? 'finish' : ''}>{this.props.name}</li>
      </div>
    )
  }
}
