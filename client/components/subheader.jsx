import React from 'react';

const SubHeader = (props) => {
  return (
    <div className={props.style}>
      <h2>{props.text}</h2>
    </div>
  )
}

export default SubHeader
