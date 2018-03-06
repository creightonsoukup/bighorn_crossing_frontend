import React from 'react';
import ImageGallery from './image-gallery'
import FullpageImage from './fullpage-image';
import Subheader from './subheader';
import List from './list';
import content from '../content/content'
import Textblock from './textblock';
import NextSteps from './next_steps';

class Neighborhood extends React.Component {

  render() {
    return (
      <div className='neighborhood'>
        <img className='main-image' src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1518472998/georgetown_zicfk8.jpg'}/>
        <section className='neighborhood-intro'>
          <div>
            <Subheader text={content.neighborhood.intro.title.toUpperCase()} style={'neighborhood-header'}/>
          </div>
          <p>{content.neighborhood.intro.paragraph1}</p>
        </section>
        <section >
          <Subheader style={'subheader left-header'} text={'LAKEFRONT TO SLOPESIDE IN MINUTES'}/>
          <div className='neighborhood-section'>
            <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1518536877/ski_areas_xarevc.jpg'}/>
            <List style={'list left-list'} content={content.neighborhood.ski}/>
          </div>
        </section>
        <section className='neighborhood-section'>
          <Subheader style={'subheader right-header'} text={'ENDLESS RECREATION'}/>
          <div className='neighborhood-section'>
            <img src='https://res.cloudinary.com/bighorncrossing/image/upload/c_crop,g_west,h_1080,w_1387,x_0/v1514344512/neighborhood-hero_upzlox.jpg'/>
            <List style={'list right-list'} content={content.neighborhood.recreation}/>
          </div>
        </section>
        <section className='neighborhood-section'>
          <Subheader style={'subheader left-header'} text={'JUST LOOKING FOR A VIEW?'}/>
          <div className='neighborhood-section'>
            <img src='https://res.cloudinary.com/bighorncrossing/image/upload/v1518472998/guanella_xva5br.jpg'/>
            <List style={'list left-list'} content={content.neighborhood.view}/>
          </div>
        </section>
        <section className='neighborhood-section'>
          <Subheader style={'subheader right-header '} text={'CALLING ALL HISTORY BUFFS'}/>
          <div className='neighborhood-section'>
            <img src='https://res.cloudinary.com/bighorncrossing/image/upload/v1518473004/train_doa4jj.jpg'/>
            <List style={'list right-list'} content={content.neighborhood.history}/>
          </div>
        </section>
        <NextSteps/>
      </div>
    )
  }
}

export default Neighborhood
