import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './formContext';

export default class FormInput extends Component {

  static defaultProps = {
    type: 'text',
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  render() {
    return (
      <Consumer>
        {val => {
          return (
            <input
              value={val.formData[this.props.name] || ""}
              onChange={e => {
                val.changeFormData(this.props.name, e.target.value)
              }}
              type={this.props.type} />
          )
        }}
      </Consumer>
    )
  }
}
