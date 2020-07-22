import React from 'react';
import PropTypes from 'prop-types';

import './index.css'

export default function Layout(props) {
  return (
    <div className="container">
      <header className="header">
        {props.header}
      </header>
      <div className="middle">
        <aside className="aside">
          {props.aside}
        </aside>
        <div className="main">
          {props.children}
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  header: PropTypes.element,
  aside: PropTypes.element,
  children: PropTypes.node
}
