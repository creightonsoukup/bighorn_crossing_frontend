import { CONTACT_BROKER } from '../actions/index';

const INITAL_STATE = []

export default function( state = INITAL_STATE, action) {
  switch(action.type) {
    case CONTACT_BROKER:
      return [ action.payload.data, ...state]
    default:
      return state;
  }
}
