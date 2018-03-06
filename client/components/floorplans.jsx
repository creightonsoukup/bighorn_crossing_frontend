import React from 'react';

export default class Floorplans extends React.Component {
  render() {
    return (
      <div className='floorplans'>
        <img src={this.props.images[0].imageUrl}/>
        <img src={this.props.images[1].imageUrl}/>
      </div>
    )
  }
}
