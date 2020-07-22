/*
 * @Description: 实现Link
 * @Author: Axtlive
 * @Date: 2020-05-13 14:30:02
 * @LastEditors: Axtlive
 * @LastEditTime: 2020-05-13 14:42:18
 */

import React from 'react'
import { withRouter } from 'react-router-dom';

function Link(props) {
  return (
    <a
      {...props}
      href={props.to}
      onClick={e => {
        e.preventDefault();
        props.history.push(props.to)
      }}
    >
      {props.children}
    </a>
  )
}

export default withRouter(Link);