import React from 'react';

const ErrorPage = (props) => {
  return (
    <div className='error'>
      <h1>{"Oops! Can't find the page you are looking for. Please return to the homepage."}</h1>
      <img src={require('../assets/bighorn-logo.png')}/>
    </div>
  )
}

export default ErrorPage
