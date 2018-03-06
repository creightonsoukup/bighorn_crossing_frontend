import React from 'react';
import { contactBroker } from '../actions/index'
import { connect } from 'react-redux'

class ContactBroker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
      success: false,
      error: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name

    this.setState({
      [name]:value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.contactBroker(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.phone,
      this.state.message)
      .then((data) => {

        if (data.payload.status == 200) {
          this.setState({
            email: '',
            lastName: '',
            firstName: '',
            success: true,
            phone: '',
            message: ''
          })
          return
        }
        if (data.payload.status == 500) {
          this.setState({
            error: true
          })
        }
      })
  }

  render() {
    return (
      <div className='contact-broker'>
        { !this.state.success &&
          <form className='contact-broker' onSubmit={this.handleSubmit}>
            <h2>{'CONTACT A BROKER'}</h2>
            <label>
              <span>{'First Name'}</span>
              <input
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleInputChange}/>
            </label>
            <label>
              <span>{'Last Name'}</span>
              <input
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleInputChange}/>
            </label>
            <label>
              <span>{'Email'}</span>
              <input
                name='email'
                value={this.state.email}
                onChange={this.handleInputChange}/>
            </label>
            <label>
              <span>{'Phone Number'}</span>
              <input
                name='phone'
                value={this.state.phone}
                onChange={this.handleInputChange}/>
            </label>
            <label>
              <span>{'Message'}</span>
              <textarea
                name='message'
                value={this.state.text}
                onChange={this.handleInputChange}/>
            </label>
            <div className='form-btns'>
              <button className='btn' onClick={this.handleSubmit}>
                SUBMIT
              </button>
              <button className='btn' onClick={this.props.close}>
                CANCEL
              </button>
            </div>
          </form>
        }
        { this.state.success &&
          <div className="success">
            <h2>THANK YOU!</h2>
            <p>You will hear from us shortly...</p>
            <button className='btn' onClick={this.props.close}>
              RETURN
            </button>
          </div>
        }
        { this.state.error &&
          <div className="success">
            <h2>WE ARE SORRY!</h2>
            <p>Something is wrong. Try again later.</p>
            <button className='btn' onClick={this.props.close}>
              RETURN
            </button>
          </div>
        }

      </div>
    )
  }
}


export default connect(null, {contactBroker})(ContactBroker)
