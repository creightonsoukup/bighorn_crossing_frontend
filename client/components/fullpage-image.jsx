import React from 'react';

const FullpageImage = (props) => {
  return (
    <div className='fullpage-image cover'>
      <img src={props.src}/>
    </div>
  )
}

export default FullpageImage
