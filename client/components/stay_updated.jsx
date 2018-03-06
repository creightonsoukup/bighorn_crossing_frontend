import React from 'react';
import { addSubscription } from '../actions/index'
import { connect } from 'react-redux'

class StayUpdated extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      lastName: '',
      firstName: '',
      success: false,
      error: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]:value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addSubscription(
      this.state.firstName,
      this.state.lastName,
      this.state.email )
      .then((data) => {
        console.log(this.props)
        if (data.payload.status == 200) {
          this.setState({
            email: '',
            lastName: '',
            firstName: '',
            success: true
          })
          return
        }
        if (data.payload.status == 500) {
          this.setState({
            error: true
          })
        }
        return
      })
  }

  render() {
    return (
      <div className='contact-broker'>
        { !this.state.success &&
          <form className='contact-broker' onSubmit={this.handleSubmit}>
            <h2>{'SUBSRIBE TO STAY UPDATED'}</h2>
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
            <div className='form-btns'>
              <button  onClick={this.handleSubmit}>
                SUBMIT
              </button>
              <button onClick={this.props.close}>
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
              CANCEL
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


export default connect(null, {addSubscription})(StayUpdated)
