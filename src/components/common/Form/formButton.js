import React from 'react';
import { Consumer } from './formContext';

export default function FormButton(props) {

  return (
    <Consumer>
      {val => {
        return (
          <button onClick={() => val.submit()}>
            {props.children}
          </button>
        )
      }}
    </Consumer>
  )
}
