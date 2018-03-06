import React from 'react';
import Subheader from './subheader';
import FloorplansMobile from './FloorplansMobile';
import galleries from '../content/images';
import TownhomeIntro from './townhomes'
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import content from '../content/content'
import Floorplans from './floorplans'
import FullpageImage from './fullpage-image';


export default class TwoBedroom extends React.Component {
  render() {
    return (
      <div className='two-bedroom'>
        <Subheader style={'subheader right-townhome'} text={'TWO BEDROOM'}/>
        <Textblock style={'text-block right-block background'} content={content.townhomes.textBlock3}/>
        <div className='mobile'>
          <Subheader style={'subheader left-header'} text={'EXTERIOR'}/>
          <Textblock style={'text-block outline'} content={content.townhomes.textBlock4}/>
          <ImageGallery images={galleries.townhomesAttached}/>
          <Subheader style={'subheader left-header'} text={'FLOORPLANS'}/>
          <FloorplansMobile images={galleries.attachedFloorplans}/>
          <Floorplans images={galleries.attachedFloorplans}/>
          <Subheader style={'subheader left-header'} text={'INTERIOR'}/>
          <Textblock style={'text-block outline'} content={content.townhomes.textBlock5}/>
          <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516460914/interior_i1y2r3.jpg'}/>
        </div>
      </div>
    )
  }
}
