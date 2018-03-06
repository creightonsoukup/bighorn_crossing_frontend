import React from 'react';
import galleries from '../content/images';
import Gallery from './gallery-captions';

export default class FloorplansMobile extends React.Component {
  render() {
    return(
      <div className='floorplans-mobile'>
        <Gallery images={this.props.images}/>
      </div>
    )
  }
}
