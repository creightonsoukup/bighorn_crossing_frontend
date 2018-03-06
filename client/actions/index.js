import axios from 'axios';

export const SUBSCRIBE = 'subscribe';
export const CONTACT_BROKER = 'contact_broker'

export function addSubscription(firstName, lastName, email) {
  const url = 'https://morning-anchorage-34966.herokuapp.com/signups'
  console.log(firstName, lastName, email)
  const request = axios.post(url, {
    firstName: firstName,
    lastName: lastName,
    email: email
  });

  return {
    type: SUBSCRIBE,
    payload: request
  }
}

export function contactBroker(firstName, lastName, email, phone, message) {
  const url = 'https://morning-anchorage-34966.herokuapp.com/contact_broker'
  console.log(firstName, lastName, email, phone, message)
  const request = axios.post(url, {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    message: message
  });

  return {
    type: CONTACT_BROKER,
    payload: request
  }
}
