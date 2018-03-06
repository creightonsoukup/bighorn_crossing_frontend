import React from 'react';
import ContactBroker from './contact_broker';
import Button from './button';
import Modal from 'react-modal';
import StayUpdated from './stay_updated'

export default class NextSteps extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        contactBrokerModal: false,
        signupModal: false,
        contactBrokerComp: false,
        signupComp: false,
        showButtons: true
      }
      this.openSignup = this.openSignup.bind(this);
      this.closeSignup = this.closeSignup.bind(this)
      this.openContact = this.openContact.bind(this)
      this.closeContact = this.closeContact.bind(this);
  }

  openContact() {
    if(window.innerWidth < 600 ) {
      this.setState({
        contactBrokerComp: true,
        showButtons: false
      })
      return
    }
    this.setState({
      contactBrokerModal: true,
      showButtons: false
    })
    return
  }

  openSignup() {
    if(window.innerWidth < 600 ) {
      this.setState({
        signupComp: true,
        showButtons: false
      })
      return
    }
    this.setState({
      signupModal: true,
      showButtons: false
    })
    return
  }

  closeContact() {
    if(window.innerWidth < 600 ) {
      this.setState({
        contactBrokerComp: false,
        showButtons: true

      })
      return
    }
    this.setState({
      contactBrokerModal: false,
      showButtons: true
    })
    return
  }

  closeSignup() {
    if(window.innerWidth < 600) {
      this.setState({
        signupComp: false,
        showButtons: true
      })
      return
    }
    this.setState({
      signupModal: false,
      showButtons: true

    })
    return
  }

  render() {
    const largeModal = {
      content : {
        top: '55%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0',
      }
    }
    const smallModal = {
        content: {
          padding: '0',
          top: '100px'
        }
    }
    return (
      <div className='next-steps'>
        <div className='steps-header'>
          <h2>{'INTERESTED? HERE ARE THE NEXT STEPS'}</h2>
        </div>
        { this.state.showButtons &&
          <div className='button-group'>
            <Button type={'btn'} text={'CONTACT A BROKER'} action={this.openContact}/>
            <Button type={'btn'} text={'GET UPDATES'} action={this.openSignup}/>
          </div>
        }
        { this.state.contactBrokerComp &&
          <ContactBroker close={this.closeContact}/>
        }
        { this.state.signupComp &&
          <StayUpdated close={this.closeSignup}/>
        }
        { window.innerWidth < 999 && this.state.contactBrokerModal  ? (
          <Modal
            style={smallModal}
            isOpen={this.state.contactBrokerModal}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeContact}>
            <ContactBroker close={this.closeContact}/>
          </Modal>
        ) : (
          <Modal
            style={largeModal}
            isOpen={this.state.contactBrokerModal}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeContact}>
            <ContactBroker close={this.closeContact}/>
          </Modal>
        )}
        { window.innerWidth < 999 && this.state.signupModal ? (
          <Modal
            style={smallModal}
            isOpen={this.state.signupModal}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeSignup}>
            <StayUpdated close={this.closeSignup}/>
          </Modal>
        ) : (
          <Modal
            style={largeModal}
            isOpen={this.state.signupModal}
            ariaHideApp={false}
            shouldCloseOnOverlayClick={true}
            onRequestClose={this.closeSignup}>
            <StayUpdated close={this.closeSignup}/>
          </Modal>
        )}
      </div>
    )
  }
}
