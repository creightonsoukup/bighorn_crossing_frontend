import React, { PropTypes } from 'react';
import content from '../content/content';
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import List from './list';
import galleries from '../content/images'
import FullpageImage from './fullpage-image'
import Button from './button'
import SubHeader from './subheader'
import {Link} from 'react-router-dom';
import ContactBroker from './contact_broker';
import Modal from 'react-modal';
import NextSteps from './next_steps';


class Home extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        contactBroker: false
      }

      this.closeModal= this.closeModal.bind(this)
      this.openModal = this.openModal.bind(this)
    }

    openModal() {
      if(window.innerWidth < 600) {
        this.props.history.push('/contact-broker');
      }
      this.setState({
        contactBroker: true
      })
      return
    }
    closeModal() {
      if(window.innerWidth < 600) {
        this.props.history.push('/');
      }
      this.setState({
        contactBroker: false
      })
      return
    }

    render() {
      if(window.scrollY === 200) {
        console.log('hi')
      }
      return (
        <div className="homepage">
          <h1 className='gallery-overlay'><span>{'BIGHORN'}</span><span>{'CROSSING'}</span></h1>
          <ImageGallery images={galleries.homepage}/>
          <section className='text-only'>
            <Textblock style={'text-block background right-block'} content={content.homepage.textBlock1}/>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460913/backyard_o2zp5r.jpg'/>
          <section className='overflow'>
            <SubHeader style={'subheader left-header'} text={'TOWNHOMES'}/>
            <Textblock style={'text-block right-block no-margin'} content={content.homepage.textBlock2}/>
            <div className='color-block rotate-right'></div>

            <div className='homepage-btn left-homepage-btn'>
              <Link to='/townhomes'> <Button type={'lrg-btn'} text={'EXPLORE'}/></Link>
            </div>
            <div className='button-group right-btn'>
              <Button type={'btn'} text={'CONTACT A BROKER'} action={this.openModal}/>
            </div>
          </section>
          <FullpageImage  src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460913/condos_dhkmg3.jpg'/>
          <section className='overflow'>
            <SubHeader style={'subheader right-header'} text={'CONDOS'}/>
            <Textblock style={'text-block left-block'} content={content.homepage.textBlock3}/>
            <div className='color-block rotate-left'></div>
            <div className='homepage-btn right-homepage-btn'>
              <Link to='/condos'><Button type={'lrg-btn'} text={'EXPLORE'}/></Link>
            </div>
            <div className='button-group left-btn'>
              <Button type={'btn'} text={'CONTACT A BROKER'} action={this.openModal}/>
            </div>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516463338/B3_jyhir9.jpg'/>
          <section>
            <SubHeader style={'subheader right-header'} text={'THE LODGE'}/>
            <Textblock style={'text-block left-block2 background'} content={content.homepage.textBlock4}/>
            <div className='button-group left-btn2'>
              <Button type={'btn'} text={'COMING SOON'}/>
            </div>
          </section>
          <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516462298/downtown1_lust3v.jpg'}/>
          <section className=''>
            <SubHeader style={'subheader left-header no-margin'} text={'THE NEIGHBORHOOD'}/>
            <Textblock style={'text-block right-block background'} content={content.homepage.textBlock5} />
            <div className='homepage-btn left-homepage-btn'>
              <Link to='/neighborhood'><Button type={'lrg-btn'} text={'EXPLORE'}/></Link>
            </div>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460915/sitemap_t0qxrf.jpg'/>
          { window.innerWidth < 999 ? (
            <Modal
              style={{
                content: {
                  padding: '0',
                  top: '100px'
                }
              }}
              isOpen={this.state.contactBroker}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              onRequestClose={this.closeModal}>
              <ContactBroker close={this.closeModal}/>
            </Modal>
          ) : (
            <Modal
              style={{
                content : {
                  top: '55%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '0',
                }
              }}
              isOpen={this.state.contactBroker}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              onRequestClose={this.closeModal}>
              <ContactBroker close={this.closeModal}/>
            </Modal>
          )}
          <NextSteps/>
        </div>
      )
    }
  }

export default Home
