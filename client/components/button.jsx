import React from 'react';

const Button = (props) => {
  return (
    <button className={props.type} onClick={props.action}>
      {props.text}
    </button>
  )
}

export default Button
