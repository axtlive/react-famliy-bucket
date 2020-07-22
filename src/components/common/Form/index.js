import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from './formContext';
import FormInput from './formInput';
import FormButton from './formButton';

export default class Form extends Component {

  static Input = FormInput;
  static Button = FormButton;

  static propTypes = {
    onSubmit: PropTypes.func,
  }

  state = {
    formData: {},
    changeFormData: (name, val) => {
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: val,
        }
      })
    },
    submit: () => {
      this.props.onSubmit && this.props.onSubmit(this.state.formData)
      this.setState({
        formData: {},
      })
    }
  }


  render() {
    return (
      <div>
        <Provider value={this.state}>
          {this.props.children}
        </Provider>
      </div>
    )
  }
}
