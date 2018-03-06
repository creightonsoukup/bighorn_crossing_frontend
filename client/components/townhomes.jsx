import React from 'react';
import Textblock from './textblock';
import content from '../content/content';
import galleries from '../content/images';
import ImageGallery from './image-gallery';
import Logo from './logo'
import SubHeader from './subheader';
import ThreeBedroom from './three-bedroom';
import TwoBedroom from './two_bedroom';
import FullpageImage from './fullpage-image'
import NextSteps from './next_steps';

class Townhomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'three'
    }
    this.threeBedroom = this.threeBedroom.bind(this)
    this.twoBedroom = this.twoBedroom.bind(this)
  }

  twoBedroom() {
    this.setState({activeTab:'two'})
  }

  threeBedroom() {
    this.setState({activeTab:'three'})
  }

  render() {
    return (
      <div className='townhomes'>
        <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/homepage3_qbndhr.jpg'}/>
        <section className='unit-intro'>
          <Logo src={require('../assets/townhomes-logo.png')}/>
          <Textblock style='text-block right-block top-margin background' content={content.townhomes.textBlock1}/>
        </section>
        <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460916/vqu4stpehzaq83rwcia0.jpg'/>
        <section>
          <SubHeader style={'subheader left-header'} text={'SELECT A MODEL'}/>
          <div className='model-buttons'>
            <button onClick={this.threeBedroom}>
              <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1517516252/D2_iwpmrp.png'}/>
              <div>{'THREE BEDROOM'}</div>
            </button>
            <button onClick={this.twoBedroom}>
              <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1517516252/d1_zbft9p.png'}/>
              <div>{'TWO BEDROOM'}</div>
            </button>
          </div>
          { this.state.activeTab === 'three' &&
            <ThreeBedroom />
          }
          { this.state.activeTab === 'two' &&
            <TwoBedroom />
          }
        </section>
        <NextSteps/>
      </div>
    )
  }
}

export default Townhomes;
